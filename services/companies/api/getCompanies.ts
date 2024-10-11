import { baseUrl } from "../../../config";
import { Company } from "../../../services/companies/types";

type CompaniesResponse = {
    companies?: Company[];
    error?: string;
}

export const getCompanies = async (): Promise<CompaniesResponse> => {
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
