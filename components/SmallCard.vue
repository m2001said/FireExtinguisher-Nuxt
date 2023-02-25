<template>
  <div class="card-container">
    <nuxt-link :to="`/products/${smallCard.id}`">
      <img
        class="image"
        :src="require(`@/assets/images/${smallCard.image || 'fe1.jpg'}`)"
        alt="fire card"
      />
    </nuxt-link>
    <button
      class="main-btn"
      @click="
        () => {
          addItem(smallCard.id);
        }
      "
    >
      Add
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["smallCard"],
  methods: {
    ...mapMutations(["addItem"]),
  },
};
</script>

<style scoped>
.card-container {
  width: 24%;

  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 175px;
  object-fit: cover;
}
</style>
