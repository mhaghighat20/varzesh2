import React from "react";
import {FetchUtil} from "./Utilities/FetchUtil";
import {CookieUtil} from "./Utilities/CookieUtil";

export default class SignupPage extends React.Component{
    constructor(props) {
        super(props);
        this.userName = React.createRef();
        this.password = React.createRef();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.signupButton = React.createRef();

        this.state = {error: ''}
    }

    submit = () => {
        const url = '/api/accounts/signup/';
        const body = {
            'username': this.userName.current.value,
            'password': this.password.current.value,
            'first_name': this.firstName.current.value,
            'last_name': this.lastName.current.value,
            'email': this.email.current.value
        };

        FetchUtil.postToUrl(url, body)
            .then(response => {
                if (response.status === 'done')
                    window.location.replace('/');
                else {
                    this.setState({error: 'ثبت نام با مشکل مواجه شد'});
                }
            })
            .catch(err => {
                this.setState({error: 'ثبت نام با مشکل مواجه شد\n' + err});
            });
    };

    render() {
        if (this.props.loggedIn)
            window.location.replace('/');
        return (
            <div className="container container-fluid">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="panel">
                        <div className="panel-heading my-panel-heading">
                            ورود
                        </div>
                        <div className="panel-body">
                            <p>{this.state.error}</p>
                            <div className="form-group">
                                <label htmlFor="username">نام کاربری</label>
                                <input type="text" id="username" className="form-control" ref={this.userName} onKeyUp={this.handleEnter}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">نام</label>
                                <input type="text" id="username" className="form-control" ref={this.firstName} onKeyUp={this.handleEnter}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">نام خانوادگی</label>
                                <input type="text" id="username" className="form-control" ref={this.lastName} onKeyUp={this.handleEnter}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">ایمیل</label>
                                <input type="text" id="username" className="form-control" ref={this.email} onKeyUp={this.handleEnter}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">رمز عبور</label>
                                <input type="password" id="password" className="form-control" ref={this.password} onKeyUp={this.handleEnter}/>
                            </div>

                            <a className="form-group" onClick={this.submit}>
                                <button type="button" className="button btn my-button" ref={this.signupButton}>ثبت نام</button>
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
            this.signupButton.current.click();
        }
    };
}