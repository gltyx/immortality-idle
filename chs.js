/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Activities": "活动",
    "Attributes": "属性",
    "Battles": "战斗",
    "Be careful, the world can be a dangerous place.": "小心，世界可能是一个危险的地方。",
    "Dark Mode": "黑暗模式",
    "Equipment": "设备",
    "Hard Reset": "硬重置",
    "Health": "健康",
    "How will you spend your days?": "你将如何度过你的日子？",
    "Immortality Idle - Can you become an immortal?": "Immortality Idle - 你能成为神仙吗？",
    "Inventory": "存货",
    "It may take you many reincarnations before you achieve your goals, but with each new life you will rise with greater aptitudes that allow you to learn and grow faster.": "在实现目标之前，您可能需要多次轮回，但随着每一次新的生活，您将获得更大的才能，让您能够更快地学习和成长。",
    "local_library": "local_library",
    "Log": "日志",
    "Look for Trouble": "找麻烦",
    "Mana": "法力",
    "Money:": "钱：",
    "Newest messages appear at the top, so read from the bottom up.": "最新消息显示在顶部，因此请从下往上阅读。",
    "Nutrition": "营养",
    "Odd Jobs": "奇怪的工作",
    "Once in a very long while, a soul emerges from the chaos that is destined for immortality. You are such a soul.": "很长一段时间，一个灵魂从注定永生的混乱中出现。你就是这样的灵魂。",
    "Reincarnate": "转世",
    "Resting": "休息",
    "Restores some stamina and a little health.": "恢复一些耐力和一点健康。",
    "Run errands, pull weeds, clean toilet pits, or do whatever else you can to earn a coin. Undignified work for a future immortal, but you have to eat to live.": "跑腿、除草、清理马桶坑，或者做任何你能做的事情来赚取硬币。为未来的不朽而做不尊严的工作，但你必须吃饭才能生活。",
    "Show Combat Messages": "显示战斗信息",
    "Show Event Messages": "显示事件消息",
    "Show Story Messages": "显示故事消息",
    "Stamina": "耐力",
    "Take a break and get some sleep. Good sleeping habits are essential for cultivating immortal attributes.": "休息一下，睡一觉。良好的睡眠习惯是修炼神仙属性必不可少的。",
    "This game should be hosted on immortalityidle.github.io. If you see it somewhere else, it's stolen.": "",
    "upload": "upload",
    "Uses 5 stamina. Increases a random attribute and provides a little money.": "消耗5点耐力。增加一个随机属性，提供一点钱。",
    "You expect to live 30 years.": "你预计能活 30 年。",
    "You live in a Squatter Tent": "你住在寮屋帐篷里",
    "Your journey to immortality begins as a humble youth leaves home to experience the world. Choose the activities that will help you cultivate the attributes of an immortal.": "你的永生之旅始于一个卑微的青年离开家去体验这个世界。选择有助于培养神仙属性的活动。",
    "A store that sells special manuals for aspiring immortals.": "出售有志神仙专用手册的商店。",
    "Achievements!": "成就！",
    "Autosaves fire every couple of minutes, but sometimes an immortal needs to save right now.": "自动保存每隔几分钟就会触发一次，但有时不朽者需要立即保存。",
    "Configuration options for purchased items.": "购买项目的配置选项。",
    "Import or export your save game file. Sometimes immortals need a different browser.": "导入或导出您保存的游戏文件。 有时神仙需要不同的浏览器。",
    "Voluntarily end this life, allowing your current attributes to strengthen your aptitudes in the next life.": "自愿结束这一生，让你现在的属性来强化你来生的能力。",
    "Begging": "乞讨",
    "Fighting": "战斗",
    "Show Combat Messages  (new)": "显示战斗信息（新）",
    "Fight": "战斗",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "add": "add",
    "add_business": "add_business",
    "bar_chart": "bar_chart",
    "calendar_month": "calendar_month",
    "castle": "castle",
    "help": "help",
    "home": "home",
    "flare": "flare",
    "fitness_center": "fitness_center",
    "fort": "fort",
    "grass": "grass",
    "directions_run": "directions_run",
    "military_tech": "military_tech",
    "manage_accounts": "manage_accounts",
    "play_arrow": "play_arrow",
    "pause": "pause",
    "save": "save",
    "shield": "shield",
    "timer": "timer",
    "waves": "waves",
    "arrow_backward": "arrow_backward",
    "arrow_forward": "arrow_forward",
    "clear": "clear",
    "crisis_alert": "crisis_alert",
    "remove": "remove",
    "soup_kitchen": "soup_kitchen",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Intelligence: ": "智力：",
    "Strength: ": "力量：",
    "Speed: ": "速度：",
    "Toughness: ": "坚韧：",
    "Charisma: ": "魅力：",
    "A Pesky Mouse": "一只讨厌的老鼠",
    "Odd Jobs (": "奇怪的工作 （",
    "Some troublemakers stole some money while you were sleeping. It might be time to get some walls.": "有些麻烦制造者在你睡觉时偷了一些钱。 可能是时候弄一些墙了。",
    "Uses 5 stamina. Increases charisma and provides a little money.": "消耗5点耐力。 增加魅力并提供一点钱。",
    "You collapse to the ground, completely exhausted. It takes you 5 days to recover enough to work again.": "你瘫倒在地，筋疲力尽。 您需要 5 天时间才能恢复到足以再次工作的程度。",
    "Find a nice spot on the side of the street, look sad, and put your hand out. Someone might put a coin in it if you are charasmatic enough.": "在街边找一个好地方，看起来很伤心，然后伸出你的手。 如果你足够有魅力，有人可能会在里面投一枚硬币。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^ \(([\d\.]+)\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^It costs (.+) taels per day to maintain your home$/, '维护您的房屋每天花费 $1 银两'],
    [/^You are (.+) years, (.+) days old.$/, '你活了 $1 岁 $2 天。'],
    [/^You own (.+) open plots of land and (.+) fields$/, '您拥有 $1 开放的土地和 $2 田地'],
    [/^Use offline time to accelerate reality. (.+) time ticks left.$/, '利用离线时间加速现实。 还剩 $1 时间tick。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) day\)$/, '$1 天）'],
    [/^([\d\.]+) Taels$/, '$1 银两'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);