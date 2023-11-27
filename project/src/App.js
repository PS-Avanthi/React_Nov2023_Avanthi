import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Contact from './components/Contact';
import Pet from './components/Pet';
import Product from './components/Product';
// import Hero from './components/Hero';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
<Header />
<Routes>
  <Route path="/" element={<Hero/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/SignUp" element={<Registration/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Pet" element={<Pet/>}/>
  <Route path="/Product" element={<Product/>}/>
  <Route path="/Hero" element={<Hero/>}/>
  

</Routes>

<Footer />
        </div>
        </Router>
  );
}

export default App;

// import React from 'react';
// import Hero from './components/Hero';
// import Contact from './List/Contact';
// import Product from './List/Product';
// import About from './List/About';
// import Home from './components/Home';
// import Pet from './List/Pet';
// import Header from './components/Header';
// function App() {
//   return (
//     <div className="App">
//     {/* <Contact/> */}
//     {/* <About/> */}
//     {/* < Product/> */}
//     {/* <Home/> */}
//     {/* <Hero/> */}
//     {/* <Pet/> */}
//     <Header/>
     
//     </div>
//   );
// }
// export default App;