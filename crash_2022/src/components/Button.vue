<script>
    export default {
        name: 'buttonComp',
        props: {
            text: String,
            color: String
        }
    }
</script>

<template>
    <button :style='{background:color}' class="btn">{{text}}</button>
</template>