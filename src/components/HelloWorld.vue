//src/components/HelloWorld.vue
<template>
  <div>
    <Cards />
  </div>
</template>

<script>
  import Cards from './Cards.vue'
  export default {
    name:'cards',
    components: {
      Cards
    },
    data() {
      return {

      };
    },
  };
</script>
<style scoped>
</style>
view raw