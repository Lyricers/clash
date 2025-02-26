const inArg = $arguments;

const FG = ['🇭🇰','🇲🇴','🇹🇼','🇯🇵','🇰🇷','🇸🇬','🇺🇸','🇬🇧','🇫🇷','🇩🇪','🇦🇺','🇦🇪','🇦🇫','🇦🇱','🇩🇿','🇦🇴','🇦🇷','🇦🇲','🇦🇹','🇦🇿','🇧🇭','🇧🇩','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇷','🇭🇷','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇫🇯','🇫🇮','🇬🇦','🇬🇲','🇬🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇹','🇬🇳','🇬🇾','🇭🇹','🇭🇳','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇯🇴','🇰🇿','🇰🇪','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇹','🇱🇺','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇷','🇲🇺','🇲🇽','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇵','🇳🇱','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇰🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇦','🇵🇾','🇵🇪','🇵🇭','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇱','🇸🇰','🇸🇮','🇸🇴','🇿🇦','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇻🇮','🇺🇬','🇺🇦','🇺🇾','🇺🇿','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼','🇦🇩','🇷🇪','🇵🇱','🇬🇺','🇻🇦','🇱🇮','🇨🇼','🇸🇨','🇦🇶','🇬🇮','🇨🇺','🇫🇴','🇦🇽','🇧🇲','🇹🇱'];
const EN = ['HKG','MAC','TPE','JPN','KOR','SGP','USA','GBR','FRA','DEU','AUS','ARE','AFG','ALB','DZA','AGO','ARG','ARM','AUT','AZE','BHR','BGD','BLR','BEL','BLZ','BEN','BTN','BOL','BIH','BWA','BRA','VGB','BRN','BGR','BFA','BDI','KHM','CMR','CAN','CPV','CYM','CAF','TCD','CHL','COL','COM','COG','COD','CRI','HRV','CYP','CZE','DNK','DJI','DOM','ECU','EGY','SLV','GNQ','ERI','EST','ETH','FJI','FIN','GAB','GMB','GEO','GHA','GRC','GRL','GTM','GIN','GUY','HTI','HND','HUN','ISL','IND','IDN','IRN','IRQ','IRL','IMN','ISR','ITA','CIV','JAM','JOR','KAZ','KEN','KWT','KGZ','LAO','LVA','LBN','LSO','LBR','LBY','LTU','LUX','MKD','MDG','MWI','MYS','MDV','MLI','MLT','MRT','MUS','MEX','MDA','MCO','MNG','MNE','MAR','MOZ','MMR','NAM','NPL','NLD','NZL','NIC','NER','NGA','PRK','NOR','OMN','PAK','PAN','PRY','PER','PHL','PRT','PRI','QAT','ROU','RUS','RWA','SMR','SAU','SEN','SRB','SLE','SVK','SVN','SOM','ZAF','ESP','LKA','SDN','SUR','SWZ','SWE','CHE','SYR','TJK','TZA','THA','TGO','TON','TTO','TUN','TUR','TKM','VIR','UGA','UKR','URY','UZB','VEN','VNM','YEM','ZMB','ZWE','AND','REU','POL','GUM','VAT','LIE','CUW','SYC','ATA','GIB','CUB','FRO','ALA','BMU','TLS'];
const ZH = ['香港','澳门','台湾','日本','韩国','新加坡','美国','英国','法国','德国','澳大利亚','阿联酋','阿富汗','阿尔巴尼亚','阿尔及利亚','安哥拉','阿根廷','亚美尼亚','奥地利','阿塞拜疆','巴林','孟加拉国','白俄罗斯','比利时','伯利兹','贝宁','不丹','玻利维亚','波斯尼亚和黑塞哥维那','博茨瓦纳','巴西','英属维京群岛','文莱','保加利亚','布基纳法索','布隆迪','柬埔寨','喀麦隆','加拿大','佛得角','开曼群岛','中非共和国','乍得','智利','哥伦比亚','科摩罗','刚果(布)','刚果(金)','哥斯达黎加','克罗地亚','塞浦路斯','捷克','丹麦','吉布提','多米尼加共和国','厄瓜多尔','埃及','萨尔瓦多','赤道几内亚','厄立特里亚','爱沙尼亚','埃塞俄比亚','斐济','芬兰','加蓬','冈比亚','格鲁吉亚','加纳','希腊','格陵兰','危地马拉','几内亚','圭亚那','海地','洪都拉斯','匈牙利','冰岛','印度','印尼','伊朗','伊拉克','爱尔兰','马恩岛','以色列','意大利','科特迪瓦','牙买加','约旦','哈萨克斯坦','肯尼亚','科威特','吉尔吉斯斯坦','老挝','拉脱维亚','黎巴嫩','莱索托','利比里亚','利比亚','立陶宛','卢森堡','马其顿','马达加斯加','马拉维','马来','马尔代夫','马里','马耳他','毛利塔尼亚','毛里求斯','墨西哥','摩尔多瓦','摩纳哥','蒙古','黑山共和国','摩洛哥','莫桑比克','缅甸','纳米比亚','尼泊尔','荷兰','新西兰','尼加拉瓜','尼日尔','尼日利亚','朝鲜','挪威','阿曼','巴基斯坦','巴拿马','巴拉圭','秘鲁','菲律宾','葡萄牙','波多黎各','卡塔尔','罗马尼亚','俄罗斯','卢旺达','圣马力诺','沙特阿拉伯','塞内加尔','塞尔维亚','塞拉利昂','斯洛伐克','斯洛文尼亚','索马里','南非','西班牙','斯里兰卡','苏丹','苏里南','斯威士兰','瑞典','瑞士','叙利亚','塔吉克斯坦','坦桑尼亚','泰国','多哥','汤加','特立尼达和多巴哥','突尼斯','土耳其','土库曼斯坦','美属维尔京群岛','乌干达','乌克兰','乌拉圭','乌兹别克斯坦','委内瑞拉','越南','也门','赞比亚','津巴布韦','安道尔','留尼汪','波兰','关岛','梵蒂冈','列支敦士登','库拉索','塞舌尔','南极','直布罗陀','古巴','法罗群岛','奥兰群岛','百慕达','东帝汶'];

