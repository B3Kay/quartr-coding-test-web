import { Company } from "../../services/companies/types";

interface CompanyCardProps {
    company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="company-card">
            <img style={{ maxHeight: "64px", width: "auto" }} src={company.logoLightUrl} alt={`${company.companyName} logo`} />
            <h3>{company.displayName}</h3>
            <p>{company.description}</p>
        </div>
    );
};
