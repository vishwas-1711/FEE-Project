import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // Redirect to the original main.html which has all the exact original functionality
    window.location.href = '/main-original.html';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#141414',
      color: '#fff',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <div style={{textAlign: 'center'}}>
        <h2>Loading ShowStorm...</h2>
        <p>Redirecting to main page...</p>
      </div>
    </div>
  );
};

export default Main;
