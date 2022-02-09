import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Contacts/Home";
import Login from "./Pages/Authentication/Login";
import PrivateRoute from "./Components/common/PrivateRoute";
import Register from "./Pages/Authentication/Register";
import AddContacts from "./Pages/Contacts/AddContacts";
import EditContacts from "./Pages/Contacts/EditContacts";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddContacts />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit"
            element={
              <PrivateRoute>
                <EditContacts />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
