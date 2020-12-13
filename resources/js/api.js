const axios = window.axios;

const BASE_API_URL = 'http://localhost:8000/api';

export default {

    getAll: () => axios.get(`${BASE_API_URL}/students`),
    getStudent: (id) => axios.get(`${BASE_API_URL}/students/${id}`),
    addStudent: (student) => axios.post(`${BASE_API_URL}/students`,student),
    updateStudent: (student, id) => axios.put(`${BASE_API_URL}/students/${id}`, student),
    deleteStudent: (id) => axios.delete(`${BASE_API_URL}/students/${id}`)
}