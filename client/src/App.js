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
import ApplicantApply from './components/ApplicantApply'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
         <CourseList></CourseList>
         <CourseModal></CourseModal>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
