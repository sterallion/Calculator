<template>
  <label
    class="radio"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
  >
    <input
      v-model="model"
      class="--field"
      type="radio"
      :value="nativeValue"
    >
    <span class="--check" />
    <span class="--label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name:  'Radio',
  props: {
    value: {
      type:    [String, Number, Boolean, Function, Object, Array, Symbol],
      default: '',
    },
    nativeValue: {
      type:    [String, Number, Boolean, Function, Object, Array, Symbol],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  .radio {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    .--field {
      position: absolute;
      opacity: 0;
      z-index: -1;

      &:checked + .--check {
        border-color: #fd8921;

        &:before {
          background: linear-gradient(161.7deg, #fd7722 0%, #ff9922 100%);
        }
      }
    }

    .--check {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 1rem;
      height: 1rem;
      border: 1px solid #bbb;
      border-radius: 50%;

      &:before {
        content: "";
        border-radius: 50%;
        width: .5rem;
        height: .5rem;
        background: linear-gradient(180deg, #fff 26.52%, rgba(#fff, 0) 100%);
      }
    }

    .--label {
      padding-left: 0.5em;
      width: 100%;
      font-size: 16px;
    }
  }
</style>
