const menuList = [
    {
        title:'首页',
        key:'/Mian/home'
    },
    {
        title:'UI',
        key:'/Mian/ui',
        children:[
            {
                title:'按钮',
                key:'/Mian/ui/buttons',
            },
            {
                title:'弹框',
                key:'/Mian/ui/modals',
            },
            {
                title:'Loading',
                key:'/Mian/ui/loadings',
            },
            {
                title:'通知提醒',
                key:'/Mian/ui/notification',
            },
            {
                title:'全局Message',
                key:'/Mian/ui/message',
            },
            {
                title:'Tab页签',
                key:'/Mian/ui/tabs',
            },
            {
                title:'图片画廊',
                key:'/Mian/ui/gallery',
            },
            {
                title:'轮播图',
                key:'/Mian/ui/carousel',
            }
        ]
    },
    {
        title:'表单',
        key:'/Mian/form',
        children:[
            {
                title:'登录',
                key:'/Mian/form/login',
            },
            {
                title:'注册',
                key:'/Mian/form/reg',
            }
        ]
    },
    {
        title:'表格',
        key:'/Mian/table',
        children:[
            {
                title:'基础表格',
                key:'/Mian/table/basic',
            },
            {
                title:'高级表格',
                key:'/Mian/table/high',
            }
        ]
    },
    {
        title:'富文本',
        key:'/Mian/rich'
    },
    {
        title:'城市管理',
        key:'/Mian/city'
    },
    {
        title:'订单管理',
        key:'/Mian/order',
        btnList:[
            {
                title:'订单详情',
                key:'detail'
            },
            {
                title:'结束订单',
                key:'finish'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/Mian/user'
    },
    {
        title:'车辆地图',
        key:'/Mian/bikeMap'
    },
    {
        title:'图标',
        key:'/Mian/charts',
        children:[
            {
                title:'柱形图',
                key:'/Mian/charts/bar'
            },
            {
                title:'饼图',
                key:'/Mian/charts/pie'
            },
            {
                title:'折线图',
                key:'/Mian/charts/line'
            },
        ]
    },
    {
        title:'权限设置',
        key:'/Mian/permission'
    },
];
export default menuList;