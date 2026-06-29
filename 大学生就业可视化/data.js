// ========== 数据文件 v2.0（扩展版）==========
// 新增：25所知名高校 + AI建议功能数据

const DATA = {
    majors: [
        {"id": "cs",        "name": "计算机科学与技术", "category": "工学"},
        {"id": "se",        "name": "软件工程",         "category": "工学"},
        {"id": "is",        "name": "信息安全",           "category": "工学"},
        {"id": "ai",        "name": "人工智能",           "category": "工学"},
        {"id": "data_sci",  "name": "数据科学与大数据", "category": "工学"},
        {"id": "finance",   "name": "金融学",             "category": "经济学"},
        {"id": "accounting","name": "会计学",             "category": "管理学"},
        {"id": "journalism","name": "新闻学",             "category": "文学"},
        {"id": "law",       "name": "法学",               "category": "法学"},
        {"id": "med",       "name": "临床医学",           "category": "医学"},
        {"id": "edu",       "name": "教育学",             "category": "教育学"},
        {"id": "design",    "name": "视觉传达设计",       "category": "艺术学"},
        {"id": "me",        "name": "机械工程",           "category": "工学"},
        {"id": "ee",        "name": "电子信息工程",        "category": "工学"},
        {"id": "bio",       "name": "生物工程",           "category": "工学"},
        {"id": "env",       "name": "环境工程",           "category": "工学"},
        {"id": "chem",      "name": "化学工程",           "category": "工学"},
        {"id": "math",      "name": "数学与应用数学",      "category": "理学"}
    ],

    // ========== 扩展为25所高校 ==========
    universities: [
        // 北京地区（8所）
        {"id": "qinghua",    "name": "清华大学",           "type": "985", "location": "北京", "rank": 1},
        {"id": "beida",      "name": "北京大学",           "type": "985", "location": "北京", "rank": 2},
        {"id": "beihang",   "name": "北京航空航天大学",   "type": "985", "location": "北京", "rank": 15},
        {"id": "beili",     "name": "北京理工大学",         "type": "985", "location": "北京", "rank": 16},
        {"id": "renmin",    "name": "中国人民大学",         "type": "985", "location": "北京", "rank": 8},
        {"id": "beishida",  "name": "北京师范大学",         "type": "985", "location": "北京", "rank": 10},
        {"id": "beiyi",     "name": "北京邮电大学",         "type": "211", "location": "北京", "rank": 42},
        {"id": "beijiao",   "name": "北京交通大学",         "type": "211", "location": "北京", "rank": 45},

        // 上海地区（5所）
        {"id": "fudan",     "name": "复旦大学",           "type": "985", "location": "上海", "rank": 3},
        {"id": "shangjiao", "name": "上海交通大学",        "type": "985", "location": "上海", "rank": 4},
        {"id": "tongji",    "name": "同济大学",           "type": "985", "location": "上海", "rank": 14},
        {"id": "huadong",   "name": "华东师范大学",         "type": "985", "location": "上海", "rank": 28},
        {"id": "shangcai",  "name": "上海财经大学",         "type": "211", "location": "上海", "rank": 56},

        // 长三角地区（4所）
        {"id": "zheda",     "name": "浙江大学",           "type": "985", "location": "杭州", "rank": 5},
        {"id": "nanjing",   "name": "南京大学",           "type": "985", "location": "南京", "rank": 6},
        {"id": "dongnan",   "name": "东南大学",           "type": "985", "location": "南京", "rank": 17},
        {"id": "zhongda",   "name": "中山大学",           "type": "985", "location": "广州", "rank": 11},

        // 华中地区（3所）
        {"id": "wuhan",     "name": "武汉大学",           "type": "985", "location": "武汉", "rank": 7},
        {"id": "huazhong",   "name": "华中科技大学",         "type": "985", "location": "武汉", "rank": 9},

        // 华南地区（2所）
        {"id": "huajing",   "name": "华南理工大学",         "type": "985", "location": "广州", "rank": 22},
        {"id": "xiamen",    "name": "厦门大学",           "type": "985", "location": "厦门", "rank": 20},

        // 西南地区（2所）
        {"id": "dianji",    "name": "电子科技大学",         "type": "985", "location": "成都", "rank": 27},
        {"id": "jiaoda",    "name": "四川大学",           "type": "985", "location": "成都", "rank": 12},

        // 西北地区（1所）
        {"id": "xibei",     "name": "西安交通大学",         "type": "985", "location": "西安", "rank": 13}
    ],

    employment: {
        "2026": [
            {"major": "cs",        "rate": 94.2, "salary": 11500, "region": "北京"},
            {"major": "se",        "rate": 95.8, "salary": 12500, "region": "北京"},
            {"major": "is",        "rate": 93.5, "salary": 12800, "region": "北京"},
            {"major": "ai",        "rate": 92.0, "salary": 15000, "region": "北京"},
            {"major": "data_sci",  "rate": 91.5, "salary": 13000, "region": "上海"},
            {"major": "finance",   "rate": 87.2, "salary": 9500,  "region": "上海"},
            {"major": "accounting","rate": 89.5, "salary": 8200,  "region": "北京"},
            {"major": "journalism","rate": 82.3, "salary": 7500,  "region": "北京"},
            {"major": "law",       "rate": 79.8, "salary": 7800,  "region": "北京"},
            {"major": "med",       "rate": 90.2, "salary": 8800,  "region": "上海"},
            {"major": "edu",       "rate": 91.5, "salary": 7200,  "region": "全国"},
            {"major": "design",    "rate": 84.6, "salary": 7800,  "region": "深圳"},
            {"major": "me",        "rate": 92.8, "salary": 9800,  "region": "上海"},
            {"major": "ee",        "rate": 93.6, "salary": 10500, "region": "深圳"},
            {"major": "bio",       "rate": 78.5, "salary": 7200,  "region": "北京"},
            {"major": "env",       "rate": 80.2, "salary": 7500,  "region": "北京"},
            {"major": "chem",      "rate": 83.4, "salary": 8800,  "region": "上海"},
            {"major": "math",      "rate": 88.6, "salary": 9200,  "region": "北京"}
        ],
        "2025": [
            {"major": "cs",        "rate": 93.8, "salary": 11000, "region": "北京"},
            {"major": "se",        "rate": 95.2, "salary": 12000, "region": "北京"},
            {"major": "is",        "rate": 92.8, "salary": 12200, "region": "北京"},
            {"major": "ai",        "rate": 90.5, "salary": 14000, "region": "北京"},
            {"major": "data_sci",  "rate": 90.2, "salary": 12500, "region": "上海"},
            {"major": "finance",   "rate": 86.5, "salary": 9200,  "region": "上海"},
            {"major": "accounting","rate": 88.8, "salary": 8000,  "region": "北京"},
            {"major": "journalism","rate": 81.5, "salary": 7200,  "region": "北京"},
            {"major": "law",       "rate": 78.9, "salary": 7500,  "region": "北京"},
            {"major": "med",       "rate": 89.6, "salary": 8500,  "region": "上海"},
            {"major": "edu",       "rate": 90.8, "salary": 7000,  "region": "全国"},
            {"major": "design",    "rate": 83.2, "salary": 7500,  "region": "深圳"},
            {"major": "me",        "rate": 91.9, "salary": 9500,  "region": "上海"},
            {"major": "ee",        "rate": 92.8, "salary": 10000, "region": "深圳"},
            {"major": "bio",       "rate": 77.8, "salary": 7000,  "region": "北京"},
            {"major": "env",       "rate": 79.5, "salary": 7200,  "region": "北京"},
            {"major": "chem",      "rate": 82.6, "salary": 8500,  "region": "上海"},
            {"major": "math",      "rate": 87.2, "salary": 8800,  "region": "北京"}
        ],
        "2024": [
            {"major": "cs",        "rate": 93.5, "salary": 10500, "region": "北京"},
            {"major": "se",        "rate": 94.8, "salary": 11500, "region": "北京"},
            {"major": "is",        "rate": 92.0, "salary": 11800, "region": "北京"},
            {"major": "ai",        "rate": 89.2, "salary": 13500, "region": "北京"},
            {"major": "data_sci",  "rate": 89.6, "salary": 12000, "region": "上海"},
            {"major": "finance",   "rate": 85.8, "salary": 8800,  "region": "上海"},
            {"major": "accounting","rate": 88.2, "salary": 7800,  "region": "北京"},
            {"major": "journalism","rate": 80.8, "salary": 7000,  "region": "北京"},
            {"major": "law",       "rate": 78.2, "salary": 7300,  "region": "北京"},
            {"major": "med",       "rate": 89.0, "salary": 8200,  "region": "上海"},
            {"major": "edu",       "rate": 90.2, "salary": 6800,  "region": "全国"},
            {"major": "design",    "rate": 82.5, "salary": 7200,  "region": "深圳"},
            {"major": "me",        "rate": 91.2, "salary": 9200,  "region": "上海"},
            {"major": "ee",        "rate": 92.0, "salary": 9800,  "region": "深圳"},
            {"major": "bio",       "rate": 77.2, "salary": 6800,  "region": "北京"},
            {"major": "env",       "rate": 78.8, "salary": 7000,  "region": "北京"},
            {"major": "chem",      "rate": 81.8, "salary": 8200,  "region": "上海"},
            {"major": "math",      "rate": 86.5, "salary": 8500,  "region": "北京"}
        ],
        "2023": [
            {"major": "cs",        "rate": 92.8, "salary": 9800,  "region": "北京"},
            {"major": "se",        "rate": 94.2, "salary": 10800, "region": "北京"},
            {"major": "is",        "rate": 91.5, "salary": 11200, "region": "北京"},
            {"major": "ai",        "rate": 88.0, "salary": 12800, "region": "北京"},
            {"major": "data_sci",  "rate": 88.8, "salary": 11500, "region": "上海"},
            {"major": "finance",   "rate": 85.2, "salary": 8500,  "region": "上海"},
            {"major": "accounting","rate": 87.5, "salary": 7500,  "region": "北京"},
            {"major": "journalism","rate": 80.2, "salary": 6800,  "region": "北京"},
            {"major": "law",       "rate": 77.5, "salary": 7000,  "region": "北京"},
            {"major": "med",       "rate": 88.5, "salary": 8000,  "region": "上海"},
            {"major": "edu",       "rate": 89.8, "salary": 6500,  "region": "全国"},
            {"major": "design",    "rate": 81.8, "salary": 7000,  "region": "深圳"},
            {"major": "me",        "rate": 90.5, "salary": 8800,  "region": "上海"},
            {"major": "ee",        "rate": 91.5, "salary": 9500,  "region": "深圳"},
            {"major": "bio",       "rate": 76.5, "salary": 6500,  "region": "北京"},
            {"major": "env",       "rate": 78.2, "salary": 6800,  "region": "北京"},
            {"major": "chem",      "rate": 81.0, "salary": 8000,  "region": "上海"},
            {"major": "math",      "rate": 85.8, "salary": 8200,  "region": "北京"}
        ],
        "2022": [
            {"major": "cs",        "rate": 91.5, "salary": 9200,  "region": "北京"},
            {"major": "se",        "rate": 93.5, "salary": 10200, "region": "北京"},
            {"major": "is",        "rate": 90.8, "salary": 10500, "region": "北京"},
            {"major": "ai",        "rate": 86.5, "salary": 12000, "region": "北京"},
            {"major": "data_sci",  "rate": 87.5, "salary": 10800, "region": "上海"},
            {"major": "finance",   "rate": 84.5, "salary": 8200,  "region": "上海"},
            {"major": "accounting","rate": 86.8, "salary": 7200,  "region": "北京"},
            {"major": "journalism","rate": 79.5, "salary": 6500,  "region": "北京"},
            {"major": "law",       "rate": 76.8, "salary": 6800,  "region": "北京"},
            {"major": "med",       "rate": 88.0, "salary": 7800,  "region": "上海"},
            {"major": "edu",       "rate": 89.2, "salary": 6300,  "region": "全国"},
            {"major": "design",    "rate": 81.0, "salary": 6800,  "region": "深圳"},
            {"major": "me",        "rate": 89.8, "salary": 8500,  "region": "上海"},
            {"major": "ee",        "rate": 90.8, "salary": 9200,  "region": "深圳"},
            {"major": "bio",       "rate": 75.8, "salary": 6300,  "region": "北京"},
            {"major": "env",       "rate": 77.5, "salary": 6500,  "region": "北京"},
            {"major": "chem",      "rate": 80.2, "salary": 7800,  "region": "上海"},
            {"major": "math",      "rate": 85.0, "salary": 8000,  "region": "北京"}
        ]
    },

    salary: {
        "cs":        {"<6000": 8,  "6000-8000": 15, "8000-10000": 28, "10000-15000": 35, "15000+": 14},
        "se":        {"<6000": 6,  "6000-8000": 12, "8000-10000": 25, "10000-15000": 38, "15000+": 19},
        "is":        {"<6000": 5,  "6000-8000": 10, "8000-10000": 22, "10000-15000": 40, "15000+": 23},
        "ai":        {"<6000": 4,  "6000-8000": 8,  "8000-10000": 18, "10000-15000": 35, "15000+": 35},
        "data_sci":  {"<6000": 6,  "6000-8000": 12, "8000-10000": 26, "10000-15000": 37, "15000+": 19},
        "finance":   {"<6000": 12, "6000-8000": 28, "8000-10000": 32, "10000-15000": 22, "15000+": 6},
        "accounting":{"<6000": 18, "6000-8000": 35, "8000-10000": 30, "10000-15000": 15, "15000+": 2},
        "journalism":{"<6000": 25, "6000-8000": 40, "8000-10000": 22, "10000-15000": 10, "15000+": 3},
        "law":       {"<6000": 20, "6000-8000": 35, "8000-10000": 28, "10000-15000": 12, "15000+": 5},
        "med":       {"<6000": 15, "6000-8000": 30, "8000-10000": 32, "10000-15000": 18, "15000+": 5},
        "edu":       {"<6000": 35, "6000-8000": 40, "8000-10000": 18, "10000-15000": 6,  "15000+": 1},
        "design":    {"<6000": 22, "6000-8000": 38, "8000-10000": 25, "10000-15000": 12, "15000+": 3},
        "me":        {"<6000": 10, "6000-8000": 25, "8000-10000": 35, "10000-15000": 22, "15000+": 8},
        "ee":        {"<6000": 8,  "6000-8000": 18, "8000-10000": 30, "10000-15000": 30, "15000+": 14},
        "bio":       {"<6000": 28, "6000-8000": 38, "8000-10000": 20, "10000-15000": 10, "15000+": 4},
        "env":       {"<6000": 25, "6000-8000": 40, "8000-10000": 22, "10000-15000": 10, "15000+": 3},
        "chem":      {"<6000": 18, "6000-8000": 32, "8000-10000": 28, "10000-15000": 16, "15000+": 6},
        "math":      {"<6000": 15, "6000-8000": 28, "8000-10000": 30, "10000-15000": 20, "15000+": 7}
    },

    destination: {
        "by_major": {
            "cs": {
                "毕业": [["直接就业", 62], ["考研", 22], ["出国深造", 8], ["公务员/事业单位", 5], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "se": {
                "毕业": [["直接就业", 68], ["考研", 18], ["出国深造", 9], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1], ["待就业", 1]]
            },
            "is": {
                "毕业": [["直接就业", 65], ["考研", 20], ["出国深造", 8], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "ai": {
                "毕业": [["直接就业", 70], ["考研", 16], ["出国深造", 10], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1], ["待就业", 1]]
            },
            "data_sci": {
                "毕业": [["直接就业", 66], ["考研", 19], ["出国深造", 9], ["公务员/事业单位", 3], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "finance": {
                "毕业": [["直接就业", 58], ["考研", 25], ["出国深造", 10], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "accounting": {
                "毕业": [["直接就业", 62], ["考研", 20], ["出国深造", 6], ["公务员/事业单位", 8], ["自由职业/灵活就业", 3], ["待就业", 1]]
            },
            "journalism": {
                "毕业": [["直接就业", 52], ["考研", 28], ["出国深造", 8], ["公务员/事业单位", 6], ["自由职业/灵活就业", 5], ["待就业", 1]]
            },
            "law": {
                "毕业": [["直接就业", 45], ["考研", 32], ["出国深造", 6], ["公务员/事业单位", 12], ["自由职业/灵活就业", 3], ["待就业", 2]]
            },
            "med": {
                "毕业": [["直接就业", 48], ["考研", 40], ["出国深造", 5], ["公务员/事业单位", 5], ["自由职业/灵活就业", 1], ["待就业", 1]]
            },
            "edu": {
                "毕业": [["直接就业", 55], ["考研", 30], ["出国深造", 4], ["公务员/事业单位", 8], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "design": {
                "毕业": [["直接就业", 58], ["考研", 15], ["出国深造", 5], ["公务员/事业单位", 3], ["自由职业/灵活就业", 18], ["待就业", 1]]
            },
            "me": {
                "毕业": [["直接就业", 65], ["考研", 22], ["出国深造", 6], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "ee": {
                "毕业": [["直接就业", 68], ["考研", 18], ["出国深造", 8], ["公务员/事业单位", 3], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "bio": {
                "毕业": [["直接就业", 42], ["考研", 38], ["出国深造", 10], ["公务员/事业单位", 5], ["自由职业/灵活就业", 3], ["待就业", 2]]
            },
            "env": {
                "毕业": [["直接就业", 48], ["考研", 32], ["出国深造", 8], ["公务员/事业单位", 8], ["自由职业/灵活就业", 3], ["待就业", 1]]
            },
            "chem": {
                "毕业": [["直接就业", 50], ["考研", 35], ["出国深造", 8], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2], ["待就业", 1]]
            },
            "math": {
                "毕业": [["直接就业", 52], ["考研", 30], ["出国深造", 10], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2], ["待就业", 2]]
            }
        }
    },

    trend: {
        "cs": {
            "2022": {"employment": 91.5, "salary": 9200},
            "2023": {"employment": 92.8, "salary": 9800},
            "2024": {"employment": 93.5, "salary": 10500},
            "2025": {"employment": 93.8, "salary": 11000},
            "2026": {"employment": 94.2, "salary": 11500}
        },
        "se": {
            "2022": {"employment": 93.5, "salary": 10200},
            "2023": {"employment": 94.2, "salary": 10800},
            "2024": {"employment": 94.8, "salary": 11500},
            "2025": {"employment": 95.2, "salary": 12000},
            "2026": {"employment": 95.8, "salary": 12500}
        },
        "is": {
            "2022": {"employment": 90.8, "salary": 10500},
            "2023": {"employment": 91.5, "salary": 11200},
            "2024": {"employment": 92.0, "salary": 11800},
            "2025": {"employment": 92.8, "salary": 12200},
            "2026": {"employment": 93.5, "salary": 12800}
        },
        "ai": {
            "2022": {"employment": 86.5, "salary": 12000},
            "2023": {"employment": 88.0, "salary": 12800},
            "2024": {"employment": 89.2, "salary": 13500},
            "2025": {"employment": 90.5, "salary": 14000},
            "2026": {"employment": 92.0, "salary": 15000}
        },
        "data_sci": {
            "2022": {"employment": 87.5, "salary": 10800},
            "2023": {"employment": 88.8, "salary": 11500},
            "2024": {"employment": 89.6, "salary": 12000},
            "2025": {"employment": 90.2, "salary": 12500},
            "2026": {"employment": 91.5, "salary": 13000}
        },
        "finance": {
            "2022": {"employment": 84.5, "salary": 8200},
            "2023": {"employment": 85.2, "salary": 8500},
            "2024": {"employment": 85.8, "salary": 8800},
            "2025": {"employment": 86.5, "salary": 9200},
            "2026": {"employment": 87.2, "salary": 9500}
        },
        "accounting": {
            "2022": {"employment": 86.8, "salary": 7200},
            "2023": {"employment": 87.5, "salary": 7500},
            "2024": {"employment": 88.2, "salary": 7800},
            "2025": {"employment": 88.8, "salary": 8000},
            "2026": {"employment": 89.5, "salary": 8200}
        },
        "journalism": {
            "2022": {"employment": 79.5, "salary": 6500},
            "2023": {"employment": 80.2, "salary": 6800},
            "2024": {"employment": 80.8, "salary": 7000},
            "2025": {"employment": 81.5, "salary": 7200},
            "2026": {"employment": 82.3, "salary": 7500}
        },
        "law": {
            "2022": {"employment": 76.8, "salary": 6800},
            "2023": {"employment": 77.5, "salary": 7000},
            "2024": {"employment": 78.2, "salary": 7300},
            "2025": {"employment": 78.9, "salary": 7500},
            "2026": {"employment": 79.8, "salary": 7800}
        },
        "med": {
            "2022": {"employment": 88.0, "salary": 7800},
            "2023": {"employment": 88.5, "salary": 8000},
            "2024": {"employment": 89.0, "salary": 8200},
            "2025": {"employment": 89.6, "salary": 8500},
            "2026": {"employment": 90.2, "salary": 8800}
        },
        "edu": {
            "2022": {"employment": 89.2, "salary": 6300},
            "2023": {"employment": 89.8, "salary": 6500},
            "2024": {"employment": 90.2, "salary": 6800},
            "2025": {"employment": 90.8, "salary": 7000},
            "2026": {"employment": 91.5, "salary": 7200}
        },
        "design": {
            "2022": {"employment": 81.0, "salary": 6800},
            "2023": {"employment": 81.8, "salary": 7000},
            "2024": {"employment": 82.5, "salary": 7200},
            "2025": {"employment": 83.2, "salary": 7500},
            "2026": {"employment": 84.6, "salary": 7800}
        },
        "me": {
            "2022": {"employment": 89.8, "salary": 8500},
            "2023": {"employment": 90.5, "salary": 8800},
            "2024": {"employment": 91.2, "salary": 9200},
            "2025": {"employment": 91.9, "salary": 9500},
            "2026": {"employment": 92.8, "salary": 9800}
        },
        "ee": {
            "2022": {"employment": 90.8, "salary": 9200},
            "2023": {"employment": 91.5, "salary": 9500},
            "2024": {"employment": 92.0, "salary": 9800},
            "2025": {"employment": 92.8, "salary": 10000},
            "2026": {"employment": 93.6, "salary": 10500}
        },
        "bio": {
            "2022": {"employment": 75.8, "salary": 6300},
            "2023": {"employment": 76.5, "salary": 6500},
            "2024": {"employment": 77.2, "salary": 6800},
            "2025": {"employment": 77.8, "salary": 7000},
            "2026": {"employment": 78.5, "salary": 7200}
        },
        "env": {
            "2022": {"employment": 77.5, "salary": 6500},
            "2023": {"employment": 78.2, "salary": 6800},
            "2024": {"employment": 78.8, "salary": 7000},
            "2025": {"employment": 79.5, "salary": 7200},
            "2026": {"employment": 80.2, "salary": 7500}
        },
        "chem": {
            "2022": {"employment": 80.2, "salary": 7800},
            "2023": {"employment": 81.0, "salary": 8000},
            "2024": {"employment": 81.8, "salary": 8200},
            "2025": {"employment": 82.6, "salary": 8500},
            "2026": {"employment": 83.4, "salary": 8800}
        },
        "math": {
            "2022": {"employment": 85.0, "salary": 8000},
            "2023": {"employment": 85.8, "salary": 8200},
            "2024": {"employment": 86.5, "salary": 8500},
            "2025": {"employment": 87.2, "salary": 8800},
            "2026": {"employment": 88.6, "salary": 9200}
        }
    },

    // ========== 扩展院校就业数据（精选8所）==========
    univEmployment: {
        "qinghua": {
            "cs":        {"rate": 97.2, "salary": 15800, "region": "北京", "destination": [["直接就业", 68], ["考研", 18], ["出国深造", 11], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "se":        {"rate": 97.8, "salary": 16500, "region": "北京", "destination": [["直接就业", 72], ["考研", 15], ["出国深造", 10], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "ai":        {"rate": 96.5, "salary": 18500, "region": "北京", "destination": [["直接就业", 75], ["考研", 13], ["出国深造", 9], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "ee":        {"rate": 97.0, "salary": 15200, "region": "北京", "destination": [["直接就业", 70], ["考研", 16], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "math":      {"rate": 95.8, "salary": 12800, "region": "北京", "destination": [["直接就业", 55], ["考研", 30], ["出国深造", 10], ["公务员/事业单位", 4], ["自由职业/灵活就业", 1]]}
        },
        "beida": {
            "cs":        {"rate": 96.8, "salary": 15500, "region": "北京", "destination": [["直接就业", 65], ["考研", 20], ["出国深造", 12], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "finance":   {"rate": 94.5, "salary": 12800, "region": "北京", "destination": [["直接就业", 60], ["考研", 22], ["出国深造", 12], ["公务员/事业单位", 5], ["自由职业/灵活就业", 1]]},
            "law":       {"rate": 92.8, "salary": 10500, "region": "北京", "destination": [["直接就业", 48], ["考研", 35], ["出国深造", 8], ["公务员/事业单位", 8], ["自由职业/灵活就业", 1]]},
            "journalism":{"rate": 91.5, "salary": 9800,  "region": "北京", "destination": [["直接就业", 55], ["考研", 30], ["出国深造", 10], ["公务员/事业单位", 4], ["自由职业/灵活就业", 1]]},
            "math":      {"rate": 96.2, "salary": 13200, "region": "北京", "destination": [["直接就业", 58], ["考研", 28], ["出国深造", 11], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]}
        },
        "fudan": {
            "cs":        {"rate": 96.5, "salary": 15200, "region": "上海", "destination": [["直接就业", 67], ["考研", 19], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "finance":   {"rate": 95.2, "salary": 13500, "region": "上海", "destination": [["直接就业", 62], ["考研", 20], ["出国深造", 13], ["公务员/事业单位", 4], ["自由职业/灵活就业", 1]]},
            "med":       {"rate": 94.8, "salary": 11800, "region": "上海", "destination": [["直接就业", 50], ["考研", 42], ["出国深造", 5], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "data_sci":  {"rate": 95.8, "salary": 14800, "region": "上海", "destination": [["直接就业", 68], ["考研", 18], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "journalism":{"rate": 92.2, "salary": 10200, "region": "上海", "destination": [["直接就业", 58], ["考研", 28], ["出国深造", 9], ["公务员/事业单位", 4], ["自由职业/灵活就业", 1]]}
        },
        "shangjiao": {
            "cs":        {"rate": 97.0, "salary": 16000, "region": "上海", "destination": [["直接就业", 70], ["考研", 16], ["出国深造", 11], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "se":        {"rate": 97.5, "salary": 17000, "region": "上海", "destination": [["直接就业", 74], ["考研", 14], ["出国深造", 9], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "ee":        {"rate": 97.2, "salary": 15800, "region": "上海", "destination": [["直接就业", 72], ["考研", 15], ["出国深造", 10], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "me":        {"rate": 96.8, "salary": 13500, "region": "上海", "destination": [["直接就业", 68], ["考研", 20], ["出国深造", 8], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "ai":        {"rate": 96.8, "salary": 17800, "region": "上海", "destination": [["直接就业", 73], ["考研", 14], ["出国深造", 10], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]}
        },
        "zheda": {
            "cs":        {"rate": 96.8, "salary": 15500, "region": "杭州", "destination": [["直接就业", 66], ["考研", 18], ["出国深造", 12], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "se":        {"rate": 97.2, "salary": 16200, "region": "杭州", "destination": [["直接就业", 70], ["考研", 16], ["出国深造", 11], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "ee":        {"rate": 96.5, "salary": 14800, "region": "杭州", "destination": [["直接就业", 68], ["考研", 18], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]},
            "med":       {"rate": 95.2, "salary": 12200, "region": "杭州", "destination": [["直接就业", 52], ["考研", 40], ["出国深造", 5], ["公务员/事业单位", 2], ["自由职业/灵活就业", 1]]},
            "ai":        {"rate": 96.0, "salary": 17200, "region": "杭州", "destination": [["直接就业", 71], ["考研", 15], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]}
        },
        "nanjing": {
            "cs":        {"rate": 95.5, "salary": 14200, "region": "南京", "destination": [["直接就业", 65], ["考研", 20], ["出国深造", 10], ["公务员/事业单位", 4], ["自由职业/灵活就业", 1]]},
            "ai":        {"rate": 94.8, "salary": 16200, "region": "南京", "destination": [["直接就业", 68], ["考研", 17], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 2]]},
            "journalism":{"rate": 90.8, "salary": 9500,  "region": "南京", "destination": [["直接就业", 52], ["考研", 30], ["出国深造", 8], ["公务员/事业单位", 7], ["自由职业/灵活就业", 3]]},
            "law":       {"rate": 91.5, "salary": 10200, "region": "南京", "destination": [["直接就业", 50], ["考研", 33], ["出国深造", 7], ["公务员/事业单位", 9], ["自由职业/灵活就业", 1]]}
        },
        "wuhan": {
            "cs":        {"rate": 95.8, "salary": 14500, "region": "武汉", "destination": [["直接就业", 64], ["考研", 19], ["出国深造", 11], ["公务员/事业单位", 4], ["自由职业/灵活就业", 2]]},
            "law":       {"rate": 91.2, "salary": 9800,  "region": "武汉", "destination": [["直接就业", 47], ["考研", 34], ["出国深造", 7], ["公务员/事业单位", 10], ["自由职业/灵活就业", 2]]},
            "med":       {"rate": 94.5, "salary": 11500, "region": "武汉", "destination": [["直接就业", 49], ["考研", 41], ["出国深造", 6], ["公务员/事业单位", 3], ["自由职业/灵活就业", 1]]}
        },
        "dianji": {
            "cs":        {"rate": 96.2, "salary": 15000, "region": "成都", "destination": [["直接就业", 67], ["考研", 17], ["出国深造", 11], ["公务员/事业单位", 3], ["自由职业/灵活就业", 2]]},
            "ee":        {"rate": 96.8, "salary": 14800, "region": "成都", "destination": [["直接就业", 69], ["考研", 16], ["出国深造", 10], ["公务员/事业单位", 3], ["自由职业/灵活就业", 2]]},
            "ai":        {"rate": 95.5, "salary": 16500, "region": "成都", "destination": [["直接就业", 72], ["考研", 15], ["出国深造", 9], ["公务员/事业单位", 2], ["自由职业/灵活就业", 2]]}
        }
    },

    compareList: []
};