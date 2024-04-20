import { extractId } from "./utils";

describe('extractId', () =>
{
    it('should transform ".../film/1/" to "1" ', () =>
    {
        const expected = '1';

        const result = extractId('https://swapi.dev/api/film/1/');

        expect(result).toBe(expected);
    })

    it('should transform ".../foo/bar/555/" to "555" ', () =>
    {
        const expected = '555';

        const result = extractId('https://swapi.dev/api/foo/bar/555/');

        expect(result).toBe(expected);
    })

    it('should transform ".../123/should_ignore_previous_number/555/" to "555" ', () =>
    {
        const expected = '555';

        const result = extractId('https://swapi.dev/api/123/should_ignore_previous_number/555/');

        expect(result).toBe(expected);
    })

    it('should throw error on ".../foo/bar/XXX/', () =>
    {
        const expectedError = new Error('No matching url id');

        try
        {
            extractId('https://swapi.dev/api/foo/bar/XXX/');
        }
        catch (e)
        {
            expect(e).toEqual(expectedError);
        }
    })
});