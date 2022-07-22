import tw from "tailwind-styled-components";
import { Icon } from "../Icon";

interface Props {
  label: string;
  icon: string;
  number: string | number;
}

const Wrap = tw.div`
  bg-white
  shadow-lg
  w-2/12
  h-24
  p-4
  mr-4
  border-l-2
  border-light-bg-primary
  hover:border-slate-400
  hover:scale-110
  transition-all
  cursor-pointer
`;

export const Card = ({ icon, label, number }: Props) => {
  return (
    <Wrap>
      <div className="flex items-center ">
        <Icon
          name={icon}
          className="w-12 h-12 text-light-bg-primary hover:text-slate-400"
        />
        <div className="ml-8">
          <p className="text-3xl font-semibold">{number}</p>
          <span className="text-sm font-semibold">{label}</span>
        </div>
      </div>
    </Wrap>
  );
};
