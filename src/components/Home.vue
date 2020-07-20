<template>
<div>
    <h1>Home Page</h1>
    <router-link :to="{name: 'About'}" tag="button">About</router-link>
    <router-link :to="{name: 'Contact'}" tag="button">Contact</router-link>
</div>
</template>

<script>
export default {
}

</script>

<style>

</style>