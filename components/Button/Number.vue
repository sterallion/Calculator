<template>
  <div class="number" @click="onClick">
    {{ params.label }}
  </div>
</template>

<script>
export default {
  name:         'Number',
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
  methods: {
    onClick() {
      if(this.isEmpty(this.lastControl.get())) {
        this.lastControl.set(this.params.label)
      } else if(this.lastControl.add) {
        this.lastControl.add(this.params.label)
      } else {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        isRemove: true,
        v1:       this.params.label,
        set(value) {
          this.v1 = value
        },
        add(value) {
          this.v1 += value
        },
        get() {
          return this.v1
        },
        handler() {
          return this.get()
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.number {
  color: #4f5157;
}
</style>
