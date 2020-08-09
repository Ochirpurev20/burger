import React, { Component } from 'react'
import Button from '../../components/general/button'
import css from './style.module.css'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/loginAction'
import Spinner from '../../components/general/spinner'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.login(this.state.email, this.state.password)
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePass = (e) => {
        this.setState({password: e.target.value})
    }

    render(){
        return (
            <div className={css.Login}>
                <input onChange={this.changeEmail} type='text' placeholder="email oruul" />
                <input onChange={this.changePass} type='password' placeholder="nuuts ug" />
                {this.props.logginIn && <Spinner />}
                {this.props.userId && <Redirect to='/orders' />}
                {this.props.fireError && (<div style={{color: 'red'}}>{this.props.fireError}</div>)}
                <Button text='login' btnType="Success" daragdsan={this.login} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        logginIn: state.signupLoginReducer.logginIn,
        fireError: state.signupLoginReducer.fireError,
        userId: state.signupLoginReducer.userId
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Login);