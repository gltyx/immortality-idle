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
    "Activities": "动作",
    "Attributes": "属性",
    "Battles": "战斗",
    "Be careful, the world can be a dangerous place.": "小心，世界可能是一个危险的地方。",
    "Dark Mode": "黑暗模式",
    "Equipment": "装备",
    "Hard Reset": "硬重置",
    "Health": "健康",
    "How will you spend your days?": "你将如何度过你的日子？",
    "Immortality Idle - Can you become an immortal?": "不朽放置 - 你能成为神仙吗？",
    "Inventory": "仓库",
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
    "Choose activities to add to your schedule. At first you'll only know how to do a few things, but as you develop your attributes more options will become available. Click the button or drag and drop the activity you want to put on your schedule.": "选择要添加到您的日程安排的活动。 起初你只会知道如何做一些事情，但随着你的属性的发展，更多的选择将变得可用。 单击按钮或拖放您要添加到日程表中的活动。",
    "Plow a field. Converts a plot of land to a field. You'll need to work at farming it to make it produce much food. Once the harvest is over, you will get the food you've grown and the land will be available again. Shift-click to plow 10 fields, Ctrl-click to plow all your land.": "犁地。 将一块土地转换为田地。 你需要努力耕种它以使其产生大量食物。 收获结束后，您将获得种植的食物，土地将再次可用。 按住 Shift 键可耕种 10 个田地，按住 Ctrl 键可耕种所有土地。",
    "Accuracy. Your chance to hit monsters when you attack them. Based on your speed.": "准确性。攻击怪物时有机会击中怪物。基于你的速度。",
    "Attack Power. The damage you will do when you hit a monster. Based on your strength and weapons.": "攻击力。击中怪物时会造成的伤害。根据你的力量和武器。",
    "Basic Attributes: < 1 year": "基本属性：< 1 年",
    "Defense": "防御",
    "Defense. Reduces damage when a monster hits you. Based on your toughness and armor.": "防御。当怪物击中你时减少伤害。根据你的韧性和护甲。",
    "Get a better house. A better home will cost 100 taels and take up 1 land.": "换个好点的房子。一个更好的房子将花费 100 两并占用 1 块土地。",
    "Monsters come out at night. You'll need to be strong enough to fight them off if you want to become an immortal.": "怪物在晚上出来。如果你想成为不朽者，你需要足够强大来击退他们。",
    "Pause the game (spacebar). Clicking this again while paused will step time forward a single day.": "暂停游戏（空格键）。在暂停时再次单击此按钮将使时间前进一天。",
    "Remove this activity from the schedule.": "从计划中删除此活动。",
    "Resting (1 day)": "休息（1天）",
    "Spend fewer days on this. Shift-click to remove 10 days.": "花更少的时间在这上面。按住 Shift 单击以删除 10 天。",
    "Spend more days on this. Shift-click to add 10 days.": "花更多的时间在这上面。按住 Shift 单击以添加 10 天。",
    "Standard Game Speed": "标准游戏速度",
    "View your farm.": "查看您的农场。",
    "Your base lifespan of 30 years is extended by": "您的 30 年基本寿命延长",
    "Your home is an essential part of your life. A better home allows you to recover and has room for furniture that can aid your immortal development.": "你的家是你生活中必不可少的一部分。一个更好的家可以让您恢复健康，并为家具提供空间，帮助您的永生发展。",
    "It takes you a few years to grow up and remember your purpose: to become an immortal. You're all grown up now, so get to it!": "你需要几年的时间才能长大并记住你的目标：成为神仙。 你们都长大了，那就加油吧！",
    "You have failed to achieve immortality and your life has ended. Don't worry, I'm sure you'll achieve immortality in your next life.": "你未能实现不朽，你的生命已经结束。 别担心，我相信你下辈子一定会长生不老。",
    "Clear a field. Converts a the field back into an open plot of land. Shift-click to clear 10 fields, Ctrl-click to clear all your fields.": "清除一块田地。 将田地改回为开阔的土地。 Shift-单击清除 10 田地，Ctrl-单击清除所有田地。",
    "You were defeated by a pesky mouse": "你被一只讨厌的老鼠打败了",
    "Your Farm": "你的农场",
    "A dirty tent pitched in an unused field. Costs nothing, but you get what you pay for. The mice around here are pretty nasty and you might get robbed by bandits.": "一个肮脏的帐篷搭在未使用的田野上。 不花钱，但你得到你所支付的。 这里的老鼠很讨厌，你可能会被土匪抢劫。",
    "Import/Export Save File": "导入/导出存档文件",
    "An Infant Spider": "一只婴儿蜘蛛",
    "Burning Things": "燃烧的东西",
    "Did you need more trouble in your life? If you don't have a monster to fight, get one. Be careful, they get stronger as they go.": "你的生活需要更多麻烦吗？ 如果你没有怪物要打，那就找一个。 小心，他们走的时候会变得更强壮。",
    "Farming": "农业",
    "Light things on fire and watch them burn.": "点燃东西，看着它们燃烧。",
    "Plant crops in your fields. This is a waste of time if you don't have some fields ready to work.": "在你的田地里种植庄稼。 如果您没有准备好工作的某些字段，这是浪费时间。",
    "Uses 20 stamina. Increases strength and speed and helps your fields to produce more food.": "消耗20体力。 增加力量和速度，帮助您的田地生产更多食物。",
    "Uses 5 stamina. You will be charged for what you burn. Teaches you to love fire.": "消耗5点耐力。 你会为你燃烧的东西付费。 教你爱火。",
    "A spirit gem dropped by a monster.": "A spirit gem dropped by a monster.",
    "Attack Power": "Attack Power",
    "You've gone through eight cycles of reincarnation and come to understand the value of grandfathers.": "经历了八轮轮回，你才明白祖父的价值。",
    "Get a better house. A better home will cost 1,000 taels and take up 5 land.": "换个好点的房子。 一个更好的家将花费1000两，并占用5块土地。",
    "It costs 1 tael per day to maintain your home": "维护您的房屋每天需要花费 1 两",
    "Rice": "大米",
    "You finished upgrading your home. You now live in a Tent of Your Own": "你完成了你的家的升级。 你现在住在自己的帐篷里",
    "You live in a Tent of Your Own": "你住在自己的帐篷里",
    "You start upgrading your home to a Tent of Your Own": "您开始将您的家升级为您自己的帐篷",
    "You worked toward immortality for ten years across your lifetimes and unlocked the Manual of Expeditious Time Perception": "你在你的一生中为永生努力了十年，并解锁了快速时间感知手册",
    "Fishing": "钓鱼",
    "Grab your net and see if you can catch some fish.": "抓住你的网，看看你能不能钓到一些鱼。",
    "Uses 50 stamina. Increases intelligence and strength and you might catch a fish.": "消耗50体力。 增加智力和力量，你可能会钓到鱼。",
    "Your grandfather gives you a bit of land and helps you set up a tent on  it.": "你的祖父给了你一块土地，并帮助你在上面搭起帐篷。",
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
    "delete_sweep": "delete_sweep",
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
    "Monster Gem Grade ": "怪物宝石 级别",
    "Begging (": "乞讨 (",
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
    [/^You own (.+) open plot of land and (.+) fields$/, '您拥有 $1 开放的土地和 $2 田地'],
    [/^You own (.+) open plots of land and (.+) fields$/, '您拥有 $1 开放的土地和 $2 田地'],
    [/^Use offline time to accelerate reality. (.+) time ticks left.$/, '利用离线时间加速现实。 还剩 $1 时间tick。'],
    [/^You starve to death at the age of (.+) years, (.+) days.$/, '你在 $1 岁 $2 天时饿死。'],
    [/^Congratulations! The cycle of reincarnation has brought you back into the world. You have been born again. You are certain that lucky life number (.+) will be the one.$/, '恭喜！ 轮回的循环把你带回了这个世界。 你已经重生了。 你确信幸运的生命 $1 号就是那个。'],
    [/^You succumb to your wounds and die at the age of (.+) years, (.+) days.$/, '你屈服于你的伤口，在 $1 岁 $2 天时死去。'],
    [/^Your (.+) fields produced an average of (.+) food per day over the last year.$/, '您的 $1 田地在过去一年中平均每天生产 $2 食物。'],
    [/^Your aptitude for charisma increased by (.+)$/, '你的 魅力 天赋增加了 $1'],
    [/^Your aptitude for speed increased by (.+)$/, '你的 速度 天赋增加了 $1'],
    [/^Your aptitude for toughness increased by (.+)$/, '你的 坚韧 天赋增加了 $1'],
    [/^Your aptitude for strength increased by (.+)$/, '你的 力量 天赋增加了 $1'],
    [/^Your aptitude for intelligence increased by (.+)$/, '你的 智力 天赋增加了 $1'],
    [/^Buy a plot of land for (.+) taels. Shift-click to buy 10 plots, Ctrl-click to buy all the land you can afford.$/, '$1 银两买一块地。 Shift-click 购买 10 个地块，Ctrl-click 购买所有你能买得起的土地。'],
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