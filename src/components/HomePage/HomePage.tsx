import React from 'react';

import style from './home.module.scss'
import Card from "@src/components/ui/Card/Card";


const HomePage = () => {



  return (
      <div className={style.home}>
          <Card header={'Список книг'}></Card>
          <Card header={'Список сайтов'}></Card>
          <Card header={'Добавить задачу'}></Card>
          <Card header={'Ещё что то'}></Card>
      </div>
  );
};

export default HomePage;
