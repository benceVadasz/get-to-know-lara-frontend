import Inbox from "../components/Inbox";
import Welcome from "./Welcome";

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
