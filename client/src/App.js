import AppNavbar from './components/AppNavbar';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Router  from '../src/Router';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Button} from 'reactstrap';
axios.defaults.withCredentials=true;

function App() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>

           
        <a href="Applicant">Go To Applicant </a>
          <br/>

        <a href="CourseG"> Go To Adding student's grades </a>
        <br/>
        <a href="CList"> Go To CourseList </a>
        <br/>
        <a href="CModel">Go To CourseModal </a>
        <br/>
        <a href="CreateS"> Go To creating Schedule </a>
        <br/>
        <a href="Viewsg"> Go To View Student Grades </a>
        <br/>
        <a href="ViewS"> Go To View schedule </a>
        <Router/>
        
        
        
        </Container>
      </div>
    </Provider>
  );
}

export default App;
