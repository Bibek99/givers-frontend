import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPaage from './pages/LandingPaage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Route exact path="/" component={LandingPaage} />
            <Route path="/login" component={LoginPage} />
        </Router>
    );
}

export default App;
