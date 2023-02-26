<template>
  <div class="flex Hero container">
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto
        illum quidem asperiores, cum nisi aperiam eius ipsa sapiente odit!
      </p>
      <button class="button btn">Start Looking</button>
    </div>
    <img
      class="image"
      src="~assets/svg/fire-extinguisher.svg"
      alt="fire extinguisher"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Hero {
  /* height: 50vh; */
  position: relative;
  gap: 2rem;
  padding: 5rem 0;
}
.text-container {
  /* width: 50%; */
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 4rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 30%;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 5px;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 100%;
  font-weight: 700;
  transition: 0.5s;
}
.button:hover {
  width: 21.5rem;
}
@media (max-width: 765px) {
  .Hero {
    /* height: 40vh; */
    flex-direction: column-reverse;
    gap: 0rem;
  }
  .text-container {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .image {
    width: 200px;
    margin-bottom: 1rem;
  }
  .header {
    font-size: 3rem;
  }
}
@media (max-width: 500px) {
  .header {
    font-size: 2rem;
  }
  .snippet {
    font-size: 1rem;
  }
}
</style>
