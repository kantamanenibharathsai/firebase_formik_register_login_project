import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography, } from "@mui/material"
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import loginStyles from "./Login.Styles";
import { collection, getDocs } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"
import YupPassword from 'yup-password'
import { db } from "../firebase/config";
YupPassword(Yup)


interface IState {
    isPasswordVisible: boolean,
    showMsg: string
}

interface InitialValuesType extends IState {
    email: string;
    password: string;
}

const initialValues: InitialValuesType = {
    isPasswordVisible: false,
    email: "",
    password: "",
    showMsg: ""
};

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<IState["isPasswordVisible"]>(false);
    const [showMsg, setShowMsg] = useState<IState["showMsg"]>("");

    const handleClickShowPassword = () => {
        setIsPasswordVisible(prevValue => !prevValue)
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("*Email Required"),
        password: Yup.string()
            .minLowercase(1, "Password must contain at least 1 lowercase letter")
            .minUppercase(1, "Password must contain at least 1 uppercase letter")
            .minNumbers(1, "Password must contain at least 1 number")
            .minSymbols(1, "Password must contain at least 1 special character")
            .required("*Password Required"),
    });


    const handleSubmit = async (values: InitialValuesType) => {
        console.log("login successful")
        try {
            await validationSchema.validate(values, { abortEarly: false });
            const querySnapshot = await getDocs(collection(db, "usersData"));
            querySnapshot.forEach((doc) => {
                if (doc.data().email === values.email && doc.data().password === values.password) setShowMsg("login Successful");
                else setShowMsg("Invalid Credentials");
            });
        } catch (validationErrors) {
            console.log("Validation errors:", validationErrors);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur={true}
        >
            {({ errors, touched, values, handleChange, handleBlur }) => {
                return (
                    <Form>
                        <Box sx={loginStyles.formControl}>
                            <Box sx={loginStyles.labelTextFieldContainer}>
                                <Box htmlFor="emailAddress" component="label" sx={loginStyles.emailAddressText}>Email Address</Box>
                                <Field type="text" name="email" as={TextField} fullWidth placeholder="Enter your Email Address" id="emailAddress" sx={loginStyles.textFieldStyle}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.email && Boolean(errors.email)
                                    }
                                    helperText={touched.email && errors.email}
                                />
                            </Box>
                            <Box sx={loginStyles.labelTextFieldContainer}>
                                <Box htmlFor="password" component="label" sx={loginStyles.emailAddressText}>Password</Box>
                                <Field as={TextField} fullWidth placeholder="Enter your Password" name="password" id="password" sx={loginStyles.textFieldStyle}
                                    type={isPasswordVisible ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                edge="start"
                                            >
                                                {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>,
                                    }}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.password && Boolean(errors.password)
                                    }
                                    helperText={touched.password && errors.password}
                                />
                            </Box>
                            <Box sx={loginStyles.rememberForgotPasswordContainer}>
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                                <Button variant="text" disableRipple sx={loginStyles.forgotPasswordBtn}>Forgot Password?</Button>
                            </Box>
                            <Box sx={loginStyles.loginBtnContainer}>
                                <Button disableRipple sx={{ ...loginStyles.loginBtn, ...loginStyles.formLoginBtn }} type="submit" variant="contained">Login</Button>
                            </Box>
                        </Box>
                        {<Typography sx={loginStyles.showMsgText}>{showMsg}</Typography>}
                    </Form>
                )
            }}
        </Formik>
    )
}



export default Login