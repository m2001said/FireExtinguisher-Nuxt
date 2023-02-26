<template>
  <div class="card">
    <nuxt-link :to="`/products/${card.id}`">
      <!-- <img class="image" :src="`@/assets/images/${card.image}`" alt="" /> -->
      <img
        class="image"
        :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)"
        alt="fire card"
      />
      <h3 class="header">{{ card.title }}</h3>
    </nuxt-link>

    <p class="snippet">{{ card.snippet }}</p>
    <button
      class="main-btn"
      @click="
        () => {
          addItem(card.id);
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
  props: ["card"],

  methods: {
    ...mapMutations(["addItem"]),
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  /* height: 100%; */
  height: 400px;
  border: none;
  overflow: hidden;
  padding: 0;
  /* cursor: pointer; */
  position: relative;
}
.image {
  height: 175px;
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
h3,
p {
  padding: 5px;
}
.snippet {
  color: grey;
}
button {
  position: absolute;
  bottom: 0;
}
@media (max-width: 770px) {
  .card {
    width: 100%;
  }
}
</style>
