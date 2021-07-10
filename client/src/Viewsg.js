
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewstudentsgrades from './components/Viewstudentsgrades'

import axios from 'axios';
import {useHistory} from 'react-router-dom';
axios.defaults.withCredentials=true;

function Viewsg() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="Viewsg">
        
        <Container>
        <Viewstudentsgrades></Viewstudentsgrades>


        </Container>
      </div>
    </Provider>
  );
}

export default Viewsg;
