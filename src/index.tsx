import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import routes from "@src/constant/routes";
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ThemeProvider from "./providers/theme/ThemeProvider";

import './style/index.scss';
import {Provider} from "react-redux";
import store from "@src/store/store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop>
          <NavBar/>
          <Provider store={store}>
            <Suspense fallback={<div>loading...</div>}>
              <Routes>
                {
                  routes.map((page) =>
                    <Route
                      key={page.path}
                      path={page.path}
                      element={<page.element/>}>
                    </Route>
                  )
                }
              </Routes>
            </Suspense>
          </Provider>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
