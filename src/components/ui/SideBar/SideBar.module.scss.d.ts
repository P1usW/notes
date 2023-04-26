declare namespace SideBarModuleScssNamespace {
  export interface ISideBarModuleScss {
    sidebar: string;
  }
}

declare const SideBarModuleScssModule: SideBarModuleScssNamespace.ISideBarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SideBarModuleScssNamespace.ISideBarModuleScss;
};

export = SideBarModuleScssModule;
