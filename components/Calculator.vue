<template>
  <div class="calculator">
    <div class="--display">
      <div class="--expression" :class="{'-failed': isError}">
        {{ isError ? 'Error...' : prevExpression }}
      </div>
      <div class="--result">
        {{ currentExpression }}
      </div>
    </div>
    <SimpleCalculator
      v-if="isSimpleMode"
      class="--buttons"
      @answer="answer"
      @error="error"
      @switchMode="switchMode"
    />
    <ScienceCalculator
      v-else
      class="--buttons"
      @answer="answer"
      @error="error"
      @switchMode="switchMode"
    />
  </div>
</template>

<script>
import ScienceCalculator from './ScienceCalculator/ScienceCalculator'
import SimpleCalculator from './SimpleCalculator/SimpleCalculator'

export default {
  name:       'Calculator',
  components: {
    SimpleCalculator,
    ScienceCalculator,
  },
  data() {
    return {
      prevExpression:    '',
      currentExpression: '',
      isError:           false,
      isSimpleMode:      false,
    }
  },
  methods: {
    answer(value) {
      this.prevExpression = value[0]
      this.currentExpression = value[1]
      this.isError = false
    },
    switchMode() {
      this.isSimpleMode = !this.isSimpleMode
    },
    error() {
      this.isError = true
    },

  },
}
</script>

<style lang="scss" scoped>
.calculator {
  background: #f8f8f8;

  .--display {
    position: relative;
    margin: 0 1rem;
    padding: 2rem 0 1rem;
    text-align: right;
    white-space: nowrap;
    height: 70px;
    overflow: hidden;
  }

  .--expression {
    position: absolute;
    top: .5rem;
    right: 0;
    color: #666;

    &.-failed {
      color: #bf0000;
    }
  }

  .--result {
    position: absolute;
    bottom: .5rem;
    right: 0;
    font-size: 24px;
  }

  .--buttons {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }
}
</style>
