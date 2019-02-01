import React from "react";
import {FetchUtil} from "./Utilities/FetchUtil";
import {CookieUtil} from "./Utilities/CookieUtil";

export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.userName = React.createRef();
        this.password = React.createRef();
        this.signInButton = React.createRef();
        this.state = {
            loginFailed: false
        }
    }

    submit = () => {
        const url = '/api/accounts/login/';
        const body = {
            'username': this.userName.current.value,
            'password': this.password.current.value
        };

        FetchUtil.postToUrl(url, body)
            .then(response => {
                CookieUtil.setCookie('logintoken', response.token, 10);
                window.location.replace('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loginFailed: true
                });
            });
    };

    render() {
        if (this.props.loggedIn)
            window.location.replace('/');
        let loginState = <p/>;
        if (this.state.loginFailed)
            loginState = <p className="error">نام کاربری یا رمز عبور اشتباه است</p>;
        return (
            <div className="container container-fluid">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel">
                        <div className="panel-heading my-panel-heading">
                            ورود
                        </div>
                        <div className="panel-body">
                            {loginState}
                            <div className="form-group">
                                <label htmlFor="username">نام کاربری</label>
                                <input type="text" id="username" className="form-control" ref={this.userName} onKeyUp={this.handleEnter}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">رمز عبور</label>
                                <input type="password" id="password" className="form-control" ref={this.password} onKeyUp={this.handleEnter}/>
                            </div>

                            <a className="form-group" ref={this.signInButton} onClick={this.submit}>
                                <button type="button" className="button btn my-button">ورود</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleEnter = (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            this.signInButton.current.click();
        }
    };
}