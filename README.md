# 前端学习

## 目的
    跟随网上教程 https://www.htmlcssvqs.com/8ed/examples/ 先学习 html css js 基础，然后学习VUE，完成自己web的学习
    后端的话，依据自己擅长的语言用go来实现，虽然与主流的java不太相符，但是从部署环境来看，主要的工作环境是嵌入式服务器，
    将来，应该是有优势，希望golang能在亲爹谷歌的扶持下，生态越来越好吧

    学习前端，应该明确自己的目的，其实web出现前后分离的主要原因，应该是随着电脑的性能越来越好，前端也出现了盛世情况，
    就是从简单的表现到追求华美的效果，同时出现了形形色色的前端框架。如果像我一样只是为了表现的要求，不求华美的效果，可以学的浅一些。
    学习vue的原因就是，想看看现在通用的前端框架是什么样子的，而且就之前用框架的经验来看，好的框架会充分的利用易用性，
    把草莽的群雄逐步的走向大一统。
    所以说机器定义的世界，和真正的世界有所不用，它想要准确且易用的定义一个事物，不强调不重要的细节。就想数字化就是用有限的位数来表示模拟量，
    细节总是一些幅度较小的高频分量，被忽略了。但是再好的数字音乐也比不上黑胶。
    时间总是有限了，在收益回报率上，总要有取舍。

## html
    标签的组成：元素(element)、属性(attribute)、值(value)
    元素就像描述网页不同部分的小标签一样：这是一个标题，那是一个段落，而那一组链接是一个导航
    ---1 一般元素由开始标签、内容、结束标签组成
            开始标签是放在一对尖括号中的元素的名称及可能包含的属性，结束标签是放在一对尖括号中的斜杠加元素的名称
    ---2 有一些元素是空元素，既不包含文本也不包含其他元素。
            它们看起来像是开始标签和结束标签的结合，由左尖括号开头，然后是元素的名称和可能包含的属性，然后是一个可选的空格和一个可选的斜杠，最后是必有的右尖括号
            结尾处的空格和斜杠在HTML5中是可选的。不过，元素最后面的 > 是必需的
    
    h5 标签大全
    可以在 https://www.w3school.com.cn/tags/tag_html.asp 搜索查看

    css 样式表
    元素区域

    margin:外边距
    margin-top:上外边距
    margin-bottom:下外边距
    margin-right:右外边距
    margin-left:左外边距

    padding:内边距
    padding-top:上内边距
    padding-bottom:下内边距
    padding-right:右内边距
    padding-left:左内边距

    border:边框
    border-top:上边框
    border-bottom:下边框
    border-right:右边框
    border-left:左边框
    
    css中继承是一个很重要的概念，浏览器会将HTML理解为文档树，当你为某个元素应用css属性的时候，这些属性不仅会影响该元素，也会影响其下的分支元素
    哪些属性会被继承
    以下是会被继承的 CSS 属性，我们按照类型对其进行了分组
        文本
        color（颜色，a 元素除外）
        direction（方向）
        font（字体）
        font-family（字体系列）
        font-size（字体大小）
        font-style（用于设置斜体）
        font-variant（用于设置小型大写字母）
        font-weight（用于设置粗体）
        letter-spacing（字母间距）
        line-height（行高）
        text-align（用于设置对齐方式）
        text-indent（用于设置首行缩进）
        text-transform（用于修改大小写）
        visibility（可见性）
        white-space（用于指定如何处理空格）
        word-spacing（字间距）
        列表
        list-style（列表样式）
        list-style-image（用于为列表指定定制的标记）
        list-style-position（用于确定列表标记的位置）
        list-style-type（用于设置列表的标记）
        表格
        border-collapse（用于控制表格相邻单元格的边框是否合并为单一边框）
        border-spacing（用于指定表格边框之间的空隙大小）
        caption-side（用于设置表格标题的位置）
        empty-cells（用于设置是否显示表格中的空单元格）
        页面设置（对于印刷物）
        orphans（用于设置当元素内部发生分页时在页面底部需要保留的最少行数）
        page-break-inside（用于设置元素内部的分页方式）
        widows（用于设置当元素内部发生分页时在页面顶部需要保留的最少行数）
        其他
        cursor（鼠标指针）
        quotes（用于指定引号样式）

    样式层叠
    1. 特殊性
        特殊性规则指定选择器的具体程度。选择器越特殊，规则就越强。
        遇到冲突时，优先应用特殊性强的规则
    2. 顺序h
        晚出现的优先级高。当特殊性相同的时候，后声明的规则会覆盖先声明的规则。
    3. 重要性c
        使用!important可以提升规则的优先级，使该规则成为最高优先级。

    css样式规则有两个主要的部分
    选择器：决定将格式化应用到哪些元素
    声明块：定义要应用的格式
    如下：
    XXX{
        attr:value;
    }
    选择器可以定义五个不同的标准来选择要进行格式化的元素：
    元素的类型或者名称
    h1 {
        color: red;
    }
    元素所在的上下文
    h1 em {
        color: red;
    }
    元素的类或者id
    类
    .error {
        color: red;
    }
    id
    #gaudi {
        color: red;
    }
    元素的伪类或者伪元素
    a:link {
        color: red;
    }
    元素是否有某些属性和值
    a[title] {
        color: red;

    为了指出目标元素，选择器可以使用这五个标准的任意组合。在大多数情况下，只使用一个或两个标准即可。
    另外，如果要对几组不同的元素应用相同的样式规则，可以将相同的声明同时应用于几个选择器

    