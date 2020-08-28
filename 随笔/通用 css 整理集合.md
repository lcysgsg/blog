## style

### Layout and Grid 布局

快速搭出页面骨架必不可少。

**参考资料：**

- [Quasar flex grid](https://quasar.dev/layout/grid/introduction-to-flexbox)



### 尺寸设定

Suffixes 辅助的后缀( `-none`, `-xs`, `-sm`, `-md`, `-lg`, `-xl` )

在边距中：

`$size-step: 8`

`$size: 16`

`$size-sm: $size - $size-step`

`$size-lg: $size + $size-step`



字体：





### 页面的安全区域

确保内容即使在非矩形的视区中也可以完全显示，经常会需要用到诸如 `--window-top` 、`env(safe-area-inset-*)` 等自定义变量、自定义属性。



注意：`env` 兼容性



参考资料：

- [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [小程序包括uniapp针对安全区域env(safe-area-inset-*)兼容](https://ask.dcloud.net.cn/article/36494)
- [MDN env()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)



**TODO:**

- [ ] fixed
  - [ ] 上 
  - [ ] 右（横屏）
  - [ ] 下
  - [ ] 左（横屏）



### 列表

**TODO：**

- [ ] 内边距尺寸