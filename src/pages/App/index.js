import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerPage";
import SideBar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import Loginpage from "../LoginPage";
import SignupPage from "../signupPage";
import Logout from "../../components/Logout";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/actions/loginAction";
import * as signupActions from "../../redux/actions/signupActions";

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.logout();
      }
    }
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
              <Redirect to="/login" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: () =>
      dispatch(signupActions.autoLogoutAfterMillisec()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
