const registerLoginStyles = {
  mainContainer: {
    height: "100vh",
    padding: { xs: "0px", md: "80px 40px", xl: "80px" },
    pt: { xs: "30px", md: "0px" },
  },

  childContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    height: { md: "inherit", xl: "auto" },
    width: { xs: "95%", md: "100%" },
    margin: { xs: "auto", lg: 0 },
  },

  leftContainer: {
    width: { xs: "100%", sm: "85%", md: "48%", lg: "48%" },
    display: { xs: "none", md: "block" },
  },

  leftImageContainer: {
    overflow: "hidden",
  },

  chairImg: {
    height: { xs: "400px", sm: "450px", md: "calc(100vh - 160px)" },
    width: "100%",
    transition: "2s ease all",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  rightContainer: {
    width: { xs: "100%", sm: "85%", md: "53%", lg: "48%" },
    height: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  rightChildContainer: {
    width: { xs: "100%", md: "90%", lg: "85%", xl: "70%" },
    display: "grid",
    gap: "30px",
  },

  textBtnsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },

  welcomeToLoremText: {
    fontSize: "16px",
    fontWeight: "200",
    color: "black",
  },

  btnsContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    gap: "27px",
    bgcolor: "#F8EDDD",
    height: "50px",
    borderRadius: "50px",
  },

  loginBtn: {
    color: "#9e896a",
    fontSize: "14px",
    textTransform: "capitalize",
    px: "35px",
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

  loremIpsumText: {
    color: "#5B5B5B",
    fontSize: "16px",
  },
};

export default registerLoginStyles;
