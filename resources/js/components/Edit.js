import React from 'react';
import api from '../api';

export const Edit = () => {

    const [name, setname] = useState(null);
    const [age, setage] = useState(null);
    const [description, setdescription] = useState(null);

    const loadStudent = async()=>{
        const st = await api.getStudent(1);
        setname(set.name);
    };
    loadStudent();


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
              Edit
            </button>
            <Link to="/">Back</Link>
            </form>
        </div>
    )
}
