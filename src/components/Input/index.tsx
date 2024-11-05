"use client"
import { Input as Layout } from "./Layout";
import { IInput } from "./data";

export const Input = (props: IInput) => {

  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
