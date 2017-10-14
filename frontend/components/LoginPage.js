'use strict';
import React, { Component } from 'react';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="jumbotron">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


