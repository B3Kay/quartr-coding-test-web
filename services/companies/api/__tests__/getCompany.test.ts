import { getCompany } from '../getCompany';
import { Company } from '../../../../services/companies/types';

global.fetch = jest.fn();

const mockCompany = {
    companyId: 123,
    companyName: 'Test Company',
    companyCountry: 'Test Country',
    companyTicker: 'TST',
} as Company;

describe('getCompany', () => {
    global.fetch = jest.fn();

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => { });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        consoleErrorMock.mockRestore();
    });


    it('should return company data when the fetch is successful', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockCompany,
        });

        const response = await getCompany(1);
        expect(response).toEqual({ company: mockCompany });
        expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company?id=1`);
    });

    it('should return an error when the fetch response is not ok', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        const response = await getCompany(1);
        expect(response).toEqual({ error: 'HTTP error: 404 Not Found' });
    });

    it('should return an error when fetch throws an exception', async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        const response = await getCompany(1);
        expect(response).toEqual({ error: 'An error occurred while fetching the company' });
    });
});