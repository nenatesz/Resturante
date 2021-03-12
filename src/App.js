import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  // to store the state, we need to define the state in the constructor of the class component

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//      <Navbar dark color='primary'>
//      <div className='container'>
//      <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
//      </div>
//      </Navbar>

//     </div>
//   );
// }

// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
