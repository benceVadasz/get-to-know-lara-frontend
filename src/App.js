import './App.css';
import Home from "./pages/Home";
import {Route, BrowserRouter as Router} from "react-router-dom";
import InboxPage from "./pages/InboxPage";
import Welcome from "./pages/Welcome";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import Compose from "./pages/Compose";
import SentPage from "./pages/SentPage";
import MailDetail from "./pages/MailDetail";


function App() {
    return (
        <div className="App">

            <Router>
                <Route exact path="/" children={<Home />} />
                <Route exact path="/inbox" children={<InboxPage />} />
                <Route exact path="/sent" children={<SentPage />} />
                <Route exact path="/welcome" children={<Welcome />} />
                <Route exact path="/register" children={<Register />} />
                <Route exact path="/login" children={<Login />} />
                <Route exact path="/compose" children={<Compose />} />
                <Route exact path="/view/:id" children={<MailDetail />} />
            </Router>
        </div>
    );
}

export default App;
