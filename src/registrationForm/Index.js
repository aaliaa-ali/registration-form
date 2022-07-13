import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Form from "./components/Form";
function Index() {
  return (
    <Box sx={{ flexGrow: 1, px: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box
            sx={{
              backgroundImage:
                "url(https://th.bing.com/th/id/OIP.rHfngg7xoXexzqluWs7QGwAAAA?pid=ImgDet&w=320&h=438&rs=1)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img width='60px' src="https://th.bing.com/th/id/R.d2397d85a7a69ead0fe1e633ceb7cd3a?rik=67F1AyBojBHRKQ&riu=http%3a%2f%2fwww.bardfieldacademy.org%2fwp-content%2fuploads%2f2016%2f08%2f00106-3D-company-logos-design-free-logo-online-02.png&ehk=HuvO81GLFETyABJ3KJflbBMHSbVgN9%2fvNNNALxwNe2c%3d&risl=&pid=ImgRaw&r=0" />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ m: 5 }}>
            <Box>
              <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
                Registration
              </Typography>
            </Box>
            <Form />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
