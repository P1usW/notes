declare namespace BackDropModuleScssNamespace {
  export interface IBackDropModuleScss {
    backdrop: string;
  }
}

declare const BackDropModuleScssModule: BackDropModuleScssNamespace.IBackDropModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BackDropModuleScssNamespace.IBackDropModuleScss;
};

export = BackDropModuleScssModule;
