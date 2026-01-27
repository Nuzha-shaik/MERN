//functional component

// function App(){
//   return(
//     <h1>hello</h1>
//   )
// }
// export default App;

//class component
// import {Component} from "react";

// class App extends Component{
//   render(){
//     return(
//       <h1>hello class Component</h1>
//     )
//   }
// }
// export default App;

import Navbar from "./component/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/about"
import Service from "./pages/Service"
import UseState from "./Hooks/UseState"
import UseEffect from "./Hooks/UseEffect"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import UseEffectApi from "./Hooks/UseEffectApi"
import {Routes,Route} from "react-router-dom"
import Hook from "./Hooks/Hook"
import UseRef from "./Hooks/UseRef"


const App = () => {
  
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home name="Nuzha"/>} />  
        <Route path="/about" element={<About name="am about page" registerNo="23691A32a3" email="nuzhashaika@gmail.com" />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/useState" element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/hook' element={<Hook/>}>
            <Route path='useState' element={<UseState />} />
            <Route path='useEffect' element={<UseEffect/>}/>
            <Route path='useeffectapi' element={<UseEffectApi/>}/>
            <Route path='useRef' element={<UseRef/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App