import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicantApply from './components/ApplicantApply.js';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
axios.defaults.withCredentials=true;

function Applicant() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="Applicant">
        
        <Container>
        <ApplicantApply></ApplicantApply>


        </Container>
      </div>
    </Provider>
  );
}

export default Applicant;
