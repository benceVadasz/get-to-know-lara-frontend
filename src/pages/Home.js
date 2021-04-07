import InboxPage from "./InboxPage";
import Welcome from "./Welcome";

function Home() {
    const isLoggedIn = sessionStorage.getItem('token') != null;
    isLoggedIn ? window.location.href = "/inbox" : window.location.href = "/welcome";
    return (
        <div>
            {isLoggedIn
                ? <InboxPage />
                : <Welcome />
            }
        </div>
    );
}

export default Home;
