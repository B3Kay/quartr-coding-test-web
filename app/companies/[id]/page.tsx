import Link from "next/link";
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from "lucide-react";
import { getCompany } from '../../../services/companies/api/getCompany';


export default async function CompanyPage({ params }: { params: { id: string } }) {
    const companyId = parseInt(params.id);

    const { company, error } = await getCompany(companyId);

    if (error || !company) {
        notFound();
    }

    return <div>
        <Link className="text-blue-500 hover:underline flex items-center mb-6" href="/">
            <ChevronLeftIcon className="w-4 h-4 mr-2" />Go back
        </Link>
        <h1 className="text-2xl font-bold">{company?.companyName}</h1>
    </div>
}