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

        <div className="mt-8">TABLE</div>
      </div>
    </PageContainer>
  );
};
