export interface HomeContent {
    companyId: number;
    companyName: string;
    companyLogo: string;
    menus: [
        {
            id: number,
            name: string,
            category: string,
            description: string,
            availableQuantity: number,
            price: any,
            image: string
        }
    ]
}