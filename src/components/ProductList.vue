<template>
    <div class="productList">
        <table class = "table table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col"> Product Name </th>
                    <th scope="col"> Units Per Carton </th>
                    <th scope="col"> Price Per Carton </th>
                    <th scope="col"> Unit Price </th>
                    <th scope="col"> Price Per 50 Units </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= "product in products" :key="product.id">
                    <td> {{product.productName}} </td>
                    <td> {{product.unitPerCarton}} </td>
                    <td> {{product.pricePerCarton}} </td>
                    <td> {{product.pricePerCarton / product.unitPerCarton}} </td>
                    <td> {{product.pricePerCarton / product.unitPerCarton * 50}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import ShoppingCartDataService from "../services/ShoppingCartDataService";
export default {
    name: "productList",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        retrieveProducts() {
            ShoppingCartDataService.getAll().then(response => {
                this.products = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
        },
        
    },
    mounted() {
            this.retrieveProducts();
        }
}
</script>