// 需要排除的关键词
const excludeKeywords = [
    /分割/, /余额/, /群/, /到期/, /剩余/, /重置/, /套餐/, /官网/, /10x/, 
    /网址/, /网站/, /充值/, /更新/, /地址/, /国内/, /永久/, /教学/, /com/, /www/, /69/, /购买/
];

// 关键词对应备注
const remarkKeywords = [
    { key: /高速/, value: "HS" },
    { key: /低速/, value: "LS" },
    { key: /专线/, value: "DL" },
    { key: /解锁|流媒体/, value: "Strm" } // 统一处理，避免重复
];

// 额外备注关键词
const extraRemarks = [
    { key: /测试|Test/i, value: "Test" },
    { key: /Unmetered|无限流量/i, value: "UnLD" },
    { key: /EMBY/i, value: "Emby" },
    { key: /禁下载|No Download/i, value: "BDl" },
    { key: /禁视频|No Video/i, value: "BVd" },
    { key: /可长期下载/i, value: "ADl" }
];

// **服务器提供商列表**
const serverProviders = [
    "AWS", "Google Cloud", "Azure", "Alibaba Cloud", "Tencent Cloud", "Cloudflare", "Oracle Cloud",
    "Linode", "Vultr", "DigitalOcean", "Hetzner", "OVH", "Contabo", "LeaseWeb", "G-Core", "StackPath",
    "Fastly", "Akamai", "CloudFront", "BunnyCDN"
];

// **预定义城市列表（修正匹配问题）**
const cityList = [
    "东京", "大阪", "名古屋", "福冈", "札幌", "横滨", "神户", "广岛", "仙台",  
"首尔", "釜山", "仁川", "大邱",  
"洛杉矶", "纽约", "芝加哥", "达拉斯", "硅谷", "圣何塞", "圣地亚哥", "波士顿",  
    "华盛顿", "迈阿密", "西雅图", "亚特兰大", "费城", "休斯敦", "拉斯维加斯",  
    "奥斯汀", "丹佛", "底特律", "凤凰城", "明尼阿波利斯", "圣路易斯", "波特兰",  
    "圣安东尼奥", "奥兰多", "夏洛特", "匹兹堡", "巴尔的摩", "纳什维尔", "堪萨斯城",  
    "哥伦布", "印第安纳波利斯", "新奥尔良", "盐湖城", "坦帕", "圣地亚哥", "萨克拉门托",  
    "辛辛那提", "克利夫兰", "密尔沃基", "路易斯维尔",  
"多伦多", "温哥华", "蒙特利尔",  
"伦敦", "伯明翰", "曼彻斯特", "爱丁堡",  
"巴黎", "马赛", "里昂", "波尔多",  
"法兰克福", "柏林", "汉堡", "慕尼黑", "杜塞尔多夫", "科隆",  
"阿姆斯特丹", "鹿特丹",  
"马德里", "巴塞罗那", "瓦伦西亚",  
"罗马", "米兰", "那不勒斯",  
"悉尼", "墨尔本", "布里斯班", "珀斯",  
"新加坡", "台北", "高雄",  
"曼谷", "清迈", "普吉",  
"吉隆坡", "槟城",  
"胡志明市", "河内", "岘港",  
"雅加达", "泗水", "万隆",  
"迪拜", "阿布扎比",  
"伊斯坦布尔", "安卡拉",  
"墨西哥城", "瓜达拉哈拉", "蒙特雷",  
"圣保罗", "里约热内卢", "布宜诺斯艾利斯", "圣地亚哥"
];

