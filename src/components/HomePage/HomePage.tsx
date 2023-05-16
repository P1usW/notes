import { useSelector } from 'react-redux';
import { StoreState } from '@src/store/store';
import Card from "@src/components/ui/Card/Card";

import style from './home.module.scss';

const HomePage = () => {
  const value = useSelector((state: StoreState) => state.user);
  console.log(value);
  
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
