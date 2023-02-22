<template>
  <div class="main-container">
    <LargeCardDisplay
      v-for="cardInfo in largeCardSections.slice(0, 1)"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardSections.slice(0, 1)"
      :key="cardInfo.id"
      :smallcardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { smallCardSections, largeCardSections } from "@/assets/data.js";
import LargeCardDisplay from "../../components/LargeCardDisplay.vue";
export default {
  data() {
    return {
      largeCardSections,
      smallCardSections,
    };
  },
  components: { LargeCardDisplay },
};
</script>

<style scoped></style>
