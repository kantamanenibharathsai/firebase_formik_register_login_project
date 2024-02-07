import { Box, Button, Typography } from "@mui/material"
import registerLoginStyles from "./RegisterLogin.Styles"
import chairImg from "../assets/chairImg.png"
import { useState } from "react";
import Register from "../register/Register";
import Login from "../login/Login";

interface IState {
    isPasswordVisible: boolean,
    isRegisterPageShown: boolean,
    isLoginPageShown: boolean
}


const RegisterLogin = () => {
    const [isRegisterPageShown, setIsRegisterPageShown] = useState<IState["isRegisterPageShown"]>(true);
    const [isLoginPageShown, setIsLoginPageShown] = useState<IState["isLoginPageShown"]>(false);

    const clickHandlerToGetLoginPage = () => {
        setIsLoginPageShown(prevValue => !prevValue)
        setIsRegisterPageShown(prevValue => !prevValue)
    }

    const clickHandlerToGetRegisterPage = () => {
        setIsRegisterPageShown(prevValue => !prevValue)
        setIsLoginPageShown(prevValue => !prevValue)
    }

    return (
        <Box sx={registerLoginStyles.mainContainer}>
            <Box sx={registerLoginStyles.childContainer}>
                <Box sx={registerLoginStyles.leftContainer}>
                    <Box sx={registerLoginStyles.leftImageContainer}>
                        <Box component={"img"} alt="chair-img" sx={registerLoginStyles.chairImg} src={chairImg} />
                    </Box>
                </Box>
                <Box sx={registerLoginStyles.rightContainer}>
                    <Box sx={registerLoginStyles.rightChildContainer}>
                        <Box sx={registerLoginStyles.textBtnsContainer}>
                            <Typography sx={registerLoginStyles.welcomeToLoremText}>Welcome to lorem...!</Typography>
                            <Box sx={registerLoginStyles.btnsContainer}>
                                <Button onClick={clickHandlerToGetLoginPage} sx={registerLoginStyles.loginBtn} variant="text">Login</Button>
                                <Button onClick={clickHandlerToGetRegisterPage} sx={registerLoginStyles.registerBtn} variant="contained">Register</Button>
                            </Box>
                        </Box>
                        <Typography sx={registerLoginStyles.loremIpsumText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        {isRegisterPageShown && <Register />}
                        {isLoginPageShown && <Login />}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default RegisterLogin