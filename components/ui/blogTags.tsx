// components/blogTags.js
import React from "react";

type children = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: children) => (
  <h1
    className={`text-[48px] font-bold text-white font-blogTitle text-center ${className}`}
  >
    {children}
  </h1>
);

const H2 = ({ children, className }: children) => (
  <h2 className={`text-contrast1 font-blogBody font-semibold ${className}`}>
    {children}
  </h2>
);

const P = ({ children, className }: children) => (
  <p className={`text-white font-blogBody   ${className}`}>{children}</p>
);

const Ul = ({ children, className }: children) => (
  <ul className={`text-white font-blogBody  list-disc pl-5 mb-2 ${className}`}>
    {children}
  </ul>
);

const Li = ({ children, className }: children) => (
  <li className={`text-white font-blogBody ${className}`}>{children}</li>
);

const Span = ({ children, className }: children) => (
  <span className={`text-white font-blogBody  ${className}`}>{children}</span>
);

const BlogTags = {
  H1,
  H2,
  P,
  UL: Ul,
  LI: Li,
  SPAN: Span,
};

export default BlogTags as typeof BlogTags & {
  H1: typeof H1;
  H2: typeof H2;
  P: typeof P;
  Ul: typeof Ul;
  Li: typeof Li;
  Span: typeof Span;
};
