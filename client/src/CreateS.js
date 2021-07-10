
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateSchedule from './components/createSchedule.js'

import axios from 'axios';

axios.defaults.withCredentials=true;

function CreateS() {

  return (
    <Provider store={store}>
      <div className="CreateS">
        
        <Container>
        <CreateSchedule/>


        </Container>
      </div>
    </Provider>
  );
}

export default CreateS;
