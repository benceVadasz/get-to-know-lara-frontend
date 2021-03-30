import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

function Home() {
    const isLoggedIn = sessionStorage.getItem('token') != null;
    return (
        <div>
            {isLoggedIn
                ? <Inbox />
                : <Welcome />
            }
        </div>
    );
}

export default Home;
