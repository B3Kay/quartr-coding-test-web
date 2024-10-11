import { companiesData } from "./data";

export const companyService = {
    getCompanies: () => {
        return companiesData;
    },
    getCompany: (id: number) => {
        return companiesData.data.find((c) => c.companyId === id);
    }
}