import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import ConstructionService from "./components/services/Service1";
import RepairService from "./components/services/Service2";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path ="/home" render={(props) => <HomePage {...props}/>}/>
                <Route path ="/constService" render={(props) => <ConstructionService {...props}/>}/>
                <Route path ="/repService" render={(props) => <RepairService {...props}/>}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>

        </BrowserRouter>
    );
}

export default App;
