

import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';

const About = () => {
  return (
    <>
      {/* First section - "About iAdopt" */}
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
          <img src="https://iadopt.in/wp-content/uploads/2020/02/iadopt-volunteers-1.png" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      {/* Second section - "What We Do" */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px', backgroundColor: '#ff9b00' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4} style={{ padding: '20px', backgroundColor: 'inherit' }}>
          <Typography variant="h5" style={{ color: 'white' }}><h3>What We Do</h3></Typography>
          <Typography variant="body1" style={{ color: 'white' }}>
            PetAdopt's primary mission is to find forever loving families and homes for animals in need.

            We home/rehome orphaned, abandoned, homeless cats & dogs from the streets after providing them with state-of-the-art private medical care to ensure a hassle-free experience and life for the adopters as well as the pet.<br></br>

            <h2>In Addition</h2>

            <ul>
              <li>We get community street dogs sterilized to keep the population in check</li>
              <li>Educate adopter families on the importance of sterilization</li>
              <li>Feed stray dogs in the neighboring areas</li>
              <li>Regularly follow-up with adopters to ensure the well-being of the pet adopted from iAdopt</li>
              <li>Treat injured animals and release them back into their territories. If they cannot survive on their own, we get them adopted.</li>
              <li>Facilitate rehoming and adoption of animals in areas of low adoption rates/chances</li>
            </ul>

            iAdopt's team has independently homed 700+ Pups, Kittens and Dogs in the last 4 years, including several blind/deaf kittens and handicapped dogs. We also closely work with other pet adoption groups to help them with their adoption activities.
          </Typography>
        </Grid>

        {/* Right side with image */}
        <Grid item xs={12} sm={4}>
          {/* Your image component goes here */}
          <img src="https://cdn.britannica.com/37/91837-050-2CC301F9/Children-pet-dog.jpg" alt="Your Image" style={{ width: '100%', height: 'auto', backgroundColor: 'inherit' }} />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4}>
          {/* Horizontal line */}
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          <Typography variant="h5">What Do We Get Out of This?</Typography><br />
          <Typography variant="body1">
          A heart filled with content for being born as a “Human Being”! Pure joy and happiness! No words can express the satisfaction and contentment we get when a pet gets adopted and grows with the family with love and care!
          </Typography>
        </Grid>
        </Grid>
    </>
  );
};

export default About;
