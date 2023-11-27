import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';

const Pet = () => {
  return (
    <>
      {/* First section - "About iAdopt" */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">  What You Can Do?</Typography><br />
          <Typography variant="body1">
        
Do you want to bring about a positive change in the lives of our voiceless friends? Here's a great opportunity to show your compassion and love. Choose the one that suits you best.
          </Typography>
        </Grid>


        {/* Right side with image */}
        <Grid item xs={12} sm={5}>
          {/* Your image component goes here */}
          <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-what-you-can-do.png" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }} >
        <Grid item xs={12} sm={5}>
          {/* Your image component goes here */}
          <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-adopt-foster-a-pet-2.jpg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">Foster</Typography><br />
          <Typography variant="body1">
      
Fostering can be a rewarding experience, and can transform a homeless animal’s life in a big way. You can help raise and care for homeless pets and shower them with love and affection until the little bundles of joy find their forever homes. 

If you're looking to foster an animal, kindly click on the link below that will take you to a for. Please fill in the form and we’ll get back to you  when there is an animal that suits your description.

Yes I can help with fostering
          </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">Feed the needy</Typography><br />
          <Typography variant="body1">
          
Charity begins at home. A great way to do a good deed is to start with taking care of stray animals in your neighbourhood. Besides providing them with timely food and water, you can protect them during the monsoons, attend to them when you see a sick dog or get them treated when injured.  You can also take care of their vaccinations and speak up for them when you see them being ill-treated.
          </Typography>
        </Grid>


        {/* Right side with image */}
        <Grid item xs={12} sm={5}>
          {/* Your image component goes here */}
          <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-volunteer-to-help-pets-get-adopted-2.jpg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12} sm={5}>
          {/* Your image component goes here */}
          <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-Feed-the-needy-1-1.jpg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">  Donate & Support</Typography><br />
          <Typography variant="body1">
        
A small contribution can go a long way. You can help support our mission and save a puppy or kitten by making a monetary donation that is within your reach. The funds received will be used for medical needs like vaccinations, sterilization or towards treatment during an injury.  Your donation can help scores of homeless cats and dogs in getting a better

You can also contribute in other ways. We are always in need of the following items: 

Food, Newspapers, Pens, Cages
          </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">About PetAdopt</Typography><br />
          <Typography variant="body1">
            PetAdopt is a non-profit organization started by a small group of animal lovers in Chennai, who have had enough of seeing innocent animals struggle for their lives.

            We help animals in distress (orphaned, injured, or abandoned) and find loving homes that treat them like family.
          </Typography>
        </Grid>


        {/* Right side with image */}
        <Grid item xs={12} sm={5}>
          {/* Your image component goes here */}
          <img src="https://iadopt.in/wp-content/uploads/2020/02/donate-to-iadopt-2.jpg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        </Grid>
      </>
  );
};

export default Pet;
