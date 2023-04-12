export type TData = {
    Date: string,
    PreviousDate: string,
    PreviousURL: string,
    Timestamp: string,
    Valute: TValute,
}


export type TValute = {
    id: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
}