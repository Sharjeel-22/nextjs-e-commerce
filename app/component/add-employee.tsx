import {useEffect, useState } from "react";
import "../css/add-employee.css";
import { format,parse } from 'date-fns';
import PieChart from "../component/pie-chart";

export default function NewEmployee() {
    const datas = [
        {
            name:"Sharjeel",
            date_of_birth:"03/02/1998",
            date_of_cake:"03/02/1998",
            cake_size:"small"  
        },
        {
            name:"Sharjeel",
            date_of_birth:"03/02/1998",
            date_of_cake:"03/02/1998",
            cake_size:"small"  
        },
        {
            name:"Sharjeel",
            date_of_birth:"03/02/1998",
            date_of_cake:"03/02/1998",
            cake_size:"small"  
        },
        {
            name:"Sharjeel",
            date_of_birth:"03/02/1998",
            date_of_cake:"03/02/1998",
            cake_size:"small"  
        },
        {
            name:"Sharjeel",
            date_of_birth:"03/02/1998",
            date_of_cake:"03/02/1998",
            cake_size:"small"  
        }
    ]

    const [employees,setEmployees]:any= useState([...datas]);
    const [name,setName] = useState();
    const [date_of_birth,setDateOfBirth]:any = useState();
    const [date_of_cake,setDateOfCake]:any = useState();
    const [countSmallCake,setCountSmallCake] = useState(0);
    const [countLargeCake,setCountLargeCake] = useState(0);


    const handleNameInput = (event:any) => {
        setName(event.target.value);
    }
    const handleDateInput = (event:any) => {
        const date = event.target.value;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');
        setDateOfBirth(formattedDate);
        let currentDate = new Date();
        let dateFormat = format(new Date(currentDate), 'dd/MM/yyyy');
        setDateOfCake(dateFormat);
    }
    const handleSubmit = () =>{
        const obj:any = {
            name:name,
            date_of_birth:date_of_birth,
            date_of_cake: date_of_cake,
            cake_size:"small"
        }
        employees.push(obj);
        setEmployees([...employees]);
    }
    useEffect(() => {
        const sortedEmployees = [...employees].sort((a, b) => {
          const dateA = parse(a.date_of_cake, 'dd/MM/yyyy', new Date());
          const dateB = parse(b.date_of_cake, 'dd/MM/yyyy', new Date());
          return dateA.getTime() - dateB.getTime();
        });
        const count = employees.reduce((acc:any, value:any) => {
            acc[value] = (acc[value] || 0) + 1;
            return acc;
          }, {});
          setCountLargeCake(count);
        setEmployees(sortedEmployees);
      }, [employees]);
  return (
    <>
      <div className="wrapper">
      <PieChart />
        <div className="row">
          <div className="title">
            <h1>Add Employees for birthday</h1>
          </div>
          <div className="content">
            <input type="text" className="employee-name"value={name} onChange={handleNameInput} />
            <input type="date" className="employee-date-of-birth" onChange={handleDateInput} />
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
                        {
                            employees.map((res:any,i:any) => (
                                <ul key={i}>
                                    <li>{i+1}</li>
                                    <li>{res.name}</li>
                                    <li>{res.date_of_birth}</li>
                                    <li>{res.date_of_cake}</li>
                                    <li>{res.cake_size}</li>
                                </ul>
                            ))
                        }
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
