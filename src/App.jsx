import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/layout/CreatePost";
import Navbar from "./components/layout/Navbar";
import Home from "./routes";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";
import Pweets from "./routes/pweets";
import Create from "./routes/pweets/Create";
import AuthRoute from "./routes/util/AuthRoute";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CreatePost />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="pweets">
              <Route index element={<AuthRoute element={<Pweets />} />} />
              <Route
                path="create"
                element={<AuthRoute element={<Create />} />}
              />
            </Route>
            <Route
              path="profile"
              element={<AuthRoute element={<Profile />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
