// Resume.js
import React from 'react';
import '../../App.css';
import '../Resume.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Resume() {
  const downloadLink = 'https://drive.google.com/file/d/1Av5VZAGpnYSRZRtG2JdZY7_C9DM3HboL/view?usp=sharing';

  return (
    <>
      <h1 className='resume'>RESUME</h1>
      <img className='resumeImage' src="images/resume.jpg" alt="Resume" />

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px', paddingTop: '30px', maxWidth: '197px', margin: '0 auto' }}>
        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={downloadLink} external>
          DOWNLOAD <i className='fas fa-download' />
        </Button>
      </div>

      <Footer />
    </>
  );
}
