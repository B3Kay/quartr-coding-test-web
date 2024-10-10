// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CompaniesDataResponse } from "../../services/companies/types";
import { companyService } from "../../services/companies/companyService";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompaniesDataResponse>
) {
  try {
    const companies = companyService.getCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data", data: [] });
  }
}
