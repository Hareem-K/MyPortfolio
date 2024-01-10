// Resume.js
import React from 'react';
import '../../App.css';
import '../Resume.css';
import Footer from '../Footer';
import { Button } from '../Button';

export default function Resume() {
  const downloadLink = 'https://drive.google.com/file/d/1ixhcyEU9Gox2NyGiQ4Blmn77Le0vEerY/view?usp=sharing';

  return (
    <>
      <h1 className='resume'>RESUME</h1>
      <img className='resumeImage' src="images/resume.png" alt="Resume" />

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px', paddingTop: '30px', maxWidth: '197px', margin: '0 auto' }}>
        <Button className='btns' buttonStyle='btn--download' buttonSize='btn--large' linkTo={downloadLink} external>
          DOWNLOAD <i className='fas fa-download' />
        </Button>
      </div>

      <Footer />
    </>
  );
}
