import React, { useEffect, useState } from 'react';
import ListStudent2 from './components/list/index';


export const ListStudent = () => {
    const [student, setStudent] = useState([]);
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
        <div>
            <ListStudent2 st={ListStudent2} />
        </div>
    )
}
