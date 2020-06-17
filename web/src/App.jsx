import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import MsgWindow from "./components/MsgWindow";
import NewConversation from "./components/NewConversation";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/convo/new" component={NewConversation} />
                    <Route path="/convo/:id" component={MsgWindow} />
                    <Redirect to="/" />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
