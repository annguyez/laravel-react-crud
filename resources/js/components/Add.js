import { Switch } from 'antd';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import api from '../api';

function Add() {

    const [student, setStudent] = useState([]);
    
    // function handleSubmit() {
      
    //     axios.post('http://localhost:8000/api/students/', student)
    //         .then((res) => {
    //             setStudent(res);
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }
    const [name, setname] = useState(null);
    const [age, setage] = useState(null);
    const history = useHistory();
    const [description, setdescription] = useState(null);
    function handleSubmit(){
      console.log("DSFSĐFS");
      const student = {name, age, description};
      api.addStudent(student);
      return history.push("/");
    }

    return (
        <div>


            <form onSubmit={handleSubmit}> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Enter the name"
                onChange={e => setname(e.target.value)}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter the age"
                id="age"
                required
                onChange={e => setage(e.target.value)}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the description"
                id="description"
                required
                onChange={e => setdescription(e.target.value)}
                name="description"
              />
            </div>

            <button className="btn btn-success">
              Submit
            </button>
            <Link color="primary" to="/">
            <button className="btn btn-dark">
            Back
            </button>
            </Link>
            </form>
          </div>
    )
}
export default Add;