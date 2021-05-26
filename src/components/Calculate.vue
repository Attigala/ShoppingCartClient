<template>
    <div>
        <label> Product Name </label>
        <input v-model="productname" >
        <label> Quantity </label>
        <input v-model="productquantity" >
        <button @click = "calculate"> Check Price </button>
    </div>
    <div class="priceView">
        {{price}}
    </div>
</template>
<script>
import ShoppingCartDataService from "../services/ShoppingCartDataService";
export default {
    name: "priceView",
    data() {
        return {
            price: "",
            productname: "",
            productquantity: "",
            errorMessage: ""
        };
    },
    methods: {
        calculate() {
            ShoppingCartDataService.getPriceForProductAndQty(this.productname, this.productquantity).then(response => {
                this.price = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
        },
        
    }
}
</script>