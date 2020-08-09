import React, { Component } from 'react'
import Button from '../../components/general/button'
import css from './style.module.css'
import * as actions from '../../redux/actions/signupActions'
import {connect} from 'react-redux'
import Spinner from '../../components/general/spinner'
import {Redirect} from 'react-router-dom'

class Signup extends Component {
    state = {
        email: '',
        password1: '',
        password2:'',
        error: ''
    }

    Signup = () => {
        if(this.state.password1 === this.state.password2){
            this.setState({error: ''})
           this.props.signupUser(this.state.email, this.state.password1)
        } else {
            this.setState({error: 'нууц үгнүүд хоорондоо таарахгүй байна'})
        }
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
                {this.props.userId && (<Redirect to='/' />)}
                <h1>бүртгэлийн форм</h1>
                <div> та өөрийн мэдээллээ оруулна уу</div>
                <input onChange={this.changeEmail} type='text' placeholder="email oruul" />
                <input onChange={this.changePass1} type='password' placeholder="nuuts ug" />
                <input onChange={this.changePass2} type='password' placeholder="nuuts ug дахин" />
                {this.state.error && (<div style={{color: 'red'}}> {this.state.error}</div>)}
                {this.props.fireError && (
                    <div style={{color: 'blue'}}>{this.props.fireError} </div>
                )}
                {this.props.saving && <Spinner />}
                <Button text='бүртгүүлэх' btnType="Success" daragdsan={this.Signup} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        saving: state.signupLoginReducer.saving,
        fireError: state.signupLoginReducer.fireError,
        userId: state.signupLoginReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Signup);