import React, { Component } from 'react';
import './style.css';

import Toolbar from '../../components/Toolbar';
import BurgerBuilder from '../BurgerPage';
import SideBar from '../../components/Sidebar';
import OrderPage from '../OrderPage';
import { Route, Switch } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import Loginpage from '../LoginPage'
import SignupPage from '../signupPage'

class App extends Component {
    state = {
        showSideBar: false,
    };

    toggleSideBar = () => {
        this.setState((prevState) => {
            return { showSideBar: !prevState.showSideBar };
        });
    };
    render() {
        return (
            <div>
                <Toolbar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar} />
                <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar} />
                <main className="content">
                    <Switch>
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/login" component={Loginpage} />
                        <Route path="/ship" component={ShippingPage} />
                        <Route path="/orders" component={OrderPage} />
                        <Route path="/" component={BurgerBuilder} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
