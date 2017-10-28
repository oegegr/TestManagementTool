'use strict';
import React, { Component } from 'react';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {credentials: {username: '', password: ''}};
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setSate({credentials: credentials});
    }

    onSave(event) {
        event.preventDefault();
        this.props.action.logInUser(this.state.credentials);
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="jumbotron">
                        <form>
                            <div className="form-group">
                                <input type="text" value={this.state.credentials.username} onChange={this.onChange} className="form-control" placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" value={this.state.credentials.password} onChange={this.onChange} className="form-control" placeholder="Enter password"/>
                            </div>
                            <button type="submit" onClick={this.onSave} className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


