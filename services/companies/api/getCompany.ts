import { baseUrl } from "../../../config";
import { Company } from "../../../services/companies/types";

type CompanyResponse = {
    company?: Company;
    error?: string;
}

export const getCompany = async (id: number): Promise<CompanyResponse> => {
    try {
        const res: Response = await fetch(`${baseUrl}/api/company?id=${id}`);

        if (!res.ok) {
            return { error: `HTTP error: ${res.status} ${res.statusText}` };
        }
        const data = await res.json();
        return { company: data };
    } catch (error) {
        console.error('Error fetching company:', error);
        return { error: 'An error occurred while fetching the company' };
    }
}