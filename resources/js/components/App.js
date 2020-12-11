import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';
import StudentList from './StudentList';

function App() {
    return (
        <StudentList />
        )
    }

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
