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
    <main>
      <h1 className="text-3xl font-bold underline">
        Quartr
      </h1>
      <h2 >Quartr</h2>
      <p >Trending companies</p>
      <div>{companies.map((company) => <CompanyCard key={company.companyId} company={company} />)}</div>
    </main>
  );
}
