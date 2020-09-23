## Atomic / Utility-first / Functional CSS 

>*Atomic CSS is a architectural philosophy that favors small, single-purpose classes to help building.*
>
>Atomic CSS 是一种建筑哲学，主张以小型、单一用途的类帮助建设。

有几种风格

### Programmatic 编程式

>  *e.g.* [Styled Components](https://styled-components.com/)*,* [Emotion](https://emotion.sh/)*,* [Theme UI](https://theme-ui.com/)*,* [ACSS.io](http://acss.io/))

借助构建工具在 html 上像调用函数一样写样式，这样就不用再写任何的样式文件。

![image-20200921160859595](Atomic CSS.assets/image-20200921160859595.png)

### Static 静态类

> *e.g.* [Tachyons](http://tachyons.io/)*,* [Tailwind](https://tailwindcss.com/)

更高的可读性

![image-20200921163325685](Atomic CSS.assets/image-20200921163325685.png)



> 参考资料：
>
> [The Case for Atomic / Utility-First CSS](https://johnpolacek.github.io/the-case-for-atomic-css/)（Atomic CSS 的文章集合）
>
> [Let's define exactly what Atomic Css is](https://css-tricks.com/lets-define-exactly-atomic-css/)







(TODO:

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables

https://tailwindcss.com/

https://hackr.io/blog/top-bootstrap-alternatives

)





### 页面的安全区域

确保内容即使在非矩形的视区中也可以完全显示，经常会需要用到诸如 `--window-top` 、`env(safe-area-inset-*)` 等自定义变量、自定义属性。



注意：`env` 兼容性



参考资料：

- [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [小程序包括uniapp针对安全区域env(safe-area-inset-*)兼容](https://ask.dcloud.net.cn/article/36494)
- [MDN env()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)
