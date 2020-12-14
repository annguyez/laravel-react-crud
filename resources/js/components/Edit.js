import React, { useEffect, useState } from 'react';
import api from '../api';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';

 function Edit(props){

    const [name, setname] = useState(null);
    const [age, setage] = useState(null);
    const [description, setdescription] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(
        {
            id: '',
            name: '',
            age: '',
            description: ''
        }
    );
    const currentId = props.match.params.id;

    const loadStudent = async()=>{
        const st = await api.getStudent(1);
        setname(set.name);
    };
    loadStudent();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        console.log(currentId);
        const id = currentId;

        async function fetchListStudent(){
            const requestUrl = `http://127.0.0.1:8000/api/students`;
            const respone = await fetch(requestUrl);
            const responeJson = await respone.json();
            //
            console.log(responeJson);
            
            setStudent(responeJson);
        }
        fetchListStudent();
        console.log(student);

        const selectedStudent = student.find((student) => 
            student.id === id.toString()
        );
        setSelectedStudent(selectedStudent);
        console.log(selectedStudent);
    }, []); 




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

            <button className="btn btn-success">
              Edit
            </button>
            <Link to="/">Back</Link>
            </form>
        </div>
    )
}
export default Edit;