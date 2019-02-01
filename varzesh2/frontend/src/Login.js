import React from "react";
import {FetchUtil} from "./Utilities/FetchUtil";
import {CookieUtil} from "./Utilities/CookieUtil";

export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.userName = React.createRef();
        this.password = React.createRef();
        this.state = {
            tried: false,
            loginSuccessful: false
        }
    }

    submit = () => {
        const url = '/api/accounts/login/';
        // const body = new URLSearchParams();
        // body.append('username', this.userName.current.value);
        // body.append('password', this.password.current.value);
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
                this.setState({
                    tried: true,
                    loginSuccessful: false
                });
            });
    };

    render() {
        let loginState = <p/>;
        if (this.state.tried && this.state.loginSuccessful)
            loginState = <p>نام کاربری یا رمز عبور اشتباه است</p>;
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
                                <input type="text" id="username" className="form-control" ref={this.userName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">رمز عبور</label>
                                <input type="password" id="password" className="form-control" ref={this.password}/>
                            </div>

                            <a className="form-group" onClick={this.submit}>
                                <button type="button" className="button btn my-button">ورود</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}