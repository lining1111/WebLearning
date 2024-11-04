# 前端学习

## 目的
    跟随网上教程 https://www.htmlcssvqs.com/8ed/examples/ 先学习 html css 基础，然后学习VUE，完成自己web的学习
    后端的话，依据自己擅长的语言用go来实现，虽然与主流的java不太相符，但是从部署环境来看，主要的工作环境是嵌入式服务器，
    将来，应该是有优势，希望golang能在亲爹谷歌的扶持下，生态越来越好吧

    学习前端，应该明确自己的目的，其实web出现前后分离的主要原因，应该是随着电脑的性能越来越好，前端也出现了盛世情况，
    就是从简单的表现到追求华美的效果，同时出现了形形色色的前端框架。如果像我一样只是为了表现的要求，不求华美的效果，可以学的浅一些。
    学习vue的原因就是，想看看现在通用的前端框架是什么样子的，而且就之前用框架的经验来看，好的框架会充分的利用易用性，
    把草莽的群雄逐步的走向大一统。
    所以说机器定义的世界，和真正的世界有所不用，它想要准确且易用的定义一个事物，不强调不重要的细节。就想数字化就是用有限的位数来表示模拟量，
    细节总是一些幅度较小的高频分量，被忽略了。但是再好的数字音乐也比不上黑胶。
    时间总是有限了，在收益回报率上，总要有取舍。

    https://developer.mozilla.org/zh-CN/docs/Web

    css3 样式参考网站
    https://csscoco.com/inspiration/#/

    要学习vue地先具备html/css/js的基础，然后学习vue

## html
    
    https://www.htmlcssvqs.com/8ed/examples/
    标签的组成：元素(element)、属性(attribute)、值(value)
    元素就像描述网页不同部分的小标签一样：这是一个标题，那是一个段落，而那一组链接是一个导航
    ---1 一般元素由开始标签、内容、结束标签组成
            开始标签是放在一对尖括号中的元素的名称及可能包含的属性，结束标签是放在一对尖括号中的斜杠加元素的名称
    ---2 有一些元素是空元素，既不包含文本也不包含其他元素。
            它们看起来像是开始标签和结束标签的结合，由左尖括号开头，然后是元素的名称和可能包含的属性，然后是一个可选的空格和一个可选的斜杠，最后是必有的右尖括号
            结尾处的空格和斜杠在HTML5中是可选的。不过，元素最后面的 > 是必需的
    
    h5 标签大全
    可以在 https://www.w3school.com.cn/tags/tag_html.asp 搜索查看

    表单 form
    目的是为了和访问者交流
    表单有两个基本组成部分：
    1、访问者在页面上可以看见并填写的控件、标签和按钮的集合；
    2、以及用于获取信息并将其转化为可以读取或计算的格式的处理脚本

    每个表单都以 form 开始标签开始，以form 结束标签结束。两个标签之间是组成表单的说明标签、控件和按钮
    <form action="script.url" method="post"></form>
    action属性定义了提交表单时，要运行的脚本在服务器上的位置
    method属性定义了发送数据的HTTP方法

    如果表单上有很多信息需要填写，可以使用 fieldset 元素将相关的元素组合在一起，使表单更容易理解。
    对表单元素进行组织的步骤:
    1、在 form 开始标签的下面、任何希望包含在第一个组的表单元素的上面，输入<fieldset>
    2、如果需要，输入 <legend>。（如果需要包含 legend，它必须是 fieldset 里的第一个元素。）
    3、输入标签的文本
    4、输入 </legend> 以完成标签
    5、如果不使用 legend，则创建一个标题从而可以识别属于该 fieldset 的一组控件
    6、创建属于第一组的表单元素
    7、输入 </fieldset> 以完成 fieldset
    8、如果需要，创建第二个 fieldset，并重复步骤 1 至 7

    input 元素
    type属性定义了 input 元素的类型
    name属性定义了 input 元素的名称，服务器端的脚本使用你指定的 name 获取访问者在文本框中输入的值或预设的值（即 value 属性值）
    value属性定义了 input 元素的值，它定义了在文本框中显示的文本或预设的文本

