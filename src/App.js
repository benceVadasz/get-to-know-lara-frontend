import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route exact path="/" children={<Home />} > </Route>
            </Router>
        </div>
    );
}

export default App;
