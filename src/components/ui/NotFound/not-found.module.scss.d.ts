declare namespace NotFoundModuleScssNamespace {
  export interface INotFoundModuleScss {
    not_found: string;
    not_found_pic: string;
  }
}

declare const NotFoundModuleScssModule: NotFoundModuleScssNamespace.INotFoundModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotFoundModuleScssNamespace.INotFoundModuleScss;
};

export = NotFoundModuleScssModule;
