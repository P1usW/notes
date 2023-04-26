import React from "react";

import HomePage from '../components/HomePage/HomePage';


const Blog = React.lazy(
  () => import(/* webpackChunkName: "Blog" */ "@src/components/Blog/Blog")
);

const Login = React.lazy(
  () => import(/* webpackChunkName: "Login" */ '@src/components/AuthForm/Login')
);

const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ '@src/components/ui/NotFound/NotFound')
);

const Faq = React.lazy(
  () => import(/* webpackChunkName: "Faq" */ '@src/components/FAQ/Faq')
);

const routes = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/blog',
    element: Blog,
  },
  {
    path: '/faq',
    element: Faq,
  },
  {
    path: '*',
    element: NotFound,
  }
]


export default routes