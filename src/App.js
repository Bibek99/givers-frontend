import UserNav from './components/navs/UserNav';
import { BrowserRouter as Router } from 'react-router-dom';
import HeorSection from './components/sections/HeorSection';

function App() {
    return (
        <Router>
            <UserNav />
            <HeorSection />
        </Router>
    );
}

export default App;
