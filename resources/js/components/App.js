import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';
import StudentList from './StudentList';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <StudentList /> 
                </Route>
                <Route path="/edit/:id">
                    <Edit /> 
                </Route>
                <Route path="/add">
                    <Add /> 
                </Route>
                
            </Switch>
        </Router>
      
        )
    }
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
