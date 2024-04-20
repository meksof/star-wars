import { MaybeUnknownPipe } from "./maybe-unknown.pipe";

describe('Pipe: MaybeUnknown', () =>
{
    it('"unknown" should be "inconnue"', () =>
    {
        const pipe = new MaybeUnknownPipe();

        const result = pipe.transform('unknown');

        expect(result).toBe('inconnue');
    });
})