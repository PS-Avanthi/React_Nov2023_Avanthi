// ContactPage.js

import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '150px' }}>
        <Grid>
        {/* <Typography variant="h5" gutterBottom  textAlign={'center'}>
               Contact Us
            </Typography> */}
            <img src="https://www.coolpod.com.au/wp-content/uploads/2021/09/Contact-Us-1536x167.png" 
            alt="Contact"
            style={{ width: '100%', borderRadius: '8px' ,height:'120px'}}
            />
        </Grid>
      <Grid container spacing={3} alignItems="center">
        {/* Left side - Image */}
        <Grid item xs={12} sm={6}>
          <img
            src="https://i.pinimg.com/474x/10/13/eb/1013ebfe99549d45e984d28c18b08579.jpg" // Replace with your image URL
            alt="Contact"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>


        {/* Right side - Contact Details and Form */}
        <Grid item xs={12} sm={6}>
          <div style={{ padding: '20px', borderRadius: '8px' }}>
           
            
            {/* Contact Details
            <Typography variant="body1" gutterBottom>
              Email: example@example.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +1 234 567 890
            </Typography> */}

            {/* Form */}
            <form>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />

              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
