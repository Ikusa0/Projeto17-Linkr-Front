import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";

import {Input} from "../Assets/Styles/Input.js";
import {Button} from "../Assets/Styles/Button.js";
import {StyledLink} from "../Assets/Styles/StyledLink";
import Logo from "../Assets/Styles/Logo";
import {Body} from "../Assets/Styles/Body";
import {Container} from "../Assets/Styles/Container";
import {Section} from "../Assets/Styles/Section.js";

const SignIn = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setDados} = useContext(UserContext);

    useEffect(() => {
        if (props.login.length > 0) {
            setEmail(props.login);
            setPassword(props.password);
        }
    }, [props]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("email", email);
        console.log("password", password);

        axios.post("http://localhost:4000/sign-in", {
            email: email,
            password: password

        }).then(function (response) {
            localStorage.setItem('token', response.data.token);
            setDados(response.data);
            console.log(response.data);
            if (response.data.membership === null) {
                navigate("/subscriptions");
            } else {
                navigate("/home");
            }


        }).catch(function (error) {
            alert("Email ou password invalido. Tente novamente!");
            setPassword("");
            setEmail("");
            console.log(error);
        });
    }

    return (<Body>
        <Section>
            <Logo/>
            <span>
                <h1>save, share and discover the best links on the web</h1>
            </span>
        </Section><Container>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="e-mail"
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)
                    }/>
                <Input type="password" placeholder="password"
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }/>
                <Button type="submit" value="Submit">
                    Log In
                </Button>
                <StyledLink to="/sign-up">
                First time? Create an account!</StyledLink>
            </form>
        </Container>
    </Body>);
};

export default SignIn;
