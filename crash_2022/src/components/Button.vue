<script>
export default {
  name: 'ButtonFile',
  props: {
    text: String,
    color: String
  },
  methods: {
    addTask() {
      console.log("Clicked");
    }
  }
};
</script>

<template>
  <button :style="{ background: color }" class="btn" @click="addTask">
    {{ text }}
  </button>
</template>
