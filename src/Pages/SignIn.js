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
    const [disable, setDisable] = useState(false);


    useEffect(() => {
        if (props.login.length > 0) {
            setEmail(props.login);
            setPassword(props.password);
        }
    }, [props]);

  function handleSubmit(e) {
        e.preventDefault();
        setDisable(true);
    axios.post("http://localhost:4000/sign-in", {
            email,
            password,

        }).then(function (response) {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            setDados(response.data);
            navigate("/timeline");
             
        }).catch(function (error) {
            console.error("Incorrect username or password.Try again.");
            setEmail("");
            setPassword("");
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
                <Button type="submit" value="Submit" disabled={disable}>
                    Log In
                </Button>
                
                <StyledLink to="/sign-up">
                First time? Create an account!</StyledLink>
            </form>
        </Container>
    </Body>);
};

export default SignIn;
