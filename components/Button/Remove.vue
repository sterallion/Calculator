<template>
  <div @click="onClick">
    <img src="/remove.svg">
  </div>
</template>

<script>
export default {
  name:  'Remove',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      const value = this.lastControl.get().slice(0, -1)

      if(this.lastControl.isRemove && value) {
        this.lastControl.set(value)
      } else {
        this.$emit('deleteLastControl')
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
