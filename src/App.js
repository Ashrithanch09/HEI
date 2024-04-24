import "./App.css";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import NotFound from "./components/NotFound";
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SidebarComponent />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
