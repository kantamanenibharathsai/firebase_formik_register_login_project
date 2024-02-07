const registerStyles = {
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

  registerBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },

  registerBtn: {
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

  formRegisterBtn: {
    px: "55px",
  },

  errorMsg: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "300",
    color: "red",
  },
};

export default registerStyles;
