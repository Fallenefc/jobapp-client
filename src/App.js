import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AddJob from './pages/AddJob/AddJob';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path = '/' component = { () => <Dashboard />}/>
      <Route path = '/addJob' exact component = { () => <AddJob />}/>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
