// OTCMedicinePage.js
import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const Product = () => {
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px', width: '200%' ,textAlign:'center',color:'grey' }}>
        Dogs Available for Adoption
      </Typography>
      <Card style={{ maxWidth: 450, margin: '20px auto' }}>
        <img
          src="https://assets.thepetnest.com/nBB91t92yZMosAk1KHBkCiBe?response-content-disposition=inline%3B+filename%3Dpet-image-90e9.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-90e9.jpeg&response-content-type=image%2Fjpeg&Expires=1701024195&Signature=FpjimsJp9-sPBqCLdvCdLyca40HisQ-sbk-BEjCfk8eoaFV8grHBWL0LPmc9XYLKFlHW4Cc6EnSOyYbPNsmUUDoPc7O1K49ZkPS1cDm0XwHoE1eRK3P5SFbM5ZtE2hQcFKwQK7KDHwi8plnfW6aZhFiwobCOZQFTaQgqUNMe7KmYhDUVSh7mJUMQhb2zWjVTpz-vguB0Qg~HIv9e3dflAuSw7G5meWowrhdYQQki-lmpdL4EuZbAtG29tP5DzqOLv9NTxg8HnPeyF0pPyoTu9wjbQMux3Jcn0RI2B7UUEpUpMrvaiQYCuf2cwwQbqhZxVGWG7fGDIqQTNX3SCg9FVw__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
          alt="Medicine"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Leo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Male,Adulthood<br></br>
            chennai,TamilNadu
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            See more details
          </Button>
        </CardActions>
      </Card>
      
      <Card style={{ maxWidth: 450, margin: '20px auto' }}>
        <img
          src="https://assets.thepetnest.com/Zy7FboNyH1DTVL2hjxoJt6Pz?response-content-disposition=inline%3B+filename%3Dpet-image-3c51.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-3c51.jpeg&response-content-type=image%2Fjpeg&Expires=1701051738&Signature=aTdebo7ZkmiKJvwEOdJxcQ0sGC17Btw6RG2vvvWNzEVwJghNalJbzXBeVMworPy~3KWxVua-J3kH87y80b6ONqQ0IVQU50WATi3sirq8cYyf2A0SVADG5NikTUu--UR5ZzDnTIr4gmrb8BW5A3yZuCKaJWe3YR~2BorUtaLZqlvcSLrg-fvr0fYgieqx5tMRMrRmXc4LxppDphWWrO44dTv8fJLYem~k8-~30GVtrLjEX1W4SoP-0WknlUKix3HzuJG-d-kyDCvkw~E9h30APMhiG-W3WLETVOnvNTd3oXP2E4P7OzVaoNojJrSTjb5sBkgZlvk0JxnUi1cj~dkIhA__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
          alt="Medicine"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Tinu
          </Typography>
          <Typography variant="body2" color="text.secondary">

Female , Adolescence<br></br>
Mumbai,  Maharashtra
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            See more details
          </Button>
        </CardActions>
      </Card>
      
      <Card style={{ maxWidth: 450, margin: '20px auto' }}>
        <img
          src="https://assets.thepetnest.com/S9wbaSSYq2kP8A55eeGhzGTf?response-content-disposition=inline%3B+filename%3Dpet-image-23c2.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-23c2.jpeg&response-content-type=image%2Fjpeg&Expires=1701051893&Signature=b4BL2NzuE5lVBWw1WrSMpbIiNBPKDTQ6tJ9I6376lpJerAMkUfRcdxmORgZPi9SdCDEGle90cyvM62rZldVF3SFW~FzVrBKk0R-SbVvdF2M4jt0eMeiKclPhjIcfCKk6LXEwjEpWdQ6keGsNz0NjYMrTXQHV2ur0p3mrfdUOoLHQFjJdcEWTcOmO1sOXb1vVoXk3KT0ZGx5RqZ89h2WRaUIeqd7vFGgoOAXcwsF30IHOBROu6L1iuF3F9EFQ8VhTZ0pKf8LuI5tzqwhE5RE4ceXhwemeOH-ULNZUKQH29ZkXAlF6pObJ4FM48jqq2ibzcfeT-PIhzcQNtUJRSutxpA__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
          alt="Medicine"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Maara
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Male , Adolescence<br></br>
Chennai,  Tamil Nadu
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            See more details
          </Button>
        </CardActions>
      </Card>
      
      
      {/* Add more cards for other medicines as needed */}
    </Container>
  );
};

export default Product;

// // OTCMedicinePage.js
// import React from 'react';
// import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

// const Product = () => {
//   const containerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   };

//   const cardStyle = {
//     flexBasis: '20%', // Adjust the value as needed
//     margin: '10px',  // Adjust the value to control space between cards
//     borderRadius: '15px',
//     border: '2px solid #ddd',
//   };

//   const imageStyle = {
//     width: '200%',
//     height: '250px',
//     objectFit: 'cover',
//     borderTopLeftRadius: '15px',
//     borderTopRightRadius: '15px',
//   };

