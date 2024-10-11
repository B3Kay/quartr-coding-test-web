import { CompanyListItem } from "../components/companies/CompanyListItem";
import { baseUrl } from "../config";
import { Company } from "../services/companies/types";

type CompaniesResponse = {
  companies?: Company[];
  error?: string;
}


async function getCompanies(): Promise<CompaniesResponse> {
  try {
    const res = await fetch(`${baseUrl}/api/companies`);

    if (!res.ok) {
      return { error: `HTTP error: ${res.status} ${res.statusText}` };
    }

    const data = await res.json();
    return { companies: data.data };
  } catch (error) {
    console.error("Error fetching companies:", error);
    return { error: "An error occurred while fetching data" };
  }
}

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
