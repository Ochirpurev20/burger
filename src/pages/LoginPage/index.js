import React, { Component } from 'react'
import Button from '../../components/general/button'
import css from './style.module.css'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        alert('login=='+ this.state.email+ '***' + this.state.password )
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
                <Button text='login' btnType="Success" daragdsan={this.login} />
            </div>
        )
    }
}

export default Login;