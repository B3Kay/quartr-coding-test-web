import { Inter } from "@next/font/google";
import { Company } from "../services/companies/types";
const inter = Inter({ subsets: ["latin"] });


async function fetchCompanies() {
  const res = await fetch("http://localhost:3000/api/companies");
  if (!res.ok) {
    console.warn("Unexpected response status:", res.status);
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data as Company[];
}


interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="company-card">
      <img style={{ maxHeight: "64px", width: "auto" }} src={company.logoLightUrl} alt={`${company.companyName} logo`} />
      <h3>{company.displayName}</h3>
      <p>{company.description}</p>
    </div>
  );
};


export default async function Home() {
  const companies = await fetchCompanies();

  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      <div>{companies.map((company) => <CompanyCard key={company.companyId} company={company} />)}</div>
    </main>
  );
}
