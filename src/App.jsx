import '../styles/App.css';
import '../styles/styles.css'
import Navbar from './Navbar.jsx';
import Pracownicy from './pages/Pracownicy.jsx';
import Kontrahenci from './pages/Kontrahenci.jsx';
import Budowy from './pages/Budowy.jsx';
import Archiwa from './pages/Archiwa.jsx';
import Home from './pages/Home.jsx'
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/pracownicy" element={<Pracownicy /> } />
                    <Route path="/archiwa" element={<Archiwa /> } />
                    <Route path="/kontrahenci" element={<Kontrahenci /> } />
                    <Route path="/budowy" element={<Budowy /> } />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
