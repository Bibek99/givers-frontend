import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetStartedPage from './pages/GetStartedPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={GetStartedPage} />
            <Route path="/user" component={Dashboard} />
        </Router>
    );
}

export default App;
