import { FC, PropsWithChildren } from "react";

export const InitialLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      Initial Layout
      {children}
    </>
  );
};
