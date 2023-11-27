
import React from 'react';
import { Typography, Button, Container, Grid, Box, IconButton, Divider ,Link} from '@mui/material';
import { Pets, House, MonetizationOn, People } from '@mui/icons-material';

const Hero = () => {
  const heroStyle = {
    background: 'url("https://humanesocietyhpe.ca/uploads/2022/07/adoption-dog-header-2885-lightened-1.jpg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#0b0e18',
    textAlign: 'center',
    padding: '300px ', // Adjust the padding to reduce the height
  };
  const statistics = [
    { label: 'Adoption Applications', value: '4000+' },
    { label: 'Dogs Adopted', value: '600+' },
    { label: 'Cats Adopted', value: '200+' },
    { label: 'Fosters Onboarded', value: '100+' },
  ];

  const buttonStyle = {
    marginTop: '20px',
    background: 'brown',
  };

  const iconStyle = { fontSize: '64px', color: '#FFA500' };

  const leftSideStyle = {
    marginTop: '200px',
    backgroundColor: 'orange',
    padding: 20,
  };

  const rightSideStyle = {
    backgroundColor: 'orange',
  };

  return (
    <>
      <Box sx={heroStyle}>
        <Container>
          <Typography variant="h2" component="div" gutterBottom>
            PET ADOPTION PLATFORM
          </Typography>
          <Typography variant="h5" component="div" paragraph>
            {/*Streamline your projects, collaborate effectively, and achieve success with our powerful tools.*/}
          </Typography>
          <Button variant="contained" color='success' size="large" sx={buttonStyle}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px', textAlign: 'center' }}>
        {/* Adopt */}
        <Grid item xs={6} sm={3}>
          <IconButton color="primary" style={iconStyle}>
            <Pets fontSize="large" sx={{ fontSize: 80 }} />
          </IconButton>
          <Typography variant="h5">Adopt</Typography>
          <Typography variant="body1">Add a new member to your family.</Typography>
        </Grid>

        {/* Foster */}
        <Grid item xs={6} sm={3}>
          <IconButton color="primary" style={iconStyle}>
            <House fontSize="large" sx={{ fontSize: 80 }} />
          </IconButton>
          <Typography variant="h5">Foster</Typography>
          <Typography variant="body1">Shelter until you can with our help.</Typography>
        </Grid>

        {/* Donate */}
        <Grid item xs={6} sm={3}>
          <IconButton color="primary" style={iconStyle}>
            <MonetizationOn fontSize="large" sx={{ fontSize: 80 }} />
          </IconButton>
          <Typography variant="h5">Donate</Typography>
          <Typography variant="body1">Change lives one penny at a time.</Typography>
        </Grid>

        {/* Volunteer */}
        <Grid item xs={6} sm={3}>
          <IconButton color="primary" style={iconStyle}>
            <People fontSize="large" sx={{ fontSize: 80 }} />
          </IconButton>
          <Typography variant="h5">Volunteer</Typography>
          <Typography variant="body1">Help out with events and fundraisers.</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ backgroundColor: 'orange', marginTop:'40px'}}>
        {/* Left side with text */}
        <Grid item xs={12} md={5} style={leftSideStyle}>
          <div style={{ backgroundColor: 'orange', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
              <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />
              Adopt a Pet<br />
              Don't Shop.
            </Typography>
            <Typography variant="h6" gutterBottom>
              If you are an animal lover and looking to get a pet for your home, consider adopting one. There are many wonderful pets waiting for you to take them home.
            </Typography><br></br>
            <Button variant="contained" color='info' style={{ color: '#00695c', backgroundColor: 'white' }}>
              Choose a Pet
            </Button>
          </div>
        </Grid>

        {/* Right side with images */}
        <Grid item xs={12} md={6} style={rightSideStyle}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div style={{ backgroundColor: 'orange', padding: '20px' }}>
                <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-Pup-1.png" alt="Puppy" style={{ width: '100%' }} />
                <Typography variant="body1" paragraph>
                  <Button variant="contained" color='info' style={{ backgroundColor: '#00695c' }} fullWidth> Pup</Button>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: 'orange', padding: '20px' }}>
                <Button>
                  <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-Senior-Dog-1.png" alt="Adult Dog" style={{ width: '100%' }} />
                </Button>
                <Typography variant="body1" paragraph>
                  <Button variant="contained" color='info' style={{ backgroundColor: '#00695c' }} fullWidth>Dog (Adults and Senior)</Button>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: 'orange', padding: '20px' }}>
                <Button>
                  <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-Kittens-2.png" alt="Kitten" style={{ width: '100%' }} />
                </Button>
                <Typography variant="body1" paragraph>
                  <Button variant="contained" color='info' style={{ backgroundColor: '#00695c' }} fullWidth>Kitten</Button>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: 'orange', padding: '20px' }}>
                <Button>
                  <img src="https://iadopt.in/wp-content/uploads/2020/02/Adult-Cats.jpg" alt="Adult Cat" style={{ width: '100%' }} />
                </Button>
                <Typography variant="body1" paragraph>
                  <Button variant="contained" color='info' style={{ backgroundColor: '#00695c' }} fullWidth>Cat (Adults and Senior)</Button>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
      <Grid container spacing={4} style={{ marginTop:'40px' }} >
      {/* Text on the left */}
      <Grid item xs={12} md={5} marginTop='40px'>
        <div sx={{ padding: '90px' }}>
          <Typography variant="h4" gutterBottom color='#00695c'>
            <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }}/>
            PetAdopt At A Glance
          </Typography>
          <Typography variant="body1" paragraph>
            PetAdopt is a registered (Section 12A, 80G) non-profit organization dedicated to helping <strong>indie dogs and cats find forever homes.</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We are a new-age animal welfare organization that incorporates innovative methods to connect our dogs and cats to people who are certain to be <strong>responsible pet parents.</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            PetAdopt is the first organization in India to streamline and standardize a foster-based adoption procedure. We work with a close network of vetted foster parents to ensure that all animals are accustomed to a homely environment before being adopted. Become a foster parent today.
          </Typography>
          <Typography variant="body1">
            <Link href="#" color="primary">
              <Button variant="contained" color='info' style={{ color: '#00695c', backgroundColor: 'white' }} > Know More</Button>
            </Link>
          </Typography>
        </div>
      </Grid>

      {/* Image on the right */}

      <Grid item xs={12} md={6}>
        <div sx={{ padding: '70px', textAlign: 'center' }}>
          <img
            src="https://dogtime.com/wp-content/uploads/sites/12/2012/05/before-adopt-prepare-animal-shelter-dog-1.jpg?w=760"  // Replace with your actual image URL or path
            alt="PetAdopt Image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Grid>
    </Grid>
    <Grid>
      <Box textAlign="center" py={4} margintop='40px' fullWidth>
        
        <Grid container spacing={2} justifyContent="center">
          {statistics.map((stat, index) => (
            <Grid key={index} item xs={6} sm={3} >
              <Typography variant="h4" color='#00695c' >{stat.value}</Typography>
              <Typography variant="h5" color="#00695c">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
      
    </>
  );
};

export default Hero;



