## `useState` and `useRef`

Hooks 函数式组件无法保存状态，所以有 `use...` 做帮助。

### `useRef` 有什么不同

- 可用于获取 DOM 实例
- 修改不会触发重新渲染视图——修改 state 会再运行一次 hooks
- 设置数据是同步的——setState 是异步的

### `useRef` 什么时候用

所以，如果如果值不是在视图上使用时，可以选择 `useRef`

### `useRef` and `var`, `let`, `const`

在函数外声明变量也可以做到存储数据，但是在多次调用组件的情况下，会有一个作用域的问题

```js
// defined a variable outside function component
let countCache = 0

function Counter() {
  const [count, setCount] = useState(0)

  const countRef = useRef(count)

  useEffect(() => {
    // Update count on every render
    countCache = count
    countRef.current = count
  })

  return (
    <div>
      <button onClick={() => setCount((p) => p + 1)}>click me</button>
      <h3>count: {count}</h3>
      <h3>variable: {countCache}</h3>
      <h3>reference: {countRef.current}</h3>
    </div>
  )
}

export default function App() {
  return (
    <FlexBox>
      <FlexBox>
        <Counter />
      </FlexBox>
      <FlexBox>
        <Counter />
      </FlexBox>
    </FlexBox>
  )
}
```

> [https://stackoverflow.com/questions/57444154/why-need-useref-to-contain-mutable-variable-but-not-define-variable-outside-the](https://stackoverflow.com/questions/57444154/why-need-useref-to-contain-mutable-variable-but-not-define-variable-outside-the) > [https://stackoverflow.com/questions/56455887/react-usestate-or-useref?noredirect=1&lq=1](https://stackoverflow.com/questions/56455887/react-usestate-or-useref?noredirect=1&lq=1)
