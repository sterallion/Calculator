<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Bracket',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
    params: {
      type:    Object,
      default: () => {},
    },
  },
  data() {
    return {
      label: this.params.isOpen ? '(' : ')',
    }
  },
  methods: {
    onClick() {
      const value = this.lastControl.get()
      const { isOpen, isClose } = this.params
      const isEmpty = this.isEmpty(value)

      if(
        (isOpen && (isEmpty || this.isSimpleOperator(value) || this.isOpenedBracket(value))) ||
        (isClose && (!this.isSimpleOperator(value)))
      ) {
        isEmpty && this.$emit('deleteLastControl')
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
