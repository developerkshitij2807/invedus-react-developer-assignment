import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addcontact from "./pages/Addcontact";
import Home from "./pages/Home";
import Editcontact from "./pages/Editcontact";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add-contact" element={<Addcontact />}></Route>
        <Route exact path="/edit-contact" element={<Editcontact />}></Route>
      </Routes>
    </Router>
  );
}
<Route exact path="/add-contact" element={<Addcontact />}></Route>
export default App;
