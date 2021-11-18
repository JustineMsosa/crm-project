import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {Entry} from "./page/entry/Entry.page";
import {LoginForm} from "./page/entry/components/login/login.comp"; 
import { Default } from './page/entry/components/login/layout/Default';
import { Dashboard } from './page/dashboad/dashboad';
import { AddTicket } from './page/tickets/add-tickets';


function App() {
  return (
    <div className="App">

      {/* <Button> test button</Button> */}
    
      {/* <Entry /> */}
      {/* <Default ><Dashboard /></Default> */}
      <Default><AddTicket /></Default>
    </div>
  );
}

export default App;
