<template>
  <div class="main-container">
    <Hero />
    <!--  :cardsSection="cardInfo" this is the props -->
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardInfo"
      :key="cardInfo.id"
      :smallcardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";

export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  max-width: 1900px;
  /* margin: 0 auto; */
  /* padding: 0 2rem; */
}
.main-container {
  padding: 0 2rem;
}
.flex,
.flex-column {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-column {
  flex-direction: column;
}
.main-btn {
  background: rgb(231, 81, 43);
  width: 100%;
  transition: all 0.3s;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.main-btn:hover {
  background: white;
  border-color: rgb(231, 81, 43);
  color: rgb(231, 81, 43);
}
.card {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.308);
}
</style>
