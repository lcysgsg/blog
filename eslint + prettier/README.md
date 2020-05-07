## 小结
`eslint` 做 `eslint`的事情  
`vue` 做 `vue` 的事情  
`prettier` 做 `prettier` 的事情  
所以，在一个 `vue` 项目中想要用 `eslint` + `prettier`， 就要把三个插件结合在一起  
1. 要校验`js`， 安装 `eslint`
2. 配置 `eslint`，选一个推荐的规则
```js
{
  ...,
  extends: ['eslint:recommended'],
}
```
3. 要校验`vue`，安装
```js
{
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
```

## html 经 prettier 格式化后 tag 出现奇怪的格式 [html-whitespace-sensitivity](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)
在内敛元素中，空白是会产生影响的，这对格式化造成了困扰  
所以，默认情况下格式化以后，段落换行显得像bug一样  
具体使用哪个设置，还是要具体分析的  
```html
<!-- 
  --html-whitespace-sensitivity (defaults to css)
    css - Respect the default value of CSS display property. 根据默认的 html tag css属性来处理
    strict - All whitespace is considered significant. 页面美观至上，所有代码都会严格处理空格
    ignore - All whitespace is considered insignificant. 代码美观至上，页面可能会产生空格
-->
<!-- <span> is an inline element, <div> is a block element -->

<!-- input -->
<span class="dolorum atque aspernatur">Est molestiae sunt facilis qui rem.</span>
<div class="voluptatem architecto at">Architecto rerum architecto incidunt sint.</div>

<!-- output -->
<span class="dolorum atque aspernatur"
  >Est molestiae sunt facilis qui rem.</span
>
<div class="voluptatem architecto at">
  Architecto rerum architecto incidunt sint.
</div>
```
