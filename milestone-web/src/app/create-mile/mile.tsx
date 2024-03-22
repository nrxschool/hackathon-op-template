export default interface IMile {
    name: string,
    projectType: string,
    description: string,
    facebook: string,
    instagram: string,
    twitter: string,
    youTube: string,
    finalValue: number,
    actualValue: number
    qtdTokens: number,
    actualQtdTokens?: number,
    startDate: string,
    endDate: string,
    goal10: string,
    goal35: string,
    goal70: string,
    goal100: string,
    token: string,
    ownerAddress: string,
    contractAddress: string,
}

export interface IOption {
    value: string,
    name: string,
    image?: string
}