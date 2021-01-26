import { Address } from "cluster";

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: Address;
}

export interface IOrder {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shiptToAddress: Address;
    deliveryMethod: string;
    shippingPrice: number;
    ordertItems: IOrderItem[];
    subtotal: number;
    total: number;
    status: string;
}

export interface IOrderItem {
    productId: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;
}