//   return (
//     <Container style={containerStyle}>
//       <Typography variant="h4" gutterBottom style={{ marginTop: '20px', width: '100%', textAlign: 'center', color: 'grey' }}>
//         Dogs Available for Adoption
//       </Typography>
//       <Card style={cardStyle}>
//         <img
//           src="https://assets.thepetnest.com/nBB91t92yZMosAk1KHBkCiBe?response-content-disposition=inline%3B+filename%3Dpet-image-90e9.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-90e9.jpeg&response-content-type=image%2Fjpeg&Expires=1701024195&Signature=FpjimsJp9-sPBqCLdvCdLyca40HisQ-sbk-BEjCfk8eoaFV8grHBWL0LPmc9XYLKFlHW4Cc6EnSOyYbPNsmUUDoPc7O1K49ZkPS1cDm0XwHoE1eRK3P5SFbM5ZtE2hQcFKwQK7KDHwi8plnfW6aZhFiwobCOZQFTaQgqUNMe7KmYhDUVSh7mJUMQhb2zWjVTpz-vguB0Qg~HIv9e3dflAuSw7G5meWowrhdYQQki-lmpdL4EuZbAtG29tP5DzqOLv9NTxg8HnPeyF0pPyoTu9wjbQMux3Jcn0RI2B7UUEpUpMrvaiQYCuf2cwwQbqhZxVGWG7fGDIqQTNX3SCg9FVw__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
//           alt="Medicine"
//           style={imageStyle}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             Leo
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Male, Adulthood<br></br>
//             Chennai, TamilNadu
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button variant="contained" color="primary">
//             See more details
//           </Button>
//         </CardActions>
//       </Card>

//       {/* Add more cards with similar styling */}
//       <Card style={cardStyle}>
//         <img
//           src="https://assets.thepetnest.com/nBB91t92yZMosAk1KHBkCiBe?response-content-disposition=inline%3B+filename%3Dpet-image-90e9.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-90e9.jpeg&response-content-type=image%2Fjpeg&Expires=1701024195&Signature=FpjimsJp9-sPBqCLdvCdLyca40HisQ-sbk-BEjCfk8eoaFV8grHBWL0LPmc9XYLKFlHW4Cc6EnSOyYbPNsmUUDoPc7O1K49ZkPS1cDm0XwHoE1eRK3P5SFbM5ZtE2hQcFKwQK7KDHwi8plnfW6aZhFiwobCOZQFTaQgqUNMe7KmYhDUVSh7mJUMQhb2zWjVTpz-vguB0Qg~HIv9e3dflAuSw7G5meWowrhdYQQki-lmpdL4EuZbAtG29tP5DzqOLv9NTxg8HnPeyF0pPyoTu9wjbQMux3Jcn0RI2B7UUEpUpMrvaiQYCuf2cwwQbqhZxVGWG7fGDIqQTNX3SCg9FVw__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
//           alt="Medicine"
//           style={imageStyle}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             Leo
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Male, Adulthood<br></br>
//             Chennai, TamilNadu
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button variant="contained" color="primary">
//             See more details
//           </Button>
//         </CardActions>
//       </Card>

//       <Card style={cardStyle}>
//         <img
//           src="https://assets.thepetnest.com/nBB91t92yZMosAk1KHBkCiBe?response-content-disposition=inline%3B+filename%3Dpet-image-90e9.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-90e9.jpeg&response-content-type=image%2Fjpeg&Expires=1701024195&Signature=FpjimsJp9-sPBqCLdvCdLyca40HisQ-sbk-BEjCfk8eoaFV8grHBWL0LPmc9XYLKFlHW4Cc6EnSOyYbPNsmUUDoPc7O1K49ZkPS1cDm0XwHoE1eRK3P5SFbM5ZtE2hQcFKwQK7KDHwi8plnfW6aZhFiwobCOZQFTaQgqUNMe7KmYhDUVSh7mJUMQhb2zWjVTpz-vguB0Qg~HIv9e3dflAuSw7G5meWowrhdYQQki-lmpdL4EuZbAtG29tP5DzqOLv9NTxg8HnPeyF0pPyoTu9wjbQMux3Jcn0RI2B7UUEpUpMrvaiQYCuf2cwwQbqhZxVGWG7fGDIqQTNX3SCg9FVw__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
//           alt="Medicine"
//           style={imageStyle}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             Leo
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Male, Adulthood<br></br>
//             Chennai, TamilNadu
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button variant="contained" color="primary">
//             See more details
//           </Button>
//         </CardActions>
//       </Card>

//       <Card style={cardStyle}>
//         <img
//           src="https://assets.thepetnest.com/nBB91t92yZMosAk1KHBkCiBe?response-content-disposition=inline%3B+filename%3Dpet-image-90e9.jpeg%3B+filename%2A%3DUTF-8%27%27pet-image-90e9.jpeg&response-content-type=image%2Fjpeg&Expires=1701024195&Signature=FpjimsJp9-sPBqCLdvCdLyca40HisQ-sbk-BEjCfk8eoaFV8grHBWL0LPmc9XYLKFlHW4Cc6EnSOyYbPNsmUUDoPc7O1K49ZkPS1cDm0XwHoE1eRK3P5SFbM5ZtE2hQcFKwQK7KDHwi8plnfW6aZhFiwobCOZQFTaQgqUNMe7KmYhDUVSh7mJUMQhb2zWjVTpz-vguB0Qg~HIv9e3dflAuSw7G5meWowrhdYQQki-lmpdL4EuZbAtG29tP5DzqOLv9NTxg8HnPeyF0pPyoTu9wjbQMux3Jcn0RI2B7UUEpUpMrvaiQYCuf2cwwQbqhZxVGWG7fGDIqQTNX3SCg9FVw__&Key-Pair-Id=APKAQBSFVNAXXGJKQ7XK"
//           alt="Medicine"
//           style={imageStyle}
//         />
//         <CardContent>
//           <Typography variant="h6" component="div">
//             Leo
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Male, Adulthood<br></br>
//             Chennai, TamilNadu
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button variant="contained" color="primary">
//             See more details
//           </Button>
//         </CardActions>
//       </Card>


//     </Container>
//   );
// };

// export default Product;


