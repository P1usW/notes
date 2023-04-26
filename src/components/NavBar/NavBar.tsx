import {Link} from "react-router-dom";
import React, {useContext} from 'react';
import Toggle from "../ui/Toggle/Toggle";
import themes from "../../constant/themes";
import ThemeContext from "../../providers/theme/ThemeContext";

import style from './navbar.module.scss';
import SideBar from "@src/components/ui/SideBar/SideBar";

const NavBar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header className={style.header_nav}>
      <nav className={style.nav}>
        <div className={style.nav_left}>
          <Link className={style.nav_link} to='/'>
            Notes
          </Link>
          <Link className={style.nav_link} to='/blog'>
            Blog
          </Link>
          <Link className={style.nav_link} to='/profile'>
            Profile
          </Link>
          <Link className={style.nav_link} to='/faq'>
            FAQ
          </Link>
        </div>
        <div className={style.nav_right}>
          <Toggle
            value={theme === themes.light}
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark)
              if (theme === themes.dark) setTheme(themes.light)
            }}
          />
          <Link className={style.nav_link} to='/login'>
            Login
          </Link>
        </div>
        <SideBar></SideBar>
      </nav>
    </header>
  );
};

export default NavBar;