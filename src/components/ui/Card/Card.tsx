import React from 'react';

import style from './card.module.scss';

interface CardProps {
  header: string,
  children?: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className={style.card}>
      <h2 className={style.card_header}>
        {props.header}
      </h2>
      {props.children}
    </div>
  );
};

export default Card;