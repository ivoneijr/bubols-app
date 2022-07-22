import tw from "tailwind-styled-components";

interface SideBarProps {
  isOpen: boolean;
}

export const SideBar = tw.aside`
  bg-light-bg-primary
  dark:bg-dark-bg-primary
  transition-all duration-200
  min-h-screen
  ${(props: SideBarProps) => (props.isOpen ? "w-64" : "w-12")}
`;

export const Main = tw.main`
  w-full
  dark:bg-dark-bg-secondary
  bg-light-bg-secondary
  transition-all
  duration-200
`;

export const Button = tw.div`
  w-full
  h-auto
  flex
  justify-end
  pt-4
  pr-2
  ${(props: SideBarProps) => (props.isOpen ? "pl-4" : "")}
`;
