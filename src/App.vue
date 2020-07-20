<template>
  <div>
    <h1>Ambar idareetme programi</h1>
    <router-link :to="{ name: 'home' }" tag="button" active-class="active" exact
      >Go to Home</router-link
    >
    <router-link
      :to="{ name: 'ViewProducts' }"
      active-class="active"
      tag="button"
      exact
      >Go to View Products Page</router-link
    >
    <router-link
      :to="{ name: 'EditProducts' }"
      tag="button"
      active-class="active"
      exact
      >Go to Edit Products Page</router-link
    >
    <router-link
      :to="{ name: 'AddProducts' }"
      tag="button"
      active-class="active"
      exact
      >Add Products</router-link
    >
    <router-link
      class="registerbtn"
      :to="{ name: 'Register' }"
      tag="button"
      active-class="active"
      exact
    >
      Register
    </router-link>
    <router-link
      class="loginbtn"
      :to="{ name: 'Login' }"
      tag="button"
      active-class="active"
      exact
    >
      Login
    </router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.registerbtn,
.loginbtn {
  background-color: aquamarine;
}
.registerbtn:hover,
.loginbtn:hover {
  background-color: rgb(104, 209, 174);
}
.active {
  border-bottom: 4px solid blue;
}
button {
  font-size: 14px;
  cursor: pointer;
  border: 1px solid blue;
  padding: 3px;
  background-color: rgb(255, 232, 127);
}
button:hover {
  background-color: rgb(218, 198, 109);
}
</style>
