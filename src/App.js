import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import HTTP_GET from './Component/HTTP_GET'
// import HTTP_POST from './Component/HTTP_POST';
// import HookCounter from './Component/HookCounter';
// import HookSetName from './Component/HookSetName';
// import HookWithArray from './Component/HookWithArray';
// import Hook_Effect_Counter from './Hook_Effect_(Counter)';
// import HookMouse from './Component/HookMouse';
// import MouseContainer from './Component/MouseContainer';
// import IntervalHookCouunter from './Component/IntervalHookCouunter';
// import HookFetchAPI from './Component/HookFetchAPI';
//  import HookFetchIndividualData from './Component/HookFetchIndividualData';
// import { AgeContext, UserContext } from './Component/HookContext';
// import ComponentB from './Component/ComponentB';
// import ReduderCounter from './Component/ReducerCounter'
// import HookFetchData_and_Error from './Component/HookFetchData_and_Error';
// import ReducerFetchData from './Component/ReducerFetchData';
// import FocusInputUseRef from './Component/FocusInputUseRef';
import HookCounterTest from './Component/HookCounterTest';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  render() {
    return (
     <div className="App"> 
       <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" /> 
     {/* <HTTP_POST/>              //HTTP POST request
     <HTTP_GET/>                   //HTTP GET request    */}
     {/* <HookCounter/>            // Hooks useState*/}

    {/* <HookSetName/>             // Hooks useState */}

    {/* <HookWithArray/>           // Hooks useState  */}

    {/* <Hook_Effect_Counter/>     //Hooks useEffect */}

    {/* <HookMouse/>               //Hook useEffect */}

    {/* <MouseContainer/>          //Hook useEffect */}

    {/* <IntervalHookCouunter/>    //Hook useEffect */}

    {/* <HookFetchAPI/>            // Hook Fetch API */}

    {/* <HookFetchIndividualData/>      // Hook Fetch API */}

    {/* <UserContext.Provider value="Prantik">
      <AgeContext.Provider value="19">
        <ComponentB/> 
      </AgeContext.Provider>
    </UserContext.Provider>                    // Hooks useContext */}

    {/* <ReduderCounter/>          // Hook useReducer */}

    {/* <HookFetchData_and_Error/>     // Hook Fetch API */}

    {/* <ReducerFetchData/>               /// Hook Fetch API with Reducer */}

    {/* <FocusInputUseRef/>               // Hook useRef */}

    <HookCounterTest/>

     </header>     
      </div>
      
    )
  }
}


export default App;
