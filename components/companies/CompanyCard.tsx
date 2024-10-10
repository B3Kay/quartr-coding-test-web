import Image from 'next/image'
import { Company } from "../../services/companies/types";

interface CompanyCardProps {
    company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="company-card flex items-center my-4 border-b border-slate-200 pb-4">
            <Image
                className="max-h-10 max-w-10 w-auto mr-4"
                src={company.iconUrl || company.logoLightUrl}
                alt={`${company.companyName} logo`}
                width={40}
                height={40}
            />
            <div className="flex-1">
                <h3 className="m-0  text-md ">{company.displayName}</h3>
                <p className="text-slate-500 text-sm line-clamp-1 max-w-[200px]">{company.description}</p>
            </div>
            <div className="ml-auto">
                <span className="text-2xl">→</span>
            </div>
        </div>
    );
};
