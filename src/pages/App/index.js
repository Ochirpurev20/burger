import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Toolbar from '../../components/Toolbar';
import BurgerBuilder from '../BurgerPage';
import SideBar from '../../components/Sidebar';
import OrderPage from '../OrderPage';
import { Route, Switch } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import Loginpage from '../LoginPage';
import SignupPage from '../signupPage';
import Logout from '../../components/Logout';
import {Redirect} from 'react-router-dom'

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
                <Toolbar
                    showSideBar={this.state.showSideBar}
                    toggleSideBar={this.toggleSideBar}
                />
                <SideBar
                    showSideBar={this.state.showSideBar}
                    toggleSideBar={this.toggleSideBar}
                />
                <main className="content">
                    User ID: {this.props.userId}
                    {this.props.userId ? (
                        <Switch>
                            <Route path="/logout" component={Logout} />
                            <Route path="/ship" component={ShippingPage} />
                            <Route path="/orders" component={OrderPage} />
                            <Route path="/" component={BurgerBuilder} />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path="/signup" component={SignupPage} />
                            <Route path="/login" component={Loginpage} />
                            <Redirect to='/login' />
                        </Switch>
                    )}
                </main>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.signupLoginReducer.userId,
    };
};

export default connect(mapStateToProps)(App);
