import React, { PropsWithChildren } from "react";
import { H1, H2 } from "./Headings.style";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({
  level,
  children,
}: PropsWithChildren<HeadingProps>) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    default:
      return <></>;
  }
};
