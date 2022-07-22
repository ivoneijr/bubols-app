import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icon";
import { NavBar } from "./Navbar";

import { SideBar, Main, Button } from "./styles";

interface Props {
  children: ReactNode;
}

const links = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: "template",
  },
  // {
  //   label: "Questionário",
  //   to: "/questions",
  //   icon: "document",
  // },
  {
    label: "Cadastrar Aluno",
    to: "/users/new",
    icon: "user-add",
  },
];

export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex h-full">
      <SideBar isOpen={isOpen}>
        <Button>
          <Icon
            name={`${isOpen ? "chevron-left" : "chevron-right"}`}
            className="dark:text-dark-main-text hover:text-dark-main-text text-light-main-text w-6 h-6 hover:text-made-green cursor-pointer"
            onClick={() => toggleIsOpen()}
          />
        </Button>

        {isOpen && (
          <div className="mx-4">
            <div className="cursor-pointer flex items-center">
              <div className="text-2xl text-light-main-text tracking-wide mt-4 font-semibold">
                #TEAMBUBOLS
              </div>
            </div>
            <div className="mt-10">
              {links.map((link) => (
                <div key={link.to}>
                  <Link
                    to={link.to}
                    className="text-light-main-text hover:text-dark-main-text text-md flex mt-4 items-center"
                  >
                    <Icon name={link.icon} className="h-8 w-8 mr-2" />
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isOpen && (
          <div className="mt-4 ml-2">
            {links.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className="text-light-main-text hover:text-dark-main-text text-md flex mt-4 items-center"
                >
                  <Icon name={link.icon} className="h-8 w-8" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </SideBar>

      <Main>
        <NavBar />
        {children}
      </Main>
    </section>
  );
};
