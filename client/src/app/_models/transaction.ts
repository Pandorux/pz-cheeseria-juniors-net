import { TransItem } from "./transitem";

export interface Transaction {
    transactionNo?: number;
    transType: string;
    transDateTime: Date;
    totalItemQuantity: number;
    totalAmount: number;
    items: TransItem[];
}