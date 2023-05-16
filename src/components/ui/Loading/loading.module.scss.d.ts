declare namespace LoadingModuleScssNamespace {
  export interface ILoadingModuleScss {
    loading: string;
    loading_spinner: string;
    spin: string;
  }
}

declare const LoadingModuleScssModule: LoadingModuleScssNamespace.ILoadingModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoadingModuleScssNamespace.ILoadingModuleScss;
};

export = LoadingModuleScssModule;
