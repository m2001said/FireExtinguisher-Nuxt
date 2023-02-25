<template>
  <div>
    <h1>Page Not Found</h1>
    <img :src="require('@/assets/images/fe25.jpg')" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50rem; */
  padding: 2rem;
  height: 75vh;
  margin: 0 auto;
  gap: 1rem;
}
h1 {
  font-size: 4rem;
}
img {
  width: 10rem;
  /* margin: 0 auto; */
}
</style>
