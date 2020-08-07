import React, { Component } from 'react'
import Button from '../../components/general/button'
import css from './style.module.css'

class Signup extends Component {
    state = {
        email: '',
        password1: '',
        password2:''
    }

    Signup = () => {
        alert('Signup' + this.state.email)
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePass1 = (e) => {
        this.setState({password1: e.target.value})
    }
    changePass2 = (e) => {
        this.setState({password2: e.target.value})
    }

    render(){
        return (
            <div className={css.Signup}>
                <h1>бүртгэлийн форм</h1>
                <div> та өөрийн мэдээллээ оруулна уу</div>
                <input onChange={this.changeEmail} type='text' placeholder="email oruul" />
                <input onChange={this.changePass1} type='password' placeholder="nuuts ug" />
                <input onChange={this.changePass2} type='password' placeholder="nuuts ug дахин" />
                <Button text='бүртгүүлэх' btnType="Success" daragdsan={this.Signup} />
            </div>
        )
    }
}

export default Signup;