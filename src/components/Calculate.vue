<template>
    <div>
        <label> Product Name  &nbsp;</label>
        <input v-model="productname" >
        &nbsp;&nbsp;  
        <label> Quantity &nbsp; </label> 
        <input v-model="productquantity" > <br/> <br/> 
        <button class ="btn btn-dark" @click = "calculate"> Check Price </button>
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