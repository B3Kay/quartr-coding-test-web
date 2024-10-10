import { CompanyCard } from "../components/companies/CompanyCard";
import { Company } from "../services/companies/types";

async function fetchCompanies() {
  const res = await fetch("http://localhost:3000/api/companies");
  if (!res.ok) {
    console.warn("Unexpected response status:", res.status);
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data as Company[];
}




export default async function Home() {
  const companies = await fetchCompanies();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-7">
        Quartr
      </h1>

      <h2 className="text-base font-normal text-slate-500">Trending companies</h2>
      <div className="">
        {companies.map((company) => <CompanyCard key={company.companyId} company={company} />)}
      </div>
    </main>
  );
}
