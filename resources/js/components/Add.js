import { Switch } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    const [description, setdescription] = useState(null);
    const handleSubmit = async ()=>{
      console.log("DSFSĐFS");
      const student = {name, age, description};
      await api.addStudent(student);
    }

    return (
        <div>
            <form> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={e => setname(e.target.value)}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                required
                value={age}
                onChange={e => setage(e.target.value)}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={e => setdescription(e.target.value)}
                name="description"
              />
            </div>

            <button onClick={handleSubmit} className="btn btn-success">
              Submit
            </button>
            <Link to="/">Back</Link>
            </form>
          </div>
    )
}
export default Add;