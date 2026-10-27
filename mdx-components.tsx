import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="article-heading" {...props} />,
    p: (props) => <p className="article-paragraph" {...props} />,
    ...components
  };
}
