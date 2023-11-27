import { AppBar,Tab,Tabs, Typography,Toolbar,Button,useMediaQuery,useTheme} from '@mui/material'
import React, {useState} from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';
import Drawercomp from './Drawercomp';
const PAGES =["Products","Services","Aboutus","Contactus"];
const Header =()=>{
    const[value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{background:"#f09928"}}> 
                <Toolbar>
                    <PetsIcon/>
                    {
                        isMatch ? (
                        <>
                        <Typography sx={{fontSize: '1.5rem',paddingLeft: '10%'}}> PET ADOPTION PLATFORM</Typography>
                        <Drawercomp/>
                        </>

                        ) : (
                            <>
                                 <Tabs 
                         textColor="inherit"
                     value={value}
                      onChange={(e,value)=> setValue(value)} 
                      indicatorColor="secondary">
                        {
                            // PAGES.map((page,index) => (
                            //     <Tab key={index} label ={page}/>
                               
                            // ))
                        }
                        
                    <Button component={Link} to={"/Hero"} sx={{marginLeft:'auto',color:'white'}} >Home{" "}</Button>
                    <Button component={Link} to={"/About"} sx={{marginLeft:'auto',color:'white'}} >About us{" "}</Button>
                    <Button component={Link} to={"/Contact"} sx={{marginLeft:'auto',color:'white'}} >Contact{" "}</Button>
                    <Button component={Link} to={"/Pet"} sx={{marginLeft:'auto',color:'white'}} >What you can Do?{" "}</Button>
                    <Button component={Link} to={"/Product"} sx={{marginLeft:'auto',color:'white'}} >Pets{" "}</Button>
                        
                    </Tabs>
                    <Button component={Link} to={"/Login"} sx={{marginLeft:'auto'}} variant="contained">Login{" "}</Button>
                    <Button component={Link} to={"/SignUp"} sx={{marginLeft:"10px"}} variant="contained">SignUp{" "} </Button>
                            </>
                        )
                    }
    
                    
                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}  
export default Header; 