## css 

    https://www.htmlcssvqs.com/8ed/examples/
    样式表
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

    ch11是一个css的集中使用，需要细细看
    构建页面
    1、恰当地使用 article、aside、nav、section、header、footer 和 div 等元素将页面划分成不同的逻辑区块
    2、按照一定的顺序放置内容，确保页面在不使用 CSS 的情况下也是合理的
    3、以一致的方式使用标题元素（h1 ～h6），从而明确地标识页面上这些区块的信息，并对它们按优先级排序
    4、使用合适的语义标记剩余的内容，如段落、图和列表
    5、如果有必要，使用注释来标识页面上不同的区域及其内容

    @font-face规则
    @font-face {
        font-family: 'MyFont';
        src: url('myfont.woff2') format('woff2'),
             url('myfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    使用web字体为普通文本设置字体样式的步骤：
    1、选择一个字体，并下载它，在常规文本版本的子文件夹，打开styles.css文件
    2、将为常规文本准备的@font-face规则添加到自己的样式表内
    3、将字体文件从文件夹内复制到自己的样式表的文件夹内
    4、对font-family值进行重命名，让该名称成为字体的代号
    5、使用熟悉的方式，创建为文本元素添加样式的规则。在样式规则中输入font-family: 'MyFont'，其中MyFont是字体代号

    增强样式
    为元素创建圆角 border-radius
    为文本添加阴影 text-shadow
    为元素添加边框 box-shadow
    为元素应用多重背景 background-color、background-image、background-repeat、background-position、background-size
    为元素添加渐变背景 background linear-gradient、radial-gradient
    为元素添加不透明度 opacity
    生成内容的效果 content :before、:after
    将多个图像拼合成单个背景图像 sprite
    为元素添加动画 animation

    css 出现问题常用排除方法
    在 CSS 中，如果不确定问题是出在属性上还是出在选择器上，可以试着在选择器上添加极其简单的声明，
    如 color:red;、border: 1px solid red; 等（如果 red 已经用于网页的设计，也可以选择一种不常见的颜色，如 pink）。
    如果元素变成红色，那么问题就出在属性上，否则问题就出在选择器上（假定不存在另一个特殊性更强的选择器，也不存在比当前选择器更靠后的选择器）

## js

    http://www.javascriptworld.com/
    JavaScript 是一种客户端语言。① 也就是说，设计它的目的是在用户的机器上而不是服务器上执行
    任务。因此，JavaScript 有一些固有的限制，这些限制主要出于如下安全原因。
    1、JavaScript 不允许写服务器机器上的文件。尽管写服务器上的文件在许多方面是很方便的（比
        如存储页面单击数或用户填写的表单数据），但是 JavaScript 不允许这么做。而是需要用服务器
        上的一个程序处理和存储这些数据。这个程序可以是用 Java、Perl 或 PHP 等语言编写的 CGI
        （运行在服务器上的程序）。
    2、JavaScript 不能关闭不是由它自己打开的窗口。这是为了避免一个站点关闭其他任何站点的窗
        口，从而独占浏览器。
    3、JavaScript 不能从来自另一个服务器的已经打开的网页中读取信息。换句话说，网页不能读取
        已经打开的其他窗口中的信息，因此无法探察访问这个站点的冲浪者还在访问其他哪些站点。

    Ajax：Asynchronous JavaScript and XML（异步 JavaScript 和 XML）
    Ajax 是一种创建交互式 Web 应用程序的方式。特点：
    使用 HTML 和 CSS 控制页面结构和表示方式；
    使用 DOM 显示和操纵页面；
    使用浏览器的 XMLHttpRequest 对象在客户机和服务器之间传输数据；
    使用 XML 作为在客户机和服务器之间传输的数据的格式；
    最后，使用 JavaScript 动态地显示所有内容并且提供交互功能。

    类（class）标识出可能会多次使用的元素
    id 标识出的元素对于文档是唯一的
    函数（function）是一组执行某一任务的 JavaScript 语句，函数由单词 function 加上函数名组成。函数名后面是圆括号，再后面是左花括号。组成函数内容的语句出现在后面的行上，然后用右花括号结束这个函数
    带圆括号的函数名意味着正在调用这个函数；
    如果没有圆括号（就像这里的情况），就是将它赋值给事件处理程序，以便在此事件发生时运行它。

    表单检查与正则表达式
    https://goregex.cn/

    事件是用户在访问页面时执行的操作。当浏览器探测到一个事件时，比如用鼠标单击或按键，它可以触发与这个事件相关联的 JavaScript 对象，这些对象称为事件处理程序（event handler）
    evt 对象：当事件发生时，浏览器会自动创建一个对象，这个对象包含有关事件的所有信息。这个对象称为事件对象（event object），在事件处理程序中，它被赋值给变量 evt（或 event）

    Web 术语中，cookie 是一小段信息，当用户第一次访问 Web 服务器时，服务器将这些信息发送给浏览器。
    这个用户以后每次访问这个 Web 站点时，Web 服务器可以通过 cookie 识别这个用户。
    远程服务器保存 cookie 的一部分，其中包含关于访问者的信息；浏览器将 cookie 作为纯文本文件保存在计算机硬盘上。
    cookie 总是包含发送它的服务器的地址。cookie 技术背后的本质是“识别”。可以把它看做 Web上的 Caller ID，只是在形式方面有各种变化
    cookie 是一个具有特定格式的文本字符串：
    cookieName=cookieValue; expires= expirationDateGMT; path=URLpath; domain=siteDomain
    这个字符串的第一部分给 cookie 命名并给它赋值。这是 cookie 中唯一必须有的部分，字符串的其余部分都是可选的。
    接下来是 cookie 的过期日期（expiration date），当到了这个日期，浏览器会自动删除这个 cookie。
    过期日期后面是一个 URL 路径，这允许在 cookie 中存储一个 URL。最后，可以在 cookie 中存储一个域值。

    
## jQuery

    jQuery 是一个 JavaScript 库，它简化了 HTML 文档遍历、事件处理、动画和 Ajax 交互。
    通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行"操作"（actions）。
    基础语法： $(selector).action()

### jQuery 选择器

    jQuery 选择器允许您对 HTML 元素组或单个元素进行操作。
    jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素。 它基于已经存在的 CSS 选择器，
    除此之外，它还有一些自定义的选择器。
    jQuery 中所有选择器都以美元符号开头：$()
    元素选择器:基于元素名选取元素 $("p")
    #id选择器:基于元素的 id 属性选取元素  $("#test")
    .class选择器:通过指定的 class 查找元素。 $(".test")
    
### jQuery 事件

    jQuery 是为处理 HTML 事件而设计的。
    事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。术语由三部分组成：
    事件名称、命名空间、处理程序函数。
    事件名称是指要发生的事件，例如 click、dblclick、mousedown 等。
    命名空间是可选的，用于对事件处理程序进行分组。
    处理程序函数是当事件发生时执行的函数。
    事件处理程序在 JavaScript 代码中定义，然后被指定为属性值。
    事件处理程序属性是方法的
    常见 DOM 事件：
    鼠标事件	        键盘事件	    表单事件	文档/窗口事件
    click	        keypress	submit	load
    dblclick	    keydown	    change	resize
    mouseenter	    keyup	    focus	scroll
    mouseleave	 	blur	    unload
    hover

    常用的 jQuery 事件方法
    $(document).ready() 方法允许我们在文档完全加载完后执行函数
    click() 方法是当按钮点击事件被触发时会调用一个函数
    dblclick()当双击元素时，会发生 dblclick 事件。
    mouseenter()当鼠标指针穿过元素时，会发生 mouseenter 事件。
    mouseleave()当鼠标指针离开元素时，会发生 mouseleave 事件。
    mousedown()当鼠标按钮被按下时，会发生 mousedown 事件。
    mouseup()当在元素上放松鼠标按钮时，会发生 mouseup 事件。
    hover()方法用于模拟光标悬停事件。
    focus()当元素获得焦点时，会发生 focus 事件。
    blur()当元素失去焦点时，发生 blur 事件。
    keypress()当键盘或鼠标事件导致用户输入时，发生 keypress 事件。
    keydown()当用户按下键盘上的任意键时，发生 keydown 事件。
    keyup()当用户释放键盘上的键时，发生 keyup 事件。

    jQuery - 链(Chaining)
    通过 jQuery，可以把动作/方法链接在一起。
    Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。
    jQuery 方法链接,通过 . 来将同一元素的方向按希望的顺序链接起来
    
### jQuery DOM 操作

    jQuery 提供一系列与 DOM 相关的方法，这使访问和操作元素和属性变得很容易。
    三个简单实用的用于 DOM 操作的 jQuery 方法：
        text() - 设置或返回所选元素的文本内容
        html() - 设置或返回所选元素的内容（包括 HTML 标签）
        val() - 设置或返回表单字段的值
        attr() 方法用于获取属性值。
    通过 jQuery，可以很容易地添加新元素/内容。
        append() - 在被选元素的结尾插入内容
        prepend() - 在被选元素的开头插入内容
        after() - 在被选元素之后插入内容
        before() - 在被选元素之前插入内容
    通过 jQuery，可以很容易地删除已有的 HTML 元素。
        remove() - 删除被选元素（及其子元素）
        empty() - 从被选元素中删除子元素
    通过 jQuery，可以很容易地对 CSS 元素进行操作
        addClass() - 向被选元素添加一个或多个类
        removeClass() - 从被选元素删除一个或多个类
        toggleClass() - 对被选元素进行添加/删除类的切换操作
        css() - 设置或返回样式属性
    通过 jQuery，很容易处理元素和浏览器窗口的尺寸。
        width() - 设置或返回元素的宽度
        height() - 设置或返回元素的高度
        innerWidth() - 返回元素的宽度（包括内边距）
        innerHeight() - 返回元素的高度（包括内边距）
        outerWidth() - 返回元素的宽度（包括内边距和边框）
        outerHeight() - 返回元素的高度（包括内边距和边框）
    
## vue3

    使用vite脚手架构造
    .vue .ts        .vue中变化，一般不用重启脚手架。.ts修改后，需要重启脚手架
    
    main.ts-----App.vue （根）
    src为主要工作目录
    下面
    components 包含若干的.vue 主要用在html上的标签
    router 路由器 一般只包含一个index.ts用来统筹全局的路由跳转
    pages 包含若干.vue 配合router来作路由功能的页面
    types 一般只包含一个index.ts 规定 interface
    hooks useXXX.ts 包含若干的函数

### vue相关属性

    https://blog.csdn.net/qq_74637823/article/details/135445606
    $props      子组件用来接收父组件传过来的值
    $attrs      解决隔代传值时中间代不需要该值却要用$props接收的问题
    $root       用来访问根vue组件实例
    $parent     父组件
    $child      子组件
    $options    vue对象构造函数接收的参数,包含当前vue实例初始化参数
    $refs       用来引用dom
    $emit       子传父常用的方法

### 组件通信

#### props
    父给子：通过父.vue中的<子>标签中的 :自定义props=“变量/函数”来实现，变量是完成父给子，而子给父，需要函数来实现

#### 自定义事件 custom_event
    子给父 专门用来子传父 有点类似qt的 emit 信号槽 儿子自己定义，父亲调用
    @Event-Name=“”  采用肉串写法，主要是为了避开vue内置的   

#### mitt 基于三方库的任意组件的通信
    https://github.com/developit/mitt
    
    const emitter = mitt()
    发送组件
    <button @click="emitter.emit('send-toy',toy)">玩具给弟弟</button>
    接收组件
    // 给emitter绑定send-toy事件
	emitter.on('send-toy',(value:any)=>{
		toy.value = value
	})
	// 在组件卸载时解绑send-toy事件
	onUnmounted(()=>{
		emitter.off('send-toy')
	})

#### v-model
    在接收组件的实例上，写v-model:XXX="" XXX是接收控件的props
    往回传 
    const emit = defineEmits(['update:ming'])
     @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"

#### $attrs
    祖给孙 其实也是通过了子组件了，
    祖通过:XXX 给子
    子通过 v-bind="$attrs" 全部给孙
    孙调用 defineProps

#### $refs $parent
    有点指针的含义 需要组件上调用
    defineExpose()将数据操作的权利交出去
    通过组件实例上加入 ref="" 将实例引入到父
    <Child1 ref="c1"/>
    let c1 = ref()
    c1.value.toy = '小猪佩奇'
    子操作父
    <button @click="minusHouse($parent)">干掉父亲的一套房产</button>
    // 方法
	function minusHouse(parent:any){
    // console.log(parent)
		parent.house -= 1
	}

#### provide-inject
    祖给孙 不打扰子 有些类似订阅发布
    provide('主题',内容)
    let xxx = inject('主题',内容）

#### pinia
    https://pinia.vuejs.org/zh/

#### slot 插槽
    默认、具名、作用域 v-slot:XXX简写为#XXX


### demo

    新建默认工程
    npm create vue@latest
    npm i
    npm run dev

### demo1

    根据B站上尚硅谷的课件，作的
    https://www.bilibili.com/video/BV1Za4y1r7KE/?spm_id_from=333.999.0.0&vd_source=d5fa5216fd2846a4da58ccfad53b6049
    作入vue3入门


    ref 与 customRef track trigger

# 1Panel

    https://1panel.cn/
    https://github.com/1Panel-dev/1Panel
    后面的两个工程都是受到1panel的启发，出发点也是希望写出现代化的后端管理工程代码

## ExchangeApp

    简单说明
    前端部分将使用TypeScript+Vue+Pinia+ElementPlus, 而后端部分则将采用Go+Gin+Gorm, 我们将快速实现一个用户可以登录注册、完成兑换操作、查看文章、进行点赞的Web应用。

    转移到 https://github.com/lining1111/ExchangeApp.git

## SimpleBlogCommunity

    https://github.com/Eliaukle/Simple-Blog-Community.git
    前端 https://blog.csdn.net/qq_50737715/article/details/127516700?spm=1001.2014.3001.5501
    后端 https://blog.csdn.net/qq_50737715/article/details/127437065?spm=1001.2014.3001.5501

    按照上面一套教程(源码+说明)，通过学习搭建一个博客来完成gin+vue3的全栈练习

    转移到 https://github.com/lining1111/SimpleBlogCommunity.git