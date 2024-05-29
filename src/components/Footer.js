import React from 'react';

const Footer = () => {
  return (
    <footer className='footer mt-3 py-1'>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} Naveen Shukla & CWH. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
