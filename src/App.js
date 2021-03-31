import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Inbox from "./components/Inbox";
import Welcome from "./pages/Welcome";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route exact path="/" children={<Home />} />
                <Route exact path="/inbox" children={<Inbox />} />
                <Route exact path="/welcome" children={<Welcome />} />
            </Router>
        </div>
    );
}

export default App;
