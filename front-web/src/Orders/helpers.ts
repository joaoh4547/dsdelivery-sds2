import { Product } from './Types';
export const checkIsSelected = (selectedProducts: Product[],product: Product) =>{
    return selectedProducts.some(item => item.id === product.id);
}
export const  formatPrice = (price:number) =>{
    const formarter = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
        minimumFractionDigits:2

    })

    return formarter.format(price)
}