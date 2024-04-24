/* tslint:disable:no-unused-variable */
import { SwYearPipe } from './sw-year.pipe';

describe('Pipe: SwYeare', () =>
{
    // unknown
    it('"unknown" should be "inconnue"', () =>
    {
        const pipe = new SwYearPipe();
        const result = pipe.transform('unknown');
        expect(result).toBe('inconnue');
    });

    it('Birth year of "1BBY" should be transformed to "1 Avant la Bataille de Yavin', () =>
    {
        const pipe = new SwYearPipe();
        const result = pipe.transform('1BBY')
        expect(result).toBe('1 Avant la Bataille de Yavin');
    });

    it('Birth year of "655ABY" should be transformed to "655 Après la Bataille de Yavin', () =>
    {
        const pipe = new SwYearPipe();
        const result = pipe.transform('655ABY')
        expect(result).toBe('655 Après la Bataille de Yavin');
    });
});
