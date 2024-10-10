import Image from 'next/image'
import { Company } from "../../services/companies/types";
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

interface CompanyListItemProps {
    company: Company;
}

export const CompanyListItem: React.FC<CompanyListItemProps> = ({ company }) => {
    return (
        <Link href={`/companies/${company.companyId}`}>

            <div className="flex items-center border-b border-slate-200 py-4 px-2 cursor-pointer hover:bg-slate-200">
                <div className="relative w-10 h-10 mr-4 flex justify-center items-center">
                    <Image
                        className="h-auto w-auto object-contain"
                        src={company.iconUrl || company.logoLightUrl}
                        alt={`${company.companyName} logo`}
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-md">{company.displayName}</h3>
                    <p className="text-slate-500 text-sm line-clamp-1 max-w-[200px]">{company.description}</p>
                </div>
                <div className="ml-auto">
                    <ChevronRightIcon className="w-6 h-6 text-slate-500" />
                </div>
            </div>
        </Link>
    );
};
