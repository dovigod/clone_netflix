import React, {Component }from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyle";

class App extends Component {
    render () {
        return (<>
        <Router />
        <GlobalStyles />
        </>);

    }
}

export default App;
