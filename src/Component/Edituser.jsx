import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  useNavigate , useParams } from "react-router-dom";

function Edituser({user, setUser}) {

  let navigate = useNavigate() // 
  let params = useParams() // return a object

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [mobile , setMobile] = useState('')
  const [department , setDepartment] = useState('')

  const findIndex = (id) => {
    for(let i = 0; i<user.length; i++){
      if(id === user[i].id){
        return i
      }
    }
  }

  const handleEdit = () => {
    let id =  Number(params.id)
    let index = findIndex(id)
    let newArray = [...user]
    newArray.splice(index,1,{
      id,
      name,
      email,
      mobile,
      department
    })
    
    setUser(newArray)
    navigate('/')
  }

  

  // UseEffect Use 

  const getData = () => {
    let id = Number(params.id)
    let index = findIndex(id)

    setName(user[index].name)
    setEmail(user[index].email)
    setMobile(user[index].mobile)
    setDepartment(user[index].department)
  }

  useEffect(()=> {
    getData()
  },[])



  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
              
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
              </Form.Group>

             

              <Button variant="primary" onClick={() => handleEdit()}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edituser;
