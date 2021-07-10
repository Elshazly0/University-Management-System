import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import CourseModal from './components/CourseModal'
axios.defaults.withCredentials=true;

function CModel() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="CModel">
        
        <Container>
        <CourseModal></CourseModal>


        </Container>
      </div>
    </Provider>
  );
}

export default CModel;
