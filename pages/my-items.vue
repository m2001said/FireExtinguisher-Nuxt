<template>
  <div>
    <div class="container" v-if="myRentals.length > 0">
      <MyItem v-for="rental in myRentals" :key="rental.id" :item="rental" />
    </div>
    <p v-else class="flex">
      There isn't any one of items yet. please add any item,and you will find it
      here
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

<style scoped>
.container {
  margin-top: 7rem;
}
p {
  height: 80vh;
  text-align: center;
  font-size: 2rem;
}
</style>
