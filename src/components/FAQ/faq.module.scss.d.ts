declare namespace FaqModuleScssNamespace {
  export interface IFaqModuleScss {
    faq: string;
  }
}

declare const FaqModuleScssModule: FaqModuleScssNamespace.IFaqModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FaqModuleScssNamespace.IFaqModuleScss;
};

export = FaqModuleScssModule;