// **修正城市匹配逻辑**
function findCity(name) {
    return cityList.find(city => {
        let regex = new RegExp(`\\b${city}\\b`, "i"); // 确保是完整词
        return regex.test(name);
    });
}

function renameNodes(proxies) {
    let processedNodes = [];
    let countryGroups = {}; // 按国家分组存储节点

    proxies.forEach((node) => {
        let name = node.name;

        // 1. 过滤包含排除关键词的节点
        if (excludeKeywords.some(regex => regex.test(name))) {
            return; // 直接跳过该节点
        }

        let country = "", flag = "", countryCode = "", countryCN = "";

        // 2. 识别国家
        for (let i = 0; i < ZH.length; i++) {
            if (name.includes(ZH[i]) || name.includes(EN[i]) || name.includes(FG[i])) {
                country = ZH[i];
                countryCN = ZH[i];
                flag = FG[i];
                countryCode = EN[i];
                break;
            }
        }

        // 3. 如果无法识别国家，设为“未知”
        if (!country) {
            flag = "🌍";
            countryCN = "未知";
            countryCode = "Unknown";
        }

        // 4. 识别节点类型
        let type = "AirP";
        if (/自建/.test(name)) type = "ZiJian";
        else if (/合租/.test(name)) type = "Hezu";

        // 5. 识别备注信息
        let remarks = [];

        // 5.1 原有备注匹配
        extraRemarks.forEach(({ key, value }) => {
            if (key.test(name)) {
                remarks.push(value);
            }
        });

        // 5.2 关键词备注匹配
        remarkKeywords.forEach(({ key, value }) => {
            if (key.test(name) && !remarks.includes(value)) {
                remarks.push(value);
            }
        });

        // 5.3 额外备注：宽带大小（如 100Mbps、1Gbps）
        let bandwidthMatch = name.match(/(\d+(\.\d+)?[MG]bps)/i);
        if (bandwidthMatch) {
            remarks.push(bandwidthMatch[1]);
        }

        // 5.4 **匹配服务器提供商**
        let providerMatch = serverProviders.find(provider => name.includes(provider));
        if (providerMatch) {
            remarks.push(providerMatch);
        }

        // 5.5 **匹配城市列表（修正误匹配）**
        let cityMatch = findCity(name);
        if (cityMatch) {
            remarks.push(cityMatch);
        }

        // 6. 识别倍率
        let multiplier = "1.0x";
        let multiplierMatch = name.match(/(?<!\d)(\d+(\.\d+)?)\s?[xX倍](?!\w)/);
        if (multiplierMatch) {
            multiplier = multiplierMatch[1] + "x";
        }

        // 7. 组合最终名称
        let finalName = `${flag} ${countryCN} ${countryCode} ${type}`;
        if (remarks.length > 0) finalName += ` ${remarks.join(" ")}`;
        finalName += ` - ${multiplier}`;

        // 8. 按国家分组存储
        if (!countryGroups[countryCode]) {
            countryGroups[countryCode] = [];
        }
        countryGroups[countryCode].push({ name: finalName, originalNode: node });
    });

    // 9. 按国家排序编号
    Object.keys(countryGroups).forEach(countryCode => {
        // 按名称长度排序，短的排前
        countryGroups[countryCode].sort((a, b) => a.name.length - b.name.length);

        // 重新编号
        countryGroups[countryCode].forEach((nodeData, index) => {
            let nodeNumber = String(index + 1).padStart(2, "0"); // 编号格式 01, 02, ...
            nodeData.originalNode.name = `${nodeData.name.replace(" -", ` ${nodeNumber} -`)}`; // 插入编号
            processedNodes.push(nodeData.originalNode);
        });
    });

    return processedNodes;
}

// 处理节点
const updatedNodes = renameNodes(proxies);
return updatedNodes;
