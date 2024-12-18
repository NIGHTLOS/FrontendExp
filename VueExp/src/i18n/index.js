import { createI18n } from "vue-i18n";

// 定义翻译内容
const messages = {
    zh: {
        language: "切换语言",
        features: {
            title1: "霍去病墓",
            desc1: "霍去病墓是茂陵的陪葬墓之一，展示了汉武帝时期的军事实力与荣光。",
            title2: "陵墓布局",
            desc2: "茂陵的整体布局庄严肃穆，反映了汉代帝王的威严与信仰。",
            title3: "茂陵博物馆",
            desc3: "馆内藏有大量汉代文物，包括兵器、陶器及碑刻，展现汉代文化的辉煌。",
        },
        routes: {
            title: "推荐参观线路",
            classic: "经典线路",
            classic_details: "主陵墓 - 霍去病墓 - 茂陵博物馆 - 茂陵景区主路",
            history: "历史文化之旅",
            history_details: "陵园入口 - 陪葬墓群 - 文物展示区 - 专题展览馆",
            family: "家庭亲子线路",
            family_details: "互动体验区 - 模型制作 - 儿童考古区 - 茂陵礼品店",
        },
        comments: {
            title: "游客评论",
            placeholder: "请输入您的评论...",
            submit: "提交",
            visitor: "游客",
        },
        footer: {
            copy: "汉武帝茂陵",
            rights: "版权所有",
            return: "返回",
        },
        mausoleum: {
            intro1: "汉武帝茂陵位于陕西省兴平县，是汉武帝刘彻的陵墓。",
            intro2: "茂陵是西汉帝王陵墓中最宏伟的代表之一，历时53年建成。",
            intro3: "陵墓内珍藏有象征皇权的文物和刻有汉武帝功绩的石碑。",
        },
        headerTitle: "汉武帝茂陵",
        location: {
            title: "地理位置",
            description: "汉武帝茂陵位于陕西省兴平市茂陵镇，距离西安约40公里，是陕西省重要的历史遗址。",
        },
        timeline: {
            title: "历史时间轴",
            events: [
                { timestamp: "公元前156年", text: "汉武帝刘彻出生。" },
                { timestamp: "公元前141年", text: "汉武帝即位，成为中国历史上杰出的皇帝之一。" },
                { timestamp: "公元前139年", text: "派遣张骞出使西域，开启丝绸之路的序幕。" },
                { timestamp: "公元前138年", text: "开始修建茂陵，作为汉武帝的陵寝。" },
                { timestamp: "公元前121年", text: "霍去病大胜匈奴，被赐墓葬于茂陵。" },
                { timestamp: "公元前87年", text: "汉武帝驾崩，茂陵竣工，成为西汉帝王陵墓的杰出代表。" },
            ],
        },
    },
    en: {
        language: "Switch Language",
        features: {
            title1: "Huo Qubing's Tomb",
            desc1: "Huo Qubing's tomb is one of the accompanying tombs of Maoling, showcasing the military glory of the Han dynasty.",
            title2: "Mausoleum Layout",
            desc2: "The layout of Maoling is solemn and majestic, reflecting the authority and beliefs of the Han dynasty emperors.",
            title3: "Maoling Museum",
            desc3: "The museum houses numerous Han dynasty artifacts, including weapons, pottery, and inscriptions, showcasing the cultural splendor of the era.",
        },
        routes: {
            title: "Recommended Routes",
            classic: "Classic Route",
            classic_details: "Main Mausoleum - Huo Qubing's Tomb - Maoling Museum - Scenic Main Road",
            history: "Historical Route",
            history_details: "Entrance - Accompanying Tombs - Artifact Display Area - Exhibition Hall",
            family: "Family Route",
            family_details: "Interactive Zone - Model Making - Kids' Archaeology Zone - Gift Shop",
        },
        comments: {
            title: "Visitor Comments",
            placeholder: "Leave your comments...",
            submit: "Submit",
            visitor: "Visitor",
        },
        footer: {
            copy: "Han Wudi Maoling",
            rights: "All rights reserved",
            return: "Return",
        },
        mausoleum: {
            intro1: "The Maoling Mausoleum of Emperor Wu is located in Xingping County, Shaanxi Province.",
            intro2: "It is one of the most magnificent imperial tombs of the Western Han Dynasty, completed over 53 years.",
            intro3: "The tomb houses artifacts symbolizing imperial power and stone inscriptions marking Emperor Wu's achievements.",
        },
        headerTitle: "Maoling Mausoleum of Emperor Wu",
        location: {
            title: "Geographical Location",
            description:
                "Maoling Mausoleum is located in Maoling Town, Xingping City, Shaanxi Province, about 40 kilometers from Xi'an. It is a significant historical site in Shaanxi.",
        },
        timeline: {
            title: "Historical Timeline",
            events: [
                { timestamp: "156 BCE", text: "Birth of Emperor Wu of Han, Liu Che." },
                { timestamp: "141 BCE", text: "Emperor Wu ascended the throne, becoming one of the greatest emperors in Chinese history." },
                { timestamp: "139 BCE", text: "Zhang Qian was sent to the Western Regions, opening the Silk Road." },
                { timestamp: "138 BCE", text: "Construction of Maoling Mausoleum began as the resting place for Emperor Wu." },
                { timestamp: "121 BCE", text: "Huo Qubing achieved great victories against the Xiongnu and was granted burial at Maoling." },
                { timestamp: "87 BCE", text: "Emperor Wu passed away, and Maoling was completed as a remarkable Western Han tomb." },
            ],
        },
    },
};

// 创建 i18n 实例
const i18n = createI18n({
    locale: "zh", // 默认语言
    fallbackLocale: "en", // 回退语言
    messages,
});

export default i18n;
