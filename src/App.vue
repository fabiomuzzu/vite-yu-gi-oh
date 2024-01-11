<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'appvue',

  components: {
    AppMain,
    AppHeader,
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped lang="scss"></style>
