import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Form from "./components/Form";
function Index() {
  return (
    <Box sx={{ flexGrow: 1 ,px:10}}>
      <Grid container spacing={2}>
        <Grid sx={{height:'80vh'}} item xs={5}>
          <Box
            sx={{
              backgroundImage:
                "url(https://th.bing.com/th/id/R.f5a67251bd8637be06e850a6396aeca1?rik=9TbcO7%2b4BGHHAQ&pid=ImgRaw&r=0&sres=1&sresct=1)",
                backgroundPosition:'center',
                backgroundSize:'contain',
                width:'100%',
                height:'100%',
                backgroundRepeat:'no-repeat'
            }}
          />
        </Grid>
        <Grid item xs={7}>
            <Box>
                <Typography variant="h5">Regstration</Typography>
                <Form/>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
