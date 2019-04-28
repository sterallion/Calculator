<template>
  <div @click="onClick">
    <img src="/remove.svg">
  </div>
</template>

<script>
export default {
  name:         'Remove',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      const value = this.lastControl.get()
      const newValue = this.isNumber(value) && this.lastControl.get().slice(0, -1)

      if(this.lastControl.isRemove && newValue) {
        this.lastControl.set(newValue)
      } else {
        this.$emit('deleteLastControl')
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
