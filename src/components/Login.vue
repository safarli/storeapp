<template>
<div>
   <h1>Login Page</h1>
   <form>
      <div>
         <label for="username">Username:</label>
         <input type="text" id="username" placeholder="enter your username">
      </div>
      <div>
         <label for="password">Password:</label>
         <input type="text" id="password" placeholder="enter your password">
      </div>
      <button @click="loginuser">Log in</button>
   </form>
</div>
</template>

<script>
export default {
   data: function(){
      return {}
   },
   methods: {
      loginuser: function(evn){
         evn.preventDefault();
      }
   }
}
</script>

<style>

</style>