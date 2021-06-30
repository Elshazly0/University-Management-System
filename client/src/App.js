import AppNavbar from './components/AppNavbar';
import CourseList from './components/CourseList';
import CourseModal from './components/CourseModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ApplicantApply from './components/ApplicantApply'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
         <ApplicantApply/>
         
        </Container>
      </div>
    </Provider>
  );
}

export default App;
