import React from "react";
import Card from "./Card";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Dashboard({ user, setUser }) {
  let navigate = useNavigate()
  const data = [
    {
      name: "Earnings (Monthly)",
      price: "$40,000",
      color: "primary",
      icon: "fas fa-calendar",
      isBar: false,
    },
    {
      name: "Earnings (Annual)",
      price: "$215,000",
      color: "success",
      icon: "fa-dollar-sign",
      isBar: false,
    },
    {
      name: "Tasks",
      price: "60",
      color: "info",
      icon: "fa-clipboard-list",
      isBar: true,
    },
    {
      name: " Pending Requests",
      price: "18",
      color: "warning",
      icon: "fa-comments",
      isBar: false,
    },
  ];
  
  const handleDelete = (id) => {
    let index= 0
    for (let i = 0; i<user.length; i++){
      if(user[i].id == id){
        index = i
        break;
      }
    }
    let array = [...user]
    array.splice(index,1)
    setUser(array)

  }

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              
            </div>

            <div className="row">
              {data.map((e, i) => {
                return <Card card={e} key={i} />;
              })}
            </div>

            <div className="row">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Department</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  user.map((e) => {
                    return (
                      <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          <td>{e.mobile}</td>
                          <td>{e.department}</td>
                         
                          <td>
                            <Button variant="primary" onClick={() => navigate(`edit-user/${e.id}`)} >Edit</Button>{' '}
                            <Button variant="danger" onClick={() => {handleDelete(e.id)}}>Delete</Button>{' '}
                          </td>
                      </tr>
                    )
                  })
                }
                 
                </tbody>
              </Table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
