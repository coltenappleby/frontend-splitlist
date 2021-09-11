import '../App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; // npm install react-router-dom
import ListIndex from './ListIndex.js';
import ListShow from './ListShow.js'
import NavBar from './NavBar';



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
                </Switch>
            </Router>
        </div>

    )
}

export default App;