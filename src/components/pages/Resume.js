
// Resume.js
import React, { useEffect } from 'react';
import '../../App.css';
import '../Resume.css';
import Footer from '../Footer';
import { Button } from '../Button';
export default function Resume() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const downloadLink = 'https://drive.google.com/file/d/1RTFkx5pG3rKWK7wd4ZqK0q-x1pCOUR9L/view?usp=sharing';
  
  return (
    <>
      <h1 className='resume'>RESUME</h1>
      <iframe className='resumePreview' src="https://drive.google.com/file/d/1RTFkx5pG3rKWK7wd4ZqK0q-x1pCOUR9L/preview" title="My Resume" allow="autoplay"></iframe>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px', paddingTop: '30px', maxWidth: '197px', margin: '0 auto' }}>
        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={downloadLink} external>
          DOWNLOAD <i className='fas fa-download' />
        </Button>
      </div>
      <Footer />
    </>
  );
}
