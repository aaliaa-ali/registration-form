import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Form from "./components/Form";
import LanguageToggler from "./LanguageToggler";
import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";
import img from '../assets/imgs/img.jpeg'

function Index() {
  const langContext = useContext(Context);
  const lang = langContext.usersLocale;

  return (
    <Box sx={{ flexGrow: 1, px: 10 }}>
      <Grid dir={ lang=='en'?'ltr':'rtl'} container spacing={2}>
        <Grid item xs={5}>
          <Box
            sx={{
              backgroundImage:
                `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              width="60px"
              src="https://th.bing.com/th/id/R.d2397d85a7a69ead0fe1e633ceb7cd3a?rik=67F1AyBojBHRKQ&riu=http%3a%2f%2fwww.bardfieldacademy.org%2fwp-content%2fuploads%2f2016%2f08%2f00106-3D-company-logos-design-free-logo-online-02.png&ehk=HuvO81GLFETyABJ3KJflbBMHSbVgN9%2fvNNNALxwNe2c%3d&risl=&pid=ImgRaw&r=0"
            />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ m: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
                <FormattedMessage id="register" />
              </Typography>
              <LanguageToggler />
            </Box>
            <Form />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
