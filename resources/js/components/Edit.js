import React, { useEffect, useState } from 'react';
import api from '../api';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Router, Switch, useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';
import StudentList from './StudentList';

 function Edit(props){

    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [description, setDescription] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(
        {
            id: '',
            name: '',
            age: '',
            description: ''
        }
    );
    const currentId = props.match.params.id;
    const history = useHistory();


    // const loadStudent = ()=>{
    //     const currentId = props.match.params.id;
    //     const st = await api.getStudent(1);
    //     setname(set.name);
    // };
    
    const [student, setStudent] = useState();
    useEffect(() => {
        // console.log(currentId);
        const id = currentId;
        // console.log(typeof id);
        const id_int = Number(id)
        // console.log(id_int)
        // async function fetchStudent(){
        //     const currentId = props.match.params.id;
        //     const requestUrl = "http://127.0.0.1:8000/api/students/"+currentId;
        //     console.log(requestUrl);
        //     const respone = await fetch(requestUrl);
        //     const responeJson = await respone.json();
        //     setStudent(responeJson);
        //     // console.log(responeJson);

        // }
       
        console.log(api.getStudent(props.match.params.id));
        
        function fetchStudent(){ 

          const currentId = props.match.params.id;
          const requestUrl = "http://127.0.0.1:8000/api/students/"+currentId;
          axios.get(requestUrl)
            .then((res) => {
              // document.getElementById('name').innerHTML.input = res.data.name;
              document.querySelector("input[name='name']").defaultValue = res.data.name;
              document.querySelector("input[name='age']").defaultValue = res.data.age;
              document.querySelector("input[name='description']").defaultValue = res.data.description;
              // document.write(name);
              // alert("Name:"+res.data.name);
            
      
              
              console.log(student);
            
            }).catch((error) => {
                console.log(error)
            })
          }

          setStudent(fetchStudent());
          console.log(student);
          
      
        // const selectedStudent = student.find((student) => 
        //     student.id === id.toString()
        // );
        // setSelectedStudent(selectedStudent);
        // console.log(selectedStudent);
        // console.log(fetchStudent());
        //  console.log(student);


    }, []); 
    const onSubmit = () =>{
      const currentId = props.match.params.id;
                // console.log(setStudent);
                // console.log(currentId)
      const student = {name, age, description};
      // console.log(currentId)

      api.updateStudent(student,currentId);
      // console.log(currentId);

      return history.push("/");
    }

    return (

        <div>
            <form> 
            <h1 id="name1">YTen</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                
                onChange={e => setName(e.target.value)}
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
              
                onChange={e => setAge(e.target.value)}
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
               
                onChange={e => setDescription(e.target.value)}
                name="description"
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success">
              Edit
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
export default Edit;