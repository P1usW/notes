import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import routes from "@src/constant/routes";
import { Route, Routes } from 'react-router';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ThemeProvider from "./providers/theme/ThemeProvider";
import store from "@src/store/store";
import Loading from './components/ui/Loading/Loading';
import AuthProvider from './providers/auth/AuthProvider';
import './firebase/firebase';

import './style/index.scss';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ScrollToTop>
            <NavBar/>
            <Provider store={store}>
              <Suspense fallback={<Loading/>}>
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
      </AuthProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);
