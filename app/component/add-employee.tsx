import { useEffect, useState } from "react";
import "../css/add-employee.css";
import { format, parse } from "date-fns";
import PieChart from "../component/pie-chart";

export default function NewEmployee() {
  const datas = [
    {
      name: "Sharjeel",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "Sharii",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "Tahir",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "Amassss",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "small",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
    {
      name: "zain",
      date_of_birth: "03/02/1998",
      date_of_cake: "03/02/1998",
      cake_size: "large",
    },
  ];

  const [employees, setEmployees]: any = useState([...datas]);
  const [name, setName] = useState();
  const [date_of_birth, setDateOfBirth]: any = useState();
  const [date_of_cake, setDateOfCake]: any = useState();
  const [pieData, setPieData]: any[] = useState([]);

  const handleNameInput = (event: any) => {
    setName(event.target.value);
  };
  const handleDateInput = (event: any) => {
    const date = event.target.value;
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    setDateOfBirth(formattedDate);
    let currentDate = new Date();
    let dateFormat = format(new Date(currentDate), "dd/MM/yyyy");
    setDateOfCake(dateFormat);
  };
  const handleSubmit = () => {
    const obj: any = {
      name: name,
      date_of_birth: date_of_birth,
      date_of_cake: date_of_cake,
      cake_size: "small",
    };
    employees.push(obj);
    setEmployees([...employees]);
  };
  function removeItem(i: any) {
    let results = employees.filter((res: any, index: number) => index !== i);
    setEmployees([...results]);
  }
  useEffect(() => {
    const sortedEmployees = [...employees].sort((a, b) => {
      const dateA = parse(a.date_of_cake, "dd/MM/yyyy", new Date());
      const dateB = parse(b.date_of_cake, "dd/MM/yyyy", new Date());
      return dateA.getTime() - dateB.getTime();
    });
    setEmployees(sortedEmployees);  
    updateCakeCounts();    
  }, []);

  const updateCakeCounts = () => {
    let countSmall: any[] = [];
    let countLarge: any[] = [];
  
    employees.forEach((res: any) => {
      if (res.cake_size === "small") {
        countSmall.push(res);
      }
      if (res.cake_size === "large") {
        countLarge.push(res);
      }
    });
  
    const obj = [
      { name: "Red", value: countSmall.length },
      { name: "Yellow", value: countLarge.length },
    ];
    setPieData([...obj]);
  };
  
  return (
    <>
      <div className="wrapper">
         <PieChart data={pieData} />
        <div className="row">
          <div className="title">
            <h1>Add Employees for birthday</h1>
          </div>
          <div className="content">
            <input
              type="text"
              className="employee-name"
              value={name}
              onChange={handleNameInput}
            />
            <input
              type="date"
              className="employee-date-of-birth"
              onChange={handleDateInput}
            />
            <input
              className="submit-employee"
              type="submit"
              value={"Add Employee"}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <hr className="horizental-line" />
        <div className="row">
          <div className="table">
            <table>
              <thead>
                <div className="table-head">
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Date of Cake</th>
                  <th>Cake Size</th>
                </div>
              </thead>
              <tbody>
                <div className="table-body-content">
                  {employees.map((res: any, i: any) => (
                    <ul key={i}>
                      <li>{i + 1}</li>
                      <li>{res.name}</li>
                      <li>{res.date_of_birth}</li>
                      <li>{res.date_of_cake}</li>
                      <li>{res.cake_size}</li>
                      <li>
                        <input
                          type="button"
                          onClick={() => removeItem(i)}
                          className="delete"
                          value={"delete"}
                        />
                      </li>
                    </ul>
                  ))}
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
