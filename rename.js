const inArg = $arguments;

const FG = ['🇭🇰','🇲🇴','🇹🇼','🇯🇵','🇰🇷','🇸🇬','🇺🇸','🇬🇧','🇫🇷','🇩🇪','🇦🇺','🇦🇪','🇦🇫','🇦🇱','🇩🇿','🇦🇴','🇦🇷','🇦🇲','🇦🇹','🇦🇿','🇧🇭','🇧🇩','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇷','🇭🇷','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇫🇯','🇫🇮','🇬🇦','🇬🇲','🇬🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇹','🇬🇳','🇬🇾','🇭🇹','🇭🇳','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇯🇴','🇰🇿','🇰🇪','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇹','🇱🇺','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇷','🇲🇺','🇲🇽','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇵','🇳🇱','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇰🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇦','🇵🇾','🇵🇪','🇵🇭','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇱','🇸🇰','🇸🇮','🇸🇴','🇿🇦','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇻🇮','🇺🇬','🇺🇦','🇺🇾','🇺🇿','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼','🇦🇩','🇷🇪','🇵🇱','🇬🇺','🇻🇦','🇱🇮','🇨🇼','🇸🇨','🇦🇶','🇬🇮','🇨🇺','🇫🇴','🇦🇽','🇧🇲','🇹🇱','🇦🇬','🇧🇧','🇦🇼','🇦🇬','🇧🇧','🇦🇼','🇸🇧','🇲🇪'];
const EN = ['HKG','MAC','TPE','JPN','KOR','SGP','USA','GBR','FRA','DEU','AUS','ARE','AFG','ALB','DZA','AGO','ARG','ARM','AUT','AZE','BHR','BGD','BLR','BEL','BLZ','BEN','BTN','BOL','BIH','BWA','BRA','VGB','BRN','BGR','BFA','BDI','KHM','CMR','CAN','CPV','CYM','CAF','TCD','CHL','COL','COM','COG','COD','CRI','HRV','CYP','CZE','DNK','DJI','DOM','ECU','EGY','SLV','GNQ','ERI','EST','ETH','FJI','FIN','GAB','GMB','GEO','GHA','GRC','GRL','GTM','GIN','GUY','HTI','HND','HUN','ISL','IND','IDN','IRN','IRQ','IRL','IMN','ISR','ITA','CIV','JAM','JOR','KAZ','KEN','KWT','KGZ','LAO','LVA','LBN','LSO','LBR','LBY','LTU','LUX','MKD','MDG','MWI','MYS','MDV','MLI','MLT','MRT','MUS','MEX','MDA','MCO','MNG','MNE','MAR','MOZ','MMR','NAM','NPL','NLD','NZL','NIC','NER','NGA','PRK','NOR','OMN','PAK','PAN','PRY','PER','PHL','PRT','PRI','QAT','ROU','RUS','RWA','SMR','SAU','SEN','SRB','SLE','SVK','SVN','SOM','ZAF','ESP','LKA','SDN','SUR','SWZ','SWE','CHE','SYR','TJK','TZA','THA','TGO','TON','TTO','TUN','TUR','TKM','VIR','UGA','UKR','URY','UZB','VEN','VNM','YEM','ZMB','ZWE','AND','REU','POL','GUM','VAT','LIE','CUW','SYC','ATA','GIB','CUB','FRO','ALA','BMU','TLS','ATG','BRB','ABW','SLB','MNE'];
const ZH = ['香港','澳门','台湾','日本','韩国','新加坡','美国','英国','法国','德国','澳大利亚','阿联酋','阿富汗','阿尔巴尼亚','阿尔及利亚','安哥拉','阿根廷','亚美尼亚','奥地利','阿塞拜疆','巴林','孟加拉国','白俄罗斯','比利时','伯利兹','贝宁','不丹','玻利维亚','波斯尼亚和黑塞哥维那','博茨瓦纳','巴西','英属维京群岛','文莱','保加利亚','布基纳法索','布隆迪','柬埔寨','喀麦隆','加拿大','佛得角','开曼群岛','中非共和国','乍得','智利','哥伦比亚','科摩罗','刚果(布)','刚果(金)','哥斯达黎加','克罗地亚','塞浦路斯','捷克','丹麦','吉布提','多米尼加共和国','厄瓜多尔','埃及','萨尔瓦多','赤道几内亚','厄立特里亚','爱沙尼亚','埃塞俄比亚','斐济','芬兰','加蓬','冈比亚','格鲁吉亚','加纳','希腊','格陵兰','危地马拉','几内亚','圭亚那','海地','洪都拉斯','匈牙利','冰岛','印度','印尼','伊朗','伊拉克','爱尔兰','马恩岛','以色列','意大利','科特迪瓦','牙买加','约旦','哈萨克斯坦','肯尼亚','科威特','吉尔吉斯斯坦','老挝','拉脱维亚','黎巴嫩','莱索托','利比里亚','利比亚','立陶宛','卢森堡','马其顿','马达加斯加','马拉维','马来西亚','马尔代夫','马里','马耳他','毛利塔尼亚','毛里求斯','墨西哥','摩尔多瓦','摩纳哥','蒙古','黑山共和国','摩洛哥','莫桑比克','缅甸','纳米比亚','尼泊尔','荷兰','新西兰','尼加拉瓜','尼日尔','尼日利亚','朝鲜','挪威','阿曼','巴基斯坦','巴拿马','巴拉圭','秘鲁','菲律宾','葡萄牙','波多黎各','卡塔尔','罗马尼亚','俄罗斯','卢旺达','圣马力诺','沙特阿拉伯','塞内加尔','塞尔维亚','塞拉利昂','斯洛伐克','斯洛文尼亚','索马里','南非','西班牙','斯里兰卡','苏丹','苏里南','斯威士兰','瑞典','瑞士','叙利亚','塔吉克斯坦','坦桑尼亚','泰国','多哥','汤加','特立尼达和多巴哥','突尼斯','土耳其','土库曼斯坦','美属维尔京群岛','乌干达','乌克兰','乌拉圭','乌兹别克斯坦','委内瑞拉','越南','也门','赞比亚','津巴布韦','安道尔','留尼汪','波兰','关岛','梵蒂冈','列支敦士登','库拉索','塞舌尔','南极','直布罗陀','古巴','法罗群岛','奥兰群岛','百慕大','东帝汶','安提瓜和巴布达','巴巴多斯','阿鲁巴','所罗门群岛','黑山'];

