import React, { useEffect, useState } from 'react';
import { ListGroup,Table,Button, ListGroupItem } from 'reactstrap';
import api from '../api';


function StudentList(){
    const [student, setStudent] = useState([])
    useEffect(() => {
        api.getAll().then
        async function fetchListStudent(){
            const requestUrl = `http://127.0.0.1:8000/api/students`;
            const respone = await fetch(requestUrl);
            const responeJson = await respone.json();
            console.log(responeJson);
            
            setStudent(responeJson);
        }
        fetchListStudent();
    }, [])

    return ( 
        <Table dark>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {student.map(st=> (
                <tr>
                <th scope="row" key={st.id}>{st.id}</th>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.description}</td>
                <td><Button>Edit</Button></td>
                </tr>
            )
                )}
                </tbody>
        </Table>
    )
}
export default StudentList;