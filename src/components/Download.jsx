import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import { useState } from 'react';

const Download = () => {

  const [userEmail, setUserEmail] = useState('');
  const [isSend, setIsSend] = useState(false);

  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Piesakies</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Paziņosim par jaunumiem un iegūsti ātrāku pieeju aplikācijai</p>
        </div>
        <input id='sendMail' placeholder='epasts@gmail.com' value={userEmail} onInput={(event) => {setUserEmail(event.target.value)}}></input>
        <button className={styles.btnPrimary} onClick={() => {setIsSend(true); setUserEmail('')}}>Sūtīt</button>
        {isSend && <h1 id='see-you'>Paldies, uz tikšanos drīz!</h1>}
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download