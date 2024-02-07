import { collection, addDoc } from "firebase/firestore";
import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import registerStyles from "./Register.Styles";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup"
import YupPassword from 'yup-password'
import { db } from "../firebase/config";
YupPassword(Yup)


interface IState {
    isPasswordVisible: boolean,
}

interface InitialValuesType extends IState {
    email: string;
    userName: string;
    password: string;
}

const initialValues: InitialValuesType = {
    isPasswordVisible: false,
    email: "",
    userName: "",
    password: "",
};


const Register = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<IState["isPasswordVisible"]>(false);

    const handleClickShowPassword = () => {
        setIsPasswordVisible(prevValue => !prevValue)
    }


    const validationSchema = Yup.object({
        userName: Yup.string()
            .min(3, "User Name must be minimum 3 characters")
            .required("*User Name Required"),
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


    const storeUsersInFirebase = async (values: InitialValuesType) => {
        try {
            const docRef = await addDoc(collection(db, "usersData"), {
                email: values.email,
                userName: values.userName,
                password: values.password,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleSubmit = async (values: InitialValuesType) => {
        try {
            await validationSchema.validate(values, { abortEarly: false });
            console.log("Registration successful. Uploading to Firebase...");
            storeUsersInFirebase(values);
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
                        <Box sx={registerStyles.formControl}>
                            <Box sx={registerStyles.labelTextFieldContainer}>
                                <Box htmlFor="emailAddress" component="label" sx={registerStyles.emailAddressText}>Email Address</Box>
                                <Field type="text" name="email" as={TextField} fullWidth placeholder="Enter your Email Address" id="emailAddress" sx={registerStyles.textFieldStyle}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.email && Boolean(errors.email)
                                    }
                                    helperText={touched.email && errors.email}
                                />
                            </Box>
                            <Box sx={registerStyles.labelTextFieldContainer}>
                                <Box htmlFor="userName" component="label" sx={registerStyles.emailAddressText}>User name</Box>
                                <Field type="text" fullWidth name="userName" as={TextField} placeholder="Enter your User name" id="userName" sx={registerStyles.textFieldStyle}
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.userName && Boolean(errors.userName)
                                    }
                                    helperText={touched.userName && errors.userName}
                                />
                            </Box>
                            <Box sx={registerStyles.labelTextFieldContainer}>
                                <Box htmlFor="password" component="label" sx={registerStyles.emailAddressText}>Password</Box>
                                <Field as={TextField} fullWidth placeholder="Enter your Password" name="password" id="password" sx={registerStyles.textFieldStyle}
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
                            <Box sx={registerStyles.registerBtnContainer}>
                                <Button disableRipple sx={{ ...registerStyles.registerBtn, ...registerStyles.formRegisterBtn }} type="submit" variant="contained">Register</Button>
                            </Box>
                        </Box>

                    </Form>
                )
            }}
        </Formik>
    )
}



export default Register