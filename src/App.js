import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetStartedPage from './pages/GetStartedPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import OrgDashboard from './pages/OrgDashboard';
import Page404 from './pages/Page404';

function App() {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={GetStartedPage} />
            <Route path="/user" component={UserDashboard} />
            <Route path="/org" component={OrgDashboard} />
            <Route component={Page404} />
        </Router>
    );
}

export default App;
