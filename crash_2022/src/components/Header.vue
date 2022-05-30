<script>
import Button from './Button';
export default {
  name: 'HeaderFile',
  props: {
    title: String
  },
  components: {
    Button
  }
};
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add task" color="green" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
