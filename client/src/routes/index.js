import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthContext from "../contexts/auth.context";
import useProvideAuth from "../hooks/useProvideAuth.hook";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routes() {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            <Router>
                <Switch>
                    <Route component={Login} path="/login" reverse={true} />
                    <Route component={Home} path="/" />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default Routes;
