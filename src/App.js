import './App.css';
import InvitationPage from '../src/components/InvitationPage';
import WelcomePage from '../src/components/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/:id/:eventId" element={<InvitationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
