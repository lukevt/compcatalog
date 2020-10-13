export type ProductsResponse={
    content:Product[];
    totalPages:number;
}
export type Product= {
    id:number;
    name:string;
    description:string;
    price:number;
    date:string;
    imgUrl:string;
    categories: Category [];
}

export type Category={
    id:number;
    name:string;
}