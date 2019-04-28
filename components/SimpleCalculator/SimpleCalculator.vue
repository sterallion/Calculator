<template>
  <div class="simple-calculator">
    <Button
      v-for="(button, i) in buttons"
      :key="i"
    >
      <component
        :is="button.component"
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
import Button from './../Button/Button'

export default {
  name:       'SimpleCalculator',
  components: { Button },
  mixins:     [calculator],
  computed:   {
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
.simple-calculator {
  width: 240px;
  display: flex;
}
</style>
