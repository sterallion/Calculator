<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Multiplication',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: '*',
    }
  },
  methods: {
    onClick() {
      if(
        !this.isSimpleOperator(this.lastControl.get()) &&
        !this.isOpenedBracket(this.lastControl.get())
      ) {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        label: this.label,
        get() {
          return this.label
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
