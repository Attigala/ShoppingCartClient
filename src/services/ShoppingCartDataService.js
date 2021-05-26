import http from "../http-common";

class ShoppingCartDataService{
    //Retrieve all products from the database
    getAll(){
        return http.get("/product/all");
    }
    //Given the product name and the units calculate and returns the final price
    getPriceForProductAndQty(productname,unitcount){
        return http.get(`/product?productname=${productname}&unitcount=${unitcount}`);
    }
}
export default new ShoppingCartDataService();