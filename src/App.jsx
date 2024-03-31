import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { componentsByRoute } from "./routes/routes.jsx";
import './index.css'
function App() {
    return (
        <Router>
            <Routes>
                {Object.entries(componentsByRoute).map(([route, componentName]) => (
                    <Route key={route} path={route} element={componentName} />
                ))}
            </Routes>
        </Router>
    );
}

export  {App};