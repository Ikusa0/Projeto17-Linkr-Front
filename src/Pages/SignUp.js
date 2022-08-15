import React, {useState, useEffect} from "react";
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
        setDisable(!disable);
      };
    
    
   async function handleSubmit(e) {
        e.preventDefault();
       

     await axios.post("http://localhost:4000/sign-up", {
            username: username,
            email: email,
            pictureUrl: pictureUrl,
            password: password,
            confirmPassword:password,
        }).then(function (response) {
           alert(response.data);
            props.login(email);
            props.password(password);
            navigate("/");
        }).catch(function (error) {
            
            const {data}=error.response;

            if(data.length > 0){
                let mesage="";
                for(let i=0;i<data.length;i++){
                    mesage += data[i]+"\n";
                    if(mesage.indexOf("email")!==-1)setEmail("");
                    if(mesage.indexOf("username")!== -1 ) setUserName("");
                    if(mesage.indexOf("pictureUrl")!== -1 ) setPictureUrl("");
                    if(mesage.indexOf("password")!== -1 ) setPassword("");

                   
                }
                alert(mesage);
            }else{
                alert(data.msg);
                setEmail("");
            };     
            setDisable(false);
        });
        changeDisableState();
    }
    
    

    return (<Body>
        <Section>
            <Logo/>
            <span>
                <h1>save, share and discover the best links on the web</h1>
            </span>
        </Section>
        <Container>
            <form onSubmit={
                handleSubmit
            }>
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
                
                <Button type="submit" value="Submit"  >
                        Sign Up
                </Button>

                <StyledLink to="/">Switch back to Log In</StyledLink>
            </form>
        </Container>
    </Body>);
};

export default SignUp;
