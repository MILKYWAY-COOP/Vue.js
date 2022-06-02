<template>
    <h3>{{task.text}}</h3>
</template>

<script>
    export default {
        name: 'TaskFile',
        props: {
            task: Object
        }
    }
</script>
