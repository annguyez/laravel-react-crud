import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Header from './Header';
import StudentList from './StudentList';
import NotFound from './NotFound';
import Add from './Add';
import Edit from './Edit';
//import { createBrowserHistory } from "history";


function App() {
    // const [student, setStudent] = useState([]);

    // useEffect(() => {
    //     async function fetchList(){
    //       const reqUrl = `http://127.0.0.1:8000/api/students`;
    //       const res = await fetch(reqUrl);
    //       const resJson = await res.json();
    //       const { data } = resJson;
    //       setStudent(data);
    //     }
    //     fetchList();
    //   }, [])


    //const history = createBrowserHistory();
    return (
        <BrowserRouter>
            <Switch>                           
                {/* <Route path="/" exact component={StudentList} /> */}
                {/* <Route path="/list" component={List} /> */}
                <Route path="/" exact component={Header} />
                
                <Route path="/header" component={Header} />
                <Route path="/add" component={Add} />
                <Route path="/edit/:id" component={Edit} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>          
      
        )
    }
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
