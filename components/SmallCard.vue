<template>
  <nuxt-link class="card-container" :to="`/products/${smallCard.id}`">
    <img
      class="image"
      :src="require(`@/assets/images/${smallCard.image || 'fe1.jpg'}`)"
      alt="fire card"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: ["smallCard"],
};
</script>

<style scoped>
.card-container {
  width: 24%;
  height: 12.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
