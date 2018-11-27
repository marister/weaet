import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "./store";
import {MainScreen} from "./MainScreen";

export class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <MainScreen />
            </Provider>
        );
    }
}
