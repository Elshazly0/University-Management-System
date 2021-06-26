import AppNavbar from './components/AppNavbar';
import CourseList from './components/CourseList';
import CourseModal from './components/CourseModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <CourseModal />
          <CourseList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
