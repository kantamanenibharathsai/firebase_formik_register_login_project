const loginStyles = {
  formControl: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "33px",
  },

  labelTextFieldContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  emailAddressText: {
    fontSize: "15px",
    color: "black",
  },

  textFieldStyle: {
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "44px",
    },
    input: {
      "&::placeholder": {
        color: "black",
        fontSize: "13px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #9e896a",
        borderRadius: "30px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #9e896a",
      },
      "&:hover fieldset": {
        borderColor: "#9e896a",
      },
    },
  },

  loginBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  loginBtn: {
    color: "#ffffff",
    bgcolor: "#9e896a",
    fontSize: "14px",
    textTransform: "capitalize",
    px: "35px",
    borderRadius: "20px",
    "&:hover": {
      bgcolor: "#9e896a",
    },
  },

  formLoginBtn: {
    px: "55px",
  },

  rememberForgotPasswordContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  forgotPasswordBtn: {
    textTransform: "capitalize",
    color: "black",
  },

  showMsgText: {
    fontSize: "16px",
    fontWeight: "600",
    color: "green",
  },
};

export default loginStyles;
