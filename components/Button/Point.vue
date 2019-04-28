<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:  'Point',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: '.',
    }
  },
  methods: {
    onClick() {
      const value = this.lastControl.get()

      if(
        this.isNumber(value) &&
        !this.isFloat(value)
      ) {
        this.lastControl.add(this.label)
      }
    },
  },
}
</script>

<style scoped>

</style>
