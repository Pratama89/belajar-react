/* eslint-disable react/prop-types */
export default function Header({nama}) {
    return (
    <>
    <h1>Hai {nama ? nama : 'Dental Supply'}!! 🚀</h1>
  
    <img src="public/img/Logo.png" width="200" alt="My Image"/>
    {/* <p onClick={e => {alert('Ok!')}}>Belajar React itu Mudah loh!  </p> */}
    </>
    );
  }