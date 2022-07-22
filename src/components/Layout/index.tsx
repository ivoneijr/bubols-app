import { ReactNode, useState } from "react";

import { Icon } from "../Icon";
import { NavBar } from "./Navbar";

import { SideBar, Main, Button } from "./styles";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex h-full">
      <SideBar isOpen={isOpen}>
        <Button>
          <Icon
            name={`${isOpen ? "chevron-left" : "chevron-right"}`}
            className="dark:text-dark-main-text text-light-main-text w-6 h-6 hover:text-made-green cursor-pointer"
            onClick={() => toggleIsOpen()}
          />
        </Button>
      </SideBar>

      <Main>
        <NavBar />
        {children}
      </Main>
    </section>
  );
};
