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
    "Immortality Idle - Can you become an immortal?": "不朽放置 - 你能成为不朽者吗？",
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
    "Take a break and get some sleep. Good sleeping habits are essential for cultivating immortal attributes.": "休息一下，睡一觉。良好的睡眠习惯是修炼不朽者属性必不可少的。",
    "This game should be hosted on immortalityidle.github.io. If you see it somewhere else, it's stolen.": "",
    "upload": "upload",
    "Uses 5 stamina. Increases a random attribute and provides a little money.": "消耗5点耐力。增加一个随机属性，提供一点钱。",
    "You expect to live 30 years.": "你预计能活 30 年。",
    "You live in a Squatter Tent": "你住在寮屋帐篷里",
    "Your journey to immortality begins as a humble youth leaves home to experience the world. Choose the activities that will help you cultivate the attributes of an immortal.": "你的永生之旅始于一个卑微的青年离开家去体验这个世界。选择有助于培养不朽者属性的活动。",
    "A store that sells special manuals for aspiring immortals.": "出售有志不朽者专用手册的商店。",
    "Achievements!": "成就！",
    "Autosaves fire every couple of minutes, but sometimes an immortal needs to save right now.": "自动保存每隔几分钟就会触发一次，但有时不朽者需要立即保存。",
    "Configuration options for purchased items.": "购买项目的配置选项。",
    "Import or export your save game file. Sometimes immortals need a different browser.": "导入或导出您保存的游戏文件。 有时不朽者需要不同的浏览器。",
    "Voluntarily end this life, allowing your current attributes to strengthen your aptitudes in the next life.": "自愿结束这一生，让你现在的属性来强化你来生的能力。",
    "Begging": "乞讨",
    "Fighting": "战斗",
    "Show Combat Messages  (new)": "显示战斗信息（新）",
    "Fight": "战斗",
    "Choose activities to add to your schedule. At first you'll only know how to do a few things, but as you develop your attributes more options will become available. Click the button or drag and drop the activity you want to put on your schedule.": "选择要添加到您的日程安排的活动。 起初你只会知道如何做一些事情，但随着你的属性的发展，更多的选择将变得可用。 单击按钮或拖放您要添加到日程表中的活动。",
    "Plow a field. Converts a plot of land to a field. You'll need to work at farming it to make it produce much food. Once the harvest is over, you will get the food you've grown and the land will be available again. Shift-click to plow 10 fields, Ctrl-click to plow all your land.": "犁地。 将一块土地转换为田地。 你需要努力耕种它以使其产生大量食物。 收获结束后，您将获得种植的食物，土地将再次可用。 按住 Shift 键可耕种 10 个田地，按住 Ctrl 键可耕种所有土地。",
    "Accuracy. Your chance to hit monsters when you attack them. Based on your speed.": "命中率。攻击怪物时有机会击中怪物。基于你的速度。",
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
    "It takes you a few years to grow up and remember your purpose: to become an immortal. You're all grown up now, so get to it!": "你需要几年的时间才能长大并记住你的目标：成为不朽者。 你们都长大了，那就加油吧！",
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
    "Uses 20 stamina. Increases strength and speed and helps your fields to produce more food.": "消耗20耐力。 增加力量和速度，帮助您的田地生产更多食物。",
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
    "Uses 50 stamina. Increases intelligence and strength and you might catch a fish.": "消耗50耐力。 增加智力和力量，你可能会钓到鱼。",
    "Your grandfather gives you a bit of land and helps you set up a tent on  it.": "你的祖父给了你一块土地，并帮助你在上面搭起帐篷。",
    "Followers": "追随者",
    "Show Crafting Messages": "显示制作信息",
    "You've worked 888 days of odd jobs and come to understand the value of fathers.": "你打了888天的零工，开始明白父亲的价值。",
    "Immortality Idle is a time management incremental game inspired by cultivation stories. You can choose your daily activities to survive, grow, and thrive with the goal of achieving immortality. You will probably not achieve your goal during your first lifetime. Don't worry if you die before you succeed! The attributes you develop during each life will improve your aptitudes when you are reincarnated, making your future efforts even more effective. If you persist in your growth, find balance, and seek insights, you will ultimately develop magical abilities, perform impossible tasks, and become an immortal.": "不朽放置 是一款受修炼故事启发的时间管理增量游戏。 你可以选择你的日常活动来生存、成长和茁壮成长，以实现不朽的目标。 你可能不会在你的第一个生命中实现你的目标。 不要担心，如果你在成功之前就死了！ 每一世所养成的属性，都会在你转世时提升你的资质，让你未来的努力更加有效。 如果你坚持自己的成长，找到平衡，寻求洞察力，你最终会发展出神奇的能力，完成不可能的任务，成为不朽者。",
    "As you move forward on your journey toward immortality, you will unlock many achievements. Each one can provide you with a benefit. Some achievements will allow you to purchase valuable manuals that will provide you with new abilities essential to your immortal progression. The Story messages in the game's log can help you remember your major accomplishments.": "随着您迈向不朽的旅程，您将解锁许多成就。 每个人都可以为您提供好处。 一些成就将使您能够购买有价值的手册，这些手册将为您提供对您的不朽进步至关重要的新能力。 游戏日志中的故事消息可以帮助您记住您的主要成就。",
    "You will need to eat each day to survive. If you have food in your inventory, you will automatically eat some each day. If you don't have food but you have money, you will spend a tael to buy a bowl of rice. If don't have any food or money, you put yourself at risk of starvation. Eating a healthy diet can lead to better health, more stamina, and even a longer life.": "你需要每天吃东西才能生存。 如果你的库存中有食物，你会自动每天吃一些。 如果你没有食物但你有钱，你会花一两买一碗米饭。 如果没有任何食物或金钱，您将面临饥饿的风险。 吃健康的饮食可以带来更好的健康，更多的耐力，甚至更长的寿命。",
    "Your attributes govern what you are able to do. At first, you will only be able to perform some very simple activities. As your attributes increase, you will find new activities appearing that you can try. Many of these activities will earn you money (taels), but the amount you earn depends on your attributes and knowledge of the related lore for the job. A strong and tough blacksmith with good knowledge of metal lore will make much more each day than a weak one just beginning the trade. Many activities have advanced ranks that you can achieve by increasing your attributes, and you may even create some items so good that you want to keep them for yourself.": "你的属性决定了你能做什么。 起初，您将只能执行一些非常简单的活动。 随着您的属性增加，您会发现可以尝试的新活动。 其中许多活动将为您赚取金钱（两两），但您赚取的金额取决于您的属性和对工作相关知识的了解。 与刚开始交易的软弱铁匠相比，一个对金属知识非常了解的强壮而坚韧的铁匠每天会赚更多的钱。 许多活动都有高级等级，您可以通过增加属性来实现，您甚至可以创建一些非常好的物品，以至于您想自己保留它们。",
    "Your health shows how much damage you can take before dying. Your stamina determines how much work you can do before you are exhausted. Some stamina can be recovered automatically each day depending on what kind of home and furniture you have, but you may need to take a rest day occasionally.": "你的健康表明你在死前可以承受多少伤害。 你的耐力决定了你在筋疲力尽之前可以做多少工作。 根据您拥有的房屋和家具类型，每天可以自动恢复一些耐力，但您可能需要偶尔休息一天。",
    "Your home is an important part of your life. A meager tent leaves you vulnerable to wild animals while a solid house can help you recover each day. Keeping up a home requires money each day, and better homes cost more. Not even an aspiring immortal can avoid their bills.": "你的家是你生活的重要组成部分。 简陋的帐篷让你容易受到野生动物的攻击，而坚固的房子可以帮助你每天恢复。 维持一个家每天都需要钱，而更好的房子成本更高。 即使是有抱负的不朽者也无法避免他们的账单。",
    "There are many secrets to discover and insights to learn. Many things will give you more information if you hover the mouse over them. Now, it's time to develop your potential for immortality. Get to it!": "有许多秘密要发现，也有许多见解要学习。 如果您将鼠标悬停在许多事物上，它们会为您提供更多信息。 现在，是时候发挥你的永生潜力了。 开始吧！",
    "An aspiring immortal bravely faces down their foes.": "一个有抱负的不朽者勇敢地面对他们的敌人。",
    "An aspiring immortal should have vast tracts of fertile land.": "一个有志成仙的人，应该有大片肥沃的土地。",
    "An aspiring immortal should take the red one. Take it over and over.": "一个有抱负的不朽者应该选择红色的。一遍又一遍地接受它。",
    "Ascension has its privileges.": "升天有它的特权。",
    "Bookworm": "书呆子",
    "Buy": "购买",
    "Don't hurt me!": "不要伤害我！",
    "Glug, glug, glug.": "咕噜咕噜咕噜噜",
    "Grandpa's Old Tent": "爷爷的旧帐篷",
    "Immortals are known for their vast real estate holdings.": "不朽者以其庞大的房地产资产而闻名。",
    "Immortals have discerning taste in furnishings.": "不朽者对陈设品位颇有鉴赏力。",
    "Immortals know what to use and what to toss.": "不朽者知道用什么，扔什么。",
    "Immortals should know the potential of the things they use.": "不朽者应该知道他们使用的东西的潜力。",
    "Immortals value a good home.": "不朽者看重好家。",
    "Just keep playing. I'm sure this will come to an aspiring immortal eventually.": "继续玩吧。我相信这最终会成为一个有抱负的不朽者。",
    "Just stop already, it's too much. Why would an aspiring immortal need this much?": "停下来吧，太多了。为什么一个有抱负的不朽者需要这么多？",
    "Left and right.": "左和右。",
    "Manual Of Expeditious Time Perception": "快速时间感知手册",
    "Manual Of Remembered Plans": "记忆计划手册",
    "Manuals Options": "手册选项",
    "Manuals Shop": "手册店",
    "No one can achieve this. It can't be done.": "没有人能做到这一点。这是不可能的。",
    "Ooh, shiny.": "哦，闪亮。",
    "Paternal Pride": "父亲的骄傲",
    "Played a Bit": "玩了一点",
    "Power level 10,000!": "力量等级10000！",
    "Seek the balance of the dao.": "寻求道的平衡。",
    "So much stuff.": "这么多东西。",
    "Suit up.": "装起来。",
    "The dao embraces all things in perfect harmony.": "道以完美的和谐包容万物。",
    "The game is intended to be played on a laptop or desktop computer using the Chrome browser.": "该游戏旨在使用 Chrome 浏览器在笔记本电脑或台式电脑上玩。",
    "The One Hundred Companions.": "一百个同伴。",
    "There are lots of activities an aspiring immortal can do on their way to immortality. Maybe you should try getting good at a few of them.": "有抱负的不朽者可以在通往不朽的道路上进行许多活动。也许您应该尝试擅长其中的一些。",
    "Too much stuff.": "东西太多了。",
    "Tutorial": "教程",
    "Way, way too much stuff.": "方式，东西太多了。",
    "You attack a pesky mouse but miss.": "你攻击了一只讨厌的老鼠，但是未命中。",
    "You opened the manuals shop and unlocked the Manual of Remembered Plans": "你打开了手册商店并解锁了记忆计划手册",
    "Your attributes define your growing immortal characteristics. You can grow your attributes through the activities that you choose. Aptitudes that you developed in your past lives can make it easier to develop attributes in your current life.": "你的属性定义了你不断增长的不朽特征。 您可以通过您选择的活动来增加您的属性。 你在过去的生活中培养的能力可以使你在现在的生活中更容易培养属性。",
    "Your followers can aid you in many ways. Each has a specific skill that they will use to your benefit. Followers must be taken care of, so having them will cost you some money each day, and more powerful followers will have more expensive needs you will have to take care of.": "您的追随者可以通过多种方式帮助您。 每个人都有一项特定的技能，他们将利用这些技能为您带来好处。 追随者必须得到照顾，所以拥有他们每天都会花费你一些钱，而更强大的追随者将有更昂贵的需求，你必须照顾。",
    "Achieving immortality doesn't happen overnight. It takes lifetimes of hard work. Choose how to schedule your days to take care of your basic needs and develop your immortal potential. Add activities from the activities panel. Repeat them if you want to, or rearrange them by dragging them where you want them to go.": "实现永生不会在一夜之间发生。 这需要一生的辛勤工作。 选择如何安排你的日子来满足你的基本需求并发展你不朽的潜力。 从活动面板添加活动。 如果您愿意，可以重复它们，或者通过将它们拖动到您希望它们去的地方重新排列它们。",
    "Gathering Herbs": "采集草药",
    "Search the natural world for useful herbs.": "在自然界中寻找有用的草药。",
    "This manual teaches you to automatically resume activities from your previous life. Only activities that you qualify for when you reach adulthood are available to resume.": "本手册教您自动恢复前世的活动。 只有您成年后有资格参加的活动才能恢复。",
    "This manual teaches you to perceive time as moving faster.": "这本手册教你感知时间移动得更快。",
    "Uses 10 stamina. Find herbs and learn about plants": "消耗 10 点耐力。 寻找草药并了解植物",
    "You have no food in your inventory. You will spend money on food each day to avoid starvation.": "您的库存中没有食物。 你每天都会花钱买食物以避免挨饿。",
    "You manage to kill a pesky mouse": "你设法杀死了一只讨厌的老鼠",
    "Add some musical flair to your begging.": "为您的乞讨添加一些音乐天赋。",
    "Carp": "鲤鱼",
    "Chopping Wood": "伐木",
    "Dig in the ground for useable minerals.": "在地下挖掘可用的矿物质。",
    "Rotten Patchouli": "腐烂的广藿香",
    "Smelt metal ores into usable metal.": "将金属矿石熔炼成可用金属。",
    "Smelting": "冶炼",
    "Street Performing": "街头表演",
    "Mining": "采矿",
    "Work as a woodcutter, cutting logs in the forest.": "作为一名樵夫，在森林中砍伐原木。",
    "Work for the local blacksmith. You mostly pump the bellows, but at least you're learning a trade.": "为当地的铁匠工作。 您大多是在抽风箱，但至少您正在学习交易。",
    "Uses 10 stamina. Get a log and learn about plants.": "消耗 10 点耐力。 获取木头并了解植物。",
    "Uses 20 stamina. Increases strength and sometimes finds something useful.": "消耗20耐力。 增加力量，有时会发现一些有用的东西。",
    "Uses 20 stamina. Increases toughness and intelligence. If you have metal ores, you can make them into bars.": "消耗20耐力。 增加韧性和智力。 如果你有金属矿石，你可以将它们制成锭。",
    "Uses 25 stamina. Increases strength and toughness and provides a little money.": "消耗 25 点耐力。 增加强度和韧性，并提供一点钱。",
    "Uses 5 stamina. Increases charisma and provides some money.": "消耗5点耐力。 增加魅力并提供一些金钱。",
    "Junk": "垃圾",
    "Useful herbs. Can be used in creating pills or potions.": "有用的草药。 可用于制造药丸或药水。",
    "A basic staple of life. One pouch will sustain you for a day.": "生活的基本主食。 一袋可以维持一天。",
    "Eat. Fills your belly. Shift-click items to use.": "吃。 填饱你的肚子。 按住 Shift 单击要使用的项目。",
    "Hunt for animals in the nearby woods.": "在附近的树林里寻找动物。",
    "Hunting": "打猎",
    "Sell all the junk in the whole inventory.": "出售整个库存中的所有垃圾。",
    "Sell all the junk in this inventory slot for 10 taels.  Shift-right-click items to sell the stack.": "以 10 两的价格出售此库存槽中的所有垃圾。 Shift-右键单击项目以出售堆栈。",
    "Sell one junk for 10 taels. Right-click items to sell.": "以 10 两的价格出售一件垃圾。 右键单击要出售的物品。",
    "Some metal junk.": "一些金属垃圾。",
    "Uses 50 stamina. Increases speed and a good hunt provides some meat. It might draw unwanted attention to yourself.": "消耗50耐力。 提高速度和良好的狩猎提供一些肉。 它可能会引起不必要的注意。",
    "Copper Bar": "铜条",
    "Copper Ore": "铜矿",
    "Hide": "皮毛",
    "Meat": "肉",
    "This activity requires that you go through an apprenticeship. You can only do one apprenticeship in each lifetime, so choose carefully what trade you want to learn. Once you've started, other trades may be closed off until your next life.": "此活动需要您完成学徒期。 您一生只能做一次学徒，因此请谨慎选择您想学习的行业。 一旦你开始，其他交易可能会被关闭，直到你的下一个生活。",
    "A bar of copper.": "一根铜条。",
    "A basic animal hide.": "一种基本的动物皮。",
    "Your father puts some coins in your purse before sending you on your way.": "在送你上路之前，你父亲会在你的钱包里放一些硬币。",
    "A fine bed with a cover. Curtains keep the mosquitoes off you during the night. Increases daily stamina recovery by 2 and restores a bit of health.": "一张带罩子的好床。 窗帘让蚊子在夜间远离你。 每天恢复耐力增加 2 点并恢复一点生命值。",
    "A tattered blanket. Not much, but it could keep you warm at night. Increases daily stamina recovery by 1.": "一条破烂的毯子。 不多，但它可以让你在晚上保持温暖。 每日耐力恢复增加1。",
    "A thin woven mat to sleep on. Increases daily stamina recovery by 1 and restores a bit of health.": "用来睡觉的薄编织垫。 每日耐力恢复增加 1 点并恢复一点生命值。",
    "Bed Of Nails": "钉床",
    "Blanket": "毯子",
    "Buy Furniture": "购买家具",
    "Canopy Bed": "华盖床",
    "Furniture Shop": "家具店",
    "Get a better house. A better home will cost 10,000 taels and take up 10 land.": "换个好点的房子。 一个更好的家将花费10,000两，并占用10块土地。",
    "Heated Bed": "加热床",
    "Sleeping Mat": "睡垫",
    "You don't own a bed, but your home could hold one.": "您没有床，但您的家可以容纳一张。",
    "You finished upgrading your home. You now live in a Dirty Shack": "你完成了你的家的升级。 你现在住在肮脏的小屋里",
    "You live in a Dirty Shack": "你住在肮脏的小屋里",
    "You start upgrading your home to a Dirty Shack": "你开始把你的家升级成肮脏的小屋",
    "Your father puts some coins in your purse before sending you on your way.": "在送你上路之前，你父亲会在你的钱包里放一些硬币。",
    "a hungry wolf": "一只饿狼",
    "A Hungry Wolf": "一只饿狼",
    "an infant spider": "一只婴儿蜘蛛",
    "Elm Log": "榆木原木",
    "Maternal Love": "母爱",
    "Miss! a hungry wolf tries to hit you but fails.": "错过！ 一只饥饿的狼试图打你，但失败了。",
    "Miss! an infant spider tries to hit you but fails.": "错过！ 一只婴儿蜘蛛试图打你，但失败了。",
    "Mold metal into useful things. You might even produce something you want to keep now and then.": "将金属塑造成有用的东西。 你甚至可以不时地生产一些你想保留的东西。",
    "This Sparks Joy": "这激发了喜悦",
    "Tin Bar": "锡条",
    "Tin Ore": "锡矿",
    "Uses 25 stamina. Increases strength, toughness, and money.": "消耗 25 点耐力。 增加力量、韧性和金钱。",
    "You attack a hungry wolf but miss.": "你攻击了一只饥饿的狼，但没有击中。",
    "You attack an infant spider but miss.": "你攻击了一只幼年蜘蛛但没有击中。",
    "You manage to kill a hungry wolf": "你设法杀死了一只饥饿的狼",
    "You manage to kill an infant spider": "你设法杀死了一只婴儿蜘蛛",
    "You used 888 items and unlocked the Manual of Facilitated Usage": "你使用了 888 件物品并解锁了便利使用手册",
    "You've done 888 days of begging and come to understand the value of mothers.": "888天的乞讨，你明白了妈妈的价值。",
    "A bar of tin.": "一根锡条。",
    "A terrible quality log.": "一些质量糟糕的木头。",
    "Your mother gives you three big bags of rice as she sends you out to make your way in the world.": "你妈妈送你出去闯荡世界时，给了你三袋大米。",
    "Apprentice Leatherworking": "制皮学徒",
    "Apprentice Woodworking": "木工学徒",
    "Uses 20 stamina. Increases speed and toughness and provides a little money.": "消耗20耐力。 增加速度和韧性并提供一点钱。",
    "Uses 20 stamina. Increases strength and intelligence and provides a little money.": "消耗20耐力。 增加力量和智力并提供一点钱。",
    "Work in a tannery, where hides are turned into leather items.": "在制革厂工作，将生皮变成皮革制品。",
    "Work in a woodcarver's shop.": "在一家木雕店工作。",
    "Move the crowds with your stirring speeches.": "用你激动人心的演讲感动人群。",
    "Uses 5 stamina. Increases charisma and provides money.": "消耗5点耐力。 增加魅力并提供金钱。",
    "A bucket of water that lets you splash water on your face. Increases charisma.": "一桶水，可让您将水溅到脸上。 增加魅力。",
    "A luxurious tub where you can get sparkling clean. Increases charisma and health recovery.": "一个豪华的浴缸，您可以在其中得到闪闪发光的清洁。 增加魅力和健康恢复。",
    "A luxurious tub with its own heating stove. Good for your health and beauty.": "带有自己加热炉的豪华浴缸。 有益于您的健康和美丽。",
    "A tall and narrow tub where you can squat and bathe. Increases charisma and health recovery.": "一个又高又窄的浴缸，您可以在其中蹲下和洗澡。 增加魅力和健康恢复。",
    "A wash basin with a rag to clean yourself. Increases charisma.": "用抹布清洁自己的洗脸盆。 增加魅力。",
    "Bronze Tub": "青铜浴缸",
    "Heated Tub": "加热浴缸",
    "Wash Basin": "洗脸盆",
    "Water Bucket": "水桶",
    "Wooden Tub": "木制浴缸",
    "You finished upgrading your home. You now live in a Simple Hut": "你完成了你的家的升级。 你现在住在一个简单的小屋里",
    "You live in a Simple Hut": "你住在一个简单的小屋里",
    "You start upgrading your home to a Simple Hut": "您开始将您的家升级为简易小屋",
    "Charm your way into civic leadership.": "用魅力进入公民领导。",
    "Get a better house. A better home will cost 100,000 taels and take up 20 land.": "换个好点的房子。 一个更好的家将花费100,000两，并占用20块土地。",
    "Uses 5 stamina. Increases charisma, provides money, and makes you wonder what any of this means for your immortal progression.": "消耗5点耐力。 增加魅力，提供金钱，让你想知道这对你的不朽进步意味着什么。",
    "a puny spider": "一只小蜘蛛",
    "A Puny Spider": "一只小蜘蛛",
    "Miss! a puny spider tries to hit you but fails.": "未命中！ 一只小蜘蛛试图打你，但失败了。",
    "You attack a puny spider but miss.": "你攻击了一只弱小的蜘蛛，但没有击中。",
    "You manage to kill a puny spider": "你设法杀死了一只小蜘蛛",
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
    "person": "person",
    "menu_book": "menu_book",
    "emoji_food_beverage": "emoji_food_beverage",
    "forest": "forest",
    "landslide": "landslide",
    "model_training": "model_training",
    "pets": "pets",
    "hardware": "hardware",
    "attach_money": "attach_money",
    "auto_awesome": "auto_awesome",
    "paid": "paid",
    "shopping_basket": "shopping_basket",
    "shopping_cart": "shopping_cart",
    "bed": "bed",
    "diamond": "diamond",
    "bathtub": "bathtub",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Discord": "Discord",
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
    "A new enemy comes along to trouble your sleep: ": "一个新的敌人来打扰你的睡眠：",
    "Miss! a pesky mouse tries to hit you but fails.": "未命中！ 一只讨厌的老鼠试图打你，但失败了。",
    "a pesky mouse": "一只讨厌的老鼠",
    "Animal Handling: ": "动物处理：",
    "Apprentice Blacksmithing": "铁匠学徒",
    "Gathering Herbs": "采集草药",
    "Fishing": "钓鱼",
    "Farming": "耕种",
    "Metal Lore: ": "金属知识：",
    "Water Lore: ": "水文知识：",
    "Earth Lore: ": "土地知识：",
    "Wood Lore: ": "木头知识：",
    "Street Performing": "街头表演",
    "Hunting": "打猎",
    "Mining": "采矿",
    "Smelting": "锻造",
    "Your aptitude for Animalhandling increased by ": "你的 驯兽能力 提高了 ",
    "Your aptitude for Charisma increased by ": "你的 魅力天赋 增加了 ",
    "Your aptitude for Earthlore increased by ": "你的 土地知识 能力提高了 ",
    "Your aptitude for Intelligence increased by ": "你的 智力天赋 提高了 ",
    "Your aptitude for Metallore increased by ": "你的 金属天赋 增加了 ",
    "Your aptitude for Speed increased by ": "你的 速度天赋 增加了 ",
    "Your aptitude for Strength increased by ": "你的 力量天赋 增加了 ",
    "Your aptitude for Toughness increased by ": "你的 坚韧天赋 增加了 ",
    "Your aptitude for Waterlore increased by ": "你的 水文知识 天赋增加了 ",
    "Your aptitude for Woodlore increased by ": "你的 木头知识 天赋增加了 ",
    "You can't afford the upkeep on your home. Some thugs rough you up over the debt. You better get some money, fast.": "你负担不起你家的保养费用。 一些暴徒因债务而对你大发雷霆。 你最好快点弄点钱。",
    "Chopping Wood": "伐木",
    "Journeyman Blacksmithing": "熟练的铁匠",
    "Oration": "演说",
    "Politics": "从政",
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
    /^未命中！(.+)$/,
    /^哦！(.+)$/,
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
    [/^Ow! an infant spider hit you for (.+) damage$/, '哦！ 一只婴儿蜘蛛对你造成 $1 伤害'],
    [/^Ow! a puny spider hit you for (.+) damage$/, '哦！ 一只小蜘蛛对你造成 $1 伤害'],
    [/^Ow! a hungry wolf hit you for (.+) damage$/, '哦！ 一只饿狼对你造成 $1 伤害'],
    [/^Ow! a pesky mouse hit you for (.+) damage$/, '哦！ 一只讨厌的老鼠对你造成 $1 伤害'],
    [/^Ow! a pesky mouse hit you for (.+) damage (.+)$/, '哦！ 一只讨厌的老鼠对你造成 $1 伤害 $2'],
    [/^ \((.+) day\)$/, ' （$1 天）'],
    [/^ \((.+) days\)$/, ' （$1 天）'],
    [/^([\d\.,]+) days\)$/, '$1 天）'],
    [/^You expect to live (.+) years.$/, '你预计能活 $1 岁。'],
    [/^You reach the end of your natural life and pass away from natural causes at the age of (.+) years, (.+) days.$/, '您在 $1 岁零 $2 天达到自然生命的终点并从自然原因中去世。'],
    [/^You attack a hungry wolf for (.+) damage$/, '你攻击了一只饿狼，造成 $1 伤害'],
    [/^You attack a puny spider for (.+) damage$/, '你攻击了一只小蜘蛛，造成 $1 伤害'],
    [/^You attack a pesky mouse for (.+) damage$/, '你攻击了一只讨厌的老鼠，造成 $1 伤害'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^An immortal must understand the workings of the universe. Your aptitude of (.+) multiplies your gains by (.+).$/, '不朽者必须了解宇宙的运作。 你 $1 的资质将你的收益乘以 $2。'],
    [/^An immortal must influence the hearts and minds of others. Your aptitude of (.+) multiplies your gains by (.+).$/, '不朽者必须影响他人的心灵。 你 $1 的资质将你的收益乘以 $2。'],
    [/^An immortal must have raw physical power. Your aptitude of (.+) multiplies your gains by (.+).$/, '不朽者必须拥有原始的耐力。 你 $1 的资质将你的收益乘以 $2。'],
    [/^An immortal must develop resilience to endure hardship. Your aptitude of (.+) multiplies your gains by (.+).$/, '一个不朽的人必须培养适应困难的能力。 您 $1 的资质将您的收益乘以 $2。'],
    [/^An immortal must be quick of foot and hand. Your aptitude of (.+) multiplies your gains by (.+).$/, '不朽者必须手脚敏捷。 你 $1 的资质将你的收益乘以 $2。'],
    [/^Skill in working with animals and monsters. Your aptitude of (.+) multiplies your gains by (.+).$/, '擅长与动物和怪物打交道。 你 $1 的资质将你的收益乘以 $2。'],
    [/^Understanding metals and how to forge and use them. Your aptitude of (.+) multiplies your gains by (.+).$/, '了解金属以及如何锻造和使用它们。 你 $1 的资质将你的收益乘以 $2。'],
    [/^Understanding plants and how to grow and care for them. Your aptitude of (.+) multiplies your gains by (.+).$/, '了解植物以及如何种植和照顾它们。 你 $1 的资质将你的收益乘以 $2。'],
    [/^Understanding potions and pills and how to make and use them. Your aptitude of (.+) multiplies your gains by (.+).$/, '了解药水和药丸以及如何制作和使用它们。 你 $1 的资质将你的收益乘以 $2。'],
    [/^Understanding the earth and how to draw power and materials from it. Your aptitude of (.+) multiplies your gains by (.+).$/, '了解地球以及如何从中获取能量和材料。 你 $1 的资质将你的收益乘以 $2。'],
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
    [/^([\d\.]+)K Taels$/, '$1K 银两'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Taels$/, '$1 银两'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);