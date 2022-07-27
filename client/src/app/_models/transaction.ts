import { TransItem } from "./transitem";

export interface Transaction {
    transactionNo: number;
    transType: string;
    totalItemQuantity: number;
    totalAmount: number;
    transItems: TransItem[];
}