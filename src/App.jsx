import TakList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './Components/Login'
import { useState } from "react";
const auth = getAuth(appFirebase)

function App(){

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else {
        setUsuario(null)
    }
  });

  return (

    <main className="bg-zinc-900 h-screen">
     <div className="container mx-auto p-10">
     <TaskForm/>
      <TakList/>
      {usuario ? <Home correoUsuario = {usuario.email} />  : <Login/> }
     </div>
    </main>

  );
  }

export default App;

