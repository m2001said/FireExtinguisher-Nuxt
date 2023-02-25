<template>
  <div class="item-container">
    <img :src="require(`@/assets/images/${item.image}`)" alt="" />
    <div class="text-container">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>

      <button
        class="main-btn"
        @click="
          () => {
            deleteItem(item.id);
          }
        "
      >
        Delete
      </button>
    </div>
  </div>
</template>
<!-- @onclick=" --wrong, the true is @click -->
<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],

  methods: {
    ...mapMutations(["deleteItem"]),
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  margin: 3rem 0;
}
.text-container {
  padding: 0 1rem;
}
img {
  width: 17.5rem;
  border-radius: 0.5rem;
  height: 11rem;
}
p {
  font-size: 0.8rem;
  color: grey;
}
</style>
