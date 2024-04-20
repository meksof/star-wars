
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