export default {
  data() {
    return {
      prevExpression:    [],
      currentExpression: [],
    }
  },
  computed: {
    lastControl() {
      return this.currentExpression.slice(-1)[0]
    },
  },
  methods: {
    answer() {
      try{
        const expression = this.currentExpression.reduce((memo, current) => {
          memo.push(current.handler ? current.handler(memo) : current.get())
          return memo
        }, [])

        // Выполняем выражение
        /* eslint-disable-next-line */
        let result = eval(expression.join(' '))
        // Сокращаем дробную часть до 10 знаков
        result = result.toFixed(10)
        // Убираем лишние нули
        result = parseFloat(result)
        // Приводим к строке
        result = result.toString()

        this.prevExpression = [...this.currentExpression]
        this.prevExpression.push(this.createControl('='))

        this.currentExpression = [this.createControl(result)]
      } catch(e) {
        this.$emit('error')
      }
    },
    expressionToString(expression) {
      return expression.map(item => item.get()).join(' ')
    },
    prevExpressionToString() {
      return this.expressionToString(this.prevExpression)
    },
    currentExpressionToString() {
      return this.expressionToString(this.currentExpression)
    },
    addControl(control) {
      this.currentExpression.push(control)
    },
    deleteLastControl() {
      this.currentExpression.pop()
    },
    clear() {
      this.currentExpression = []
    },
    createControl(v) {
      return {
        isRemove: true,
        v1:       v.toString(),
        set(value) {
          this.v1 = value
        },
        add(value) {
          this.v1 += value
        },
        get() {
          return this.v1
        },
      }
    },
  },
  watch: {
    currentExpression: {
      handler(arr) {
        if(!arr.length) {
          this.prevExpression = []

          arr.push(this.createControl(0))
        }

        this.$emit('answer', [
          this.prevExpressionToString(),
          this.currentExpressionToString(),
        ])
      },
      deep:      true,
      immediate: true,
    },
  },
}
