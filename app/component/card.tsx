import { useEffect, useState } from "react";
import "../css/card.styling.css";

export default function Card(props: any) {
  console.log("Check child :: ", props.data);
  const [lists, setLists]: any = useState([]);

  useEffect(() => {
    setLists([...props.data]);
  }, [props.data]);

  return (
    <>
      {lists.map((item: any, index: number) => (
        <div key={index} className="card">
          <div className="image">
            <img width={340} height={200} src="https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?pid=ImgDet&rs=1"></img>
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
