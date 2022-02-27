export class Product {

    id: number;
    SKU: number;
    itemName: string;
    brandName: string;    
    price: {};
    mainImage: string;
    sizes: [];
    stockStatus: string;
    color: string;
    description: string;

    constructor(id: number, SKU: number, itemName: string, brandName: string, price : {}, mainImage: string, sizes: [], stockStatus: string, color: string, description: string) {
        this.id = id;
        this.SKU = SKU;
        this.itemName = itemName;
        this.brandName = brandName;
        this.description = description;
        this.price = price;
        this.mainImage = mainImage;
        this.sizes = sizes;
        this.stockStatus = stockStatus;
        this.color = color;
    }
}

