import { getCompanies } from '../getCompanies';

describe('Environment Variables', () => {
    it('should load BASE_URL from .env', () => {
        expect(process.env.NEXT_PUBLIC_API_BASE_URL).toBe('http://localhost:3000');
    });
});

describe('getCompanies', () => {
    global.fetch = jest.fn();

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => { });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        consoleErrorMock.mockRestore();
    });

    it('should return companies data on a successful response', async () => {
        const mockCompanies = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: mockCompanies }),
        });

        const response = await getCompanies();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies`);
        expect(response).toEqual({ companies: mockCompanies });
    });

    it('should return an error message if the response is not ok', async () => {
        // Mock the fetch implementation with a failed response
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        const response = await getCompanies();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toEqual({ error: 'HTTP error: 404 Not Found' });
    });

    it('should handle a network error', async () => {
        // Mock the fetch implementation to throw an error
        (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

        const response = await getCompanies();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toEqual({ error: 'An error occurred while fetching data' });
    });
});