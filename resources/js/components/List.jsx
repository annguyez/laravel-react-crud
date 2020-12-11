import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';


function List(){
    const [student, setStudent] = useState([])
    useEffect(() => {
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
        <tr key={st.id}>
          <th scope="row">{st.id}</th>
          <td>{st.name}</td>
          <td>{st.age}</td>
          <td>{st.description}</td>
        </tr>
      )
        )}
        </tbody>
        </Table>
        


                    





    )
  return (
        <>

        </>
    )
}
export default List;