// 需要排除的关键词
const excludeKeywords = [
  /分割/, /余额/, /组/, /到期/, /剩余/, /重置/, /套餐/, /官网/, /续费/,/返佣/,/用不了/,/卸载/,/软件/,/没网/,
  /网址/, /网站/, /充值/, /更新/, /地址/, /国内/, /永久/, /教学/, /com/, /www/, /69/, /购买/
];

// 额外备注关键词
const extraRemarks = [
  { key: /测试|Test/i, value: "Test" },
  { key: /Unmetered|无限流量/i, value: "UnLD" },
  { key: /不限时/i, value: "PAYG" },
  { key: /流媒体解锁/i, value: "Unlocked" },
  { key: /家宽|家庭宽带/, value: "HomB" },
  { key: /专线/, value: "PlusLine" },
  { key: /深G/, value: "SZ-HK" },
  { key: /夏G/, value: "XM-HK" },
  { key: /原生/, value: "Natv" },
  { key: /游戏|GAME/, value: "Game" }
];

// 新增五个高优先级备注
const highPriorityRemarks = [
  { key: /IPLC/, value: "IPLC" },
  { key: /IEPL/, value: "IEPL" },
  { key: /BGP/, value: "BGP" },
  { key: /MPLS/, value: "MPLS" },
  { key: /MSTP/, value: "MSTP" }
];

// 服务器提供商备注
const providerRemarks = [
  "CMI", "CTG", "CUG", "BBTEC", "IIJ", "SoftBank", "NTT", "Oracle", "Alibaba", "Reprise",
  "xTom", "DMIT", "SiliCloud", "Misaka", "Nero", "Nero Pro", "AperNet", "XNNET", "Jinx",
  "Sharon", "Bandwagon", "Spartan", "Eons", "Pittqiao", "DataCom", "CNServ", "Kirino",
  "Cloudcone", "Racknerd", "Lain.sh", "AkileCloud"
];

// 新增：ISP识别备注
const ispRemarks = [
  "HKT", "Suburban", "SuburbanBB", "CHT", "Chunghwa", "AT&T", "ATT", "Astound", "RCN", "Wave", "Grande", "Frontier"
];

