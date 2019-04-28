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
      if(this.isNumber(this.lastControl.get()) && !this.isFloat(this.lastControl.get())) {
        this.lastControl.add(this.label)
      }
    },
  },
}
</script>

<style scoped>

</style>
