import React, {useState} from "react";
import {Body} from "../Assets/Styles/Body";
import {Container} from "../Assets/Styles/Container";
import {Section} from "../Assets/Styles/Section.js";
import {Input} from "../Assets/Styles/Input.js";
import {Button} from "../Assets/Styles/Button.js";
import {StyledLink} from "../Assets/Styles/StyledLink";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Logo from "../Assets/Styles/Logo";

const SignUp = (props) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);

    const changeDisableState = () => {
        
       return  setDisable(!disable);
      };
    

    function handleSubmit(e) {
        e.preventDefault();
        setDisable(!disable);
    
        axios.post("http://localhost:4000/sign-up", {
            username: username,
            email: email,
            pictureUrl: pictureUrl,
            password: password,
            confirmPassword:password,
        }).then(function (response) {
            props.login(email);
            props.password(password);
            navigate("/");
        }).catch(function (response) {
            const data=response.response.data;
            if(data.length !== undefined){
                let mensagem="";
                for(let i=0;i<data.length;i++){
                    mensagem += data[i]+"\n";
                    if(mensagem.indexOf("email")!==-1)setEmail("");
                    if(mensagem.indexOf("username")!== -1 ) setUserName("");
                    if(mensagem.indexOf("pictureUrl")!== -1 ) setPictureUrl("");
                    if(mensagem.indexOf("password")!== -1 ) setPassword("");

                   
                }
                alert(mensagem);
            }else{
                alert(response.response.data.msg);
                setEmail("");
            };

            setDisable(!disable);
               
        });
    }

    return (<Body>
        <Section>
            <Logo/>
            <span>
                <h1>save, share and discover the best links on the web</h1>
            </span>
        </Section>
        <Container>
            <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email"
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                    />
                <Input type="password" placeholder="password"
                    value={password}
                    onChange={
                        (e) => setPassword(e.target.value)
                    }/>
                <Input type="text" placeholder="username"
                    value={username}
                    onChange={
                        (e) => setUserName(e.target.value)
                    }
                    />
                <Input type="text" placeholder="picture url"
                    value={pictureUrl}
                    onChange={
                        (e) => setPictureUrl(e.target.value)
                    }
                    />
                
                <Button type="submit" value="Submit">
                    <div onClick={changeDisableState}>
                     <p>    
                        Sign Up
                    </p> 
                    </div>
                </Button>
    
                
                <StyledLink to="/">Switch back to Log In</StyledLink>
            </form>
        </Container>
    </Body>);
};

export default SignUp;
