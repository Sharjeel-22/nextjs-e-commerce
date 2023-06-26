"use client";
import styles from "./page.module.css";
import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { useEffect, useState } from "react";
import Card from "./component/card";
import NewEmployee from "./component/add-employee";

export default function Home() {
  const [name, setName] = useState("Sharjeel");
  const [age, setAge] = useState(24);
  const items = [
    {
      name: "mobile",
      price: 50000,
    },
    {
      name: "laptop",
      price: 50000,
    },
    {
      name: "personal computer",
      price: 50000,
    },
  ];
  const [lists, setLists]: any = useState([]);
  useEffect(() => {
    setLists([...items]);
  }, []);
  lists.forEach((res: any) => {
    console.log("Check ::: ", res.name);
  });

  const handle = () => {
    setName(name + " " + "Rasheed");
    setAge(25);
  };
  const addNewItems = () => {
    let obj = {
      name: "Bike",
      price: 250000,
    };
    lists.push(obj);
    setLists([...lists]);
  };
  return (
    <main className={styles.main}>
      <div className="nav-wrapper">
        <div className="nav-content">
          <Navbar />
        </div>
      </div>
      <div className="main-content">
        <h1>Name is :{name}</h1>
        <p>Age are : {age}</p>
        <button className="submit" onClick={handle}>
          <span>Click Me</span>
        </button>
      </div>
      <div className="list-wrapper">
        <Card data={lists} />
      </div>
      <div className="add-new-item">
        <button className="submit" onClick={addNewItems}>
          <span>Click Me</span>
        </button>
      </div>
      <div className="employee-birthday-section">
        <div className="employee-form">
          <NewEmployee/>
        </div>
      </div>
      <Footer />
    </main>
  );
}
