<template>
  <div>
    <h1>Add Products</h1>
    <form>
      <div>
        <label for="productId">Product Id:</label>
        <input id="productid" type="text" v-model="productId" required/>
      </div>
      <div>
        <label for="productName`">Product Name:</label>
        <input id="productName" type="text" v-model="productName" required/>
      </div>
      <div>
        <label for="productStock">Product Stock:</label>
        <input id="productStock" type="text" v-model="productStock" required/>
      </div>
      <button @click="addRecord">Add Record</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      productId: "",
      productName: "",
      productStock: 0
    };
  },
  methods: {
    addRecord: function() {
      axios
        .post("http://localhost:3000/addproduct", {
          productId: this.productId,
          productName: this.productName,
          productStock: this.productStock
        })
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style></style>
