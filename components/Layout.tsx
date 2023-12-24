import React from "react";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