function renameNodes(proxies) {
  let processedNodes = [];
  let countryGroups = {}; // 按国家分组存储节点

  proxies.forEach((node) => {
    let name = node.name;

    // 1. 过滤包含排除关键词的节点
    if (excludeKeywords.some(regex => regex.test(name))) {
      return;
    }

    let country = "", flag = "", countryCode = "", countryCN = "";

    // 2. 优先使用国旗识别国家
    FG.forEach((emoji, index) => {
      if (name.includes(emoji)) {
        country = ZH[index];
        countryCN = ZH[index];
        flag = emoji;
        countryCode = EN[index];
      }
    });

    // 3. 如果国旗未识别到国家，再尝试从名称中提取
    if (!country) {
      ZH.forEach((zhName, index) => {
        if (name.includes(zhName) || name.includes(EN[index])) {
          country = zhName;
          countryCN = zhName;
          flag = FG[index];
          countryCode = EN[index];
        }
      });
    }

    // 4. 如果仍无法识别国家，设为“未知”
    if (!country) {
      flag = "🌍";
      countryCN = "未知";
      countryCode = "Unknown";
    }

    // 5. 识别节点类型
    let type = "AirP";
    if (/自建/.test(name)) type = "ZiJian";
    else if (/合租/.test(name)) type = "Hezu";

    // 6. 识别备注信息
    let remarks = [];

    // 6.1 原有备注匹配
    extraRemarks.forEach(({ key, value }) => {
      if (key.test(name)) {
        remarks.push(value);
      }
    });

    // 6.2 高优先级备注
    let hasHighPriorityRemark = false;
    highPriorityRemarks.forEach(({ key, value }) => {
      if (key.test(name)) {
        remarks.push(value);
        hasHighPriorityRemark = true;
      }
    });

    // 6.3 关键词备注匹配（专线）
    remarkKeywords.forEach(({ key, value }) => {
      if (key.test(name) && !remarks.includes(value) && !(hasHighPriorityRemark && value === "DLine")) {
        remarks.push(value);
      }
    });

    // 6.4 宽带大小识别
    let bandwidthMatch = name.match(/(\d+(\.\d+)?[MG]bps)/i);
    if (bandwidthMatch) {
      remarks.push(bandwidthMatch[1]);
    }

    // 6.5 服务器提供商备注
    providerRemarks.forEach(provider => {
      if (name.includes(provider) && !remarks.includes(provider)) {
        remarks.push(provider);
      }
    });

    // 6.6 新增：ISP识别备注
    ispRemarks.forEach(isp => {
      if (name.includes(isp) && !remarks.includes(isp)) {
        remarks.push(isp);
      }
    });

    // 7. 识别倍率
    let multiplier = "1.00x";
    let multiplierMatch = name.match(/(?<!\d)(\d+(\.\d+)?)[xX倍](?!\w)/);
    if (multiplierMatch) {
      let multiplierValue = parseFloat(multiplierMatch[1]);
      multiplier = multiplierValue.toFixed(3).replace(/0+$/, "").padEnd(4, "0") + "x";

      // 当倍率大于 5.00 时，添加 "🚨"
      if (multiplierValue > 5.00) {
        remarks.push("🚨");
      }
    }

    // 倍率为 0.00x 时添加 UnLD
    if (multiplier === "0.00x") {
      remarks.push("UnLD");
    }

    // 8. 组合最终名称
    let finalName = `${flag} ${countryCN} ${countryCode} ${type}`;
    if (remarks.length > 0) finalName += ` ${remarks.join(" ")}`;
    finalName += ` - ${multiplier}`;

    // 9. 按国家分组存储
    if (!countryGroups[countryCode]) {
      countryGroups[countryCode] = [];
    }
    countryGroups[countryCode].push({ name: finalName, originalNode: node });
  });

  // 10. 按国家排序编号
  Object.keys(countryGroups).forEach(countryCode => {
    countryGroups[countryCode].sort((a, b) => a.name.length - b.name.length);
    countryGroups[countryCode].forEach((nodeData, index) => {
      let nodeNumber = String(index + 1).padStart(2, "0");
      nodeData.originalNode.name = `${nodeData.name.replace(" -", ` ${nodeNumber} -`)}`;
      processedNodes.push(nodeData.originalNode);
    });
  });

  return processedNodes;
}

// 处理节点
const updatedNodes = renameNodes(proxies);
return updatedNodes;
