<template>
  <div>
    <h1>Products Query Page</h1>
    <button @click="pullData">Pull Data</button>
    <div v-if="loading" class="loadingspinner"></div>
    <table>
      <tr>
        <th>ID</th>
        <th>Mehsul</th>
        <th>Stok</th>
      </tr>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.productname }}</td>
        <td>{{ item.stock }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      products: "",
      loading: false
    };
  },
  methods: {
    pullData: function() {
      this.loading = true;
      function delayer() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      }
      delayer()
        .then(result => {
          axios
            .get("http://localhost:3000/getall")
            .then(result => {
              this.loading = false;
              this.products = result.data;
            })
            .catch(e => {
              this.error.push(e);
            });
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

<style>
table,
th,
td {
  padding: 5px;
  border: 1px solid #000;
  border-collapse: collapse;
}
body {
  background-color: #f9f9f9;
  margin-top: 25px;
}

.loadingspinner {
  margin: 5px;
  pointer-events: none;
  width: 0.8em;
  height: 0.8em;
  border: 0.3em solid transparent;
  border-color: #eee;
  border-top-color: #3e67ec;
  border-radius: 50%;
  -webkit-animation: loadingspin 1s linear infinite;
  animation: loadingspin 1s linear infinite;
}

@-webkit-keyframes loadingspin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingspin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
