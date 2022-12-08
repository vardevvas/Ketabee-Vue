<template>
  <h1>Welcome To Ketabee</h1>
  <button @click="$router.push('login')">Login</button>
  <button @click="$router.push('registration')">Sign Up</button>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

button {
  /* Green */
  text-align: center;
  text-shadow: none;
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  width: 20%;
  margin: 10px;
  padding: 10px 6px;
  box-sizing: border-box;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
