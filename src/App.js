import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Inbox from "./components/Inbox";
import Welcome from "./pages/Welcome";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import Compose from "./pages/Compose";


function App() {
    return (
        <div className="App">

            <Router>
                <Navbar/>
                <Route exact path="/" children={<Home />} />
                <Route exact path="/inbox" children={<Inbox />} />
                <Route exact path="/welcome" children={<Welcome />} />
                <Route exact path="/register" children={<Register />} />
                <Route exact path="/login" children={<Login />} />
                <Route exact path="/compose" children={<Compose />} />
            </Router>
        </div>
    );
}

export default App;
