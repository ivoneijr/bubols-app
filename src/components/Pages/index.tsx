import tw from "tailwind-styled-components";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Wrap = tw.div`
  px-4
`;

const Title = tw.h2`
  font-semibold
  text-2xl
  dark:text-slate-300
`;

const Content = tw.div`
  mt-6
`;

export const PageContainer = ({ title, children }: Props) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrap>
  );
};
