/*
 * * Importing TLibraries
 */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

/*
 * * Importing custom components
 */
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import OrgDashboard from './pages/OrgDashboard';
import Page404 from './pages/Page404';
import TermsAndConditions from './pages/TermsAndConditions';
import GetStartedPage from './pages/GetStartedPage';
import OtpActivationPage from './pages/utilities/OtpActivationPage';
import WaitForVerify from './pages/utilities/WaitForVerify';
import AdminDashboard from './pages/admin/AdminDashboard';

/*
 * * App function is the main application
 * * Handles all major route change
 */
function App() {
    return (
        <>
            <div>
                <Toaster />
            </div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={GetStartedPage} />
                    <Route path="/user" component={UserDashboard} />
                    <Route path="/org" component={OrgDashboard} />
                    <Route
                        path="/otp/activation/:id"
                        component={OtpActivationPage}
                    />
                    <Route
                        path="/account/verification/wait"
                        component={WaitForVerify}
                    />
                    <Route
                        path="/terms-conditions"
                        component={TermsAndConditions}
                    />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route path="*" component={Page404} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
