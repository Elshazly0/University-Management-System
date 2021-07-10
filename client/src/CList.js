import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import CourseList from "./components/CourseList"
axios.defaults.withCredentials=true;

function CList() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="CList">
        
        <Container>
        <CourseList></CourseList>


        </Container>
      </div>
    </Provider>
  );
}

export default CList;
