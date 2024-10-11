import { CompanyListItem } from "../components/companies/CompanyListItem";
import { getCompanies } from "../services/companies/api/getCompanies";
export default async function Home() {
  const response = await getCompanies();

  return (
    <main className="">
      <h1 className="text-5xl font-bold mb-7">
        Quartr
      </h1>

      <h2 className="text-base font-normal text-slate-500">Trending companies</h2>
      <div className="">
        {response.companies && response.companies.length > 0 ? (
          response.companies.map((company) => <CompanyListItem key={company.companyId} company={company} />)
        ) : (
          <p>No companies available at the moment.</p>
        )}
      </div>
    </main>
  );
}
