import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetStartedPage from './pages/GetStartedPage';
import LandingPaage from './pages/LandingPaage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Route exact path="/" component={LandingPaage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={GetStartedPage} />
        </Router>
    );
}

export default App;
