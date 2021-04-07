import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import { MainRoutes } from "./routes";
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';   
import store from './store/store';

export const Main = () => {
    return <Provider store={store}>
        <Router>
            <MainRoutes />
        </Router>
    </Provider>
}