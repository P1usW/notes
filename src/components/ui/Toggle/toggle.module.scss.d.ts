declare namespace ToggleModuleScssNamespace {
  export interface IToggleModuleScss {
    slider: string;
    switch: string;
  }
}

declare const ToggleModuleScssModule: ToggleModuleScssNamespace.IToggleModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ToggleModuleScssNamespace.IToggleModuleScss;
};

export = ToggleModuleScssModule;
