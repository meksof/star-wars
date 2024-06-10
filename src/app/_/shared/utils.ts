
export function extractId (url: string): string
{
    const regex: RegExp = /[a-z]+\/([0-9]+)\/$/;

    const match: RegExpMatchArray | null = url.match(regex);

    if (match === null)
    {
        throw new Error('No matching url id')
    }

    return match[1];


}

export const isDefined = <T>(value: T | undefined ): value is T => value !== undefined
export const isNotNull = <T>(value: T | null): value is T => value !== null;