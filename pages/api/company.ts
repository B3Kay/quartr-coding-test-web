import type { NextApiRequest, NextApiResponse } from "next";
import { Company } from "../../services/companies/types";
import { companyService } from "../../services/companies/companyService";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Company | { error: string }>
) {
    try {
        const { id } = req.query;
        if (typeof id !== 'string') {
            res.status(400).json({ error: "Invalid company ID" });
            return;
        }

        const companyId = parseInt(id, 10);
        const company = companyService.getCompany(companyId);

        if (!company) {
            res.status(404).json({ error: "Company not found" });
            return;
        }

        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
