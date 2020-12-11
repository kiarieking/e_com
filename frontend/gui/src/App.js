import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import Baserouter from './routes';
import { Router } from 'react-router-dom';
import TaskCreate from './components/TaskCreate';

function App() {
  return (
    <div className="App">
      <TaskCreate/>
      {/* <Router>
        <TaskDetail>
          <Baserouter/>
        </TaskDetail>
      </Router> */}
    </div>
  );
}

export default App;
