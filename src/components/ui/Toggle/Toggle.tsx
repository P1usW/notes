import React from 'react';

import style from './toggle.module.scss';

interface ToggleProps {
  value: boolean,
  onChange: () => void,
}

const Toggle = ({value, onChange}: ToggleProps) => {
  return (
    <label className={style.switch}>
      <input
        type='checkbox'
        checked={value}
        onChange={onChange}
      />
      <span
        className={style.slider}
      />
    </label>
  );
};

export default Toggle;