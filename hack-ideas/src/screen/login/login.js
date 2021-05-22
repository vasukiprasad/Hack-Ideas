import React from 'react';
import {ModalBody, ModalDialog, ModalTitle, Form, Button} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import '../../index.css';

const Login = () => {
    let employeeID;
    const getEmployeeID = name => value => console.log("name,value",name,value);

    const login = () => {
        console.log("Login is clicked")
    }
    return (
        <ModalDialog className="login-modal">
            <ModalHeader className="login-modal-header">
                <ModalTitle><h2>Hack Idea</h2></ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div>
                    <div className="login-form">
                        <div className="row">
                            <label className="cred-title">Employee ID</label>
                        </div>
                        <div>
                            <input name='employeeID' type="text" onChange={getEmployeeID}/>
                        </div>
                        <div className="row">
                            <label className="cred-title">Password</label>
                        </div>
                        <div className="row">
                            <input type="password" />
                        </div>
                        <div className="row">
                            <Button onClick={login}>Login</Button>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </ModalDialog>
    )
}
export default Login;