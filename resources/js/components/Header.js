import {Link, useHistory, useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { ListGroup,Table, ListGroupItem, Button } from 'reactstrap';
import {PageHeader} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Header() {
    const [student, setStudent] = useState([]);
    const history = useHistory();
    useEffect(() => {
        //api.getAll().then
        async function fetchListStudent(){
            const requestUrl = `http://127.0.0.1:8000/api/students`;
            const respone = await fetch(requestUrl);
            const responeJson = await respone.json();
            console.log(responeJson);
            
            setStudent(responeJson);
        }
        fetchListStudent();
    }, []);
    // delete(){
            // }
    function removeStudent(id) {
        axios.delete('http://localhost:8000/api/students/' + id)
        .then((res) => {
            alert('deleted!');
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Thông tin sinh viên"
                extra={[
                    <Link to='add'>
                        <Button key="1" color="primary">
                            Thêm sinh viên
                        </Button>
                    </Link>
                ]}
            />

            <Table dark>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Description</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {student.map(st=> (
                <tr key={st.id}>
                <th scope="row" >{st.id}</th>
                <td>{st.name}</td>
                <td>{st.age}</td>
                <td>{st.description}</td>
                <td> 
                    <Link className="edit-link" to={`/edit/${st.id}`}>
                       <Button color="warning" variant="info">Edit</Button>
                    </Link>
                    <Button color="danger" onClick={()=>removeStudent(st.id)} size="xl" variant="danger">Delete</Button>
                </td>
                </tr>
            )
                )}
                </tbody>
            </Table>
        </div>

        
    );
}

export default Header;