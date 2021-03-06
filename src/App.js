import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ type: "", text: "test" }} />

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
              {/* <Route
                path="/profile/:name"
                exact
                render={({ match }) =>
                  match ? (
                    <Profile match={match} animate={true} />
                  ) : null
                  // <NotFound />
                }
              /> */}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
