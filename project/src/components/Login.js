import React from 'react';
import { Paper, Grid, Typography, TextField, Avatar, Button, Checkbox, FormControlLabel, Link, Container, ThemeProvider, createTheme } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const Login = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
   
  };

  const paperStyle = {
    width: '80%',
    padding: 30,
    borderRadius: 15,
  };

  const avatarColor = { background: "#136DA1" };
  const bstyle = { margin: "10px auto" };

  const imageContainerStyle = {
    width: '100%', // Adjust the width as needed
    height: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#40474B',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container style={containerStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Grid align="center">
                <Avatar style={avatarColor}><LockRoundedIcon /></Avatar>
                <Typography variant="h5">SIGN IN</Typography>
              </Grid>
              <TextField margin="normal" label="Username/Email" fullWidth />
              <TextField label="Password" type="password" required margin="normal" fullWidth />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" color="primary" variant="contained" style={bstyle} fullWidth>
                Sign in
              </Button>
              <Typography>
                <Link href="#">Forgot password?</Link>
              </Typography><br></br>
              <Typography>
                <Link href="/SignUp" component={Link} to={'./SignUp'} >Sign up</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={imageContainerStyle}>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg' alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 15, borderBottomRightRadius: 15 }} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Login;


// import React from 'react'
//  //import'./Login.css';
// import {Grid,Paper,Avatar, TextField,Button,Typography} from '@mui/material'
// import PetsIcon from '@mui/icons-material/Pets';
// import { blue } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';

// const Login =()=>{
//     const paperstyle={padding:70,height:'50vh',width:300,backgroundColor:"white",margin:"100px auto"}
//     const avatarstyle={background:"#007180"}
//     return (
//         <Grid>
//             <Paper elevation={10} style={paperstyle}>
//                 <Grid align='center'>
//                 <Avatar style={avatarstyle}><PetsIcon/></Avatar>
//                 <Typography>SignIn</Typography>
//                 </Grid>
//                 <TextField margin='normal'  label='email/Username' placeholder='Enter here' fullWidth required />
//                 <TextField margin='normal' type="password" label='Password'  placeholder='Enter Password' fullWidth required/>
//                 <FormControlLabel
//         control={
//           <Checkbox name="checkedB" color="primary" />
//                }
//               label="Remember me"
//                /><br></br><br></br>
//                <Button type="submit" color='primary' variant='contained' fullWidth>Log In</Button><br></br><br></br>
//                <Typography>
//                 <Link href="#">Forgot password?</Link>
//                 </Typography>
              
            
//             </Paper>
//         </Grid>
//     )
// }
// export default Login;
