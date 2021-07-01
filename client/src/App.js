import AppNavbar from './components/AppNavbar';
import CourseList from './components/CourseList';
import CourseModal from './components/CourseModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Createschedule from './components/createSchedule';
import ViewSchedule from './components/viewSchedule';
import Coursegrades from './components/Coursegrades'
import ApplicantApply from './components/ApplicantApply';
import  Router  from '../src/Router';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Viewstudentsgrades from './components/Viewstudentsgrades';


axios.defaults.withCredentials=true;

function App() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
        <Router/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
