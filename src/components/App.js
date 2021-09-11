import '../App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Link
} from "react-router-dom"; // npm install react-router-dom
import ListIndex from './ListIndex.js';
import ListShow from './ListShow.js'



function App() {

    return(
        // <Header />
        // < Nav Bar/ >
        // Maybe make the user sign in??
        
        // now time for routes
        // <Switch>
        //      <Route exact path="/">
        //          <PostList posts={posts} setPosts={setPosts} removePost={removePost} />
        //      </Route>
        // </Switch> 

        <Router>
            <Switch>
                <Route exact path="/">
                    <ListIndex />
                </Route>

                <Route exact path="/lists/:id">
                    <ListShow />
                </Route>
            </Switch>
        </Router>

    )
}

export default App;