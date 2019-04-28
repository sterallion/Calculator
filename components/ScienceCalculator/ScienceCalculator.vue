<template>
  <div class="science-calculator">
    <Button class="--button -grey-bg" :colspan="3">
      <Radio v-model="angleType" native-value="deg" class="--radio">
        Deg
      </Radio>
      <Radio v-model="angleType" native-value="rad" class="--radio">
        Rad
      </Radio>
    </Button>

    <Button
      v-for="(button, i) in buttons"
      :key="i"
    >
      <component
        :is="button.component"
        class="--button"
        :class="button.class"
        :params="button.params"
        :last-control="lastControl"
        @clear="clear"
        @deleteLastControl="deleteLastControl"
        @addControl="addControl"
        @switchMode="$listeners.switchMode"
        @answer="answer"
      />
    </Button>
  </div>
</template>

<script>
import calculator from '../../utils/mixins/calculator'
import Number from './../Button/Number'
import Factorial from './../Button/Factorial'
import Log from './../Button/Log'
import Ln from './../Button/Ln'
import Sqrt from './../Button/Sqrt'
import Exponentiation from './../Button/Exponentiation'
import Ans from './../Button/Ans'
import Point from './../Button/Point'
import SwitchMode from './../Button/SwitchMode'
import Plus from './../Button/Plus'
import Minus from './../Button/Minus'
import Multiplication from './../Button/Multiplication'
import Division from './../Button/Division'
import Percent from './../Button/Percent'
import Remove from './../Button/Remove'
import Clear from './../Button/Clear'
import Radio from './../Radio/Radio'
import Button from './../Button/Button'
import Pi from './../Button/Pi'
import E from './../Button/E'
import Bracket from './../Button/Bracket'
import Trigonometry from './../Button/Trigonometry'

export default {
  name:       'ScienceCalculator',
  components: { Button, Radio },
  mixins:     [calculator],
  data() {
    return {
      angleType: 'rad',
    }
  },
  computed: {
    buttons() {
      return [
        {
          component: Clear,
        },
        {
          component: Remove,
        },
        {
          component: Percent,
        },
        {
          component: Division,
        },
        {
          component: Trigonometry,
          params:    {
            label:     'sin',
            angleType: this.angleType,
          },
          class: '-grey-bg',
        },
        {
          component: Bracket,
          params:    {
            isOpen: true,
          },
          class: '-grey-bg',
        },
        {
          component: Bracket,
          params:    {
            isClose: true,
          },
          class: '-grey-bg',
        },

        {
          component: Number,
          params:    {
            label: '7',
          },
        },
        {
          component: Number,
          params:    {
            label: '8',
          },
        },
        {
          component: Number,
          params:    {
            label: '9',
          },
        },
        {
          component: Multiplication,
        },
        {
          component: Trigonometry,
          params:    {
            label:     'cos',
            angleType: this.angleType,
          },
          class: '-grey-bg',
        },
        {
          component: Sqrt,
          class:     '-grey-bg',
        },
        {
          component: Exponentiation,
          class:     '-grey-bg',
        },
        {
          component: Number,
          params:    {
            label: '4',
          },
        },
        {
          component: Number,
          params:    {
            label: '5',
          },
        },
        {
          component: Number,
          params:    {
            label: '6',
          },
        },
        {
          component: Minus,
        },
        {
          component: Trigonometry,
          params:    {
            label:     'tan',
            angleType: this.angleType,
          },
          class: '-grey-bg',
        },
        {
          component: Factorial,
          class:     '-grey-bg',
        },
        {
          component: Pi,
          class:     '-grey-bg',
        },
        {
          component: Number,
          params:    {
            label: '1',
          },
        },
        {
          component: Number,
          params:    {
            label: '2',
          },
        },
        {
          component: Number,
          params:    {
            label: '3',
          },
        },
        {
          component: Plus,
        },
        {
          component: SwitchMode,
          class:     '-grey-bg',
        },
        {
          component: Ln,
          class:     '-grey-bg',
        },
        {
          component: Log,
          class:     '-grey-bg',
        },
        {
          component: E,
        },
        {
          component: Number,
          params:    {
            label: '0',
          },
        },
        {
          component: Point,
        },
        {
          component: Ans,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.science-calculator {
  width: 420px;
  display: flex;

  .--radio {
    margin: 0 .5rem;
  }

  .--button {
    &.-grey-bg {
      background: #fafafa;
    }
  }
}
</style>
