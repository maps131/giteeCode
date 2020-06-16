import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入语言文件
import en from './en'
import zhCHS from './zhCHS'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zhCHS', // 语言标识 表示当前所使用的语言
    //配置国际化支持多少种语言
    messages:{ 
        'en': en,
        'zhCHS': zhCHS,
    }
})

export default i18n