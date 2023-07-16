import './App.css';

//theme  
import '../src/primereact-theme/themes.css'    
//core
import "primereact/resources/primereact.min.css"; 
import { Route, Routes } from 'react-router-dom';
import  Login from "./screens/Login"
import Home from './screens/Home'
import UpdateAssociate from "./screens/UpdateAssociate/UpdateAssociate";
import CreateAssociate from "./screens/CreateAssociate/CreateAssociate";
import ListAssociate from "./screens/ListAssociate/ListAssociate"

function App() {
  return (
      <div>
        <Routes>
                <Route  path="/" element={<Login/>} />
                <Route  path="/home" element={<Home/>} />
                <Route element={<ListAssociate/>} path="/associates"/>
                <Route element={<CreateAssociate/>} path="/createAssociate"/>
                <Route element={<UpdateAssociate/>} path="/updateAssociate/:id"/>
           </Routes>
      </div>
    
  );
}

export default App;
