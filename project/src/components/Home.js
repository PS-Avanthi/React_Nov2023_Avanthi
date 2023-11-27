import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Pets, House, MonetizationOn, People } from '@mui/icons-material';

const Home = () => {
  const iconStyle = { fontSize: '64px', color: '#FFA500' };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px', textAlign: 'center' }}>
      {/* Adopt */}
      <Grid item xs={6} sm={3}>
        <IconButton color="primary" style={iconStyle}>
          <Pets fontSize="large" />
        </IconButton>
        <Typography variant="h6">Adopt</Typography>
        <Typography variant="body2">Add a new member to your family.</Typography>
      </Grid>

      {/* Foster */}
      <Grid item xs={6} sm={3}>
        <IconButton color="primary" style={iconStyle}>
          <House fontSize="large" />
        </IconButton>
        <Typography variant="h6">Foster</Typography>
        <Typography variant="body2">Shelter until you can with our help.</Typography>
      </Grid>

      {/* Donate */}
      <Grid item xs={6} sm={3}>
        <IconButton color="primary" style={iconStyle}>
          <MonetizationOn fontSize="large" />
        </IconButton>
        <Typography variant="h6">Donate</Typography>
        <Typography variant="body2">Change lives one penny at a time.</Typography>
      </Grid>

      {/* Volunteer */}
      <Grid item xs={6} sm={3}>
        <IconButton color="primary" style={iconStyle}>
          <People fontSize="large" />
        </IconButton>
        <Typography variant="h6">Volunteer</Typography>
        <Typography variant="body2">Help out with events and fundraisers.</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;


// import React from 'react';
// import { Typography, Button, Container, Grid, Box, IconButton } from '@mui/material';
// import { Pets, House, MonetizationOn, People } from '@mui/icons-material';

// const Home = () => {
//   const heroStyle = {
//     backgroundColor: 'orange', // Set the background color to orange
//     color: '#0b0e18',
//     textAlign: 'center',
//     padding: '300px ', // Adjust the padding to reduce the height
//   };

//   const buttonStyle = {
//     marginTop: '20px',
//     background: 'brown',
//   };

//   const iconStyle = { fontSize: '64px', color: '#FFA500' };

//   return (
//     <>
//       <Box sx={heroStyle}>
//         <Container>
//           <Typography variant="h2" component="div" gutterBottom>
//             PET ADOPTION PLATFORM
//           </Typography>
//           <Typography variant="h5" component="div" paragraph>
//             {/* Streamline your projects, collaborate effectively, and achieve success with our powerful tools. */}
//           </Typography>
//           <Button variant="contained" color="error" size="large" sx={buttonStyle}>
//             Get Started
//           </Button>
//         </Container>
//       </Box>

//       <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px', textAlign: 'center', backgroundColor: 'orange' }}>
//         {/* Adopt */}
//         <Grid item xs={6} sm={3}>
//           <IconButton color="primary" style={iconStyle}>
//             <Pets fontSize="large" sx={{ fontSize: 80 }} />
//           </IconButton>
//           <Typography variant="h5" gutterBottom>
//             Adopt
//           </Typography>
//           <Typography variant="body1">Add a new member to your family.</Typography>
//         </Grid>

//         {/* Foster */}
//         <Grid item xs={6} sm={3}>
//           <IconButton color="primary" style={iconStyle}>
//             <House fontSize="large" sx={{ fontSize: 80 }} />
//           </IconButton>
//           <Typography variant="h5" gutterBottom>
//             Foster
//           </Typography>
//           <Typography variant="body1">Shelter until you can with our help.</Typography>
//         </Grid>

//         {/* Donate */}
//         <Grid item xs={6} sm={3}>
//           <IconButton color="primary" style={iconStyle}>
//             <MonetizationOn fontSize="large" sx={{ fontSize: 80 }} />
//           </IconButton>
//           <Typography variant="h5" gutterBottom>
//             Donate
//           </Typography>
//           <Typography variant="body1">Change lives one penny at a time.</Typography>
//         </Grid>

//         {/* Volunteer */}
//         <Grid item xs={6} sm={3}>
//           <IconButton color="primary" style={iconStyle}>
//             <People fontSize="large" sx={{ fontSize: 80 }} />
//           </IconButton>
//           <Typography variant="h5" gutterBottom>
//             Volunteer
//           </Typography>
//           <Typography variant="body1">Help out with events and fundraisers.</Typography>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Home;
