​	先前关于写样式的认知还是处于一个一个写、样式库的阶段，学习 `uniapp` 的时候接触了 [colorui](color-ui.com) ， 无意间发现了它定义了一系列的工具类，例如：间距、大小、`flex` 等等， 特别是 `flex` 给页面布局极大的便利。其实，以前也是有发现过类似的，经典如 `bootstrap` ，也尝试过，并没有取得好的效果，可能是因为那时候为了兼容不能用 `flex` 以及水平不够没有意识到。

​	可惜 `colorui`  没有持续的维护，也没有那么健壮。我开始寻找更成熟健壮的开源项目，研究了 `bootstrap v5`、 `quasar` 和 `tailwindcss` 。

​	[quasar](https://quasar.dev/introduction-to-quasar) 是一个特殊的极好的框架， “特殊”是因为我还没想好怎么表达没有研究透彻，“极好”是为了表达褒义。我只能说，会深入学习并使用。有点像第一次看到 `antd` 但更强烈。

​	`bootstrap v5-alpha`， 有关 css 第一个想到的就是 bootstrap。

(TODO:

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables

https://tailwindcss.com/

https://hackr.io/blog/top-bootstrap-alternatives

)



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