import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./LoginForm.css"

const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(el) {
        el.preventDefault();
        props.login(username, password);
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" value={username} placeholder="Username" onChange={(el) => setUsername(el.target.value)}></input>
                </div>
                <div className="password">
                    <input type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}></input>
                </div>
                <div>
                    <Link to="/dashboard">
                        <Button type="submit" variant="outline-dark" onClick={handleSubmit}>Log In</Button>
                    </Link>
                    <Link to="/">
                        <Button type="button" variant="outline-dark">Back</Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;