import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { GiPayMoney } from "react-icons/gi";
import { KpiTeste } from "@/Components/Kpis";


const Home = ({ auth }: PageProps) => {
  return (
    <AuthenticatedLayout>
    <Head title="Dashboard" />

      <div className="p-6">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KpiTeste icon={<GiPayMoney size="50" />} title="Vendas" value="R$ 8.550,50" bgcolor="bg-green-200" textcolor="text-green-700" />
        <KpiTeste icon={<GiPayMoney size="50" />} title="Vendas" value="R$ 8.550,50" bgcolor="bg-green-200" textcolor="text-green-700" />
        <KpiTeste icon={<GiPayMoney size="50" />} title="Vendas" value="R$ 8.550,50" bgcolor="bg-green-200" textcolor="text-green-700" />
        <KpiTeste icon={<GiPayMoney size="50" />} title="Vendas" value="R$ 8.550,50" bgcolor="bg-green-200" textcolor="text-green-700" />

        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Home