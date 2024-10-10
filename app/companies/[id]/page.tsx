import { Company } from "../../../services/companies/types";
import { notFound } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'; // Ensure this is set in your environment variables

const getCompany = async (id: number) => {
    const res = await fetch(`${baseUrl}/api/company?id=${id}`);

    if (!res.ok) {
        console.warn("Unexpected response status:", res.status);
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data as Company;
}

export default async function CompanyPage({ params }: { params: { id: string } }) {
    const companyId = parseInt(params.id, 10);

    const company = await getCompany(companyId);

    if (!company) {
        notFound();
    }

    return <div>
        <h1>{company.companyName}</h1>
    </div>
}