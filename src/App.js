import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import AddJob from './pages/AddJob/AddJob';
import Topbar from './components/Topbar/Topbar';
import JobInfo from './pages/JobInfo/JobInfo';

function App() {
  return (

    <div className="App">
      <Topbar />
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { () => <Dashboard />}/>
          <Route path = '/addJob' exact component = { () => <AddJob />}/>
          <Route path = '/job/:jobId' exact component={JobInfo}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
