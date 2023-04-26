import React from 'react';

import style from './not-found.module.scss'
import pic from '../../../assets/404 Error with a cute animal-amico.svg'

const NotFound = () => {
  return (
    <div className={style.not_found}>
      <img
        className={style.not_found_pic}
        src={pic}
        alt='404 Not Found'
      />
    </div>
  );
};

export default NotFound;