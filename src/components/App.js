import '../App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; // npm install react-router-dom
import ListIndex from './ListIndex.js';
import ListShow from './ListShow.js'
import NavBar from './NavBar';
import UserPage from './UserPage';
import ItemShow from './ItemShow';



function App() {

    return(
        <div className = "all-of-it">
            


            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ListIndex />
                    </Route>

                    <Route exact path="/lists/:id">
                        <ListShow />
                    </Route>

                    <Route exact path="/users/:id">
                        <UserPage />
                    </Route>

                    <Route exact path ="/items/:id">
                        <ItemShow />
                    </Route>

                </Switch>
            </Router>
        </div>

    )
}

export default App;