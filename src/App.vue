<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Atti-Mart</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Product List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calculate" class="nav-link">Price Calculator</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
