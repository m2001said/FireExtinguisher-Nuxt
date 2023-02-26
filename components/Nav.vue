<template>
  <nav class="flex">
    <nuxt-link to="/" class="logo">Fire Extinguisher</nuxt-link>
    <div class="nav-links">
      <nuxt-link to="/products">Products</nuxt-link>
      <nuxt-link to="/my-items"
        >My Items

        <span>{{ allItems }}</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["myRentals"]),
    allItems() {
      return this.myRentals.length;
    },
  },
};
</script>

<style scoped>
nav {
  gap: 2rem;
  background: black;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.logo {
  color: rgb(231, 81, 43);
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 800;
}
nav a {
  color: white;
  font-size: 1.4rem;
  padding: 0 5px;
  text-decoration: none;
  transition: all 0.3s;
}
nav a:hover {
  color: rgb(231, 81, 43);
}
.nuxt-link-exact-active {
  color: rgb(231, 81, 43);
}
span {
  background: rgb(231, 81, 43);
  color: white;
  width: 30px;
}
@media (max-width: 500px) {
  nav {
    padding: 1rem 3px;
  }
  nav a {
    font-size: 1.1rem;
  }
  .logo {
    width: 100px;
    /* height: 50px; */

    line-height: 1.1;
  }
}
</style>
