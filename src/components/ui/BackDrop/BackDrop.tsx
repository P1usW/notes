import React from 'react';
import {createPortal} from "react-dom";

import style from './BackDrop.module.scss'

const BackDrop = () => {

  return createPortal(
    <div
      className={style.backdrop}
    />,
    document.body
  )
};

export default BackDrop;