import { useState } from 'react'
import { Outlet, Link} from "react-router-dom";

import './App.css';

import { Title } from './components/pages/Header.component';
// import { Menue } from './components/pages/menue.component';


function App() {
 
  return (
    <>
      <Title/>
       
     
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '50px', width: '50%', margin: '0 auto' }}>
        <Link to={''} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Home Page</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        <Link to={'/AboutPage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>About</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        <Link to={'/Login'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Contact</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        
        <Link to={'./Order'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>for orders</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        <Link to={'./meetting'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>for meetting</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        <Link to={'./LoginPage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Log in to admin</Link>
        <div style={{ width: '1px', height: '100%', backgroundColor: 'black', margin: '0 10px' }}></div>
        <Link to={'./massage'} style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Sending a message to the manager</Link>
      </nav>
       <div>
          {/* לכאן יכנס התוכן של הניווט */}
          <Outlet />
        </div>
    </>
  )
}


////////////////////////////////////////////////////

// function App() {
//   return (
//     <>
//       <Title />
//       <nav
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'black',
//           height: '50px',
//           width: '50%',
//           margin: '0 auto',
//         }}
//       >
//         <Link
//           to={''}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           Home Page
//         </Link>
//         <div
//           style={{
//             width: '1px',
//             height: '100%',
//             backgroundColor: 'white',
//             margin: '0 10px',
//           }}
//         ></div>
//         <Link
//           to={'/AboutPage'}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           About
//         </Link>
//         <div
//           style={{
//             width: '1px',
//             height: '100%',
//             backgroundColor: 'white',
//             margin: '0 10px',
//           }}
//         ></div>
//         <Link
//           to={'/Login'}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           Contact
//         </Link>
//         <div
//           style={{
//             width: '1px',
//             height: '100%',
//             backgroundColor: 'white',
//             margin: '0 10px',
//           }}
//         ></div>
//         <Link
//           to={'./Order'}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           for orders
//         </Link>
//         <div
//           style={{
//             width: '1px',
//             height: '100%',
//             backgroundColor: 'white',
//             margin: '0 10px',
//           }}
//         ></div>
//         <Link
//           to={'./meeting'}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           for meeting
//         </Link>
//         <div
//           style={{
//             width: '1px',
//             height: '100%',
//             backgroundColor: 'white',
//             margin: '0 10px',
//           }}
//         ></div>
//         <Link
//           to={'./LoginPage'}
//           style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}
//         >
//           Log in to admin
//         </Link>
//       </nav>
//       <div>
//         {/* This is where the content of the navigation will go */}
//         <Outlet />
//       </div>
//     </>
//   );
// }






 
export default App
