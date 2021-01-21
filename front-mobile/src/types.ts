export type Order = {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    products: Product[];
    total: number;
}
export type Product = {  
    id: 7;
    name: string;
    price : number;
    description: string;
    imageUri : string;
}