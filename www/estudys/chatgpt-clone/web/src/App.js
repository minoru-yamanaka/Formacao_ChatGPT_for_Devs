import {useState} from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import {SideMenu} from './components/SideMenu/SideMenu';


function App() {

  const[ input, setInput] =useState("")
  const[ chatlog, setChatlog] =useState([{
    user:"gpt",
    message:"Como posso te ajudar?"
  }])


  return (
    <div className="App">
      <SideMenu> </SideMenu>
     <section className='chatbox'>  

     </section>

     <div>

     </div>

     <div>
      
     </div>
     
    </div>
  );
}

export default App;
