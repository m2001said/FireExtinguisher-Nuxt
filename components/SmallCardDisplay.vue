<template>
  <div class="container">
    <h2 class="header">{{ smallcardsSection.title }}</h2>
    <div class="card-containers">
      <SmallCard
        v-for="card in smallcardsSection.cards"
        :key="card.id"
        :smallCard="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["smallcardsSection"],
};
</script>

<style scoped>
.container {
  padding: 2rem 0;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.card-containers {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
