declare namespace NavbarModuleScssNamespace {
  export interface INavbarModuleScss {
    header_nav: string;
    nav: string;
    nav_left: string;
    nav_link: string;
    nav_logo: string;
    nav_right: string;
  }
}

declare const NavbarModuleScssModule: NavbarModuleScssNamespace.INavbarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarModuleScssNamespace.INavbarModuleScss;
};

export = NavbarModuleScssModule;
