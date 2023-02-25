<template>
  <div>
    <h3>Customers Reviews</h3>
    <div v-if="$fetchState.pending">Fetching reviewers...</div>
    <div v-else-if="$fetchState.error">An error occurred :(</div>
    <div v-else>
      <ReviewCard
        v-for="reviewer in reviewers.results.filter(
          (man) => man.gender === 'male'
        )"
        :key="reviewer.login.uuid"
        :review="reviewer"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: [],
    };
  },
  async fetch() {
    this.reviewers = await fetch("https://randomuser.me/api/?results=5").then(
      (res) => res.json()
    );
  },
};
</script>

<style lang="scss" scoped></style>
