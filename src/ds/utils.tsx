import React from "react";

export function styled(element: string | React.ReactNode, styles: string[]) {
  const stylesStr = `${styles.join(" ")}`;
  return ({ children, ...rest }: React.PropsWithChildren<any>) => {
    switch (element) {
      case "div":
        return (
          <div {...rest} className={stylesStr}>
            {children}
          </div>
        );
      case "span":
        return (
          <span {...rest} className={stylesStr}>
            {children}
          </span>
        );
      case "header":
        return (
          <header {...rest} className={stylesStr}>
            {children}
          </header>
        );
      case "img":
        return (
          <img {...rest} className={stylesStr}>
            {children}
          </img>
        );
      case "main":
        return (
          <main {...rest} className={stylesStr}>
            {children}
          </main>
        );
      case "footer":
        return (
          <footer {...rest} className={stylesStr}>
            {children}
          </footer>
        );
      case "nav":
        return (
          <nav {...rest} className={stylesStr}>
            {children}
          </nav>
        );
      case "a":
        return (
          <a {...rest} className={stylesStr}>
            {children}
          </a>
        );
      case "ul":
        return (
          <ul {...rest} className={stylesStr}>
            {children}
          </ul>
        );
      case "ol":
        return (
          <ol {...rest} className={stylesStr}>
            {children}
          </ol>
        );
      case "li":
        return (
          <li {...rest} className={stylesStr}>
            {children}
          </li>
        );
      case "button":
        return (
          <button {...rest} className={stylesStr}>
            {children}
          </button>
        );
      case "table":
        return (
          <table {...rest} className={stylesStr}>
            {children}
          </table>
        );
      default:
        return <>{children}</>;
    }
  };
}

export function styledComponent(Component: any, styles: string[]) {
  const stylesStr = `${styles.join(" ")}`;

  return ({ children, ...rest }: React.PropsWithChildren<any>) => {
    return (
      <Component {...rest} className={stylesStr}>
        {children}
      </Component>
    );
  };
}
