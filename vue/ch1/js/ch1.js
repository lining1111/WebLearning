const { createApp, ref } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// 示例数据
const artcles = [
    { id: 100, title: '孤注一掷，玩的就是真实', content: '电影《孤注一掷》于8月8日正式上映，目前票房已破8亿。电影自点映以来口碑与票房狂飙，连破暑期档单日点映最高票房、中国影史单日点映票房、中国影史点映票房纪录，影片结尾部分更让不少观众认为会有续集。昨日在接受采访时，导演申奥明确表示不会有续集，“目前没有续集的计划，那个镜头主要想表达的就是，网络诈骗很难根除，层出不穷，还是需要我们提升自身的免疫力。”' },
    { id: 101, title: '《封神第一部》上映：网友被费翔的商务殷语洗脑了', content: '《封神第一部》主要讲述的是商王殷寿与狐妖妲己勾结，暴虐无道，引发天谴。昆仑仙人姜子牙携封神榜”下山，寻找天下共主，以救苍生。西伯侯之子姬发逐渐发现殷寿的本来面目，反出朝歌。' },
    { id: 102, title: '《消失的她》票房破35亿 排名中国票房榜第12', content: '《消失的她》由陈思诚监制，朱一龙、倪妮、文咏珊等主演的悬疑犯罪片。该片改编自前苏联电影《为单身汉设下的陷阱》，讲述了何非的妻子李木子在结婚周年旅行中离奇消失，失踪多天后一个陌生女人突然闯入，并坚称是何非妻子，从而牵扯出一个惊天大案的故事。' },
    { id: 103, title: '电影《八角笼中》上映29天，票房突破21亿', content: '新京报讯 8月2日，电影《八角笼中》上映29天，累计票房突破21亿。该片由王宝强执导，王宝强、陈永胜、史彭元领衔主演，王迅、张祎曈主演，于7月6日正式上映。' },
    { id: 104, title: '速度与激情 10》8 月 18 日上线国内视频平台', content: '据 IT 之家此前报道，《速度与激情 10》今年 5 月在内地院线上映，比北美提前两天。目前，该片豆瓣评分 6.2。《速度与激情》系列电影由罗伯・科恩等执导，于 2001 年至 2021 年期间上映了 9 部。《速度与激情 9》于 2021 年 5 月 21 日在中国内地上映，2021 年 6 月 25 日在北美上映。' }
];

// 组件：文章列表
const ArtcleList = {
    template: `
        <div>
            <h1>文章列表</h1>
            <ul>
                <li v-for="artcle in artcles" :key="artcle.id">
                    <router-link :to="'/artcle/' + artcle.id">{{ artcle.title }}</router-link>
                </li>
            </ul>
        </div>
    `,
    setup() {
        return {
            artcles
        };
    }
};

// 组件：文章详情
const ArtcleDetail = {
    template: `
        <div>
            <h1>{{ artcle.title }}</h1>
            <p>{{ artcle.content }}</p>
        </div>
    `,
    setup() {
        const route = VueRouter.useRoute();
        const artcleId = route.params.id;
        const artcle = ref(artcles.find(artcle => artcle.id === Number(artcleId)));

        return {
            artcle
        };
    }
};

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: ArtcleList },
        { path: '/artcle/:id', component: ArtcleDetail }
    ]
});

// 创建Vue应用
const app = createApp({});
app.use(router);

// 挂载应用
app.mount('#app');