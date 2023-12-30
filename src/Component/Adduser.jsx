import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  useNavigate } from "react-router-dom";

function Adduser({user, setUser}) {

  let navigate = useNavigate()
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [mobile , setMobile] = useState('')
  const [department , setDepartment] = useState('')

  const handleCreate = () => {
    let id = user.length?user[user.length-1].id+1 : 1
    let array = [...user]
    array.push({
      id,
      name,
      email,
      mobile,
      department
    })
    setUser(array)
    navigate('/')
  }

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Add User</h1>
              
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Number" onChange={(e) => setMobile(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />
              </Form.Group>

             

              <Button variant="primary" onClick={() => handleCreate()}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adduser;
