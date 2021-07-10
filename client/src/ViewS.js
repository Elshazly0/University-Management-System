
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewSchedule from './components/viewSchedule';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
axios.defaults.withCredentials=true;

function ViewS() {
  let history = useHistory();
  
  return (
    <Provider store={store}>
      <div className="ViewS">
        
        <Container>
        <ViewSchedule></ViewSchedule>


        </Container>
      </div>
    </Provider>
  );
}

export default ViewS;
