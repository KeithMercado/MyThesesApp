
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Login Components/ForgotPassword';
import Main from './Login Components/Main';
import Librarian from './Librarian/Librarian'
import Logout from './Librarian/Logout'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Librarian />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Main />} />
        <Route path="/lib" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
