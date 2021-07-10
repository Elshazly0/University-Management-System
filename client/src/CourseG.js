import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseGrades from './components/Coursegrades';

import axios from 'axios';
import {useHistory} from 'react-router-dom';
axios.defaults.withCredentials=true;

function CourseG() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="CourseG">
        
        <Container>
        <CourseGrades></CourseGrades>


        </Container>
      </div>
    </Provider>
  );
}

export default CourseG;
