import { TextField } from "@mui/material";
import { Card } from "../../components/Card";
import { PageContainer } from "../../components/Pages";

export const Dashboard = () => {
  return (
    <PageContainer title="Dashboard">
      <div className="flex mb-10">
        <Card label="Alunos" number="120" icon="user" />
        <Card label="Avaliações" number="260" icon="clipboard" />
        <Card label="Cidades" number="67" icon="location" />
      </div>

      <div className="bg-white p-4">
        <h1 className="text-xl font-semibold mb-4">Alunos</h1>

        <TextField fullWidth label="Nome" id="fullWidth" />

        <div className="mt-8">
          <div className="ouverflow-auto mt-2 mb-12">
            <table className="table-fixed w-full">
              <thead className="border-b-2 border-gray-300">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Nome
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Cidade
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Idade
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Peso
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Altura
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Objetivo
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Aluno desde
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Vencimento
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-600 bg-gray-50 py-3 pl-4 whitespace-nowrap overflow-hidden overflow-ellipsis"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 cursor-pointer">
                <tr className="hover:bg-slate-100">
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Ivonei Junior
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Porto Alegre
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    32
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    135
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    1,90
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Emagrecimento
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    01/08/2022
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    01/08/2023
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Visualisar
                  </td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Ivonei Junior
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Porto Alegre
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    32
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    135
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    1,90
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Emagrecimento
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    01/08/2022
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    01/08/2024
                  </td>
                  <td className="text-sm text-primary whitespace-nowrap overflow-hidden overflow-ellipsis py-3 px-4">
                    Visualisar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
