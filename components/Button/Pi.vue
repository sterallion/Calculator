<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Pi',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: 'π',
    }
  },
  methods: {
    onClick() {
      if(this.isOperator(this.lastControl.get())) {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        label: this.label,
        handler() {
          return Math.PI
        },
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
