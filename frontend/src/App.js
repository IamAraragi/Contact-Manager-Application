import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Contacts/Home";
import Login from "./Pages/Authentication/Login";
import PrivateRoute from "./Components/common/PrivateRoute";
import Register from "./Pages/Authentication/Register";
import AddContacts from "./Pages/Contacts/AddContacts";
import EditContacts from "./Pages/Contacts/EditContacts";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
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
