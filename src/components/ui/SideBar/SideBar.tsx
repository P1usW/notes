import React, {useState} from 'react';
import BackDrop from "@src/components/ui/BackDrop/BackDrop";

import style from './SideBar.module.scss';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return

  return (
      <>
        <BackDrop/>
        <div className={style.sidebar}>
          123
        </div>
      </>
  );
};

export default SideBar;