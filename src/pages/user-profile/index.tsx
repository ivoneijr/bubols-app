import tw from "tailwind-styled-components";
import { useState } from "react";

import { PageContainer } from "../../components/Pages";

const tabs = [
  { title: "Perfil", index: 0 },
  { title: "Avaliações", index: 1 },
  { title: "Plano", index: 2 },
  { title: "Questionário", index: 3 },
];

interface TabProps {
  current: boolean;
}

export const Tab = tw.div`
  w-28
  mr-2
  text-center
  cursor-pointer
  ${(props: TabProps) =>
    props.current
      ? "border-b-2 border-dark-main-text font-semibold text-dark-main-text"
      : ""}
`;

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <PageContainer title="Ivonei Junior">
      <div className="flex space-x-1">
        <div className="w-3/12 bg-white shadow-sm mr-6 rounded-lg">
          <div className="">
            <div className="flex justify-end">status</div>
          </div>

          <div className="p-4">
            <div>foto</div>
            <div>nome</div>
            <div className="flex">
              <div>avaliações</div>
            </div>
            <hr></hr>
            <div>Aluno desde</div>
            <div>Vencimento</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Address</div>
            <div className="flex">
              <div>insta</div>
              <div>whats</div>
            </div>
          </div>
        </div>

        <div className="w-9/12 bg-white p-4 shadow-sm rounded-lg">
          <div className="flex">
            {tabs.map((tab) => (
              <Tab
                key={tab.index}
                current={selectedTab === tab.index}
                onClick={() => setSelectedTab(tab.index)}
              >
                {tab.title}
              </Tab>
            ))}
          </div>

          <div>CONTENT</div>
        </div>
      </div>
    </PageContainer>
  );
};
