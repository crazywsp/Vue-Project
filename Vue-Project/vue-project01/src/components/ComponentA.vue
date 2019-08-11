<template>
  <div>
    <button @click="emitMyEvent">emit</button><br>
    <h3>--------------------</h3>
    <slot name="header">no header(默认显示内容)</slot>
    <slot name="footer">no footer(默认显示内容)</slot>
    <h3>--------------------</h3>
  </div>
</template>

<script>
    export default {
        props: {
          'my-value': [Number, String]
        },
        name: "ComponentA",
        data () {
          return {
            hello: 'I am component A.'
          }
        },
        methods: {
          emitMyEvent () {
            this.$emit('my-event', this.myValue)
          }
        }
    }
</script>

<style scoped>

</style>
