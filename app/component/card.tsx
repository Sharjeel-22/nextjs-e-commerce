import { useEffect, useState } from "react";
import "../css/card.styling.css";
import Image from "next/legacy/image";

export default function Card(props: any) {
  const [lists, setLists]: any = useState([]);

  useEffect(() => {
    setLists([...props.data]);
  }, [props.data]);

  return (
    <>
      {lists.map((item: any, index: number) => (
        <div key={index} className="card">
          <div className="image">
            <Image className="img" width={340} height={200} src="/sssdd.jpeg" />
          </div>
          <div className="span-wrapper">
          <span className="title">{item.name}</span>
          <span className="price">{item.price}</span>
          </div>
        </div>
      ))}
    </>
  );
}
