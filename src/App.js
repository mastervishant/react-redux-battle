import React from 'react';
import './App.css';
import { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Routes,Route,Switch} from 'react-router-dom';
import store from './store';
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Filter from "./components/Filter";
import Popular from "./components/Popular/Popular";
import Battle from "./components/Battle/Battle";
import Nav from "./components/Navgation/Navigation";
import Home from "./components/Home/Home";


//store.subscribe(() => console.log(store.getState()));
function App() {
return(
  <Provider store={store}>
    <Router>
    <div className="container">
    <Nav />
<Routes>
<Route exact path="/"  element={ <Home/>} />
  <Route exact path="/popular"  element={ <div><Filter /><Popular /></div>} />
  <Route exact path="/battle"  element={ <Battle/>} />
    </Routes>
    
    </div>
    </Router>
  </Provider>
);
}
export default App;