import Link from "next/link";
import { baseUrl } from "../../../config";
import { Company } from "../../../services/companies/types";
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from "lucide-react";


type CompanySuccessful = {
    company: Company;
    error: null;
}

type CompanyError = {
    company: null;
    error: string;
}

const getCompany = async (id: number) => {
    const res = await fetch(`${baseUrl}/api/company?id=${id}`);

    if (!res.ok) {
        return { company: null, error: 'Company not found' } as CompanyError;
    }
    const data = await res.json();
    return { company: data, error: null } as CompanySuccessful;
}

export default async function CompanyPage({ params }: { params: { id: string } }) {
    const companyId = parseInt(params.id);

    const response = await getCompany(companyId);

    if (response.error || !response.company) {
        notFound();
    }

    return <div>
        <Link className="text-blue-500 hover:underline flex items-center mb-6" href="/">
            <ChevronLeftIcon className="w-4 h-4 mr-2" />Go back
        </Link>
        <h1 className="text-2xl font-bold">{response.company.companyName}</h1>
    </div>
}