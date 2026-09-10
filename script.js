
const TOTAL_LESSONS = 15;
const VOCAB = [{"lesson":1,"audio":"ni3","hz":"你","py":"nǐ","tj":"ту (танҳо ба як нафар)"},{"lesson":1,"audio":"hao3","hz":"好","py":"hǎo","tj":"хуб, нағз"},{"lesson":1,"audio":"nin2","hz":"您","py":"nín","tj":"шумо (бо эҳтиром)"},{"lesson":1,"audio":"nimen","hz":"你们","py":"nǐmen","tj":"шумоён (бисёр кас)"},{"lesson":1,"audio":"duibuqi","hz":"对不起","py":"duìbuqǐ","tj":"бубахшед"},{"lesson":1,"audio":"meiguanxi","hz":"没关系","py":"méi guānxi","tj":"ҳечи не, айб надорад"},{"lesson":1,"audio":"shangke","hz":"上课！","py":"Shàng kè!","tj":"Дарс сар шуд!"},{"lesson":1,"audio":"xiake","hz":"下课！","py":"Xià kè!","tj":"Дарс тамом шуд!"},{"lesson":1,"audio":"xianzaixiuxi","hz":"现在休息！","py":"Xiànzài xiūxi!","tj":"Ҳозир истироҳат кунед!"},{"lesson":1,"audio":"kanheiban","hz":"看黑板！","py":"Kàn hēibǎn!","tj":"Ба тахта нигоҳ кунед!"},{"lesson":1,"audio":"genwodu","hz":"跟我读！","py":"Gēn wǒ dú!","tj":"Аз паси ман хонед!"},{"lesson":1,"audio":"s_heng","hz":"一","py":"héng — уфуқӣ","tj":"аз чап ба рост кашида мешавад. Мисол: 一 (як), 二 (ду)"},{"lesson":1,"audio":"s_shu","hz":"丨","py":"shù — амудӣ","tj":"аз боло ба поён кашида мешавад. Мисол: 十 (даҳ), 工 (кор)"},{"lesson":1,"audio":"s_pie","hz":"丿","py":"piě — чапи поёнӣ","tj":"аз боло ба поёни чап моил мешавад. Мисол: 人 (одам), 八 (ҳашт)"},{"lesson":1,"audio":"s_dian","hz":"丶","py":"diǎn — нуқта","tj":"харфи хурди кӯтоҳ, аз боло ба поёни рост. Мисол: 不 (не), 六 (шаш)"},{"lesson":1,"audio":"num_er","hz":"二","py":"èr","tj":"ду — 2 харф, ду хатти уфуқӣ"},{"lesson":1,"audio":"num_san","hz":"三","py":"sān","tj":"се — 3 харф, аз боло ба поён"},{"lesson":1,"audio":"num_shi","hz":"十","py":"shí","tj":"даҳ — уфуқӣ, баъд амудӣ аз миён мегузарад"},{"lesson":1,"audio":"num_ba","hz":"八","py":"bā","tj":"ҳашт — аввал 撇 (чап), баъд 捺 (рост)"},{"lesson":1,"audio":"num_liu","hz":"六","py":"liù","tj":"шаш — нуқта дар боло, баъд 八-монанд дар поён"},{"lesson":2,"audio":"xiexie","hz":"谢谢","py":"xièxie","tj":"ташаккур"},{"lesson":2,"audio":"bu4","hz":"不","py":"bù","tj":"не, ин тавр не (инкор)"},{"lesson":2,"audio":"bukeqi","hz":"不客气","py":"bú kèqi","tj":"намеарзад, ташвиш накашед"},{"lesson":2,"audio":"zaijian","hz":"再见","py":"zàijiàn","tj":"то дидан, хайр"},{"lesson":2,"audio":"l2_dakaishu","hz":"打开书。","py":"Dǎkāi shū.","tj":"Китобро кушоед."},{"lesson":2,"audio":"l2_qingdashengdu","hz":"请大声读。","py":"Qǐng dà shēng dú.","tj":"Марҳамат, баланд хонед."},{"lesson":2,"audio":"l2_zaiduyibian","hz":"再读一遍。","py":"Zài dú yí biàn.","tj":"Боз як бор хонед."},{"lesson":2,"audio":"l2_yiqidu","hz":"一起读。","py":"Yìqǐ dú.","tj":"Якҷоя хонед."},{"lesson":2,"audio":"l2_youwentima","hz":"有问题吗？","py":"Yǒu wèntí ma?","tj":"Савол ҳаст?"},{"lesson":2,"audio":"s_hengzhe","hz":"㇆","py":"héngzhé — уфуқӣ-хамида","tj":"аввал уфуқӣ, баъд ба поён мехамад. Мисол: 口 (даҳон), 日 (офтоб)"},{"lesson":2,"audio":"s_shuzhe","hz":"㇄","py":"shùzhé — амудӣ-хамида","tj":"аввал амудӣ, баъд ба рост мехамад. Мисол: 山 (кӯҳ), 出 (баромадан)"},{"lesson":3,"audio":"jiao4","hz":"叫","py":"jiào","tj":"номида шудан, ном доштан"},{"lesson":3,"audio":"shenme","hz":"什么","py":"shénme","tj":"чӣ (ҷонишини саволӣ)"},{"lesson":3,"audio":"mingzi","hz":"名字","py":"míngzi","tj":"ном"},{"lesson":3,"audio":"wo3","hz":"我","py":"wǒ","tj":"ман"},{"lesson":3,"audio":"shi4","hz":"是","py":"shì","tj":"будан (феъли пайвасткунанда)"},{"lesson":3,"audio":"laoshi","hz":"老师","py":"lǎoshī","tj":"муаллим"},{"lesson":3,"audio":"ma_q","hz":"吗","py":"ma","tj":"аломати саволӣ (дар охири ҷумла)"},{"lesson":3,"audio":"xuesheng","hz":"学生","py":"xuésheng","tj":"донишҷӯ, хонанда"},{"lesson":3,"audio":"ren2","hz":"人","py":"rén","tj":"одам, шахс"},{"lesson":3,"audio":"zhongguo","hz":"中国","py":"Zhōngguó","tj":"Хитой (номи хос)"},{"lesson":3,"audio":"meiguo","hz":"美国","py":"Měiguó","tj":"Амрико (номи хос)"},{"lesson":3,"audio":"liyue","hz":"李月","py":"Lǐ Yuè","tj":"номи шахс (Ли Юэ)"},{"lesson":4,"audio":"ta1","hz":"她","py":"tā","tj":"ӯ (духтар/зан)"},{"lesson":4,"audio":"shei2","hz":"谁","py":"shéi","tj":"кӣ (ҷонишини саволӣ)"},{"lesson":4,"audio":"de5","hz":"的","py":"de","tj":"аломати тааллуқият (аз они)"},{"lesson":4,"audio":"hanyu","hz":"汉语","py":"Hànyǔ","tj":"забони хитоӣ"},{"lesson":4,"audio":"na3","hz":"哪","py":"nǎ","tj":"кадом"},{"lesson":4,"audio":"guo2","hz":"国","py":"guó","tj":"кишвар"},{"lesson":4,"audio":"ne5","hz":"呢","py":"ne","tj":"аломати саволии \"-чӣ?\""},{"lesson":4,"audio":"ta1m","hz":"他","py":"tā","tj":"ӯ (мард)"},{"lesson":4,"audio":"tongxue","hz":"同学","py":"tóngxué","tj":"ҳамсинф"},{"lesson":4,"audio":"pengyou","hz":"朋友","py":"péngyou","tj":"дӯст"},{"lesson":5,"audio":"jia1","hz":"家","py":"jiā","tj":"оила, хона"},{"lesson":5,"audio":"you3","hz":"有","py":"yǒu","tj":"доштан, будан"},{"lesson":5,"audio":"kou3","hz":"口","py":"kǒu","tj":"калимаи миқдорӣ барои аъзои оила"},{"lesson":5,"audio":"nver","hz":"女儿","py":"nǚ'ér","tj":"духтар"},{"lesson":5,"audio":"ji3","hz":"几","py":"jǐ","tj":"чанд (барои ададҳои хурд)"},{"lesson":5,"audio":"sui4","hz":"岁","py":"suì","tj":"сол (синну сол)"},{"lesson":5,"audio":"le5","hz":"了","py":"le","tj":"нишонаи тағйирот/ҳолати нав"},{"lesson":5,"audio":"jinnian","hz":"今年","py":"jīnnián","tj":"имсол"},{"lesson":5,"audio":"duo1","hz":"多","py":"duō","tj":"чӣ қадар (дараҷа)"},{"lesson":5,"audio":"da4","hz":"大","py":"dà","tj":"калон (дар бораи синну сол)"},{"lesson":5,"audio":"s_hengpie","hz":"㇇","py":"héngpiě — уфуқӣ-чапи поёнӣ","tj":"аввал уфуқӣ, баъд ба чапи поён мехамад. Мисол: 水 (об), 又 (боз)"},{"lesson":5,"audio":"s_piedian","hz":"㇘","py":"piědiǎn — чапи поёнӣ-нуқта","tj":"чапи поёнӣ, баъд бо нуқта анҷом меёбад. Мисол: 女 (зан), 好 (хуб)"},{"lesson":6,"audio":"hui4","hz":"会","py":"huì","tj":"тавонистан (бо омӯзиш ба даст омада)"},{"lesson":6,"audio":"shuo1","hz":"说","py":"shuō","tj":"гуфтан, гап задан"},{"lesson":6,"audio":"mama5","hz":"妈妈","py":"māma","tj":"модар"},{"lesson":6,"audio":"cai4","hz":"菜","py":"cài","tj":"хӯрок, таом"},{"lesson":6,"audio":"hen3","hz":"很","py":"hěn","tj":"хеле, бисёр"},{"lesson":6,"audio":"haochi3","hz":"好吃","py":"hǎochī","tj":"бомазза"},{"lesson":6,"audio":"zuo4","hz":"做","py":"zuò","tj":"тайёр кардан, кор кардан"},{"lesson":6,"audio":"xie3","hz":"写","py":"xiě","tj":"навиштан"},{"lesson":6,"audio":"hanzi4","hz":"汉字","py":"Hànzì","tj":"ҳарфи хитоӣ"},{"lesson":6,"audio":"zi4","hz":"字","py":"zì","tj":"ҳарф, калима"},{"lesson":6,"audio":"zenme3","hz":"怎么","py":"zěnme","tj":"чӣ гуна"},{"lesson":6,"audio":"du2","hz":"读","py":"dú","tj":"хондан"},{"lesson":6,"audio":"s_xiegou","hz":"㇂","py":"xiégōu — қалмоқи моил","tj":"хатти моил ба поёни рост, дар охир қалмоқ. Мисол: 我 (ман), 钱 (пул)"},{"lesson":6,"audio":"s_ti","hz":"㇀","py":"tí — болоравии рост","tj":"аз поёни чап ба болои рост мебарояд. Мисол: 我 (ман), 打 (задан)"},{"lesson":7,"audio":"qing3","hz":"请","py":"qǐng","tj":"марҳамат, лутфан"},{"lesson":7,"audio":"wen4","hz":"问","py":"wèn","tj":"пурсидан"},{"lesson":7,"audio":"jintian","hz":"今天","py":"jīntiān","tj":"имрӯз"},{"lesson":7,"audio":"hao4","hz":"号","py":"hào","tj":"рақами рӯз (дар моҳ)"},{"lesson":7,"audio":"yue4","hz":"月","py":"yuè","tj":"моҳ"},{"lesson":7,"audio":"xingqi","hz":"星期","py":"xīngqī","tj":"ҳафта"},{"lesson":7,"audio":"zuotian","hz":"昨天","py":"zuótiān","tj":"дирӯз"},{"lesson":7,"audio":"mingtian","hz":"明天","py":"míngtiān","tj":"пагоҳ"},{"lesson":7,"audio":"qu4","hz":"去","py":"qù","tj":"рафтан"},{"lesson":7,"audio":"xuexiao","hz":"学校","py":"xuéxiào","tj":"мактаб"},{"lesson":7,"audio":"kan4","hz":"看","py":"kàn","tj":"дидан, хондан"},{"lesson":7,"audio":"shu1","hz":"书","py":"shū","tj":"китоб"},{"lesson":7,"audio":"m01","hz":"一月","py":"yī yuè","tj":"январ"},{"lesson":7,"audio":"m02","hz":"二月","py":"èr yuè","tj":"феврал"},{"lesson":7,"audio":"m03","hz":"三月","py":"sān yuè","tj":"март"},{"lesson":7,"audio":"m04","hz":"四月","py":"sì yuè","tj":"апрел"},{"lesson":7,"audio":"m05","hz":"五月","py":"wǔ yuè","tj":"май"},{"lesson":7,"audio":"m06","hz":"六月","py":"liù yuè","tj":"июн"},{"lesson":7,"audio":"m07","hz":"七月","py":"qī yuè","tj":"июл"},{"lesson":7,"audio":"m08","hz":"八月","py":"bā yuè","tj":"август"},{"lesson":7,"audio":"m09","hz":"九月","py":"jiǔ yuè","tj":"сентябр"},{"lesson":7,"audio":"m10","hz":"十月","py":"shí yuè","tj":"октябр"},{"lesson":7,"audio":"m11","hz":"十一月","py":"shíyī yuè","tj":"ноябр"},{"lesson":7,"audio":"m12","hz":"十二月","py":"shí'èr yuè","tj":"декабр"},{"lesson":7,"audio":"w1","hz":"星期一","py":"xīngqī yī","tj":"душанбе"},{"lesson":7,"audio":"w2","hz":"星期二","py":"xīngqī èr","tj":"сешанбе"},{"lesson":7,"audio":"w3","hz":"星期三","py":"xīngqī sān","tj":"чоршанбе"},{"lesson":7,"audio":"w4","hz":"星期四","py":"xīngqī sì","tj":"панҷшанбе"},{"lesson":7,"audio":"w5","hz":"星期五","py":"xīngqī wǔ","tj":"ҷумъа"},{"lesson":7,"audio":"w6","hz":"星期六","py":"xīngqī liù","tj":"шанбе"},{"lesson":7,"audio":"w7","hz":"星期日","py":"xīngqīrì","tj":"якшанбе"},{"lesson":8,"audio":"xiang3","hz":"想","py":"xiǎng","tj":"хостан, майл доштан (феъли модалӣ)"},{"lesson":8,"audio":"he1","hz":"喝","py":"hē","tj":"нӯшидан"},{"lesson":8,"audio":"cha2","hz":"茶","py":"chá","tj":"чой"},{"lesson":8,"audio":"chi1","hz":"吃","py":"chī","tj":"хӯрдан"},{"lesson":8,"audio":"mifan","hz":"米饭","py":"mǐfàn","tj":"биринҷи пухта, шӯла"},{"lesson":8,"audio":"xiawu","hz":"下午","py":"xiàwǔ","tj":"баъд аз пешин"},{"lesson":8,"audio":"shangdian","hz":"商店","py":"shāngdiàn","tj":"мағоза, дӯкон"},{"lesson":8,"audio":"mai3","hz":"买","py":"mǎi","tj":"харидан"},{"lesson":8,"audio":"ge4","hz":"个","py":"gè","tj":"калимаи ченаки умумӣ"},{"lesson":8,"audio":"beizi","hz":"杯子","py":"bēizi","tj":"пиёла, стакан"},{"lesson":8,"audio":"zhe4","hz":"这","py":"zhè","tj":"ин"},{"lesson":8,"audio":"duoshao","hz":"多少","py":"duōshao","tj":"чанд, чиқадар (ҷонишини саволӣ)"},{"lesson":8,"audio":"qian2","hz":"钱","py":"qián","tj":"пул"},{"lesson":8,"audio":"kuai4","hz":"块","py":"kuài","tj":"воҳиди пул, баробари \"юан\""},{"lesson":8,"audio":"na4","hz":"那","py":"nà","tj":"он"},{"lesson":9,"audio":"xiao3","hz":"小","py":"xiǎo","tj":"хурд, майда"},{"lesson":9,"audio":"mao1","hz":"猫","py":"māo","tj":"гурба"},{"lesson":9,"audio":"zai4","hz":"在","py":"zài","tj":"будан (дар ҷое); ҳамчун пешоянд низ \"дар\""},{"lesson":9,"audio":"nar_there","hz":"那儿","py":"nàr","tj":"он ҷо"},{"lesson":9,"audio":"gou3","hz":"狗","py":"gǒu","tj":"саг"},{"lesson":9,"audio":"yizi3","hz":"椅子","py":"yǐzi","tj":"курсӣ"},{"lesson":9,"audio":"xiamian","hz":"下面(下)","py":"xiàmiàn (xià)","tj":"зери, поён"},{"lesson":9,"audio":"nar_where","hz":"哪儿","py":"nǎr","tj":"куҷо (ҷонишини саволӣ)"},{"lesson":9,"audio":"gongzuo","hz":"工作","py":"gōngzuò","tj":"кор кардан; кор (исм)"},{"lesson":9,"audio":"erzi","hz":"儿子","py":"érzi","tj":"писар"},{"lesson":9,"audio":"yiyuan","hz":"医院","py":"yīyuàn","tj":"беморхона"},{"lesson":9,"audio":"yisheng","hz":"医生","py":"yīshēng","tj":"духтур"},{"lesson":9,"audio":"baba","hz":"爸爸","py":"bàba","tj":"падар"},{"lesson":10,"audio":"zhuozi","hz":"桌子","py":"zhuōzi","tj":"миз"},{"lesson":10,"audio":"shang0","hz":"上","py":"shang","tj":"рӯй, боло"},{"lesson":10,"audio":"diannao","hz":"电脑","py":"diànnǎo","tj":"компютер"},{"lesson":10,"audio":"he2","hz":"和","py":"hé","tj":"ва (пайвандак)"},{"lesson":10,"audio":"ben3","hz":"本","py":"běn","tj":"калимаи ченак барои китоб"},{"lesson":10,"audio":"li3","hz":"里","py":"lǐ","tj":"дарун, дохил"},{"lesson":10,"audio":"qianmian","hz":"前面","py":"qiánmiàn","tj":"пеш, пешрав"},{"lesson":10,"audio":"houmian","hz":"后面","py":"hòumiàn","tj":"пас, ақиб"},{"lesson":10,"audio":"zher4","hz":"这儿","py":"zhèr","tj":"ин ҷо"},{"lesson":10,"audio":"meiyou","hz":"没有(没)","py":"méiyǒu (méi)","tj":"нест, вуҷуд надорад"},{"lesson":10,"audio":"neng2","hz":"能","py":"néng","tj":"тавонистан, иҷозат доштан (феъли модалӣ)"},{"lesson":10,"audio":"zuo4","hz":"坐","py":"zuò","tj":"нишастан"},{"lesson":11,"audio":"xianzai4","hz":"现在","py":"xiànzài","tj":"ҳозир, айни ҳол"},{"lesson":11,"audio":"dian3","hz":"点","py":"diǎn","tj":"калимаи ченаки соат"},{"lesson":11,"audio":"fen1","hz":"分","py":"fēn","tj":"калимаи ченаки дақиқа"},{"lesson":11,"audio":"zhongwu3","hz":"中午","py":"zhōngwǔ","tj":"нисфирӯзӣ"},{"lesson":11,"audio":"chifan","hz":"吃饭","py":"chī fàn","tj":"хӯрок хӯрдан"},{"lesson":11,"audio":"shihou","hz":"时候","py":"shíhou","tj":"вақт, лаҳза"},{"lesson":11,"audio":"hui2","hz":"回","py":"huí","tj":"баргаштан, бозгаштан"},{"lesson":11,"audio":"women3","hz":"我们","py":"wǒmen","tj":"мо (ҷамъи \"ман\")"},{"lesson":11,"audio":"dianying3","hz":"电影","py":"diànyǐng","tj":"филм, кино"},{"lesson":11,"audio":"zhu4","hz":"住","py":"zhù","tj":"зиндагӣ кардан, истиқомат кардан"},{"lesson":11,"audio":"qian_before","hz":"前","py":"qián","tj":"пеш аз, қаблан"},{"lesson":11,"audio":"wu3_noon","hz":"午","py":"wǔ","tj":"муддати аз соати 11 то 1-и рӯз"},{"lesson":12,"audio":"tianqi4","hz":"天气","py":"tiānqì","tj":"ҳаво (обу ҳаво)"},{"lesson":12,"audio":"zenmeyang3","hz":"怎么样","py":"zěnmeyàng","tj":"чӣ хел, чӣ гуна (ҳолат/вазъро мепурсад)"},{"lesson":12,"audio":"tai4","hz":"太","py":"tài","tj":"хеле, аз ҳад зиёд; 太……了 — \"хеле...\""},{"lesson":12,"audio":"re4","hz":"热","py":"rè","tj":"гарм"},{"lesson":12,"audio":"leng3","hz":"冷","py":"lěng","tj":"хунук, сард"},{"lesson":12,"audio":"xiayu","hz":"下雨","py":"xià yǔ","tj":"борон боридан (下 — фуромадан, 雨 — борон)"},{"lesson":12,"audio":"xiaojie3","hz":"小姐","py":"xiǎojiě","tj":"хонум, духтар (муроҷиат)"},{"lesson":12,"audio":"lai2","hz":"来","py":"lái","tj":"омадан"},{"lesson":12,"audio":"shenti3","hz":"身体","py":"shēntǐ","tj":"бадан, саломатӣ"},{"lesson":12,"audio":"ai4","hz":"爱","py":"ài","tj":"дӯст доштан, дил бастан"},{"lesson":12,"audio":"xie1","hz":"些","py":"xiē","tj":"калимаи ченаки миқдори номуайян — каме, чанде"},{"lesson":12,"audio":"shuiguo3","hz":"水果","py":"shuǐguǒ","tj":"мева"},{"lesson":12,"audio":"shui3","hz":"水","py":"shuǐ","tj":"об"},{"lesson":13,"audio":"wei4","hz":"喂","py":"wèi","tj":"алло (ҳангоми занг задан/ҷавоб додан ба телефон)"},{"lesson":13,"audio":"ye3","hz":"也","py":"yě","tj":"низ, ҳам"},{"lesson":13,"audio":"xuexi2","hz":"学习(学)","py":"xuéxí (xué)","tj":"омӯхтан, хондан"},{"lesson":13,"audio":"shangwu3","hz":"上午","py":"shàngwǔ","tj":"пеш аз пешин, пагоҳирӯзӣ"},{"lesson":13,"audio":"shuijiao","hz":"睡觉","py":"shuì jiào","tj":"хоб рафтан"},{"lesson":13,"audio":"dianshi4","hz":"电视","py":"diànshì","tj":"телевизор"},{"lesson":13,"audio":"xihuan3","hz":"喜欢","py":"xǐhuan","tj":"дӯст доштан, маъқул будан"},{"lesson":13,"audio":"gei3","hz":"给","py":"gěi","tj":"ба (пешоянд)"},{"lesson":13,"audio":"dadianhua","hz":"打电话","py":"dǎ diànhuà","tj":"занг задан, телефон кардан"},{"lesson":13,"audio":"ba0","hz":"吧","py":"ba","tj":"зарраи модалӣ — пешниҳод, хоҳиш ё амри мулоим"},{"lesson":14,"audio":"dongxi3","hz":"东西","py":"dōngxi","tj":"чиз, ашё"},{"lesson":14,"audio":"yidianr","hz":"一点儿","py":"yìdiǎnr","tj":"каме, андаке"},{"lesson":14,"audio":"pingguo2","hz":"苹果","py":"píngguǒ","tj":"себ"},{"lesson":14,"audio":"kanjian4","hz":"看见","py":"kànjiàn","tj":"дидан"},{"lesson":14,"audio":"xiansheng1","hz":"先生","py":"xiānsheng","tj":"ҷаноб, оғо"},{"lesson":14,"audio":"kai1","hz":"开","py":"kāi","tj":"ронда бурдан (мошин)"},{"lesson":14,"audio":"che1","hz":"车","py":"chē","tj":"мошин, воситаи нақлиёт"},{"lesson":14,"audio":"huilai2","hz":"回来","py":"huílai","tj":"баргаштан, бозгаштан"},{"lesson":14,"audio":"fenzhong1","hz":"分钟","py":"fēnzhōng","tj":"дақиқа"},{"lesson":14,"audio":"hou4","hz":"后","py":"hòu","tj":"баъд, пас аз"},{"lesson":14,"audio":"yifu1","hz":"衣服","py":"yīfu","tj":"либос"},{"lesson":14,"audio":"piaoliang4","hz":"漂亮","py":"piàoliang","tj":"зебо, хушрӯй"},{"lesson":14,"audio":"a0","hz":"啊","py":"a","tj":"зарраи модалӣ — тасдиқ/розигиро ифода мекунад"},{"lesson":14,"audio":"bushao3","hz":"少 / 不少","py":"shǎo / bùshǎo","tj":"кам / зиёд, бисёр"},{"lesson":14,"audio":"zhexie4","hz":"这些","py":"zhèxiē","tj":"инҳо"},{"lesson":14,"audio":"dou1","hz":"都","py":"dōu","tj":"ҳама, ҳар ду/ҳамагӣ"},{"lesson":15,"audio":"renshi4","hz":"认识","py":"rènshi","tj":"шинохтан, ошно шудан"},{"lesson":15,"audio":"nian2","hz":"年","py":"nián","tj":"сол"},{"lesson":15,"audio":"daxue4","hz":"大学","py":"dàxué","tj":"донишгоҳ"},{"lesson":15,"audio":"fandian4","hz":"饭店","py":"fàndiàn","tj":"меҳмонхона, тарабхона"},{"lesson":15,"audio":"chuzuche1","hz":"出租车","py":"chūzūchē","tj":"такси"},{"lesson":15,"audio":"yiqi3","hz":"一起","py":"yìqǐ","tj":"якҷоя, ҳамроҳ"},{"lesson":15,"audio":"gaoxing1","hz":"高兴","py":"gāoxìng","tj":"хушҳол, шод"},{"lesson":15,"audio":"ting1","hz":"听","py":"tīng","tj":"гӯш кардан"},{"lesson":15,"audio":"feiji1","hz":"飞机","py":"fēijī","tj":"ҳавопаймо"}];
let lessonUnlocked = 1;
try{
  const saved = localStorage.getItem('hsk1_progress');
  if(saved){ const n = parseInt(saved, 10); if(n >= 1) lessonUnlocked = n; }
}catch(e){}
function saveProgress(){
  try{ 
    localStorage.setItem('hsk1_progress', lessonUnlocked); 
    saveProgressToBackend(lessonUnlocked);
  }catch(e){}
}

/* ---------- Audио: TTS ---------- */
let zhVoice = null;
function loadVoices(){
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  zhVoice = voices.find(v => v.lang === 'zh-CN') || voices.find(v => v.lang && v.lang.startsWith('zh')) || null;
}
if(window.speechSynthesis){
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
let voiceSpeed = 0.85;
try{ const savedSpeed = localStorage.getItem('hsk1_speed'); if(savedSpeed) voiceSpeed = parseFloat(savedSpeed); }catch(e){}

function setVoiceSpeed(v){
  voiceSpeed = parseFloat(v);
  try{ localStorage.setItem('hsk1_speed', voiceSpeed); }catch(e){}
  const lbl = document.getElementById('speedLbl');
  if(lbl) lbl.textContent = voiceSpeed + 'x';
}

function speak(text){
  if(!window.speechSynthesis){
    alert('Браузери шумо садоро дастгирӣ намекунад. Chrome ё Edge-ро истифода баред.');
    return;
  }
  const btn = window.event ? window.event.currentTarget : null;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'zh-CN';
  if(zhVoice) u.voice = zhVoice;
  u.rate = voiceSpeed;
  if(btn){
    document.querySelectorAll('.playbtn.playing').forEach(b=>b.classList.remove('playing'));
    u.onstart = () => btn.classList.add('playing');
    u.onend = () => btn.classList.remove('playing');
    u.onerror = () => btn.classList.remove('playing');
  }
  window.speechSynthesis.speak(u);
}

/* ---------- Audио: садоҳои шахсии шумо (аз файл) ----------
   Барои ҳар як пиньин метавонед файли mp3-и худро гузоред.
   Файлро дар папкаи "audio/" (дар паҳлӯи ин HTML) бо ҳамин ном гузоред —
   система худ онро истифода мебарад; агар файл набошад, овози
   автоматии браузер (TTS) кор мекунад. */
const audioMap = {
  ni3:   'audio/ni3.mp3',
  hao3:  'audio/hao3.mp3',
  nin2:  'audio/nin2.mp3',
  men0:  'audio/men0.mp3',
  dui4:  'audio/dui4.mp3',
  bu0:   'audio/bu0.mp3',
  qi3:   'audio/qi3.mp3',
  mei2:  'audio/mei2.mp3',
  guan1: 'audio/guan1.mp3',
  xi0:   'audio/xi0.mp3',
  ma1: 'audio/ma1.mp3', ma2: 'audio/ma2.mp3', ma3: 'audio/ma3.mp3', ma4: 'audio/ma4.mp3',
  nihao: 'audio/nihao.mp3', ninhao: 'audio/ninhao.mp3', nimenhao: 'audio/nimenhao.mp3',
  nimen: 'audio/nimen.mp3', duibuqi: 'audio/duibuqi.mp3', meiguanxi: 'audio/meiguanxi.mp3',
  drill_nihao: 'audio/drill_nihao.mp3', drill_keyi: 'audio/drill_keyi.mp3', drill_fudao: 'audio/drill_fudao.mp3',
  drill_xiaojie: 'audio/drill_xiaojie.mp3', drill_kouyu: 'audio/drill_kouyu.mp3', drill_yufa: 'audio/drill_yufa.mp3',
  drill_taohao: 'audio/drill_taohao.mp3', drill_liaojie: 'audio/drill_liaojie.mp3',
  shangke: 'audio/shangke.mp3', xiake: 'audio/xiake.mp3', xianzaixiuxi: 'audio/xianzaixiuxi.mp3',
  kanheiban: 'audio/kanheiban.mp3', genwodu: 'audio/genwodu.mp3',
  s_heng: 'audio/s_heng.mp3', s_shu: 'audio/s_shu.mp3', s_pie: 'audio/s_pie.mp3',
  s_dian: 'audio/s_dian.mp3', s_na: 'audio/s_na.mp3',
  num_yi: 'audio/num_yi.mp3', num_er: 'audio/num_er.mp3', num_san: 'audio/num_san.mp3',
  num_shi: 'audio/num_shi.mp3', num_ba: 'audio/num_ba.mp3', num_liu: 'audio/num_liu.mp3',
  xie4: 'audio/xie4.mp3', xie0: 'audio/xie0.mp3', bu4: 'audio/bu4.mp3', bu2: 'audio/bu2.mp3',
  ke4: 'audio/ke4.mp3', qi0: 'audio/qi0.mp3', zai4: 'audio/zai4.mp3', jian4: 'audio/jian4.mp3',
  xiexie: 'audio/xiexie.mp3', buxie: 'audio/buxie.mp3', xiexieni: 'audio/xiexieni.mp3',
  bukeqi: 'audio/bukeqi.mp3', zaijian: 'audio/zaijian.mp3',
  l2_mama: 'audio/l2_mama.mp3', l2_yeye: 'audio/l2_yeye.mp3', l2_nainai: 'audio/l2_nainai.mp3', l2_baba: 'audio/l2_baba.mp3',
  l2_drill_zhuozi: 'audio/l2_drill_zhuozi.mp3', l2_drill_fangzi: 'audio/l2_drill_fangzi.mp3',
  l2_drill_women: 'audio/l2_drill_women.mp3', l2_drill_didi: 'audio/l2_drill_didi.mp3',
  l2_drill_xihuan: 'audio/l2_drill_xihuan.mp3', l2_drill_rensi: 'audio/l2_drill_rensi.mp3',
  l2_drill_xiansheng: 'audio/l2_drill_xiansheng.mp3', l2_drill_pengyou: 'audio/l2_drill_pengyou.mp3',
  l2_dakaishu: 'audio/l2_dakaishu.mp3', l2_qingdashengdu: 'audio/l2_qingdashengdu.mp3',
  l2_zaiduyibian: 'audio/l2_zaiduyibian.mp3', l2_yiqidu: 'audio/l2_yiqidu.mp3', l2_youwentima: 'audio/l2_youwentima.mp3',
  s_hengzhe: 'audio/s_hengzhe.mp3', s_shuzhe: 'audio/s_shuzhe.mp3', s_shugou: 'audio/s_shugou.mp3',
  sc_kou: 'audio/sc_kou.mp3', sc_jian: 'audio/sc_jian.mp3', sc_shan: 'audio/sc_shan.mp3', sc_xiao: 'audio/sc_xiao.mp3', sc_bu: 'audio/sc_bu.mp3',
  jiao4: 'audio/jiao4.mp3', shenme: 'audio/shenme.mp3', mingzi: 'audio/mingzi.mp3', wo3: 'audio/wo3.mp3',
  shi4: 'audio/shi4.mp3', laoshi: 'audio/laoshi.mp3', ma_q: 'audio/ma_q.mp3', xuesheng: 'audio/xuesheng.mp3',
  ren2: 'audio/ren2.mp3', zhongguo: 'audio/zhongguo.mp3', meiguo: 'audio/meiguo.mp3',
  zhongguoren: 'audio/zhongguoren.mp3', meiguoren: 'audio/meiguoren.mp3', liyue: 'audio/liyue.mp3',
  l3_q1: 'audio/l3_q1.mp3', l3_a1: 'audio/l3_a1.mp3', l3_q2: 'audio/l3_q2.mp3', l3_a2: 'audio/l3_a2.mp3',
  l3_q3: 'audio/l3_q3.mp3', l3_a3: 'audio/l3_a3.mp3',
  l3_drill_xiuxi: 'audio/l3_drill_xiuxi.mp3', l3_drill_jiaqi: 'audio/l3_drill_jiaqi.mp3',
  l3_drill_xingqi: 'audio/l3_drill_xingqi.mp3', l3_drill_xingqu: 'audio/l3_drill_xingqu.mp3',
  l3_drill_zaoshang: 'audio/l3_drill_zaoshang.mp3', l3_drill_caochang: 'audio/l3_drill_caochang.mp3',
  l3_drill_hanzi: 'audio/l3_drill_hanzi.mp3', l3_drill_zuotian: 'audio/l3_drill_zuotian.mp3',
  s_hengzhegou: 'audio/s_hengzhegou.mp3', s_wogou: 'audio/s_wogou.mp3',
  sc_yue: 'audio/sc_yue.mp3', sc_xin: 'audio/sc_xin.mp3', sc_zhong: 'audio/sc_zhong.mp3',
  ta1: 'audio/ta1.mp3', shei2: 'audio/shei2.mp3', de5: 'audio/de5.mp3', hanyu: 'audio/hanyu.mp3',
  na3: 'audio/na3.mp3', guo2: 'audio/guo2.mp3', ne5: 'audio/ne5.mp3', ta1m: 'audio/ta1m.mp3',
  tongxue: 'audio/tongxue.mp3', pengyou: 'audio/pengyou.mp3',
  l4_q1: 'audio/l4_q1.mp3', l4_a1: 'audio/l4_a1.mp3', l4_q2: 'audio/l4_q2.mp3', l4_a2: 'audio/l4_a2.mp3',
  l4_a2b: 'audio/l4_a2b.mp3', l4_q3: 'audio/l4_q3.mp3', l4_a3: 'audio/l4_a3.mp3', l4_q3b: 'audio/l4_q3b.mp3', l4_a3b: 'audio/l4_a3b.mp3',
  l4_drill_zhishi: 'audio/l4_drill_zhishi.mp3', l4_drill_renshi: 'audio/l4_drill_renshi.mp3',
  l4_drill_shengri: 'audio/l4_drill_shengri.mp3', l4_drill_changshi: 'audio/l4_drill_changshi.mp3',
  l4_drill_yizhang: 'audio/l4_drill_yizhang.mp3', l4_drill_yiding: 'audio/l4_drill_yiding.mp3',
  l4_drill_diyi: 'audio/l4_drill_diyi.mp3', l4_drill_shiyi: 'audio/l4_drill_shiyi.mp3',
  s_shuwangou: 'audio/s_shuwangou.mp3', s_hengzhewangou: 'audio/s_hengzhewangou.mp3',
  sc_qi: 'audio/sc_qi.mp3', sc_er: 'audio/sc_er.mp3', sc_ji: 'audio/sc_ji.mp3', sc_jiu: 'audio/sc_jiu.mp3',
  jia1: 'audio/jia1.mp3', you3: 'audio/you3.mp3', kou3: 'audio/kou3.mp3', nver: 'audio/nver.mp3',
  ji3: 'audio/ji3.mp3', sui4: 'audio/sui4.mp3', le5: 'audio/le5.mp3', jinnian: 'audio/jinnian.mp3',
  duo1: 'audio/duo1.mp3', da4: 'audio/da4.mp3',
  l5_q1: 'audio/l5_q1.mp3', l5_a1: 'audio/l5_a1.mp3', l5_q2: 'audio/l5_q2.mp3', l5_a2: 'audio/l5_a2.mp3',
  l5_q3: 'audio/l5_q3.mp3', l5_a3: 'audio/l5_a3.mp3', l5_q3b: 'audio/l5_q3b.mp3', l5_a3b: 'audio/l5_a3b.mp3',
  l5_drill_xiaohair: 'audio/l5_drill_xiaohair.mp3', l5_drill_xiaoniaor: 'audio/l5_drill_xiaoniaor.mp3',
  l5_drill_fanguanr: 'audio/l5_drill_fanguanr.mp3', l5_drill_xiangshuir: 'audio/l5_drill_xiangshuir.mp3',
  l5_num_shi: 'audio/l5_num_shi.mp3', l5_num_ershi: 'audio/l5_num_ershi.mp3', l5_num_ershisan: 'audio/l5_num_ershisan.mp3',
  l5_num_wushi: 'audio/l5_num_wushi.mp3', l5_num_wushiliu: 'audio/l5_num_wushiliu.mp3', l5_num_jiushijiu: 'audio/l5_num_jiushijiu.mp3',
  s_hengpie: 'audio/s_hengpie.mp3', s_piedian: 'audio/s_piedian.mp3',
  sc_shui: 'audio/sc_shui.mp3', sc_nv: 'audio/sc_nv.mp3', sc_le: 'audio/sc_le.mp3', sc_da: 'audio/sc_da.mp3',
  hui4: 'audio/hui4.mp3', shuo1: 'audio/shuo1.mp3', mama5: 'audio/mama5.mp3', cai4: 'audio/cai4.mp3',
  hen3: 'audio/hen3.mp3', haochi3: 'audio/haochi3.mp3', zuo4: 'audio/zuo4.mp3', xie3: 'audio/xie3.mp3',
  hanzi4: 'audio/hanzi4.mp3', zi4: 'audio/zi4.mp3', zenme3: 'audio/zenme3.mp3', du2: 'audio/du2.mp3',
  l6_q1: 'audio/l6_q1.mp3', l6_a1: 'audio/l6_a1.mp3', l6_q1b: 'audio/l6_q1b.mp3', l6_a1b: 'audio/l6_a1b.mp3',
  l6_q2: 'audio/l6_q2.mp3', l6_a2: 'audio/l6_a2.mp3', l6_q2b: 'audio/l6_q2b.mp3', l6_a2b: 'audio/l6_a2b.mp3',
  l6_q3: 'audio/l6_q3.mp3', l6_a3: 'audio/l6_a3.mp3', l6_q3b: 'audio/l6_q3b.mp3', l6_a3b: 'audio/l6_a3b.mp3',
  l6_drill_kafei: 'audio/l6_drill_kafei.mp3', l6_drill_gongyuan: 'audio/l6_drill_gongyuan.mp3',
  l6_drill_jichang: 'audio/l6_drill_jichang.mp3', l6_drill_chezhan: 'audio/l6_drill_chezhan.mp3',
  l6_drill_jintian: 'audio/l6_drill_jintian.mp3', l6_drill_gongsi: 'audio/l6_drill_gongsi.mp3',
  l6_drill_jidan: 'audio/l6_drill_jidan.mp3', l6_drill_kaishi: 'audio/l6_drill_kaishi.mp3',
  s_piezhe: 'audio/s_piezhe.mp3', s_xiegou: 'audio/s_xiegou.mp3', s_ti: 'audio/s_ti.mp3',
  sc_dong: 'audio/sc_dong.mp3', sc_wo: 'audio/sc_wo.mp3', sc_xi: 'audio/sc_xi.mp3',
  qing3: 'audio/qing3.mp3', wen4: 'audio/wen4.mp3', jintian: 'audio/jintian.mp3', hao4: 'audio/hao4.mp3',
  yue4: 'audio/yue4.mp3', xingqi: 'audio/xingqi.mp3', zuotian: 'audio/zuotian.mp3', mingtian: 'audio/mingtian.mp3',
  qu4: 'audio/qu4.mp3', xuexiao: 'audio/xuexiao.mp3', kan4: 'audio/kan4.mp3', shu1: 'audio/shu1.mp3',
  l7_q1: 'audio/l7_q1.mp3', l7_a1: 'audio/l7_a1.mp3', l7_q1b: 'audio/l7_q1b.mp3', l7_a1b: 'audio/l7_a1b.mp3',
  l7_q2: 'audio/l7_q2.mp3', l7_a2: 'audio/l7_a2.mp3', l7_q2b: 'audio/l7_q2b.mp3', l7_a2b: 'audio/l7_a2b.mp3',
  l7_q3: 'audio/l7_q3.mp3', l7_a3: 'audio/l7_a3.mp3', l7_q3b: 'audio/l7_q3b.mp3', l7_a3b: 'audio/l7_a3b.mp3',
  m01: 'audio/m01.mp3', m02: 'audio/m02.mp3', m03: 'audio/m03.mp3', m04: 'audio/m04.mp3',
  m05: 'audio/m05.mp3', m06: 'audio/m06.mp3', m07: 'audio/m07.mp3', m08: 'audio/m08.mp3',
  m09: 'audio/m09.mp3', m10: 'audio/m10.mp3', m11: 'audio/m11.mp3', m12: 'audio/m12.mp3',
  w1: 'audio/w1.mp3', w2: 'audio/w2.mp3', w3: 'audio/w3.mp3', w4: 'audio/w4.mp3',
  w5: 'audio/w5.mp3', w6: 'audio/w6.mp3', w7: 'audio/w7.mp3',
  l7_drill_guojia: 'audio/l7_drill_guojia.mp3', l7_drill_loufang: 'audio/l7_drill_loufang.mp3',
  l7_drill_pingguo: 'audio/l7_drill_pingguo.mp3', l7_drill_huanjing: 'audio/l7_drill_huanjing.mp3',
  l7_drill_shijian: 'audio/l7_drill_shijian.mp3', l7_drill_yinhang: 'audio/l7_drill_yinhang.mp3',
  l7_drill_cidian: 'audio/l7_drill_cidian.mp3', l7_drill_lanse: 'audio/l7_drill_lanse.mp3',
  sc_si: 'audio/sc_si.mp3', sc_wu5: 'audio/sc_wu5.mp3', sc_shu1: 'audio/sc_shu1.mp3',
  xiang3: 'audio/xiang3.mp3', he1: 'audio/he1.mp3', cha2: 'audio/cha2.mp3', chi1: 'audio/chi1.mp3',
  mifan: 'audio/mifan.mp3', xiawu: 'audio/xiawu.mp3', shangdian: 'audio/shangdian.mp3',
  mai3: 'audio/mai3.mp3', ge4: 'audio/ge4.mp3', beizi: 'audio/beizi.mp3',
  zhe4: 'audio/zhe4.mp3', duoshao: 'audio/duoshao.mp3', qian2: 'audio/qian2.mp3',
  kuai4: 'audio/kuai4.mp3', na4: 'audio/na4.mp3',
  l8_drill_shouji: 'audio/l8_drill_shouji.mp3', l8_drill_shoubiao: 'audio/l8_drill_shoubiao.mp3',
  l8_drill_meitian: 'audio/l8_drill_meitian.mp3', l8_drill_meihao: 'audio/l8_drill_meihao.mp3',
  l8_drill_haibian: 'audio/l8_drill_haibian.mp3', l8_drill_xizao: 'audio/l8_drill_xizao.mp3',
  l8_drill_yijing: 'audio/l8_drill_yijing.mp3',
  l8_q1: 'audio/l8_q1.mp3', l8_a1: 'audio/l8_a1.mp3', l8_q1b: 'audio/l8_q1b.mp3', l8_a1b: 'audio/l8_a1b.mp3',
  l8_q2: 'audio/l8_q2.mp3', l8_a2: 'audio/l8_a2.mp3', l8_q2b: 'audio/l8_q2b.mp3', l8_a2b: 'audio/l8_a2b.mp3',
  l8_q3: 'audio/l8_q3.mp3', l8_a3: 'audio/l8_a3.mp3', l8_q3b: 'audio/l8_q3b.mp3', l8_a3b: 'audio/l8_a3b.mp3',
  money_yi: 'audio/money_yi.mp3', money_wu: 'audio/money_wu.mp3', money_shi: 'audio/money_shi.mp3',
  money_wushi: 'audio/money_wushi.mp3', money_yibai: 'audio/money_yibai.mp3',
  sc_shao: 'audio/sc_shao.mp3',
  xiao3: 'audio/xiao3.mp3', mao1: 'audio/mao1.mp3', zai4: 'audio/zai4.mp3',
  nar_there: 'audio/nar_there.mp3', gou3: 'audio/gou3.mp3', yizi3: 'audio/yizi3.mp3',
  xiamian: 'audio/xiamian.mp3', nar_where: 'audio/nar_where.mp3', gongzuo: 'audio/gongzuo.mp3',
  erzi: 'audio/erzi.mp3', yiyuan: 'audio/yiyuan.mp3', yisheng: 'audio/yisheng.mp3', baba: 'audio/baba.mp3',
  zi3: 'audio/zi3.mp3', gong1: 'audio/gong1.mp3',
  l9_drill_mianbao: 'audio/l9_drill_mianbao.mp3', l9_drill_miantiao: 'audio/l9_drill_miantiao.mp3',
  l9_drill_diannao: 'audio/l9_drill_diannao.mp3', l9_drill_dianhua: 'audio/l9_drill_dianhua.mp3',
  l9_drill_xiatian: 'audio/l9_drill_xiatian.mp3', l9_drill_changge: 'audio/l9_drill_changge.mp3',
  l9_drill_jiankang: 'audio/l9_drill_jiankang.mp3', l9_drill_ditu: 'audio/l9_drill_ditu.mp3',
  l9_q1: 'audio/l9_q1.mp3', l9_a1: 'audio/l9_a1.mp3', l9_q1b: 'audio/l9_q1b.mp3', l9_a1b: 'audio/l9_a1b.mp3',
  l9_q2: 'audio/l9_q2.mp3', l9_a2: 'audio/l9_a2.mp3', l9_q2b: 'audio/l9_q2b.mp3', l9_a2b: 'audio/l9_a2b.mp3',
  l9_q3: 'audio/l9_q3.mp3', l9_a3: 'audio/l9_a3.mp3', l9_q3b: 'audio/l9_q3b.mp3', l9_a3b: 'audio/l9_a3b.mp3',
  zhuozi: 'audio/zhuozi.mp3', shang0: 'audio/shang0.mp3', diannao: 'audio/diannao.mp3',
  he2: 'audio/he2.mp3', ben3: 'audio/ben3.mp3', li3: 'audio/li3.mp3',
  qianmian: 'audio/qianmian.mp3', houmian: 'audio/houmian.mp3',
  wangfang: 'audio/wangfang.mp3', xiepeng: 'audio/xiepeng.mp3',
  zher4: 'audio/zher4.mp3', meiyou: 'audio/meiyou.mp3', neng2: 'audio/neng2.mp3', zuo4: 'audio/zuo4.mp3',
  l10_drill_panzi: 'audio/l10_drill_panzi.mp3', l10_drill_kuzi: 'audio/l10_drill_kuzi.mp3',
  l10_drill_mama: 'audio/l10_drill_mama.mp3', l10_drill_gege: 'audio/l10_drill_gege.mp3', l10_drill_jiejie: 'audio/l10_drill_jiejie.mp3',
  l10_suffix_shitou: 'audio/l10_suffix_shitou.mp3', l10_suffix_mutou: 'audio/l10_suffix_mutou.mp3',
  l10_suffix_women: 'audio/l10_suffix_women.mp3', l10_suffix_tamen: 'audio/l10_suffix_tamen.mp3',
  sc_shang: 'audio/sc_shang.mp3', sc_xia: 'audio/sc_xia.mp3', sc_mo: 'audio/sc_mo.mp3',
  l10_q1: 'audio/l10_q1.mp3', l10_a1: 'audio/l10_a1.mp3', l10_q1b: 'audio/l10_q1b.mp3', l10_a1b: 'audio/l10_a1b.mp3',
  l10_q2: 'audio/l10_q2.mp3', l10_a2: 'audio/l10_a2.mp3', l10_q2b: 'audio/l10_q2b.mp3', l10_a2b: 'audio/l10_a2b.mp3',
  l10_q3: 'audio/l10_q3.mp3', l10_a3: 'audio/l10_a3.mp3', l10_q3b: 'audio/l10_q3b.mp3', l10_a3b: 'audio/l10_a3b.mp3',
  xianzai4: 'audio/xianzai4.mp3', dian3: 'audio/dian3.mp3', fen1: 'audio/fen1.mp3',
  zhongwu3: 'audio/zhongwu3.mp3', chifan: 'audio/chifan.mp3', shihou: 'audio/shihou.mp3',
  hui2: 'audio/hui2.mp3', women3: 'audio/women3.mp3', dianying3: 'audio/dianying3.mp3',
  zhu4: 'audio/zhu4.mp3', qian_before: 'audio/qian_before.mp3', beijing: 'audio/beijing.mp3',
  wu3_noon: 'audio/wu3_noon.mp3', dian4_lightning: 'audio/dian4_lightning.mp3',
  dongxi_dir: 'audio/dongxi_dir.mp3', dongxi_stuff: 'audio/dongxi_stuff.mp3',
  laozi_father: 'audio/laozi_father.mp3', laozi_name: 'audio/laozi_name.mp3',
  maimai_n: 'audio/maimai_n.mp3', maimai_v: 'audio/maimai_v.mp3',
  dayi_careless: 'audio/dayi_careless.mp3', dayi_idea: 'audio/dayi_idea.mp3',
  l11_t1_1: 'audio/l11_t1_1.mp3', l11_t1_2: 'audio/l11_t1_2.mp3', l11_t1_3: 'audio/l11_t1_3.mp3', l11_t1_4: 'audio/l11_t1_4.mp3',
  l11_t2_1: 'audio/l11_t2_1.mp3', l11_t2_2: 'audio/l11_t2_2.mp3', l11_t2_3: 'audio/l11_t2_3.mp3', l11_t2_4: 'audio/l11_t2_4.mp3',
  l11_t3_1: 'audio/l11_t3_1.mp3', l11_t3_2: 'audio/l11_t3_2.mp3', l11_t3_3: 'audio/l11_t3_3.mp3', l11_t3_4: 'audio/l11_t3_4.mp3', l11_t3_5: 'audio/l11_t3_5.mp3',
  tianqi4: 'audio/tianqi4.mp3', zenmeyang3: 'audio/zenmeyang3.mp3', tai4: 'audio/tai4.mp3',
  re4: 'audio/re4.mp3', leng3: 'audio/leng3.mp3', xiayu: 'audio/xiayu.mp3',
  xiaojie3: 'audio/xiaojie3.mp3', lai2: 'audio/lai2.mp3', shenti3: 'audio/shenti3.mp3',
  ai4: 'audio/ai4.mp3', xie1: 'audio/xie1.mp3', shuiguo3: 'audio/shuiguo3.mp3', shui3: 'audio/shui3.mp3',
  l12_q1: 'audio/l12_q1.mp3', l12_a1: 'audio/l12_a1.mp3', l12_q1b: 'audio/l12_q1b.mp3', l12_a1b: 'audio/l12_a1b.mp3',
  l12_q2: 'audio/l12_q2.mp3', l12_a2: 'audio/l12_a2.mp3', l12_q2b: 'audio/l12_q2b.mp3', l12_a2b: 'audio/l12_a2b.mp3',
  l12_q3: 'audio/l12_q3.mp3', l12_a3: 'audio/l12_a3.mp3', l12_q3b: 'audio/l12_q3b.mp3', l12_a3b: 'audio/l12_a3b.mp3',
  sc_tian: 'audio/sc_tian.mp3', sc_qi: 'audio/sc_qi.mp3', sc_yu: 'audio/sc_yu.mp3',
  l12_drill_xingqiyi: 'audio/l12_drill_xingqiyi.mp3', l12_drill_xingqiwu: 'audio/l12_drill_xingqiwu.mp3',
  l12_drill_xingqiliu: 'audio/l12_drill_xingqiliu.mp3', l12_drill_chipingguo: 'audio/l12_drill_chipingguo.mp3',
  l12_drill_jianada: 'audio/l12_drill_jianada.mp3', l12_drill_chimifan: 'audio/l12_drill_chimifan.mp3',
  l12_drill_jiqiren: 'audio/l12_drill_jiqiren.mp3', l12_drill_hamigua: 'audio/l12_drill_hamigua.mp3',
  wei4: 'audio/wei4.mp3', ye3: 'audio/ye3.mp3', xuexi2: 'audio/xuexi2.mp3', dawei: 'audio/dawei.mp3',
  shangwu3: 'audio/shangwu3.mp3', shuijiao: 'audio/shuijiao.mp3', dianshi4: 'audio/dianshi4.mp3', xihuan3: 'audio/xihuan3.mp3',
  gei3: 'audio/gei3.mp3', dadianhua: 'audio/dadianhua.mp3', ba0: 'audio/ba0.mp3',
  l13_q1: 'audio/l13_q1.mp3', l13_a1: 'audio/l13_a1.mp3', l13_q1b: 'audio/l13_q1b.mp3', l13_a1b: 'audio/l13_a1b.mp3',
  l13_q2: 'audio/l13_q2.mp3', l13_a2: 'audio/l13_a2.mp3', l13_q2b: 'audio/l13_q2b.mp3', l13_a2b: 'audio/l13_a2b.mp3',
  l13_q3: 'audio/l13_q3.mp3', l13_a3: 'audio/l13_a3.mp3', l13_q3b: 'audio/l13_q3b.mp3', l13_a3b: 'audio/l13_a3b.mp3',
  l13_drill_yanjiusheng: 'audio/l13_drill_yanjiusheng.mp3', l13_drill_tushuguan: 'audio/l13_drill_tushuguan.mp3',
  l13_drill_hanguoren: 'audio/l13_drill_hanguoren.mp3', l13_drill_renminbi: 'audio/l13_drill_renminbi.mp3',
  l13_drill_youyongchi: 'audio/l13_drill_youyongchi.mp3', l13_drill_niuzaiku: 'audio/l13_drill_niuzaiku.mp3',
  l13_drill_fuwuyuan: 'audio/l13_drill_fuwuyuan.mp3', l13_drill_bowuguan: 'audio/l13_drill_bowuguan.mp3',
  sc_ri: 'audio/sc_ri.mp3', sc_mu: 'audio/sc_mu.mp3', sc_xi2: 'audio/sc_xi2.mp3',
  dongxi3: 'audio/dongxi3.mp3', yidianr: 'audio/yidianr.mp3', pingguo2: 'audio/pingguo2.mp3',
  kanjian4: 'audio/kanjian4.mp3', xiansheng1: 'audio/xiansheng1.mp3', kai1: 'audio/kai1.mp3',
  che1: 'audio/che1.mp3', huilai2: 'audio/huilai2.mp3', fenzhong1: 'audio/fenzhong1.mp3', hou4: 'audio/hou4.mp3',
  yifu1: 'audio/yifu1.mp3', piaoliang4: 'audio/piaoliang4.mp3', a0: 'audio/a0.mp3',
  bushao3: 'audio/bushao3.mp3', zhexie4: 'audio/zhexie4.mp3', dou1: 'audio/dou1.mp3', zhang1: 'audio/zhang1.mp3',
  l14_q1: 'audio/l14_q1.mp3', l14_a1: 'audio/l14_a1.mp3', l14_q1b: 'audio/l14_q1b.mp3', l14_a1b: 'audio/l14_a1b.mp3',
  l14_q2: 'audio/l14_q2.mp3', l14_a2: 'audio/l14_a2.mp3', l14_q2b: 'audio/l14_q2b.mp3', l14_a2b: 'audio/l14_a2b.mp3',
  l14_q3: 'audio/l14_q3.mp3', l14_a3: 'audio/l14_a3.mp3', l14_q3b: 'audio/l14_q3b.mp3', l14_a3b: 'audio/l14_a3b.mp3',
  l14_drill_xiyiji: 'audio/l14_drill_xiyiji.mp3', l14_drill_huochepiao: 'audio/l14_drill_huochepiao.mp3',
  l14_drill_jingchaju: 'audio/l14_drill_jingchaju.mp3', l14_drill_meirongyuan: 'audio/l14_drill_meirongyuan.mp3',
  l14_drill_milaoshu: 'audio/l14_drill_milaoshu.mp3', l14_drill_yanchanghui: 'audio/l14_drill_yanchanghui.mp3',
  l14_drill_paobuxie: 'audio/l14_drill_paobuxie.mp3', l14_drill_meishuguan: 'audio/l14_drill_meishuguan.mp3',
  sc_kai: 'audio/sc_kai.mp3', sc_che: 'audio/sc_che.mp3', sc_hui: 'audio/sc_hui.mp3',
  renshi4: 'audio/renshi4.mp3', nian2: 'audio/nian2.mp3', daxue4: 'audio/daxue4.mp3',
  fandian4: 'audio/fandian4.mp3', chuzuche1: 'audio/chuzuche1.mp3', yiqi3: 'audio/yiqi3.mp3',
  gaoxing1: 'audio/gaoxing1.mp3', ting1: 'audio/ting1.mp3', feiji1: 'audio/feiji1.mp3',
  l15_q1: 'audio/l15_q1.mp3', l15_a1: 'audio/l15_a1.mp3', l15_q1b: 'audio/l15_q1b.mp3', l15_a1b: 'audio/l15_a1b.mp3',
  l15_q2: 'audio/l15_q2.mp3', l15_a2: 'audio/l15_a2.mp3', l15_q2b: 'audio/l15_q2b.mp3', l15_a2b: 'audio/l15_a2b.mp3',
  l15_q3: 'audio/l15_q3.mp3', l15_a3: 'audio/l15_a3.mp3', l15_q3b: 'audio/l15_q3b.mp3', l15_a3b: 'audio/l15_a3b.mp3',
  l15_drill_diaobingxiang: 'audio/l15_drill_diaobingxiang.mp3', l15_drill_bangongshi: 'audio/l15_drill_bangongshi.mp3',
  l15_drill_kuangquanshui: 'audio/l15_drill_kuangquanshui.mp3', l15_drill_dashiguan: 'audio/l15_drill_dashiguan.mp3',
  l15_drill_miehuoqi: 'audio/l15_drill_miehuoqi.mp3', l15_drill_zhaoxiangji: 'audio/l15_drill_zhaoxiangji.mp3',
  l15_drill_dianhuaka: 'audio/l15_drill_dianhuaka.mp3', l15_drill_aoyunhui: 'audio/l15_drill_aoyunhui.mp3',
  sc_nian: 'audio/sc_nian.mp3', sc_chu: 'audio/sc_chu.mp3', sc_fei: 'audio/sc_fei.mp3'
};
function playAudio(id, text){
  const btn = window.event ? window.event.currentTarget : null;
  document.querySelectorAll('.playbtn.playing').forEach(b=>b.classList.remove('playing'));
  const src = audioMap[id];
  if(src){
    const a = new Audio(src);
    a.playbackRate = voiceSpeed;
    if(btn) btn.classList.add('playing');
    a.onended = () => { if(btn) btn.classList.remove('playing'); };
    a.onerror = () => { speak(text); };
    a.play().catch(() => { speak(text); });
    return;
  }
  speak(text);
}

/* ---------- Дарахти дарсҳо ---------- */
const path = document.getElementById('path');
function renderPath() {
  path.innerHTML = '';
  for(let i = 1; i <= TOTAL_LESSONS; i++) {
    const div = document.createElement('div');
    let cls = 'node';
    
    if (i < lessonUnlocked) {
      cls += ' done';
      div.onclick = () => openLesson(i);
    } else if (i === lessonUnlocked) {
      cls += ' current';
      div.onclick = () => openLesson(i);
    } else {
      cls += ' locked';
      // Дарси қулфшуда клик намешавад
      div.onclick = () => alert('⚠️ Барои кушодани ин дарс, аввал дарси қаблиро бо 80% балл гузаред!');
    }

    div.className = cls;
    div.innerHTML = `<div class="n">${i < lessonUnlocked ? '✓' : (i > lessonUnlocked ? '🔒' : i)}</div>`;
    path.appendChild(div);
  }

  document.getElementById('progNum').textContent = (lessonUnlocked-1) + '/15';
  document.getElementById('progFill').style.width = ((lessonUnlocked-1)/15*100) + '%';
  const pct = Math.round((lessonUnlocked-1)/15*100);
  const pctEl = document.getElementById('progPct');
  if(pctEl) pctEl.textContent = pct + '% гузашта';
}

let currentLessonNum = 1;
function openLesson(i){
  const panel = document.getElementById('panel');

  currentLessonNum = i;
  if(i === 1){ renderLesson1(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 2){ renderLesson2(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 3){ renderLesson3(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 4){ renderLesson4(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 5){ renderLesson5(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 6){ renderLesson6(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 7){ renderLesson7(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 8){ renderLesson8(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 9){ renderLesson9(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 10){ renderLesson10(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 11){ renderLesson11(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 12){ renderLesson12(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 13){ renderLesson13(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 14){ renderLesson14(); setTimeout(initStrokeWriters, 0); return; }
  if(i === 15){ renderLesson15(); setTimeout(initStrokeWriters, 0); return; }
  panel.innerHTML = `<div style="text-align:center;padding:30px 0;color:var(--ink-soft);">
    Дарси ${i} — мазмун ҳанӯз илова карда нашудааст. Суратҳои дарсро равон кунед, то онро месозем.
  </div>`;
}

function renderLesson1(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">01</div>
      <div class="titles">
        <div class="zh">你好</div>
        <div class="py">Nǐ hǎo</div>
        <div class="en">Салом</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс ва тарзи пайваст кардан</div>
    <div class="section-sub">Ҳар ҳиҷои хитоӣ аз се қисм иборат аст: <b>сарҳарф (声母)</b> + <b>бунёд (韵母)</b> + <b>оҳанг (声调)</b>. Масалан: nǐ = n (сарҳарф) + i (бунёд) + оҳанги 3.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тарзи хондани сарҳарфҳо</b> (истифодашуда дар дарс):</div>
    <table class="pytable">
      <tr><th>Ҳарф</th><th>Тарзи хондан</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">n</td><td>Мисли "н"-и тоҷикӣ (нон).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">h</td><td>Мисли "х"-и тоҷикӣ, аз гулӯ (хона).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">m</td><td>Мисли "м"-и тоҷикӣ (модар).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">d</td><td>Мисли "д", вале бидуни нафаси қавӣ — байни "д" ва "т", каме мулоимтар аз "д"-и тоҷикӣ.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">b</td><td>Мисли "б", вале бидуни нафаси қавӣ — байни "б" ва "п".</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">q</td><td>Мисли "ч", вале бо нафаси қавитар ва нӯги забон ба дандонҳои поён такя мекунад — "чҳ"-и тезу нафасдор.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">g</td><td>Мисли "г", вале бидуни нафаси қавӣ — байни "г" ва "к".</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">x</td><td>Садои мулоими байни "с" ва "ш" — забон наздики дандонҳои пеш, гӯё "сь"-и нарм.</td></tr>
    </table>

    <div class="section-sub" style="margin-top:14px;"><b>Тарзи хондани бунёдҳо</b> (истифодашуда дар дарс):</div>
    <table class="pytable">
      <tr><th>Бунёд</th><th>Тарзи хондан</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">i</td><td>Мисли "и"-и тоҷикӣ, кӯтоҳ (масалан дар nǐ).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ao</td><td>Дифтонг: "а" сар мешавад, ба "о/у" мегузарад — якҷоя "ао" (масалан дар hǎo).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">in</td><td>"и" + "н"-и бинӣ дар охир, мисли "ин" (масалан дар nín).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">en</td><td>Садои "э"-и кӯтоҳ (байни "а" ва "е") + "н"-и бинӣ (масалан дар men).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ui (uei)</td><td>Дифтонг "уэй" — тахминан "вэй" (масалан дар duì).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">u</td><td>Мисли "у"-и тоҷикӣ (масалан дар bu).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ei</td><td>Дифтонг "эй", мисли "эй"-и тоҷикӣ (масалан дар méi).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">uan</td><td>"у" + "а" + "н"-и бинӣ, якҷоя "уан" (масалан дар guān).</td></tr>
    </table>
    <div class="note">Қоидаи пайваст: агар бунёд бо i, u ё ü сар шавад ва сарҳарф надошта бошад, дар навишт ҳарфи "y" ё "w" илова мешавад (масалан ü→yu). Агар ду ҳиҷои оҳанги 3 паси ҳам оянд — якумаш ба оҳанги 2 иваз мешавад (қоидаи пастар).</div>

    <div class="section-sub" style="margin-top:14px;"><b>Пиньини калимаҳои дарси 1</b> — ба ҳар як тугма зада гӯш кунед:</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ni3','你')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">你</div><div class="py">nǐ<span class="transcript"> [ни]</span></div><div class="tj">оҳанги 3</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hao3','好')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">好</div><div class="py">hǎo<span class="transcript"> [хао]</span></div><div class="tj">оҳанги 3</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nin2','您')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">您</div><div class="py">nín<span class="transcript"> [нин]</span></div><div class="tj">оҳанги 2</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('men0','们')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">们</div><div class="py">men<span class="transcript"> [мэн]</span></div><div class="tj">оҳанги нейтралӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dui4','对')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">对</div><div class="py">duì<span class="transcript"> [дуй]</span></div><div class="tj">оҳанги 4</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('bu0','不')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">不</div><div class="py">bu<span class="transcript"> [бу]</span></div><div class="tj">оҳанги нейтралӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qi3','起')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">起</div><div class="py">qǐ<span class="transcript"> [ци]</span></div><div class="tj">оҳанги 3</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mei2','没')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">没</div><div class="py">méi<span class="transcript"> [мэй]</span></div><div class="tj">оҳанги 2</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('guan1','关')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">关</div><div class="py">guān<span class="transcript"> [гуан]</span></div><div class="tj">оҳанги 1</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xi0','系')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">系</div><div class="py">xi<span class="transcript"> [си]</span></div><div class="tj">оҳанги нейтралӣ</div></div>
    </div>

    <div class="section-lbl">2. Талаффуз — оҳангҳо ва тамрин (声调)</div>
    <div class="tonebox">
      <div class="t"><button class="playbtn" onclick="playAudio('ma1','妈')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">mā 妈</div><div class="transcript">[ма]</div><div class="name">Оҳанги 1 — рост</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('ma2','麻')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">má 麻</div><div class="transcript">[ма]</div><div class="name">Оҳанги 2 — боло</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('ma3','马')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">mǎ 马</div><div class="transcript">[ма]</div><div class="name">Оҳанги 3 — фуру-боло</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('ma4','骂')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">mà 骂</div><div class="transcript">[ма]</div><div class="name">Оҳанги 4 — поён</div></div>
    </div>
    <div class="note">Тағйири оҳанг маънои калимаро тағйир медиҳад — ҳамон ҳиҷо бо оҳанги гуногун калимаи дигар мешавад. Гӯш кунед ва такрор кунед.</div>
    <div class="note"><b>Қоидаи 3+3:</b> вақте ду ҳиҷои оҳанги 3-юм паси ҳам меоянд, якумаш ба оҳанги 2 иваз мешавад: 你 (nǐ) + 好 (hǎo) = <b>ní hǎo</b> (на nǐ hǎo), гарчанде дар навишт оҳанги аслӣ нигоҳ дошта мешавад.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тамрини оҳанги 3</b> — ин калимаҳо низ ду ҳиҷои оҳанги 3 доранд, хонед ва гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">nǐhǎo<span class="transcript"><br>[нихао]</span><br><button class="playbtn" onclick="playAudio('drill_nihao','你好')">&#128266;</button></div>
      <div class="drillcard">kěyǐ<span class="transcript"><br>[кэйи]</span><br><button class="playbtn" onclick="playAudio('drill_keyi','可以')">&#128266;</button></div>
      <div class="drillcard">fúdǎo<span class="transcript"><br>[фудао]</span><br><button class="playbtn" onclick="playAudio('drill_fudao','辅导')">&#128266;</button></div>
      <div class="drillcard">xiǎojiě<span class="transcript"><br>[сяоцзе]</span><br><button class="playbtn" onclick="playAudio('drill_xiaojie','小姐')">&#128266;</button></div>
      <div class="drillcard">kǒuyǔ<span class="transcript"><br>[коуюй]</span><br><button class="playbtn" onclick="playAudio('drill_kouyu','口语')">&#128266;</button></div>
      <div class="drillcard">yǔfǎ<span class="transcript"><br>[юйфа]</span><br><button class="playbtn" onclick="playAudio('drill_yufa','语法')">&#128266;</button></div>
      <div class="drillcard">tǎohǎo<span class="transcript"><br>[таохао]</span><br><button class="playbtn" onclick="playAudio('drill_taohao','讨好')">&#128266;</button></div>
      <div class="drillcard">liǎojiě<span class="transcript"><br>[ляоцзе]</span><br><button class="playbtn" onclick="playAudio('drill_liaojie','了解')">&#128266;</button></div>
    </div>

    <div class="section-lbl">3. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ni3','你')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">你</div><div class="py">nǐ<span class="transcript"> [ни]</span></div><div class="tj">ту (танҳо ба як нафар)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hao3','好')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">好</div><div class="py">hǎo<span class="transcript"> [хао]</span></div><div class="tj">хуб, нағз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nin2','您')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">您</div><div class="py">nín<span class="transcript"> [нин]</span></div><div class="tj">шумо (бо эҳтиром)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nimen','你们')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">你们</div><div class="py">nǐmen<span class="transcript"> [нимэн]</span></div><div class="tj">шумоён (бисёр кас)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('duibuqi','对不起')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">对不起</div><div class="py">duìbuqǐ<span class="transcript"> [дуйбуци]</span></div><div class="tj">бубахшед</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('meiguanxi','没关系')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">没关系</div><div class="py">méi guānxi<span class="transcript"> [мэй гуанси]</span></div><div class="tj">ҳечи не, айб надорад</div></div>
    </div>

    <div class="section-lbl">4. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷонишинҳои шахсӣ: <ruby>你<rt>nǐ</rt></ruby> / <ruby>您<rt>nín</rt></ruby> / <ruby>你们<rt>nǐmen</rt></ruby></div>
      <div class="gbody">Дар хитоӣ барои "ту/шумо" се шакли гуногун вуҷуд дорад, вобаста ба он, ки ба кӣ муроҷиат мешавад:<br>
      · <ruby>你<rt>nǐ</rt></ruby> — ба як нафар, муомилаи оддӣ (дӯст, ҳамсол)<br>
      · <ruby>您<rt>nín</rt></ruby> — ба як нафар, бо эҳтироми хос (калонсол, роҳбар, шахси ношинос)<br>
      · <ruby>你们<rt>nǐmen</rt></ruby> — ба якчанд нафар (қоидаи умумӣ: исм/ҷонишин + <ruby>们<rt>men</rt></ruby> = шакли ҷамъ)</div>
      <div class="gex"><span class="tag">сохт</span><ruby>你<rt>nǐ</rt></ruby> + <ruby>们<rt>men</rt></ruby> → <ruby>你们<rt>nǐmen</rt></ruby></div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷумлаи салом: Ҷонишин + <ruby>好<rt>hǎo</rt></ruby></div>
      <div class="gbody">Дар хитоӣ салом додан хеле содда сохта мешавад: ҷонишини шахсро мегиред ва бевосита калимаи <ruby>好<rt>hǎo</rt></ruby>-ро паси он мегузоред. На феъли "будан" лозим аст, на пешоянд.</div>
      <div class="gex"><span class="tag">сохт</span><ruby>你<rt>nǐ</rt></ruby> + <ruby>好<rt>hǎo</rt></ruby> = <ruby>你好<rt>nǐ hǎo</rt></ruby></div>
      <div class="gex"><span class="tag">сохт</span><ruby>您<rt>nín</rt></ruby> + 好 = <ruby>您好<rt>nín hǎo</rt></ruby></div>
      <div class="gex"><span class="tag">сохт</span><ruby>你们<rt>nǐmen</rt></ruby> + 好 = <ruby>你们好<rt>nǐmen hǎo</rt></ruby></div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Ҷуфти узрхоҳӣ-ҷавоб: <ruby>对不起<rt>duìbuqǐ</rt></ruby> → <ruby>没关系<rt>méi guānxi</rt></ruby></div>
      <div class="gbody">Ин ду ибора ҳамеша ҷуфт кор мекунанд: якум узр металабад, дуюм ҷавоб медиҳад, ки масъала ҳал шудааст. 没关系 таҳтуллафзӣ маънои "алоқа нест" дорад — яъне "ин муҳим нест".</div>
      <div class="gex"><span class="tag">намуна</span>A: <ruby>对不起<rt>duìbuqǐ</rt></ruby>！ → B: <ruby>没关系<rt>méi guānxi</rt></ruby>！</div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你好！</span><span class="py">Nǐ hǎo!</span><span class="transcript">[Ни хао!]</span><span class="tj">— Салом!</span><button class="playbtn inline" onclick="playAudio('nihao','你好')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">你好！</span><span class="py">Nǐ hǎo!</span><span class="transcript">[Ни хао!]</span><span class="tj">— Салом!</span><button class="playbtn inline" onclick="playAudio('nihao','你好')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">您好！</span><span class="py">Nín hǎo!</span><span class="transcript">[Нин хао!]</span><span class="tj">— Салом! (бо эҳтиром)</span><button class="playbtn inline" onclick="playAudio('ninhao','您好')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">你们好！</span><span class="py">Nǐmen hǎo!</span><span class="transcript">[Нимэн хао!]</span><span class="tj">— Салом ба шумоён!</span><button class="playbtn inline" onclick="playAudio('nimenhao','你们好')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">对不起！</span><span class="py">Duìbuqǐ!</span><span class="transcript">[Дуйбуци!]</span><span class="tj">— Бубахшед!</span><button class="playbtn inline" onclick="playAudio('duibuqi','对不起')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">没关系！</span><span class="py">Méi guānxi!</span><span class="transcript">[Мэй гуанси!]</span><span class="tj">— Ҳечи не!</span><button class="playbtn inline" onclick="playAudio('meiguanxi','没关系')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Ибораҳои синфхона (课堂用语)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shangke','上课')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">上课！</div><div class="py">Shàng kè!<span class="transcript"> [Шан кэ!]</span></div><div class="tj">Дарс сар шуд!</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiake','下课')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">下课！</div><div class="py">Xià kè!<span class="transcript"> [Ся кэ!]</span></div><div class="tj">Дарс тамом шуд!</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xianzaixiuxi','现在休息')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">现在休息！</div><div class="py">Xiànzài xiūxi!<span class="transcript"> [Сиенцзай сюси!]</span></div><div class="tj">Ҳозир истироҳат кунед!</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kanheiban','看黑板')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">看黑板！</div><div class="py">Kàn hēibǎn!<span class="transcript"> [Кань хэйбань!]</span></div><div class="tj">Ба тахта нигоҳ кунед!</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('genwodu','跟我读')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">跟我读！</div><div class="py">Gēn wǒ dú!<span class="transcript"> [Гэнь во ду!]</span></div><div class="tj">Аз паси ман хонед!</div></div>
    </div>

    <div class="section-lbl">7. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <ol class="ruleslist">
      <li><b>Аввал уфуқӣ (一), баъд амудӣ (丨)</b> — 先横后竖</li>
      <li><b>Аввал чапи поёнӣ (丿), баъд рости поёнӣ (捺)</b> — 先撇后捺</li>
      <li><b>Аз боло ба поён</b> — 从上到下</li>
      <li><b>Аз чап ба рост</b> — 从左到右</li>
      <li><b>Аввал беруна, баъд дарун</b> — 先外后内</li>
      <li><b>Аввал миёна, баъд ду тараф</b> (агар бошад) — 先中间后两边</li>
    </ol>
    <div class="section-sub">Аввал тугмаи «Нишон додан»-ро занед, то аниматсияи тартиби дурустро бинед. Баъд тугмаи «Худам нависам»-ро занед ва бо муш (ё ангушт дар мобил) худатон ҳарфро дар болои хатҳои хира кашед — система хатогиро нишон медиҳад.</div>
    <div class="strokegrid" id="strokegrid">
      <div class="strokecard"><div class="shz">你</div><div class="spy">nǐ <span class="transcript">[ни]</span></div><div class="starget" id="sw-ni"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-ni')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-ni')">Худам нависам</button></div>
        <div class="sstatus" id="sw-ni-status"></div></div>
      <div class="strokecard"><div class="shz">好</div><div class="spy">hǎo <span class="transcript">[хао]</span></div><div class="starget" id="sw-hao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-hao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-hao')">Худам нависам</button></div>
        <div class="sstatus" id="sw-hao-status"></div></div>
      <div class="strokecard"><div class="shz">您</div><div class="spy">nín <span class="transcript">[нин]</span></div><div class="starget" id="sw-nin"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-nin')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-nin')">Худам нависам</button></div>
        <div class="sstatus" id="sw-nin-status"></div></div>
      <div class="strokecard"><div class="shz">们</div><div class="spy">men <span class="transcript">[мэн]</span></div><div class="starget" id="sw-men"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-men')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-men')">Худам нависам</button></div>
        <div class="sstatus" id="sw-men-status"></div></div>
      <div class="strokecard"><div class="shz">对</div><div class="spy">duì <span class="transcript">[дуй]</span></div><div class="starget" id="sw-dui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-dui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-dui')">Худам нависам</button></div>
        <div class="sstatus" id="sw-dui-status"></div></div>
      <div class="strokecard"><div class="shz">不</div><div class="spy">bù <span class="transcript">[бу]</span></div><div class="starget" id="sw-bu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-bu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-bu')">Худам нависам</button></div>
        <div class="sstatus" id="sw-bu-status"></div></div>
      <div class="strokecard"><div class="shz">起</div><div class="spy">qǐ <span class="transcript">[ци]</span></div><div class="starget" id="sw-qi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-qi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-qi')">Худам нависам</button></div>
        <div class="sstatus" id="sw-qi-status"></div></div>
      <div class="strokecard"><div class="shz">没</div><div class="spy">méi <span class="transcript">[мэй]</span></div><div class="starget" id="sw-mei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-mei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-mei')">Худам нависам</button></div>
        <div class="sstatus" id="sw-mei-status"></div></div>
      <div class="strokecard"><div class="shz">关</div><div class="spy">guān <span class="transcript">[гуан]</span></div><div class="starget" id="sw-guan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-guan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-guan')">Худам нависам</button></div>
        <div class="sstatus" id="sw-guan-status"></div></div>
      <div class="strokecard"><div class="shz">系</div><div class="spy">xì <span class="transcript">[си]</span></div><div class="starget" id="sw-xi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw-xi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw-xi')">Худам нависам</button></div>
        <div class="sstatus" id="sw-xi-status"></div></div>
    </div>

    <div class="section-lbl">8. Аломатҳои асосии навишт (笔画)</div>
    <div class="section-sub"><b>笔画 (bǐhuà)</b> — "харфи қалам" — воҳиди хурдтарини навишти хитоӣ аст: як ҳаракати қалам аз замоне ки коғазро ламс мекунад то ваздте ки аз он ҷудо мешавад (мисли ҳарфи лотинӣ дар калима, вале ин ҷо ҳарф аз чанд харф сохта мешавад). Ҳар ҳарфи хитоӣ аз якчанд харф иборат аст ва тартиби кашидани онҳо муайян ва собит аст — агар тартиб вайрон шавад, шакли ҳарф вайрон менамояд ва ба хитоиҳо номафҳум менамояд. Барои ҳамин омӯхтани номи ҳар харф ва самти дурусти он аввалин қадам дар навиштани хитоӣ аст.</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_heng','一')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一</div><div class="py">héng<span class="transcript"> [хэн]</span> — уфуқӣ</div><div class="tj">аз чап ба рост кашида мешавад. Мисол: 一 (як), 二 (ду)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_shu','丨')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">丨</div><div class="py">shù<span class="transcript"> [шу]</span> — амудӣ</div><div class="tj">аз боло ба поён кашида мешавад. Мисол: 十 (даҳ), 工 (кор)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_pie','丿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">丿</div><div class="py">piě<span class="transcript"> [пйе]</span> — чапи поёнӣ</div><div class="tj">аз боло ба поёни чап моил мешавад. Мисол: 人 (одам), 八 (ҳашт)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_dian','丶')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">丶</div><div class="py">diǎn<span class="transcript"> [дьен]</span> — нуқта</div><div class="tj">харфи хурди кӯтоҳ, аз боло ба поёни рост. Мисол: 不 (не), 六 (шаш)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_na','乀')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">乀</div><div class="py">nà<span class="transcript"> [на]</span> — рости поёнӣ</div><div class="tj">аз боло ба поёни рост моил мешавад, дар охир каме васеътар. Мисол: 大 (калон), 天 (осмон)</div></div>
    </div>
    <div class="note">Диққат кунед: 撇 (丿) ва 捺 (乀) ба ҳам монанданд, вале самташон баръакс аст — 丿 ба чап моил мешавад, 乀 ба рост. Дар қоидаи 5-уми боло гуфта шуд, ки 撇 ҳамеша пеш аз 捺 навишта мешавад.</div>

    <div class="section-lbl">9. Рақамҳо — ҳарфҳои якҷузъа (独体字)</div>
    <div class="section-sub">Ҳарфи <b>якҷузъа (独体字, dútǐzì)</b> он аст, ки ба қисмҳои хурдтар (радикалҳо) тақсим намешавад — худаш аз чанд харфи оддӣ (笔画) рост меояд, на аз ду ҳарфи алоҳида (мисли 你 ки аз 亻+尔 сохта шудааст). Рақамҳои поён намунаи беҳтарини ин навъанд: содда, серистифода ва пойгоҳи хондани ҳарфҳои мураккабтар дар оянда мешаванд. Онҳоро дар ҳаво бо ангушт такрор кунед, баъд дар коғаз бинависед.</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_yi','一')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一</div><div class="py">yī <span class="transcript">[и]</span></div><div class="tj">як — 1 харф, як хатти уфуқӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_er','二')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">二</div><div class="py">èr <span class="transcript">[эр]</span></div><div class="tj">ду — 2 харф, ду хатти уфуқӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_san','三')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">三</div><div class="py">sān <span class="transcript">[сань]</span></div><div class="tj">се — 3 харф, аз боло ба поён</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_shi','十')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">十</div><div class="py">shí <span class="transcript">[ши]</span></div><div class="tj">даҳ — уфуқӣ, баъд амудӣ аз миён мегузарад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_ba','八')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">八</div><div class="py">bā <span class="transcript">[ба]</span></div><div class="tj">ҳашт — аввал 撇 (чап), баъд 捺 (рост)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('num_liu','六')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">六</div><div class="py">liù <span class="transcript">[лиу]</span></div><div class="tj">шаш — нуқта дар боло, баъд 八-монанд дар поён</div></div>
    </div>
    <div class="note">Фарқи 独体字 (якҷузъа) аз ҳарфҳои дигар: масалан 你 (nǐ) якҷузъа НЕСТ, зеро аз ду қисми алоҳида — 亻(одам) ва 尔 — сохта шудааст (ба бахши 7-и боло нигаред). Рақамҳои болоӣ бошанд, худ асоси сохтани ҳарфҳои дигар мешаванд.</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 1 (10 савол)</div>
      <div class="qcard"><div class="q">1. 你好 чӣ маъно дорад?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Ташаккур</label>
        <label><input type="radio" name="q1" value="right">Салом</label>
        <label><input type="radio" name="q1" value="wrong">Бубахшед</label>
      </div></div>
      <div class="qcard"><div class="q">2. Пиньини калимаи 没关系 кадом аст?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">duìbuqǐ</label>
        <label><input type="radio" name="q2" value="right">méi guānxi</label>
        <label><input type="radio" name="q2" value="wrong">nín</label>
      </div></div>
      <div class="qcard"><div class="q">3. Кадом калима барои "шумо" бо эҳтиром истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">你</label>
        <label><input type="radio" name="q3" value="right">您</label>
        <label><input type="radio" name="q3" value="wrong">你们</label>
      </div></div>
      <div class="qcard"><div class="q">4. Вақте 你 (nǐ) + 好 (hǎo) якҷоя талаффуз мешаванд, чӣ гуна хонда мешавад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">nǐ hǎo</label>
        <label><input type="radio" name="q4" value="right">ní hǎo</label>
        <label><input type="radio" name="q4" value="wrong">nì hào</label>
      </div></div>
      <div class="qcard"><div class="q">5. 你们 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">ту</label>
        <label><input type="radio" name="q5" value="wrong">шумо (эҳтиром)</label>
        <label><input type="radio" name="q5" value="right">шумоён</label>
      </div></div>
      <div class="qcard"><div class="q">6. Калимаи 妈 (mā) ба кадом оҳанг мансуб аст?</div><div class="opts">
        <label><input type="radio" name="q6" value="right">Оҳанги 1 — рост</label>
        <label><input type="radio" name="q6" value="wrong">Оҳанги 3 — фуру-боло</label>
        <label><input type="radio" name="q6" value="wrong">Оҳанги 4 — поён</label>
      </div></div>
      <div class="qcard"><div class="q">7. 对不起 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Ҳечи не</label>
        <label><input type="radio" name="q7" value="right">Бубахшед</label>
        <label><input type="radio" name="q7" value="wrong">Ташаккур</label>
      </div></div>
      <div class="qcard"><div class="q">8. Кадом қоидаи навишт дуруст аст?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Аввал уфуқӣ (一), баъд амудӣ (丨)</label>
        <label><input type="radio" name="q8" value="wrong">Аввал амудӣ (丨), баъд уфуқӣ (一)</label>
        <label><input type="radio" name="q8" value="wrong">Тартиб муҳим нест</label>
      </div></div>
      <div class="qcard"><div class="q">9. Ҳарфи 好 аз кадом ду қисм иборат аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">亻+ 尔</label>
        <label><input type="radio" name="q9" value="right">女 + 子</label>
        <label><input type="radio" name="q9" value="wrong">氵+ 殳</label>
      </div></div>
      <div class="qcard"><div class="q">10. Дар ҳарфи 您, кадом қисм дар поён меояд?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">门</label>
        <label><input type="radio" name="q10" value="right">心</label>
        <label><input type="radio" name="q10" value="wrong">子</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson2(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">02</div>
      <div class="titles">
        <div class="zh">谢谢你</div>
        <div class="py">Xièxie nǐ</div>
        <div class="en">Ташаккур</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс ва тарзи пайваст кардан</div>
    <div class="section-sub">Дар ин дарс сарҳарфҳо ва бунёдҳои нав меомӯзем. Инчунин ду қоидаи муҳими навишт: <b>ҷои гузоштани аломати оҳанг</b> ва <b>шакли кӯтоҳшуда (省写)</b>.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тарзи хондани сарҳарфҳои нав</b> (истифодашуда дар дарс):</div>
    <table class="pytable">
      <tr><th>Ҳарф</th><th>Тарзи хондан</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">z</td><td>Мисли "дз", вале бидуни нафаси қавӣ — забон ба дандонҳои пеш такя мекунад.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">j</td><td>Мисли "ҷ"-и мулоим, забон дар пеши даҳон, наздики дандонҳо.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">k</td><td>Мисли "к", бо нафаси қавитар аз "г" (ба фарқи g).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">zh</td><td>Мисли "ҷ"-и ғафс — нӯги забон ба боло, ба сақфи даҳон печида мешавад.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ch</td><td>Мисли "ч"-и ғафс, бо нафаси қавӣ, нӯги забон ба боло печида.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">sh</td><td>Мисли "ш"-и ғафс, нӯги забон ба боло печида.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">r</td><td>Садои байни "ж" ва "р", нӯги забон ба боло, бидуни ларзиш.</td></tr>
    </table>

    <div class="section-sub" style="margin-top:14px;"><b>Тарзи хондани бунёдҳои нав</b> (истифодашуда дар дарс):</div>
    <table class="pytable">
      <tr><th>Бунёд</th><th>Тарзи хондан</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ie</td><td>"и" ба "е" мегузарад, якҷоя "ие" (масалан дар xiè).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">e</td><td>Садои амиқи "э" (гулугоҳӣ), мисли "ы"-и русӣ каме монанд (масалан дар kè).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ai</td><td>Дифтонг "ай", мисли "ай"-и тоҷикӣ (масалан дар zài).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ian</td><td>"и"+"э"+"н"-и бинӣ, якҷоя "иен" (масалан дар jiàn).</td></tr>
    </table>

    <div class="section-sub" style="margin-top:14px;"><b>Пиньини калимаҳои дарси 2</b> — ба ҳар як тугма зада гӯш кунед:</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xie4','谢')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">谢</div><div class="py">xiè<span class="transcript"> [се]</span></div><div class="tj">оҳанги 4</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('bu4','不')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">不</div><div class="py">bù<span class="transcript"> [бу]</span></div><div class="tj">оҳанги 4</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ke4','客')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">客</div><div class="py">kè<span class="transcript"> [кэ]</span></div><div class="tj">оҳанги 4</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qi0','气')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">气</div><div class="py">qi<span class="transcript"> [ци]</span></div><div class="tj">оҳанги нейтралӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zai4','再')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">再</div><div class="py">zài<span class="transcript"> [цзай]</span></div><div class="tj">оҳанги 4</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('jian4','见')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">见</div><div class="py">jiàn<span class="transcript"> [цзиен]</span></div><div class="tj">оҳанги 4</div></div>
    </div>
    <div class="note"><b>Диққат:</b> 不 (bù) одатан оҳанги 4 дорад, вале агар пеш аз ҳиҷои дигари оҳанги 4 ояд, худаш ба оҳанги 2 иваз мешавад: bù + xiè → <b>bú xiè</b>; bù + kèqi → <b>bú kèqi</b>. Ин қоидаи "тағйири оҳанги 不" номида мешавад.</div>

    <div class="section-lbl">2. Талаффуз — оҳанги нейтралӣ ва тамрин (轻声)</div>
    <div class="section-sub">Ба ғайр аз 4 оҳанги асосӣ, боз як оҳанги панҷум ҳаст — <b>оҳанги нейтралӣ (轻声)</b>: кӯтоҳ ва сабук хонда мешавад, аломат надорад.</div>
    <div class="tonebox">
      <div class="t"><button class="playbtn" onclick="playAudio('l2_mama','妈妈')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">māma 妈妈</div><div class="transcript">[мама]</div><div class="name">модар</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('l2_yeye','爷爷')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">yéye 爷爷</div><div class="transcript">[йейе]</div><div class="name">бобо</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('l2_nainai','奶奶')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">nǎinai 奶奶</div><div class="transcript">[найнай]</div><div class="name">биби</div></div>
      <div class="t"><button class="playbtn" onclick="playAudio('l2_baba','爸爸')" aria-label="Гӯш кардан">&#128266;</button><div class="mark">bàba 爸爸</div><div class="transcript">[баба]</div><div class="name">падар</div></div>
    </div>
    <div class="note">Диққат кунед: дар ҳар чор калима ҳиҷои дуюм оҳанги нейтралӣ дорад — кӯтоҳтар ва сабуктар аз ҳиҷои якум хонда мешавад.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тамрини оҳанги нейтралӣ</b> — хонед ва гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">zhuōzi<span class="transcript"><br>[чжуоцзы]</span><br><button class="playbtn" onclick="playAudio('l2_drill_zhuozi','桌子')">&#128266;</button></div>
      <div class="drillcard">fángzi<span class="transcript"><br>[фанцзы]</span><br><button class="playbtn" onclick="playAudio('l2_drill_fangzi','房子')">&#128266;</button></div>
      <div class="drillcard">wǒmen<span class="transcript"><br>[во мэн]</span><br><button class="playbtn" onclick="playAudio('l2_drill_women','我们')">&#128266;</button></div>
      <div class="drillcard">dìdi<span class="transcript"><br>[дыди]</span><br><button class="playbtn" onclick="playAudio('l2_drill_didi','弟弟')">&#128266;</button></div>
      <div class="drillcard">xǐhuan<span class="transcript"><br>[сихуан]</span><br><button class="playbtn" onclick="playAudio('l2_drill_xihuan','喜欢')">&#128266;</button></div>
      <div class="drillcard">rènshi<span class="transcript"><br>[женши]</span><br><button class="playbtn" onclick="playAudio('l2_drill_rensi','认识')">&#128266;</button></div>
      <div class="drillcard">xiānsheng<span class="transcript"><br>[сиеншэн]</span><br><button class="playbtn" onclick="playAudio('l2_drill_xiansheng','先生')">&#128266;</button></div>
      <div class="drillcard">péngyou<span class="transcript"><br>[пэнйоу]</span><br><button class="playbtn" onclick="playAudio('l2_drill_pengyou','朋友')">&#128266;</button></div>
    </div>
    <div class="note"><b>Қоидаи гузоштани аломати оҳанг:</b> агар бунёд аз ду ё бештар ҳарфи садонок иборат бошад, аломати оҳанг ба ҳамон садоноке гузошта мешавад, ки даҳон бештар кушода мешавад — тартиб: a → o → e → i → u → ü. Истисно: дар "iu" аломат ба "u" гузошта мешавад (зеро iu кӯтоҳшудаи iou аст). Оҳанги нейтралӣ аломат надорад.</div>
    <div class="note"><b>Қоидаи кӯтоҳнависӣ (省写):</b> бунёдҳои iou, uei, uen баъд аз сарҳарф кӯтоҳ навишта мешаванд: iou→iu, uei→ui, uen→un. Масалан: n+iou=niu (на niou), g+uei=gui (на guei), l+uen=lun (на luen).</div>

    <div class="section-lbl">3. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiexie','谢谢')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">谢谢</div><div class="py">xièxie<span class="transcript"> [сесе]</span></div><div class="tj">ташаккур</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('bu4','不')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">不</div><div class="py">bù<span class="transcript"> [бу]</span></div><div class="tj">не, ин тавр не (инкор)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('bukeqi','不客气')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">不客气</div><div class="py">bú kèqi<span class="transcript"> [бу кэци]</span></div><div class="tj">намеарзад, ташвиш накашед</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zaijian','再见')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">再见</div><div class="py">zàijiàn<span class="transcript"> [цзайцзиен]</span></div><div class="tj">то дидан, хайр</div></div>
    </div>

    <div class="section-lbl">4. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҳарфи инкор: <ruby>不<rt>bù</rt></ruby></div>
      <div class="gbody">不 калимаи инкорист ва пеш аз феъл ё сифат гузошта мешавад, то маънои "не" бидиҳад. Дар ин дарс дар шакли ҷавоби кӯтоҳ истифода мешавад: ба ҷои "ташаккур намекунам", танҳо 不谢 (=не, лозим не) гуфта мешавад.</div>
      <div class="gex"><span class="tag">сохт</span>不 + феъл/сифат = инкор</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷавоб ба ташаккур: <ruby>谢谢<rt>xièxie</rt></ruby> → <ruby>不谢<rt>bú xiè</rt></ruby> / <ruby>不客气<rt>bú kèqi</rt></ruby></div>
      <div class="gbody">Вақте касе ташаккур мегӯяд, ду тарзи ҷавоб дода мешавад: 不谢 (кӯтоҳ, "лозим не") ё 不客气 (расмитар, "ташвиш накашед"). Ҳарду маънои якхела доранд.</div>
      <div class="gex"><span class="tag">намуна</span>A: 谢谢你！ → B: 不客气！</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Хайрухушӣ: <ruby>再见<rt>zàijiàn</rt></ruby></div>
      <div class="gbody">再见 таҳтуллафзӣ маънои "боз бинам" дорад (再 — боз,見/见 — дидан). Дар мукотиба ҳарду тараф баробар мегӯянд: A: 再见！ B: 再见！</div>
      <div class="gex"><span class="tag">сохт</span>再 (боз) + 见 (дидан) = 再见 (то дидан)</div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">谢谢！</span><span class="py">Xièxie!</span><span class="transcript">[Сесе!]</span><span class="tj">— Ташаккур!</span><button class="playbtn inline" onclick="playAudio('xiexie','谢谢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">不谢！</span><span class="py">Bú xiè!</span><span class="transcript">[Бу се!]</span><span class="tj">— Лозим не!</span><button class="playbtn inline" onclick="playAudio('buxie','不谢')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">谢谢你！</span><span class="py">Xièxie nǐ!</span><span class="transcript">[Сесе ни!]</span><span class="tj">— Ташаккур ба шумо!</span><button class="playbtn inline" onclick="playAudio('xiexieni','谢谢你')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">不客气！</span><span class="py">Bú kèqi!</span><span class="transcript">[Бу кэци!]</span><span class="tj">— Ташвиш накашед!</span><button class="playbtn inline" onclick="playAudio('bukeqi','不客气')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">再见！</span><span class="py">Zàijiàn!</span><span class="transcript">[Цзайцзиен!]</span><span class="tj">— То дидан!</span><button class="playbtn inline" onclick="playAudio('zaijian','再见')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">再见！</span><span class="py">Zàijiàn!</span><span class="transcript">[Цзайцзиен!]</span><span class="tj">— То дидан!</span><button class="playbtn inline" onclick="playAudio('zaijian','再见')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Ибораҳои синфхона (课堂用语)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('l2_dakaishu','打开书')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">打开书。</div><div class="py">Dǎkāi shū.<span class="transcript"> [Дакай шу]</span></div><div class="tj">Китобро кушоед.</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('l2_qingdashengdu','请大声读')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">请大声读。</div><div class="py">Qǐng dà shēng dú.<span class="transcript"> [Цин да шэн ду]</span></div><div class="tj">Марҳамат, баланд хонед.</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('l2_zaiduyibian','再读一遍')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">再读一遍。</div><div class="py">Zài dú yí biàn.<span class="transcript"> [Цзай ду и биен]</span></div><div class="tj">Боз як бор хонед.</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('l2_yiqidu','一起读')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一起读。</div><div class="py">Yìqǐ dú.<span class="transcript"> [Ициду]</span></div><div class="tj">Якҷоя хонед.</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('l2_youwentima','有问题吗')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">有问题吗？</div><div class="py">Yǒu wèntí ma?<span class="transcript"> [Йоу вэньти ма?]</span></div><div class="tj">Савол ҳаст?</div></div>
    </div>

    <div class="section-lbl">7. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 2. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid2">
      <div class="strokecard"><div class="shz">谢</div><div class="spy">xiè <span class="transcript">[се]</span></div><div class="starget" id="sw2-xie"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-xie')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-xie')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-xie-status"></div></div>
      <div class="strokecard"><div class="shz">客</div><div class="spy">kè <span class="transcript">[кэ]</span></div><div class="starget" id="sw2-ke"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-ke')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-ke')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-ke-status"></div></div>
      <div class="strokecard"><div class="shz">气</div><div class="spy">qì <span class="transcript">[ци]</span></div><div class="starget" id="sw2-qi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-qi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-qi')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-qi-status"></div></div>
      <div class="strokecard"><div class="shz">再</div><div class="spy">zài <span class="transcript">[цзай]</span></div><div class="starget" id="sw2-zai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-zai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-zai')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-zai-status"></div></div>
      <div class="strokecard"><div class="shz">见</div><div class="spy">jiàn <span class="transcript">[цзиен]</span></div><div class="starget" id="sw2-jian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-jian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-jian')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-jian-status"></div></div>
      <div class="strokecard"><div class="shz">口</div><div class="spy">kǒu <span class="transcript">[коу]</span></div><div class="starget" id="sw2-kou"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-kou')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-kou')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-kou-status"></div></div>
      <div class="strokecard"><div class="shz">山</div><div class="spy">shān <span class="transcript">[шань]</span></div><div class="starget" id="sw2-shan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-shan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-shan')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-shan-status"></div></div>
      <div class="strokecard"><div class="shz">小</div><div class="spy">xiǎo <span class="transcript">[сяо]</span></div><div class="starget" id="sw2-xiao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw2-xiao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw2-xiao')">Худам нависам</button></div>
        <div class="sstatus" id="sw2-xiao-status"></div></div>
    </div>

    <div class="section-lbl">8. Аломатҳои асосии навишт (笔画)</div>
    <div class="section-sub">Се аломати нав, ки ҳамаашон "хамида" мешаванд — на рост, балки дар миёна тағйири самт медиҳанд.</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_hengzhe','横折')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇆</div><div class="py">héngzhé<span class="transcript"> [хэнчжэ]</span> — уфуқӣ-хамида</div><div class="tj">аввал уфуқӣ, баъд ба поён мехамад. Мисол: 口 (даҳон), 日 (офтоб)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_shuzhe','竖折')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇄</div><div class="py">shùzhé<span class="transcript"> [шучжэ]</span> — амудӣ-хамида</div><div class="tj">аввал амудӣ, баъд ба рост мехамад. Мисол: 山 (кӯҳ), 出 (баромадан)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_shugou','竖钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">亅</div><div class="py">shùgōu<span class="transcript"> [шугоу]</span> — амудӣ-қалмоқ</div><div class="tj">амудӣ поён рафта, дар охир каме ба чап мехамад. Мисол: 丁 (одам), 小 (хурд)</div></div>
    </div>

    <div class="section-lbl">9. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="section-sub">Панҷ ҳарфи оддии зерин низ якҷузъаанд ва аслашон аз шакли ашёи воқеӣ гирифта шудааст:</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_kou','口')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">口</div><div class="py">kǒu <span class="transcript">[коу]</span></div><div class="tj">даҳон — шаклаш ба даҳони кушода монанд аст</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_jian','见')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">见</div><div class="py">jiàn <span class="transcript">[цзиен]</span></div><div class="tj">дидан — боло 目(чашм), поён 人(одам): "бо чашми кушода нигоҳ кардан"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_shan','山')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">山</div><div class="py">shān <span class="transcript">[шань]</span></div><div class="tj">кӯҳ — шаклаш ба кӯҳҳои мавҷдор монанд аст</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_xiao','小')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">小</div><div class="py">xiǎo <span class="transcript">[сяо]</span></div><div class="tj">хурд — шаклаш ба зарраҳои реги майда монанд буд</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_bu','不')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">不</div><div class="py">bù <span class="transcript">[бу]</span></div><div class="tj">не — пештар олоти корӣ буд, ҳоло ҳарфи инкор аст (аллакай дар Дарси 1 омӯхтед)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 2 (10 савол)</div>
      <div class="qcard"><div class="q">1. 谢谢 чӣ маъно дорад?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Салом</label>
        <label><input type="radio" name="q1" value="right">Ташаккур</label>
        <label><input type="radio" name="q1" value="wrong">Хайр</label>
      </div></div>
      <div class="qcard"><div class="q">2. Ба ҷумлаи "谢谢你！" кадом ҷавоб дуруст аст?</div><div class="opts">
        <label><input type="radio" name="q2" value="right">不客气！</label>
        <label><input type="radio" name="q2" value="wrong">再见！</label>
        <label><input type="radio" name="q2" value="wrong">你好！</label>
      </div></div>
      <div class="qcard"><div class="q">3. 再见 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Ташаккур</label>
        <label><input type="radio" name="q3" value="wrong">Бубахшед</label>
        <label><input type="radio" name="q3" value="right">То дидан / Хайр</label>
      </div></div>
      <div class="qcard"><div class="q">4. Пиньини калимаи 不客气 кадом аст?</div><div class="opts">
        <label><input type="radio" name="q4" value="right">bú kèqi</label>
        <label><input type="radio" name="q4" value="wrong">xièxie</label>
        <label><input type="radio" name="q4" value="wrong">zàijiàn</label>
      </div></div>
      <div class="qcard"><div class="q">5. Вақте 不 (bù) пеш аз ҳиҷои оҳанги 4 меояд, чӣ рӯй медиҳад?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Ҳеҷ чиз, ҳамон хел мемонад</label>
        <label><input type="radio" name="q5" value="right">Ба оҳанги 2 иваз мешавад</label>
        <label><input type="radio" name="q5" value="wrong">Пурра нест мешавад</label>
      </div></div>
      <div class="qcard"><div class="q">6. Дар калимаҳои mama, yeye, nainai, baba — ҳиҷои дуюм кадом оҳангро дорад?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Оҳанги 1</label>
        <label><input type="radio" name="q6" value="right">Оҳанги нейтралӣ</label>
        <label><input type="radio" name="q6" value="wrong">Оҳанги 4</label>
      </div></div>
      <div class="qcard"><div class="q">7. Тибқи қоидаи кӯтоҳнависӣ, "n + iou" чӣ гуна навишта мешавад?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">niou</label>
        <label><input type="radio" name="q7" value="right">niu</label>
        <label><input type="radio" name="q7" value="wrong">nio</label>
      </div></div>
      <div class="qcard"><div class="q">8. Ҳарфи 见 аз кадом ду қисм иборат аст?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">女 + 子</label>
        <label><input type="radio" name="q8" value="right">目 (боло) + 人 (поён)</label>
        <label><input type="radio" name="q8" value="wrong">氵+ 殳</label>
      </div></div>
      <div class="qcard"><div class="q">9. Аломати 亅 (shùgōu) чӣ ном дорад ва дар кадом ҳарф вомехӯрад?</div><div class="opts">
        <label><input type="radio" name="q9" value="right">Амудӣ-қалмоқ, дар 小</label>
        <label><input type="radio" name="q9" value="wrong">Уфуқӣ-хамида, дар 口</label>
        <label><input type="radio" name="q9" value="wrong">Нуқта, дар 六</label>
      </div></div>
      <div class="qcard"><div class="q">10. 请大声读 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Китобро кушоед</label>
        <label><input type="radio" name="q10" value="right">Марҳамат, баланд хонед</label>
        <label><input type="radio" name="q10" value="wrong">Боз як бор хонед</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson3(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">03</div>
      <div class="titles">
        <div class="zh">你叫什么名字</div>
        <div class="py">Nǐ jiào shénme míngzi</div>
        <div class="en">Номи шумо чист</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс ва тарзи пайваст кардан</div>
    <div class="section-sub">Дар ин дарс фарқи ду гурӯҳи сарҳарфи монандро меомӯзем — j/q/x ва z/c/s, инчунин фарқи бунёдҳои i/u/ü.</div>
    <table class="pytable">
      <tr><th>Гурӯҳ</th><th>Тарзи хондан ва фарқият</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">j, q, x</td><td>Забон ба сақфи даҳон (пеши он) наздик мешавад. j — бе нафаси қавӣ; q — бо нафаси қавии зиёд; x — забон ламс намекунад, фақат наздик мешавад (садои "сь"-монанд).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">z, c, s</td><td>Нӯги забон ба пушти дандонҳои болоӣ мезанад. z — бе нафаси қавӣ; c — бо нафаси қавии равшан; s — забон умуман ламс намекунад, фақат тангӣ месозад.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">i / u</td><td>Ҷои забон якхела, вале лабҳо фарқ мекунанд: i — лабҳо ҳамвор (кушода); u — лабҳо мудаввар (гирд).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">u / ü</td><td>Ҳарду лаб мудавваранд, вале ҷои забон фарқ мекунад: ü — забон дар пеш (нӯгаш ба дандонҳои поён такя мекунад); u — забон дар қафо.</td></tr>
    </table>
    <div class="note"><b>Қоидаи муҳим:</b> вақте ü (ё бунёде, ки бо ü сар мешавад) баъд аз j, q, x меояд, ду нуқтаи болои ü гум мешавад дар навишт: ju, qu, xu (на jü, qü, xü). Вале баъд аз l ё n нуқтаҳо мемонанд: lü, nü.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тамрин</b> — фарқи j/q/x ва z/c/s-ро гӯш кунед ва такрор кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">xiūxi<span class="transcript"><br>[сюси]</span><br><button class="playbtn" onclick="playAudio('l3_drill_xiuxi','休息')">&#128266;</button></div>
      <div class="drillcard">jiàqī<span class="transcript"><br>[цзяци]</span><br><button class="playbtn" onclick="playAudio('l3_drill_jiaqi','假期')">&#128266;</button></div>
      <div class="drillcard">xīngqī<span class="transcript"><br>[синци]</span><br><button class="playbtn" onclick="playAudio('l3_drill_xingqi','星期')">&#128266;</button></div>
      <div class="drillcard">xìngqù<span class="transcript"><br>[синцюй]</span><br><button class="playbtn" onclick="playAudio('l3_drill_xingqu','兴趣')">&#128266;</button></div>
      <div class="drillcard">zǎoshang<span class="transcript"><br>[цзаушан]</span><br><button class="playbtn" onclick="playAudio('l3_drill_zaoshang','早上')">&#128266;</button></div>
      <div class="drillcard">cāochǎng<span class="transcript"><br>[цхаучан]</span><br><button class="playbtn" onclick="playAudio('l3_drill_caochang','操场')">&#128266;</button></div>
      <div class="drillcard">Hànzì<span class="transcript"><br>[ханьцзы]</span><br><button class="playbtn" onclick="playAudio('l3_drill_hanzi','汉字')">&#128266;</button></div>
      <div class="drillcard">zuótiān<span class="transcript"><br>[цзуотиен]</span><br><button class="playbtn" onclick="playAudio('l3_drill_zuotian','昨天')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Талаффуз — қоидаи тағйири оҳанги 不 (пурра)</div>
    <table class="pytable">
      <tr><th>Ҳолат</th><th>Мисол</th></tr>
      <tr><td>Пеш аз оҳанги 1, 2 ё 3 — 不 тағйир НАМЕЁБАД</td><td style="font-family:'Noto Serif SC',serif;">bù chī, bù xíng, bù hǎo</td></tr>
      <tr><td>Пеш аз оҳанги 4 — 不 ба оҳанги 2 (bú) иваз мешавад</td><td style="font-family:'Noto Serif SC',serif;">bú huì, bú shì, bú kàn</td></tr>
    </table>
    <div class="note">Дар ин дарс низ ин қоида кор мекунад: 不是 (bú shì), зеро 是 оҳанги 4 дорад.</div>

    <div class="section-lbl">3. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('jiao4','叫')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">叫</div><div class="py">jiào<span class="transcript"> [цзяо]</span></div><div class="tj">номида шудан, ном доштан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shenme','什么')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">什么</div><div class="py">shénme<span class="transcript"> [шэньмэ]</span></div><div class="tj">чӣ (ҷонишини саволӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mingzi','名字')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">名字</div><div class="py">míngzi<span class="transcript"> [минцзы]</span></div><div class="tj">ном</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('wo3','我')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">我</div><div class="py">wǒ<span class="transcript"> [во]</span></div><div class="tj">ман</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shi4','是')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">是</div><div class="py">shì<span class="transcript"> [ши]</span></div><div class="tj">будан (феъли пайвасткунанда)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('laoshi','老师')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">老师</div><div class="py">lǎoshī<span class="transcript"> [лаоши]</span></div><div class="tj">муаллим</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ma_q','吗')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">吗</div><div class="py">ma<span class="transcript"> [ма]</span></div><div class="tj">аломати саволӣ (дар охири ҷумла)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xuesheng','学生')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">学生</div><div class="py">xuésheng<span class="transcript"> [сюэшэн]</span></div><div class="tj">донишҷӯ, хонанда</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ren2','人')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">人</div><div class="py">rén<span class="transcript"> [жэнь]</span></div><div class="tj">одам, шахс</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhongguo','中国')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">中国</div><div class="py">Zhōngguó<span class="transcript"> [Чжунго]</span></div><div class="tj">Хитой (номи хос)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('meiguo','美国')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">美国</div><div class="py">Měiguó<span class="transcript"> [Мэйго]</span></div><div class="tj">Амрико (номи хос)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('liyue','李月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">李月</div><div class="py">Lǐ Yuè<span class="transcript"> [Ли Юэ]</span></div><div class="tj">номи шахс (Ли Юэ)</div></div>
    </div>

    <div class="section-lbl">4. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷонишини саволии <ruby>什么<rt>shénme</rt></ruby></div>
      <div class="gbody">什么 маънои "чӣ" дорад ва ба ҷои исми номаълум дар ҷумла гузошта мешавад — ё танҳо, ё пеш аз исми дигар. Тартиби ҷумла тағйир намеёбад, фақат ҷои калимаи номаълум 什么 мегирад.</div>
      <div class="gex"><span class="tag">намуна</span>你叫<ruby>什么<rt>shénme</rt></ruby>名字？ — Номи шумо чист?</div>
      <div class="gex"><span class="tag">намуна</span>这是<ruby>什么<rt>shénme</rt></ruby>？ — Ин чист?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷумлаи 是 (будан)</div>
      <div class="gbody">是 феъли пайвасткунанда аст, ки мегӯяд шахс/чиз чӣ аст ё ба чӣ мансуб аст. Шакли инкорӣ бо гузоштани 不 пеш аз 是 сохта мешавад: 不是.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + (不)是 + исм</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>是<rt>shì</rt></ruby>美国人。 — Ман амрикоӣ ҳастам.</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>不是<rt>bú shì</rt></ruby>老师。 — Ман муаллим нестам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Ҷумлаи саволӣ бо <ruby>吗<rt>ma</rt></ruby></div>
      <div class="gbody">Агар ба охири ҷумлаи хабарӣ 吗 илова кунед, он ба ҷумлаи саволӣ табдил меёбад — тартиби калимаҳо тағйир намеёбад, фақат 吗 дар охир зам мешавад.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + феъл + исм + 吗？</div>
      <div class="gex"><span class="tag">намуна</span>你是中国人。 → 你是中国人<ruby>吗<rt>ma</rt></ruby>？ — Шумо хитоӣ ҳастед? (Шумо хитоӣ ҳастед?)</div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你叫什么名字？</span><span class="py">Nǐ jiào shénme míngzi?</span><span class="transcript">[Ни цзяо шэньмэ минцзы?]</span><span class="tj">— Номи шумо чист?</span><button class="playbtn inline" onclick="playAudio('l3_q1','你叫什么名字')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我叫李月。</span><span class="py">Wǒ jiào Lǐ Yuè.</span><span class="transcript">[Во цзяо Ли Юэ.]</span><span class="tj">— Номи ман Ли Юэ.</span><button class="playbtn inline" onclick="playAudio('l3_a1','我叫李月')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你是老师吗？</span><span class="py">Nǐ shì lǎoshī ma?</span><span class="transcript">[Ни ши лаоши ма?]</span><span class="tj">— Шумо муаллим ҳастед?</span><button class="playbtn inline" onclick="playAudio('l3_q2','你是老师吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我不是老师，我是学生。</span><span class="py">Wǒ bú shì lǎoshī, wǒ shì xuésheng.</span><span class="transcript">[Во бу ши лаоши, во ши сюэшэн.]</span><span class="tj">— Ман муаллим нестам, ман донишҷӯ ҳастам.</span><button class="playbtn inline" onclick="playAudio('l3_a2','我不是老师我是学生')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你是中国人吗？</span><span class="py">Nǐ shì Zhōngguó rén ma?</span><span class="transcript">[Ни ши Чжунго жэнь ма?]</span><span class="tj">— Шумо хитоӣ ҳастед?</span><button class="playbtn inline" onclick="playAudio('l3_q3','你是中国人吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我不是中国人，我是美国人。</span><span class="py">Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.</span><span class="transcript">[Во бу ши Чжунго жэнь, во ши Мэйго жэнь.]</span><span class="tj">— Ман хитоӣ нестам, ман амрикоӣ ҳастам.</span><button class="playbtn inline" onclick="playAudio('l3_a3','我不是中国人我是美国人')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 3. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid3">
      <div class="strokecard"><div class="shz">叫</div><div class="spy">jiào <span class="transcript">[цзяо]</span></div><div class="starget" id="sw3-jiao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-jiao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-jiao')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-jiao-status"></div></div>
      <div class="strokecard"><div class="shz">什</div><div class="spy">shén <span class="transcript">[шэнь]</span></div><div class="starget" id="sw3-shen"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-shen')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-shen')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-shen-status"></div></div>
      <div class="strokecard"><div class="shz">么</div><div class="spy">me <span class="transcript">[мэ]</span></div><div class="starget" id="sw3-me"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-me')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-me')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-me-status"></div></div>
      <div class="strokecard"><div class="shz">名</div><div class="spy">míng <span class="transcript">[мин]</span></div><div class="starget" id="sw3-ming"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-ming')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-ming')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-ming-status"></div></div>
      <div class="strokecard"><div class="shz">字</div><div class="spy">zì <span class="transcript">[цзы]</span></div><div class="starget" id="sw3-zi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-zi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-zi')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-zi-status"></div></div>
      <div class="strokecard"><div class="shz">我</div><div class="spy">wǒ <span class="transcript">[во]</span></div><div class="starget" id="sw3-wo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-wo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-wo')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-wo-status"></div></div>
      <div class="strokecard"><div class="shz">是</div><div class="spy">shì <span class="transcript">[ши]</span></div><div class="starget" id="sw3-shi4"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-shi4')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-shi4')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-shi4-status"></div></div>
      <div class="strokecard"><div class="shz">老</div><div class="spy">lǎo <span class="transcript">[лао]</span></div><div class="starget" id="sw3-lao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-lao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-lao')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-lao-status"></div></div>
      <div class="strokecard"><div class="shz">师</div><div class="spy">shī <span class="transcript">[ши]</span></div><div class="starget" id="sw3-shi1"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-shi1')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-shi1')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-shi1-status"></div></div>
      <div class="strokecard"><div class="shz">吗</div><div class="spy">ma <span class="transcript">[ма]</span></div><div class="starget" id="sw3-ma"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-ma')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-ma')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-ma-status"></div></div>
      <div class="strokecard"><div class="shz">学</div><div class="spy">xué <span class="transcript">[сюэ]</span></div><div class="starget" id="sw3-xue"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-xue')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-xue')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-xue-status"></div></div>
      <div class="strokecard"><div class="shz">生</div><div class="spy">shēng <span class="transcript">[шэн]</span></div><div class="starget" id="sw3-sheng"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-sheng')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-sheng')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-sheng-status"></div></div>
      <div class="strokecard"><div class="shz">人</div><div class="spy">rén <span class="transcript">[жэнь]</span></div><div class="starget" id="sw3-ren"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw3-ren')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw3-ren')">Худам нависам</button></div>
        <div class="sstatus" id="sw3-ren-status"></div></div>
    </div>

    <div class="section-lbl">7. Аломатҳои асосии навишт (笔画)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_hengzhegou','横折钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">乛</div><div class="py">héngzhégōu<span class="transcript"> [хэнчжэгоу]</span> — уфуқӣ-хамида-қалмоқ</div><div class="tj">аввал уфуқӣ, баъд ба поён мехамад ва қалмоқ мекунад. Мисол: 门 (дар), 月 (моҳ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_wogou','卧钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇃</div><div class="py">wògōu<span class="transcript"> [вогоу]</span> — қалмоқи хобида</div><div class="tj">каҷи мулоим ба поён, дар охир қалмоқи болораванда. Мисол: 心 (дил), 您 (шумо бо эҳтиром)</div></div>
    </div>

    <div class="section-lbl">8. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_yue','月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">月</div><div class="py">yuè <span class="transcript">[юэ]</span></div><div class="tj">моҳ (дар осмон) — шаклаш ба ҳилол монанд аст</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_xin','心')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">心</div><div class="py">xīn <span class="transcript">[синь]</span></div><div class="tj">дил — шаклаш ба дил монанд аст</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_zhong','中')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">中</div><div class="py">zhōng <span class="transcript">[чжун]</span></div><div class="tj">миён — пештар байрақи парвозкунанда буд, ҳоло маънои "мобайн"-ро дорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ren2','人')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">人</div><div class="py">rén <span class="transcript">[жэнь]</span></div><div class="tj">одам — шаклаш ба одами рост истода монанд аст</div></div>
    </div>
    <div class="note"><b>Қоидаи тартиби навишт:</b> аввал уфуқӣ, баъд амудӣ (先横后竖) — мисол: 十, 工. Аввал чапи поёнӣ, баъд рости поёнӣ (先撇后捺) — мисол: 八, 人.</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 3 (10 савол)</div>
      <div class="qcard"><div class="q">1. 你叫什么名字？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Шумо аз куҷоед?</label>
        <label><input type="radio" name="q1" value="right">Номи шумо чист?</label>
        <label><input type="radio" name="q1" value="wrong">Шумо чанд сола ҳастед?</label>
      </div></div>
      <div class="qcard"><div class="q">2. 什么 кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q2" value="right">Ҷонишини саволӣ "чӣ"</label>
        <label><input type="radio" name="q2" value="wrong">Ҳарфи инкор</label>
        <label><input type="radio" name="q2" value="wrong">Аломати саволӣ</label>
      </div></div>
      <div class="qcard"><div class="q">3. Шакли инкории "我是老师" кадом аст?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">我是不老师</label>
        <label><input type="radio" name="q3" value="right">我不是老师</label>
        <label><input type="radio" name="q3" value="wrong">我老师不是</label>
      </div></div>
      <div class="qcard"><div class="q">4. Барои сохтани ҷумлаи саволӣ аз "你是学生" чӣ илова мекунем?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">不 дар аввал</label>
        <label><input type="radio" name="q4" value="right">吗 дар охир</label>
        <label><input type="radio" name="q4" value="wrong">什么 дар миён</label>
      </div></div>
      <div class="qcard"><div class="q">5. 学生 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Муаллим</label>
        <label><input type="radio" name="q5" value="right">Донишҷӯ / хонанда</label>
        <label><input type="radio" name="q5" value="wrong">Одам</label>
      </div></div>
      <div class="qcard"><div class="q">6. Кадоме аз инҳо дуруст аст: 不是 чӣ гуна хонда мешавад?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">bù shì</label>
        <label><input type="radio" name="q6" value="right">bú shì</label>
        <label><input type="radio" name="q6" value="wrong">bǔ shì</label>
      </div></div>
      <div class="qcard"><div class="q">7. Вақте ü баъд аз j, q, x меояд, дар навишт чӣ рӯй медиҳад?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">Ду нуқтаи болои ü гум мешавад (ju, qu, xu)</label>
        <label><input type="radio" name="q7" value="wrong">ü ба u иваз мешавад пурра</label>
        <label><input type="radio" name="q7" value="wrong">Ҳеҷ чиз тағйир намеёбад</label>
      </div></div>
      <div class="qcard"><div class="q">8. Фарқи асосии j ва q дар талаффуз чист?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">j забонро ламс намекунад, q мекунад</label>
        <label><input type="radio" name="q8" value="right">q бо нафаси қавитар талаффуз мешавад</label>
        <label><input type="radio" name="q8" value="wrong">Ҳеҷ фарқе нест</label>
      </div></div>
      <div class="qcard"><div class="q">9. Ҳарфи 中 аслан чӣ маъно дошт?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Дил</label>
        <label><input type="radio" name="q9" value="right">Байрақи парвозкунанда</label>
        <label><input type="radio" name="q9" value="wrong">Одами рост истода</label>
      </div></div>
      <div class="qcard"><div class="q">10. 我不是中国人，我是美国人 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Ман хитоӣ ҳастам, амрикоӣ не</label>
        <label><input type="radio" name="q10" value="right">Ман хитоӣ нестам, ман амрикоӣ ҳастам</label>
        <label><input type="radio" name="q10" value="wrong">Ман на хитоӣ ва на амрикоӣ ҳастам</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson4(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">04</div>
      <div class="titles">
        <div class="zh">她是我的汉语老师</div>
        <div class="py">Tā shì wǒ de Hànyǔ lǎoshī</div>
        <div class="en">Ӯ муаллими хитоии ман аст</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс ва тарзи пайваст кардан</div>
    <div class="section-sub">Дар ин дарс се мавзӯи муҳим: фарқи чуқуртари zh/ch/sh/r, фарқи бунёди n аз ng, ва қоидаи истифодаи y/w.</div>
    <table class="pytable">
      <tr><th>Ҳарф/бунёд</th><th>Тарзи хондан</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">zh, ch, sh, r</td><td>Нӯги забон ба боло печида, ба сақфи пеши даҳон наздик мешавад. zh — бе нафаси қавӣ; ch — бо нафаси қавии зиёд; sh — забон ламс намекунад, фақат тангӣ месозад; r — мисли sh, вале бо ларзиши овоз (садоӣ).</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">n (пеши бинӣ)</td><td>Нӯги забон ба буриши болоӣ такя мекунад, даҳон каме кушода.</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">ng (қафои бинӣ)</td><td>Решаи забон ба сақфи мулоим такя мекунад, даҳон бештар кушода мешавад.</td></tr>
    </table>
    <div class="note"><b>Қоидаи y/w:</b> агар бунёд бо i, u ё ü сар шавад ва ҳиҷо сарҳарф надошта бошад, дар навишт пеш аз он ҳарфи "y" (барои i/ü) ё "w" (барои u) илова мешавад. Масалан: i→yi, in→yin, ia→ya, iu→you; u→wu, ua→wa, ui→wei; ü→yu, üe→yue.</div>

    <div class="section-sub" style="margin-top:14px;"><b>Тамрин</b> — фарқи zh/ch/sh/r ва n/ng-ро гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">zhīshi<span class="transcript"><br>[чжиши]</span><br><button class="playbtn" onclick="playAudio('l4_drill_zhishi','知识')">&#128266;</button></div>
      <div class="drillcard">rènshi<span class="transcript"><br>[женьши]</span><br><button class="playbtn" onclick="playAudio('l4_drill_renshi','认识')">&#128266;</button></div>
      <div class="drillcard">shēngrì<span class="transcript"><br>[шэнжи]</span><br><button class="playbtn" onclick="playAudio('l4_drill_shengri','生日')">&#128266;</button></div>
      <div class="drillcard">chángshí<span class="transcript"><br>[чханши]</span><br><button class="playbtn" onclick="playAudio('l4_drill_changshi','常识')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Талаффуз — қоидаи тағйири оҳанги 一 (yī)</div>
    <table class="pytable">
      <tr><th>Ҳолат</th><th>Мисол</th></tr>
      <tr><td>Пеш аз оҳанги 1, 2 ё 3 — 一 ба оҳанги 4 иваз мешавад</td><td style="font-family:'Noto Serif SC',serif;">yì zhāng, yì tiáo, yì zhǒng</td></tr>
      <tr><td>Пеш аз оҳанги 4 — 一 ба оҳанги 2 иваз мешавад</td><td style="font-family:'Noto Serif SC',serif;">yídìng, yíkuài</td></tr>
      <tr><td>Танҳо истифода шавад ё дар рақам — тағйир НАМЕЁБАД</td><td style="font-family:'Noto Serif SC',serif;">dì yī, yī èr sān, xīngqī yī, shíyī</td></tr>
    </table>
    <div class="section-sub" style="margin-top:14px;"><b>Тамрин</b> — тағйири оҳанги 一-ро гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">yì zhāng<span class="transcript"><br>[и чжан]</span><br><button class="playbtn" onclick="playAudio('l4_drill_yizhang','一张')">&#128266;</button></div>
      <div class="drillcard">yídìng<span class="transcript"><br>[и дин]</span><br><button class="playbtn" onclick="playAudio('l4_drill_yiding','一定')">&#128266;</button></div>
      <div class="drillcard">dì yī<span class="transcript"><br>[ди и]</span><br><button class="playbtn" onclick="playAudio('l4_drill_diyi','第一')">&#128266;</button></div>
      <div class="drillcard">shíyī<span class="transcript"><br>[ши и]</span><br><button class="playbtn" onclick="playAudio('l4_drill_shiyi','十一')">&#128266;</button></div>
    </div>

    <div class="section-lbl">3. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ta1','她')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">她</div><div class="py">tā<span class="transcript"> [та]</span></div><div class="tj">ӯ (духтар/зан)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shei2','谁')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">谁</div><div class="py">shéi<span class="transcript"> [шэй]</span></div><div class="tj">кӣ (ҷонишини саволӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('de5','的')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">的</div><div class="py">de<span class="transcript"> [дэ]</span></div><div class="tj">аломати тааллуқият (аз они)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hanyu','汉语')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">汉语</div><div class="py">Hànyǔ<span class="transcript"> [Ханьюй]</span></div><div class="tj">забони хитоӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('na3','哪')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">哪</div><div class="py">nǎ<span class="transcript"> [на]</span></div><div class="tj">кадом</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('guo2','国')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">国</div><div class="py">guó<span class="transcript"> [го]</span></div><div class="tj">кишвар</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ne5','呢')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">呢</div><div class="py">ne<span class="transcript"> [нэ]</span></div><div class="tj">аломати саволии "-чӣ?"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ta1m','他')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">他</div><div class="py">tā<span class="transcript"> [та]</span></div><div class="tj">ӯ (мард)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('tongxue','同学')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">同学</div><div class="py">tóngxué<span class="transcript"> [тхунсюэ]</span></div><div class="tj">ҳамсинф</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('pengyou','朋友')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">朋友</div><div class="py">péngyou<span class="transcript"> [пхэнйоу]</span></div><div class="tj">дӯст</div></div>
    </div>

    <div class="section-lbl">4. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷонишинҳои саволии <ruby>谁<rt>shéi</rt></ruby> ва <ruby>哪<rt>nǎ</rt></ruby></div>
      <div class="gbody">谁 барои пурсидани номи шахс истифода мешавад — ба ҷои номи одам гузошта мешавад. 哪 маънои "кадом" дорад ва сохташ чунин аст: 哪 + калимаи миқдорӣ/исм + исм.</div>
      <div class="gex"><span class="tag">намуна</span>她是<ruby>谁<rt>shéi</rt></ruby>？ — Ӯ кист?</div>
      <div class="gex"><span class="tag">намуна</span>你是<ruby>哪<rt>nǎ</rt></ruby>国人？ — Шумо аз кадом кишваред?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Аломати сохторӣ <ruby>的<rt>de</rt></ruby></div>
      <div class="gbody">Сохти "исм/ҷонишин + 的 + исм" тааллуқиятро мефаҳмонад. Агар исми баъд аз 的 калимаи хешовандӣ ё номи шахс бошад, 的 метавонад партофта шавад.</div>
      <div class="gex"><span class="tag">сохт</span>我 + 的 + 汉语老师 = 我的汉语老师 (муаллими хитоии ман)</div>
      <div class="gex"><span class="tag">намуна</span>她不是我同学 (的 партофта шуд, зеро 同学 калимаи шахсист)</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Аломати саволии <ruby>呢<rt>ne</rt></ruby> (1)</div>
      <div class="gbody">呢 баъд аз исм ё ҷонишин гузошта мешавад, то дар бораи ҳамон мавзӯъ дубора пурсад — сохти маъмул: A……。B呢？ (маънои "аммо B-чӣ?")</div>
      <div class="gex"><span class="tag">намуна</span>我是美国人。你<ruby>呢<rt>ne</rt></ruby>？ — Ман амрикоӣ ҳастам. Шумо-чӣ?</div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">她是谁？</span><span class="py">Tā shì shéi?</span><span class="transcript">[Та ши шэй?]</span><span class="tj">— Ӯ кист?</span><button class="playbtn inline" onclick="playAudio('l4_q1','她是谁')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她是我的汉语老师，她叫李月。</span><span class="py">Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.</span><span class="transcript">[Та ши во дэ Ханьюй лаоши, та цзяо Ли Юэ.]</span><span class="tj">— Ӯ муаллими хитоии ман аст, номаш Ли Юэ.</span><button class="playbtn inline" onclick="playAudio('l4_a1','她是我的汉语老师')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你是哪国人？</span><span class="py">Nǐ shì nǎ guó rén?</span><span class="transcript">[Ни ши на го жэнь?]</span><span class="tj">— Шумо аз кадом кишваред?</span><button class="playbtn inline" onclick="playAudio('l4_q2','你是哪国人')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我是美国人。你呢？</span><span class="py">Wǒ shì Měiguó rén. Nǐ ne?</span><span class="transcript">[Во ши Мэйго жэнь. Ни нэ?]</span><span class="tj">— Ман амрикоӣ ҳастам. Шумо-чӣ?</span><button class="playbtn inline" onclick="playAudio('l4_a2','我是美国人你呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">我是中国人。</span><span class="py">Wǒ shì Zhōngguó rén.</span><span class="transcript">[Во ши Чжунго жэнь.]</span><span class="tj">— Ман хитоӣ ҳастам.</span><button class="playbtn inline" onclick="playAudio('l4_a2b','我是中国人')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">他是谁？</span><span class="py">Tā shì shéi?</span><span class="transcript">[Та ши шэй?]</span><span class="tj">— Ӯ (мард) кист?</span><button class="playbtn inline" onclick="playAudio('l4_q3','他是谁')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">他是我同学。</span><span class="py">Tā shì wǒ tóngxué.</span><span class="transcript">[Та ши во тхунсюэ.]</span><span class="tj">— Ӯ ҳамсинфи ман аст.</span><button class="playbtn inline" onclick="playAudio('l4_a3','他是我同学')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">她呢？她是你同学吗？</span><span class="py">Tā ne? Tā shì nǐ tóngxué ma?</span><span class="transcript">[Та нэ? Та ши ни тхунсюэ ма?]</span><span class="tj">— Ӯ (зан)-чӣ? Ӯ ҳамсинфи шумост?</span><button class="playbtn inline" onclick="playAudio('l4_q3b','她呢她是你同学吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她不是我同学，她是我朋友。</span><span class="py">Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.</span><span class="transcript">[Та бу ши во тхунсюэ, та ши во пхэнйоу.]</span><span class="tj">— Ӯ ҳамсинфи ман нест, ӯ дӯсти ман аст.</span><button class="playbtn inline" onclick="playAudio('l4_a3b','她不是我同学她是我朋友')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 4. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid4">
      <div class="strokecard"><div class="shz">她</div><div class="spy">tā <span class="transcript">[та]</span></div><div class="starget" id="sw4-ta1"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-ta1')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-ta1')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-ta1-status"></div></div>
      <div class="strokecard"><div class="shz">谁</div><div class="spy">shéi <span class="transcript">[шэй]</span></div><div class="starget" id="sw4-shei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-shei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-shei')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-shei-status"></div></div>
      <div class="strokecard"><div class="shz">的</div><div class="spy">de <span class="transcript">[дэ]</span></div><div class="starget" id="sw4-de"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-de')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-de')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-de-status"></div></div>
      <div class="strokecard"><div class="shz">汉</div><div class="spy">hàn <span class="transcript">[хань]</span></div><div class="starget" id="sw4-han"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-han')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-han')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-han-status"></div></div>
      <div class="strokecard"><div class="shz">语</div><div class="spy">yǔ <span class="transcript">[юй]</span></div><div class="starget" id="sw4-yu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-yu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-yu')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-yu-status"></div></div>
      <div class="strokecard"><div class="shz">哪</div><div class="spy">nǎ <span class="transcript">[на]</span></div><div class="starget" id="sw4-na"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-na')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-na')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-na-status"></div></div>
      <div class="strokecard"><div class="shz">国</div><div class="spy">guó <span class="transcript">[го]</span></div><div class="starget" id="sw4-guo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-guo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-guo')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-guo-status"></div></div>
      <div class="strokecard"><div class="shz">呢</div><div class="spy">ne <span class="transcript">[нэ]</span></div><div class="starget" id="sw4-ne"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-ne')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-ne')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-ne-status"></div></div>
      <div class="strokecard"><div class="shz">他</div><div class="spy">tā <span class="transcript">[та]</span></div><div class="starget" id="sw4-ta2"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-ta2')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-ta2')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-ta2-status"></div></div>
      <div class="strokecard"><div class="shz">同</div><div class="spy">tóng <span class="transcript">[тхун]</span></div><div class="starget" id="sw4-tong"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-tong')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-tong')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-tong-status"></div></div>
      <div class="strokecard"><div class="shz">朋</div><div class="spy">péng <span class="transcript">[пхэн]</span></div><div class="starget" id="sw4-peng"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-peng')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-peng')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-peng-status"></div></div>
      <div class="strokecard"><div class="shz">友</div><div class="spy">yǒu <span class="transcript">[йоу]</span></div><div class="starget" id="sw4-you"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw4-you')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw4-you')">Худам нависам</button></div>
        <div class="sstatus" id="sw4-you-status"></div></div>
    </div>

    <div class="section-lbl">7. Аломатҳои асосии навишт (笔画)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_shuwangou','竖弯钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">乚</div><div class="py">shùwāngōu<span class="transcript"> [шувангоу]</span> — амудӣ-каҷ-қалмоқ</div><div class="tj">амудӣ поён рафта, ба рост каҷ мешавад ва дар охир қалмоқ мекунад. Мисол: 七 (ҳафт), 儿 (писар)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_hengzhewangou','横折弯钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">乙</div><div class="py">héngzhéwāngōu<span class="transcript"> [хэнчжэвангоу]</span> — уфуқӣ-хамида-каҷ-қалмоқ</div><div class="tj">уфуқӣ, баъд ба поён мехамад, каҷ мешавад ва қалмоқ мекунад. Мисол: 九 (нӯҳ), 几 (чанд)</div></div>
    </div>

    <div class="section-lbl">8. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_qi','七')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">七</div><div class="py">qī <span class="transcript">[тси]</span></div><div class="tj">ҳафт</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_er','儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">儿</div><div class="py">ér <span class="transcript">[эр]</span></div><div class="tj">пештар маънои "бача" дошт, ҳоло бештар "писар"-ро мефаҳмонад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_ji','几')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">几</div><div class="py">jǐ <span class="transcript">[цзи]</span></div><div class="tj">пештар мизчаи хурди пастак буд, ҳоло "чанд" маъно дорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_jiu','九')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">九</div><div class="py">jiǔ <span class="transcript">[цзиу]</span></div><div class="tj">нӯҳ</div></div>
    </div>
    <div class="note"><b>Қоидаи тартиби навишт:</b> аз боло ба поён (从上到下) — мисол: 二, 三. Аз чап ба рост (从左到右) — мисол: 几, 八.</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 4 (10 савол)</div>
      <div class="qcard"><div class="q">1. 她是谁？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Ӯ аз куҷост?</label>
        <label><input type="radio" name="q1" value="right">Ӯ кист?</label>
        <label><input type="radio" name="q1" value="wrong">Ин чист?</label>
      </div></div>
      <div class="qcard"><div class="q">2. Фарқи 他 ва 她 дар чист?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Якхела, фарқ надоранд</label>
        <label><input type="radio" name="q2" value="right">他 барои мард, 她 барои зан</label>
        <label><input type="radio" name="q2" value="wrong">他 барои якка, 她 барои ҷамъ</label>
      </div></div>
      <div class="qcard"><div class="q">3. 的 кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q3" value="right">Тааллуқиятро нишон медиҳад (аз они)</label>
        <label><input type="radio" name="q3" value="wrong">Ҷумларо ба саволӣ табдил медиҳад</label>
        <label><input type="radio" name="q3" value="wrong">Инкор мекунад</label>
      </div></div>
      <div class="qcard"><div class="q">4. Дар ҷумлаи "我是美国人。你呢？" калимаи 呢 чӣ вазифа дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Тааллуқиятро нишон медиҳад</label>
        <label><input type="radio" name="q4" value="right">Ҳамон саволро такрор мекунад ("шумо-чӣ?")</label>
        <label><input type="radio" name="q4" value="wrong">Инкор мекунад</label>
      </div></div>
      <div class="qcard"><div class="q">5. 汉语 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Хитой (кишвар)</label>
        <label><input type="radio" name="q5" value="right">Забони хитоӣ</label>
        <label><input type="radio" name="q5" value="wrong">Муаллими хитоӣ</label>
      </div></div>
      <div class="qcard"><div class="q">6. Сохти дурусти "哪" дар савол кадом аст?</div><div class="opts">
        <label><input type="radio" name="q6" value="right">哪 + калимаи миқдорӣ/исм + исм</label>
        <label><input type="radio" name="q6" value="wrong">исм + 哪</label>
        <label><input type="radio" name="q6" value="wrong">哪 танҳо истифода мешавад</label>
      </div></div>
      <div class="qcard"><div class="q">7. "一" (yī) пеш аз калимаи оҳанги 4 (мисли 定) чӣ гуна тағйир меёбад?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Ба оҳанги 4 иваз мешавад</label>
        <label><input type="radio" name="q7" value="right">Ба оҳанги 2 иваз мешавад (yídìng)</label>
        <label><input type="radio" name="q7" value="wrong">Тағйир намеёбад</label>
      </div></div>
      <div class="qcard"><div class="q">8. Кадоме дуруст навишта шудааст: "u" бе сарҳарф дар аввали калима?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">u (бе тағйир)</label>
        <label><input type="radio" name="q8" value="right">wu (бо "w")</label>
        <label><input type="radio" name="q8" value="wrong">yu</label>
      </div></div>
      <div class="qcard"><div class="q">9. 朋友 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Ҳамсинф</label>
        <label><input type="radio" name="q9" value="right">Дӯст</label>
        <label><input type="radio" name="q9" value="wrong">Муаллим</label>
      </div></div>
      <div class="qcard"><div class="q">10. Ҳарфи 几 пештар чӣ маъно дошт?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Ҳафт</label>
        <label><input type="radio" name="q10" value="right">Мизчаи хурди пастак</label>
        <label><input type="radio" name="q10" value="wrong">Бача</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}


function renderLesson5(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">05</div>
      <div class="titles">
        <div class="zh">她女儿今年二十岁</div>
        <div class="py">Tā nǚ'ér jīnnián èrshí suì</div>
        <div class="en">Духтари ӯ имсол бисту солаг аст</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс ва тарзи пайваст кардан</div>
    <div class="section-sub">Дар ин дарс мавзӯи махсус — <b>儿化 (эрхуа)</b> — вақте 儿 бо ҳиҷои пеш якҷоя мешавад ва садои "р"-монанд ба охир зам мешавад.</div>
    <table class="pytable">
      <tr><th>Мавзӯъ</th><th>Шарҳ</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">儿化 (érhuà)</td><td>Ҳарфи 儿 бо ҳиҷои пеш якҷоя садо медиҳад: дар навишти ҳарфҳо ҳамчун "ҳарф+儿" менависанд, дар пиньин бошад ба охири ҳиҷо танҳо "r" илова мекунанд. Масалан: 小孩儿 = xiǎoháir (на xiǎohái + ér алоҳида).</td></tr>
    </table>
    <div class="section-sub" style="margin-top:14px;"><b>Мисолҳои эрхуа</b> — гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">xiǎoháir<span class="transcript"><br>[сяохар]</span><br><button class="playbtn" onclick="playAudio('l5_drill_xiaohair','小孩儿')">&#128266;</button></div>
      <div class="drillcard">xiǎo niǎor<span class="transcript"><br>[сяо няор]</span><br><button class="playbtn" onclick="playAudio('l5_drill_xiaoniaor','小鸟儿')">&#128266;</button></div>
      <div class="drillcard">fànguǎnr<span class="transcript"><br>[фангуанр]</span><br><button class="playbtn" onclick="playAudio('l5_drill_fanguanr','饭馆儿')">&#128266;</button></div>
      <div class="drillcard">xiāngshuǐr<span class="transcript"><br>[сянхшуйр]</span><br><button class="playbtn" onclick="playAudio('l5_drill_xiangshuir','香水儿')">&#128266;</button></div>
    </div>
    <div class="note"><b>Аломати ҷудокунӣ (隔音符号):</b> агар ҳиҷои дуюм бо a, o ё e сар шавад ва баъд аз ҳиҷои дигар ояд, барои ҷудо кардани ду ҳиҷо аломати (') истифода мешавад — масалан pí'ǎo (皮袄), на "pião". Ин пеши омехта шудани ду ҳиҷоро мегирад.</div>

    <div class="section-lbl">2. Талаффуз — нафаси қавӣ ва бе қавӣ</div>
    <div class="section-sub">Дар хитоӣ ҷуфти сарҳарфҳо ҳастанд, ки ҷои забонашон якхела аст, вале яке бо нафаси қавӣ ва дигаре бе он талаффуз мешавад:</div>
    <table class="pytable">
      <tr><th>Бе нафаси қавӣ</th><th>Бо нафаси қавӣ</th></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">b</td><td style="font-family:'Noto Serif SC',serif;">p</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">d</td><td style="font-family:'Noto Serif SC',serif;">t</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">g</td><td style="font-family:'Noto Serif SC',serif;">k</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">j</td><td style="font-family:'Noto Serif SC',serif;">q</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">z</td><td style="font-family:'Noto Serif SC',serif;">c</td></tr>
      <tr><td style="font-family:'Noto Serif SC',serif;">zh</td><td style="font-family:'Noto Serif SC',serif;">ch</td></tr>
    </table>
    <div class="note">Барои санҷидан: дасти худро пеши даҳон гузоред — ҳангоми талаффузи ҳарфи "бо нафас" (p, t, k, q, c, ch) бояд нафаси равшан ҳис кунед; ҳангоми "бе нафас" (b, d, g, j, z, zh) не.</div>

    <div class="section-lbl">3. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('jia1','家')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">家</div><div class="py">jiā<span class="transcript"> [цзя]</span></div><div class="tj">оила, хона</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('you3','有')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">有</div><div class="py">yǒu<span class="transcript"> [йоу]</span></div><div class="tj">доштан, будан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kou3','口')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">口</div><div class="py">kǒu<span class="transcript"> [коу]</span></div><div class="tj">калимаи миқдорӣ барои аъзои оила</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nver','女儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">女儿</div><div class="py">nǚ'ér<span class="transcript"> [нюйар]</span></div><div class="tj">духтар</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ji3','几')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">几</div><div class="py">jǐ<span class="transcript"> [цзи]</span></div><div class="tj">чанд (барои ададҳои хурд)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sui4','岁')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">岁</div><div class="py">suì<span class="transcript"> [суй]</span></div><div class="tj">сол (синну сол)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('le5','了')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">了</div><div class="py">le<span class="transcript"> [лэ]</span></div><div class="tj">нишонаи тағйирот/ҳолати нав</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('jinnian','今年')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">今年</div><div class="py">jīnnián<span class="transcript"> [цзиньниен]</span></div><div class="tj">имсол</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('duo1','多')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">多</div><div class="py">duō<span class="transcript"> [дуо]</span></div><div class="tj">чӣ қадар (дараҷа)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('da4','大')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">大</div><div class="py">dà<span class="transcript"> [да]</span></div><div class="tj">калон (дар бораи синну сол)</div></div>
    </div>

    <div class="section-lbl">4. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷонишини саволии <ruby>几<rt>jǐ</rt></ruby></div>
      <div class="gbody">几 барои пурсидани миқдор истифода мешавад, одатан барои ададҳои аз 10 хурд.</div>
      <div class="gex"><span class="tag">намуна</span>你家有<ruby>几<rt>jǐ</rt></ruby>口人？ — Оилаи шумо чанд нафар аст?</div>
      <div class="gex"><span class="tag">намуна</span>你女儿<ruby>几<rt>jǐ</rt></ruby>岁了？ — Духтари шумо чанд сола аст?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ададҳо то 100</div>
      <div class="gbody">Даҳгонаҳо: 十(10), 二十(20), 三十(30) … 九十(90). Барои ададҳои дигар, воҳид баъд аз даҳгона илова мешавад: 二十三 (23) = 二十(20)+三(3); 五十六 (56) = 五十(50)+六(6).</div>
      <div class="gex"><span class="tag">намуна</span>二十三 (èrshísān) = 23; 五十六 (wǔshíliù) = 56</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Аломати тағйирот <ruby>了<rt>le</rt></ruby></div>
      <div class="gbody">了 дар охири ҷумла гузошта мешавад, то тағйирот ё пайдоиши ҳолати нав нишон диҳад — масалан синну соле, ки акнун расидааст.</div>
      <div class="gex"><span class="tag">намуна</span>李老师今年50岁<ruby>了<rt>le</rt></ruby>。 — Муаллим Ли имсол 50-сола шуд.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Ибораи саволии <ruby>多<rt>duō</rt></ruby>+<ruby>大<rt>dà</rt></ruby></div>
      <div class="gbody">多+大 якҷоя барои пурсидани синну сол истифода мешавад, маънои таҳтуллафзиаш "чӣ қадар калон" аст.</div>
      <div class="gex"><span class="tag">намуна</span>你<ruby>多大<rt>duō dà</rt></ruby>了？ — Шумо чанд сола ҳастед?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">Фарҳанг:</span>Тарзи пурсидани синну сол дар Хитой</div>
      <div class="gbody">Дар фарҳанги хитоӣ, синну сол сирри шахсӣ ҳисоб намешавад, вале тарзи пурсидан вобаста ба синну соли шахс фарқ мекунад: ба кӯдакони то 10-сола — 你今年几岁了? ба ҳамсолон ё ҷавонон — 你今年多大了? ба калонсолон бошад, аз рӯи эҳтиром — 您今年多大年纪了?</div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你家有几口人？</span><span class="py">Nǐ jiā yǒu jǐ kǒu rén?</span><span class="transcript">[Ни цзя йоу цзи коу жэнь?]</span><span class="tj">— Оилаи шумо чанд нафар аст?</span><button class="playbtn inline" onclick="playAudio('l5_q1','你家有几口人')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我家有三口人。</span><span class="py">Wǒ jiā yǒu sān kǒu rén.</span><span class="transcript">[Во цзя йоу сань коу жэнь.]</span><span class="tj">— Оилаи ман се нафар аст.</span><button class="playbtn inline" onclick="playAudio('l5_a1','我家有三口人')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你女儿几岁了？</span><span class="py">Nǐ nǚ'ér jǐ suì le?</span><span class="transcript">[Ни нюйар цзи суй лэ?]</span><span class="tj">— Духтари шумо чанд сола аст?</span><button class="playbtn inline" onclick="playAudio('l5_q2','你女儿几岁了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她今年四岁了。</span><span class="py">Tā jīnnián sì suì le.</span><span class="transcript">[Та цзиньниен сы суй лэ.]</span><span class="tj">— Ӯ имсол чорсола шуд.</span><button class="playbtn inline" onclick="playAudio('l5_a2','她今年四岁了')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">李老师多大了？</span><span class="py">Lǐ lǎoshī duō dà le?</span><span class="transcript">[Ли лаоши дуо да лэ?]</span><span class="tj">— Муаллим Ли чанд сола аст?</span><button class="playbtn inline" onclick="playAudio('l5_q3','李老师多大了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她今年50岁了。她女儿呢？</span><span class="py">Tā jīnnián wǔshí suì le. Tā nǚ'ér ne?</span><span class="transcript">[Та цзиньниен уши суй лэ. Та нюйар нэ?]</span><span class="tj">— Ӯ имсол 50-сола шуд. Духтараш-чӣ?</span><button class="playbtn inline" onclick="playAudio('l5_a3','她今年50岁了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">她女儿今年20岁。</span><span class="py">Tā nǚ'ér jīnnián èrshí suì.</span><span class="transcript">[Та нюйар цзиньниен эрши суй.]</span><span class="tj">— Духтараш имсол 20-сола аст.</span><button class="playbtn inline" onclick="playAudio('l5_a3b','她女儿今年20岁')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 5. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid5">
      <div class="strokecard"><div class="shz">家</div><div class="spy">jiā <span class="transcript">[цзя]</span></div><div class="starget" id="sw5-jia"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-jia')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-jia')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-jia-status"></div></div>
      <div class="strokecard"><div class="shz">有</div><div class="spy">yǒu <span class="transcript">[йоу]</span></div><div class="starget" id="sw5-you"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-you')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-you')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-you-status"></div></div>
      <div class="strokecard"><div class="shz">口</div><div class="spy">kǒu <span class="transcript">[коу]</span></div><div class="starget" id="sw5-kou"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-kou')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-kou')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-kou-status"></div></div>
      <div class="strokecard"><div class="shz">女</div><div class="spy">nǚ <span class="transcript">[нюй]</span></div><div class="starget" id="sw5-nv"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-nv')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-nv')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-nv-status"></div></div>
      <div class="strokecard"><div class="shz">儿</div><div class="spy">ér <span class="transcript">[ар]</span></div><div class="starget" id="sw5-er"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-er')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-er')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-er-status"></div></div>
      <div class="strokecard"><div class="shz">几</div><div class="spy">jǐ <span class="transcript">[цзи]</span></div><div class="starget" id="sw5-ji"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-ji')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-ji')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-ji-status"></div></div>
      <div class="strokecard"><div class="shz">岁</div><div class="spy">suì <span class="transcript">[суй]</span></div><div class="starget" id="sw5-sui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-sui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-sui')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-sui-status"></div></div>
      <div class="strokecard"><div class="shz">了</div><div class="spy">le <span class="transcript">[лэ]</span></div><div class="starget" id="sw5-le"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-le')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-le')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-le-status"></div></div>
      <div class="strokecard"><div class="shz">今</div><div class="spy">jīn <span class="transcript">[цзинь]</span></div><div class="starget" id="sw5-jin"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-jin')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-jin')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-jin-status"></div></div>
      <div class="strokecard"><div class="shz">年</div><div class="spy">nián <span class="transcript">[ниен]</span></div><div class="starget" id="sw5-nian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-nian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-nian')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-nian-status"></div></div>
      <div class="strokecard"><div class="shz">多</div><div class="spy">duō <span class="transcript">[дуо]</span></div><div class="starget" id="sw5-duo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-duo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-duo')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-duo-status"></div></div>
      <div class="strokecard"><div class="shz">大</div><div class="spy">dà <span class="transcript">[да]</span></div><div class="starget" id="sw5-da"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw5-da')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw5-da')">Худам нависам</button></div>
        <div class="sstatus" id="sw5-da-status"></div></div>
    </div>

    <div class="section-lbl">7. Аломатҳои асосии навишт (笔画)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_hengpie','横撇')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇇</div><div class="py">héngpiě<span class="transcript"> [хэнпье]</span> — уфуқӣ-чапи поёнӣ</div><div class="tj">аввал уфуқӣ, баъд ба чапи поён мехамад. Мисол: 水 (об), 又 (боз)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_piedian','撇点')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇘</div><div class="py">piědiǎn<span class="transcript"> [пьедиен]</span> — чапи поёнӣ-нуқта</div><div class="tj">чапи поёнӣ, баъд бо нуқта анҷом меёбад. Мисол: 女 (зан), 好 (хуб)</div></div>
    </div>

    <div class="section-lbl">8. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_shui','水')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">水</div><div class="py">shuǐ <span class="transcript">[шуй]</span></div><div class="tj">об — шаклаш ба ҷӯйи кӯҳӣ монанд буд</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_nv','女')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">女</div><div class="py">nǚ <span class="transcript">[нюй]</span></div><div class="tj">зан — шаклаш ба зани дар замин зонузада монанд буд</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_le','了')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">了</div><div class="py">le <span class="transcript">[лэ]</span></div><div class="tj">пештар шакли кӯдаки навзод буд, ҳоло калимаи ёридиҳанда аст</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_da','大')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">大</div><div class="py">dà <span class="transcript">[да]</span></div><div class="tj">калон — шаклаш ба одами дастпояш кушода истода монанд буд, муқобили "хурд"</div></div>
    </div>
    <div class="note"><b>Қоидаи тартиби навишт:</b> аввал беруна, баъд дарун (先外后内) — мисол: 四, 国. Аввал миёна, баъд ду тараф (先中间后两边) — мисол: 小, 水.</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 5 (10 савол)</div>
      <div class="qcard"><div class="q">1. 你家有几口人？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Шумо чанд сола ҳастед?</label>
        <label><input type="radio" name="q1" value="right">Оилаи шумо чанд нафар аст?</label>
        <label><input type="radio" name="q1" value="wrong">Шумо аз кадом кишваред?</label>
      </div></div>
      <div class="qcard"><div class="q">2. Калимаи 岁 барои чӣ истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Барои шумориши одамон</label>
        <label><input type="radio" name="q2" value="right">Барои синну сол</label>
        <label><input type="radio" name="q2" value="wrong">Барои китобҳо</label>
      </div></div>
      <div class="qcard"><div class="q">3. 五十六 (wǔshíliù) кадом рақам аст?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">15</label>
        <label><input type="radio" name="q3" value="right">56</label>
        <label><input type="radio" name="q3" value="wrong">65</label>
      </div></div>
      <div class="qcard"><div class="q">4. 了 дар охири ҷумла чӣ маъно дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="right">Тағйирот ё ҳолати нав</label>
        <label><input type="radio" name="q4" value="wrong">Инкор</label>
        <label><input type="radio" name="q4" value="wrong">Савол</label>
      </div></div>
      <div class="qcard"><div class="q">5. Барои пурсидани синну сол кадом ибора истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">哪国人</label>
        <label><input type="radio" name="q5" value="right">多大</label>
        <label><input type="radio" name="q5" value="wrong">什么名字</label>
      </div></div>
      <div class="qcard"><div class="q">6. Ба калонсолон бо эҳтиром синну солашонро чӣ гуна мепурсанд?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">你今年几岁了？</label>
        <label><input type="radio" name="q6" value="right">您今年多大年纪了？</label>
        <label><input type="radio" name="q6" value="wrong">你叫什么名字？</label>
      </div></div>
      <div class="qcard"><div class="q">7. 儿化 (эрхуа) чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">Ҳамроҳ шудани 儿 бо ҳиҷои пеш ва садои "р" дар охир</label>
        <label><input type="radio" name="q7" value="wrong">Қоидаи тағйири оҳанг</label>
        <label><input type="radio" name="q7" value="wrong">Аломати саволӣ</label>
      </div></div>
      <div class="qcard"><div class="q">8. Кадоме аз ин ҷуфтҳо "бе нафаси қавӣ — бо нафаси қавӣ" аст?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">b — p</label>
        <label><input type="radio" name="q8" value="wrong">m — n</label>
        <label><input type="radio" name="q8" value="wrong">l — r</label>
      </div></div>
      <div class="qcard"><div class="q">9. 女儿 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Писар</label>
        <label><input type="radio" name="q9" value="right">Духтар</label>
        <label><input type="radio" name="q9" value="wrong">Дугона</label>
      </div></div>
      <div class="qcard"><div class="q">10. Ҳарфи 大 муқобили кадом ҳарф аст?</div><div class="opts">
        <label><input type="radio" name="q10" value="right">小 (хурд)</label>
        <label><input type="radio" name="q10" value="wrong">多 (бисёр)</label>
        <label><input type="radio" name="q10" value="wrong">好 (хуб)</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson6(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">06</div>
      <div class="titles">
        <div class="zh">我会说汉语</div>
        <div class="py">Wǒ huì shuō Hànyǔ</div>
        <div class="en">Ман хитоӣ гап зада метавонам</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс — оҳангсозии калимаҳои дуҳиҷоӣ</div>
    <div class="section-sub">Дар ин дарс мавзӯи муҳим: вақте ду ҳиҷо якҷоя меоянд, оҳанги 1 бо оҳангҳои дигар чӣ гуна ҷуфт мешавад. Мисол: kāfēi (1+1), gōngyuán (1+2), jīchǎng (1+3), chēzhàn (1+4).</div>
    <div class="note"><b>Диққат:</b> оҳанги 3 дар ҷуфти калима на мисли оҳанги 3-и танҳо (фуру-боло) хонда мешавад — қисми охираш боло намеравад, танҳо поён меафтад (мисли 2-1-1). Барои ҳамин jīchǎng бо оҳанги "паст" хонда мешавад, на бо баланд шудани охир.</div>
    <div class="section-sub" style="margin-top:14px;"><b>Тамрин</b> — оҳангсозии 1+... -ро гӯш кунед:</div>
    <div class="drillgrid">
      <div class="drillcard">kāfēi<span class="transcript"><br>[кхафэй]</span><br><button class="playbtn" onclick="playAudio('l6_drill_kafei','咖啡')">&#128266;</button></div>
      <div class="drillcard">gōngyuán<span class="transcript"><br>[гунйуэн]</span><br><button class="playbtn" onclick="playAudio('l6_drill_gongyuan','公园')">&#128266;</button></div>
      <div class="drillcard">jīchǎng<span class="transcript"><br>[цзичхан]</span><br><button class="playbtn" onclick="playAudio('l6_drill_jichang','机场')">&#128266;</button></div>
      <div class="drillcard">chēzhàn<span class="transcript"><br>[чхэчжань]</span><br><button class="playbtn" onclick="playAudio('l6_drill_chezhan','车站')">&#128266;</button></div>
      <div class="drillcard">jīntiān<span class="transcript"><br>[цзиньтхиен]</span><br><button class="playbtn" onclick="playAudio('l6_drill_jintian','今天')">&#128266;</button></div>
      <div class="drillcard">gōngsī<span class="transcript"><br>[гунсы]</span><br><button class="playbtn" onclick="playAudio('l6_drill_gongsi','公司')">&#128266;</button></div>
      <div class="drillcard">jīdàn<span class="transcript"><br>[цзидань]</span><br><button class="playbtn" onclick="playAudio('l6_drill_jidan','鸡蛋')">&#128266;</button></div>
      <div class="drillcard">kāishǐ<span class="transcript"><br>[кхайши]</span><br><button class="playbtn" onclick="playAudio('l6_drill_kaishi','开始')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hui4','会')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">会</div><div class="py">huì<span class="transcript"> [хуй]</span></div><div class="tj">тавонистан (бо омӯзиш ба даст омада)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shuo1','说')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">说</div><div class="py">shuō<span class="transcript"> [шуо]</span></div><div class="tj">гуфтан, гап задан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mama5','妈妈')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">妈妈</div><div class="py">māma<span class="transcript"> [мама]</span></div><div class="tj">модар</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('cai4','菜')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">菜</div><div class="py">cài<span class="transcript"> [цхай]</span></div><div class="tj">хӯрок, таом</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hen3','很')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">很</div><div class="py">hěn<span class="transcript"> [хэнь]</span></div><div class="tj">хеле, бисёр</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('haochi3','好吃')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">好吃</div><div class="py">hǎochī<span class="transcript"> [хаочхи]</span></div><div class="tj">бомазза</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zuo4','做')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">做</div><div class="py">zuò<span class="transcript"> [цзуо]</span></div><div class="tj">тайёр кардан, кор кардан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xie3','写')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">写</div><div class="py">xiě<span class="transcript"> [сйе]</span></div><div class="tj">навиштан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hanzi4','汉字')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">汉字</div><div class="py">Hànzì<span class="transcript"> [Ханьцзы]</span></div><div class="tj">ҳарфи хитоӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zi4','字')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">字</div><div class="py">zì<span class="transcript"> [цзы]</span></div><div class="tj">ҳарф, калима</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zenme3','怎么')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">怎么</div><div class="py">zěnme<span class="transcript"> [цзэньмэ]</span></div><div class="tj">чӣ гуна</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('du2','读')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">读</div><div class="py">dú<span class="transcript"> [ду]</span></div><div class="tj">хондан</div></div>
    </div>

    <div class="section-lbl">3. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Феъли модалии <ruby>会<rt>huì</rt></ruby> (1)</div>
      <div class="gbody">会 пеш аз феъл гузошта мешавад ва маънои қобилиятеро мефаҳмонад, ки тавассути омӯзиш ба даст омадааст. Шакли инкорӣ: 不会.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + (不)会 + феъл</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>会<rt>huì</rt></ruby>写汉字。 — Ман хат навишта метавонам.</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>不会<rt>bú huì</rt></ruby>做中国菜。 — Ман хӯроки хитоӣ пухта наметавонам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷумлаи бо хабари сифатӣ</div>
      <div class="gbody">Сифат метавонад дар сохти "мубтадо + зарфи дараҷа + сифат" ҳолат ё сифати чизе/касеро тасвир кунад — зарфи дараҷа бештар 很 (хеле) мешавад. Шакли инкорӣ: мубтадо + 不 + сифат (бе 很).</div>
      <div class="gex"><span class="tag">намуна</span>中国菜<ruby>很<rt>hěn</rt></ruby>好吃。 — Хӯроки хитоӣ хеле бомазза аст.</div>
      <div class="gex"><span class="tag">намуна</span>我妈妈的汉语<ruby>不<rt>bù</rt></ruby>好。 — Хитоии модари ман хуб нест.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Ҷонишини саволии <ruby>怎么<rt>zěnme</rt></ruby> (1)</div>
      <div class="gbody">怎么 пеш аз феъл гузошта мешавад ва тарзи иҷрои амалро мепурсад — маънои "чӣ гуна".</div>
      <div class="gex"><span class="tag">намуна</span>这个汉字<ruby>怎么<rt>zěnme</rt></ruby>读？ — Ин ҳарф чӣ гуна хонда мешавад?</div>
    </div>

    <div class="section-lbl">4. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你会说汉语吗？</span><span class="py">Nǐ huì shuō Hànyǔ ma?</span><span class="transcript">[Ни хуй шуо Ханьюй ма?]</span><span class="tj">— Шумо хитоӣ гап зада метавонед?</span><button class="playbtn inline" onclick="playAudio('l6_q1','你会说汉语吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我会说汉语。</span><span class="py">Wǒ huì shuō Hànyǔ.</span><span class="transcript">[Во хуй шуо Ханьюй.]</span><span class="tj">— Ман хитоӣ гап зада метавонам.</span><button class="playbtn inline" onclick="playAudio('l6_a1','我会说汉语')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你妈妈会说汉语吗？</span><span class="py">Nǐ māma huì shuō Hànyǔ ma?</span><span class="transcript">[Ни мама хуй шуо Ханьюй ма?]</span><span class="tj">— Модари шумо хитоӣ гап зада метавонад?</span><button class="playbtn inline" onclick="playAudio('l6_q1b','你妈妈会说汉语吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她不会说。</span><span class="py">Tā bú huì shuō.</span><span class="transcript">[Та бу хуй шуо.]</span><span class="tj">— Ӯ гап зада наметавонад.</span><button class="playbtn inline" onclick="playAudio('l6_a1b','她不会说')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">中国菜好吃吗？</span><span class="py">Zhōngguó cài hǎochī ma?</span><span class="transcript">[Чжунго цхай хаочхи ма?]</span><span class="tj">— Хӯроки хитоӣ бомазза аст?</span><button class="playbtn inline" onclick="playAudio('l6_q2','中国菜好吃吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">中国菜很好吃。</span><span class="py">Zhōngguó cài hěn hǎochī.</span><span class="transcript">[Чжунго цхай хэнь хаочхи.]</span><span class="tj">— Хӯроки хитоӣ хеле бомазза аст.</span><button class="playbtn inline" onclick="playAudio('l6_a2','中国菜很好吃')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你会做中国菜吗？</span><span class="py">Nǐ huì zuò Zhōngguó cài ma?</span><span class="transcript">[Ни хуй цзуо Чжунго цхай ма?]</span><span class="tj">— Шумо хӯроки хитоӣ пухта метавонед?</span><button class="playbtn inline" onclick="playAudio('l6_q2b','你会做中国菜吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我不会做。</span><span class="py">Wǒ bú huì zuò.</span><span class="transcript">[Во бу хуй цзуо.]</span><span class="tj">— Ман пухта наметавонам.</span><button class="playbtn inline" onclick="playAudio('l6_a2b','我不会做')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你会写汉字吗？</span><span class="py">Nǐ huì xiě Hànzì ma?</span><span class="transcript">[Ни хуй сйе Ханьцзы ма?]</span><span class="tj">— Шумо ҳарфи хитоӣ навишта метавонед?</span><button class="playbtn inline" onclick="playAudio('l6_q3','你会写汉字吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我会写。这个字怎么写？</span><span class="py">Wǒ huì xiě. Zhège zì zěnme xiě?</span><span class="transcript">[Во хуй сйе. Чжэгэ цзы цзэньмэ сйе?]</span><span class="tj">— Ман навишта метавонам.</span><button class="playbtn inline" onclick="playAudio('l6_a3','我会写')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">这个字怎么写？</span><span class="py">Zhège zì zěnme xiě?</span><span class="transcript">[Чжэгэ цзы цзэньмэ сйе?]</span><span class="tj">— Ин ҳарф чӣ гуна навишта мешавад?</span><button class="playbtn inline" onclick="playAudio('l6_q3b','这个字怎么写')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">对不起，这个字我会读，不会写。</span><span class="py">Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.</span><span class="transcript">[Дуйбуци, чжэгэ цзы во хуй ду, бу хуй сйе.]</span><span class="tj">— Бубахшед, ин ҳарфро хонда метавонам, вале навишта наметавонам.</span><button class="playbtn inline" onclick="playAudio('l6_a3b','对不起这个字我会读不会写')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 6. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid6">
      <div class="strokecard"><div class="shz">会</div><div class="spy">huì <span class="transcript">[хуй]</span></div><div class="starget" id="sw6-hui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-hui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-hui')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-hui-status"></div></div>
      <div class="strokecard"><div class="shz">说</div><div class="spy">shuō <span class="transcript">[шуо]</span></div><div class="starget" id="sw6-shuo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-shuo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-shuo')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-shuo-status"></div></div>
      <div class="strokecard"><div class="shz">妈</div><div class="spy">mā <span class="transcript">[ма]</span></div><div class="starget" id="sw6-mama"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-mama')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-mama')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-mama-status"></div></div>
      <div class="strokecard"><div class="shz">菜</div><div class="spy">cài <span class="transcript">[цхай]</span></div><div class="starget" id="sw6-cai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-cai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-cai')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-cai-status"></div></div>
      <div class="strokecard"><div class="shz">很</div><div class="spy">hěn <span class="transcript">[хэнь]</span></div><div class="starget" id="sw6-hen"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-hen')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-hen')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-hen-status"></div></div>
      <div class="strokecard"><div class="shz">做</div><div class="spy">zuò <span class="transcript">[цзуо]</span></div><div class="starget" id="sw6-zuo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-zuo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-zuo')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-zuo-status"></div></div>
      <div class="strokecard"><div class="shz">写</div><div class="spy">xiě <span class="transcript">[сйе]</span></div><div class="starget" id="sw6-xie"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-xie')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-xie')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-xie-status"></div></div>
      <div class="strokecard"><div class="shz">怎</div><div class="spy">zěn <span class="transcript">[цзэнь]</span></div><div class="starget" id="sw6-zenme"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-zenme')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-zenme')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-zenme-status"></div></div>
      <div class="strokecard"><div class="shz">么</div><div class="spy">me <span class="transcript">[мэ]</span></div><div class="starget" id="sw6-me"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-me')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-me')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-me-status"></div></div>
      <div class="strokecard"><div class="shz">读</div><div class="spy">dú <span class="transcript">[ду]</span></div><div class="starget" id="sw6-du"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-du')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-du')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-du-status"></div></div>
      <div class="strokecard"><div class="shz">吃</div><div class="spy">chī <span class="transcript">[чхи]</span></div><div class="starget" id="sw6-chi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw6-chi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw6-chi')">Худам нависам</button></div>
        <div class="sstatus" id="sw6-chi-status"></div></div>
    </div>

    <div class="section-lbl">6. Аломатҳои асосии навишт (笔画)</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_piezhe','撇折')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇗</div><div class="py">piězhé<span class="transcript"> [пйечжэ]</span> — чапи-поёнӣ-хамида</div><div class="tj">аввал чапи поёнӣ, баъд ба самти дигар мехамад. Мисол: 么 (суффикс), 东 (шарқ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_xiegou','斜钩')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇂</div><div class="py">xiégōu<span class="transcript"> [сйегоу]</span> — қалмоқи моил</div><div class="tj">хатти моил ба поёни рост, дар охир қалмоқ. Мисол: 我 (ман), 钱 (пул)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('s_ti','提')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">㇀</div><div class="py">tí<span class="transcript"> [тхи]</span> — болоравии рост</div><div class="tj">аз поёни чап ба болои рост мебарояд. Мисол: 我 (ман), 打 (задан)</div></div>
    </div>

    <div class="section-lbl">7. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_dong','东')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">东</div><div class="py">dōng <span class="transcript">[дун]</span></div><div class="tj">шарқ — тарафи баромадани офтоб, муқобили 西 (ғарб)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_wo','我')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">我</div><div class="py">wǒ <span class="transcript">[во]</span></div><div class="tj">аслан шакли яроқи тезбар буд, ҳоло ҷонишини "ман"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_xi','西')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">西</div><div class="py">xī <span class="transcript">[си]</span></div><div class="tj">аслан шакли ошёнаи парранда буд, ҳоло маънои "ғарб", муқобили 东</div></div>
    </div>

    <div class="section-lbl">8. Сохти ҳарфҳо (1): якҷузъа ва бисёрҷузъа</div>
    <div class="note">Ҳарфҳои хитоӣ ду навъ сохт доранд: <b>сохти якҷузъа (独体结构)</b> — аз як қисм иборат, мисли 人, 我, 中; ва <b>сохти бисёрҷузъа (合体结构)</b> — аз ду ё зиёда қисм иборат, мисли 你 (亻+尔), 做 (亻+古+攵).</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 6 (10 савол)</div>
      <div class="qcard"><div class="q">1. 我会说汉语 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Ман хитоиро дӯст медорам</label>
        <label><input type="radio" name="q1" value="right">Ман хитоӣ гап зада метавонам</label>
        <label><input type="radio" name="q1" value="wrong">Ман хитоиро меомӯзам</label>
      </div></div>
      <div class="qcard"><div class="q">2. Шакли инкории 会 кадом аст?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">没会</label>
        <label><input type="radio" name="q2" value="right">不会</label>
        <label><input type="radio" name="q2" value="wrong">不是会</label>
      </div></div>
      <div class="qcard"><div class="q">3. Дар ҷумлаи бо хабари сифатӣ кадом зарф бештар истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">不</label>
        <label><input type="radio" name="q3" value="right">很</label>
        <label><input type="radio" name="q3" value="wrong">吗</label>
      </div></div>
      <div class="qcard"><div class="q">4. 怎么 кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Ҷонишини "чӣ"</label>
        <label><input type="radio" name="q4" value="right">Мепурсад "чӣ гуна"</label>
        <label><input type="radio" name="q4" value="wrong">Инкор мекунад</label>
      </div></div>
      <div class="qcard"><div class="q">5. 好吃 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Гурусна</label>
        <label><input type="radio" name="q5" value="right">Бомазза</label>
        <label><input type="radio" name="q5" value="wrong">Хонда шуда</label>
      </div></div>
      <div class="qcard"><div class="q">6. Дар оҳангсозии калимаи дуҳиҷоӣ бо 1+3 (мисли jīchǎng), оҳанги 3 чӣ гуна тағйир меёбад?</div><div class="opts">
        <label><input type="radio" name="q6" value="right">Охираш боло намеравад, танҳо поён мемонад</label>
        <label><input type="radio" name="q6" value="wrong">Ба оҳанги 1 иваз мешавад</label>
        <label><input type="radio" name="q6" value="wrong">Ҳеҷ тағйире нест</label>
      </div></div>
      <div class="qcard"><div class="q">7. Фарқи 读 ва 写 дар чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">读 хондан, 写 навиштан</label>
        <label><input type="radio" name="q7" value="wrong">Ҳарду як маъно доранд</label>
        <label><input type="radio" name="q7" value="wrong">读 гуфтан, 写 хондан</label>
      </div></div>
      <div class="qcard"><div class="q">8. Ҳарфи 我 аслан чӣ маъно дошт?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Яроқи тезбар</label>
        <label><input type="radio" name="q8" value="wrong">Ошёнаи парранда</label>
        <label><input type="radio" name="q8" value="wrong">Одами рост истода</label>
      </div></div>
      <div class="qcard"><div class="q">9. Сохти якҷузъа (独体结构) чист?</div><div class="opts">
        <label><input type="radio" name="q9" value="right">Ҳарфе, ки аз як қисм иборат аст (мисли 人)</label>
        <label><input type="radio" name="q9" value="wrong">Ҳарфе, ки аз ду ва зиёда қисм иборат аст</label>
        <label><input type="radio" name="q9" value="wrong">Ҳарфе, ки танҳо дар рақамҳо истифода мешавад</label>
      </div></div>
      <div class="qcard"><div class="q">10. "对不起，这个字我会读，不会写" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Бубахшед, ин ҳарфро намедонам</label>
        <label><input type="radio" name="q10" value="right">Бубахшед, ин ҳарфро хонда метавонам, вале навишта не</label>
        <label><input type="radio" name="q10" value="wrong">Бубахшед, ман хитоиро намедонам</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson7(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">07</div>
      <div class="titles">
        <div class="zh">今天几号</div>
        <div class="py">Jīntiān jǐ hào</div>
        <div class="en">Имрӯз чандум аст</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс — оҳангсозии калимаҳои дуҳиҷоӣ (2)</div>
    <div class="section-sub">Оҳанги 2 + оҳанги 1/2/3/4. Мисол: 时间(shíjiān), 银行(yínháng), 词典(cídiǎn), 蓝色(lánsè).</div>
    <div class="drillgrid">
      <div class="drillcard">guójiā<span class="transcript"><br>[госзя]</span><br><button class="playbtn" onclick="playAudio('l7_drill_guojia','国家')">&#128266;</button></div>
      <div class="drillcard">lóufáng<span class="transcript"><br>[лоуфан]</span><br><button class="playbtn" onclick="playAudio('l7_drill_loufang','楼房')">&#128266;</button></div>
      <div class="drillcard">píngguǒ<span class="transcript"><br>[пхинго]</span><br><button class="playbtn" onclick="playAudio('l7_drill_pingguo','苹果')">&#128266;</button></div>
      <div class="drillcard">huánjìng<span class="transcript"><br>[хуанцзин]</span><br><button class="playbtn" onclick="playAudio('l7_drill_huanjing','环境')">&#128266;</button></div>
      <div class="drillcard">shíjiān<span class="transcript"><br>[шицзиен]</span><br><button class="playbtn" onclick="playAudio('l7_drill_shijian','时间')">&#128266;</button></div>
      <div class="drillcard">yínháng<span class="transcript"><br>[иньхан]</span><br><button class="playbtn" onclick="playAudio('l7_drill_yinhang','银行')">&#128266;</button></div>
      <div class="drillcard">cídiǎn<span class="transcript"><br>[цыдиен]</span><br><button class="playbtn" onclick="playAudio('l7_drill_cidian','词典')">&#128266;</button></div>
      <div class="drillcard">lánsè<span class="transcript"><br>[лансэ]</span><br><button class="playbtn" onclick="playAudio('l7_drill_lanse','蓝色')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qing3','请')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">请</div><div class="py">qǐng<span class="transcript"> [цин]</span></div><div class="tj">марҳамат, лутфан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('wen4','问')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">问</div><div class="py">wèn<span class="transcript"> [вэнь]</span></div><div class="tj">пурсидан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('jintian','今天')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">今天</div><div class="py">jīntiān<span class="transcript"> [цзиньтиен]</span></div><div class="tj">имрӯз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hao4','号')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">号</div><div class="py">hào<span class="transcript"> [хао]</span></div><div class="tj">рақами рӯз (дар моҳ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yue4','月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">月</div><div class="py">yuè<span class="transcript"> [юэ]</span></div><div class="tj">моҳ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xingqi','星期')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期</div><div class="py">xīngqī<span class="transcript"> [синци]</span></div><div class="tj">ҳафта</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zuotian','昨天')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">昨天</div><div class="py">zuótiān<span class="transcript"> [цзуотиен]</span></div><div class="tj">дирӯз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mingtian','明天')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">明天</div><div class="py">míngtiān<span class="transcript"> [минтиен]</span></div><div class="tj">пагоҳ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qu4','去')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">去</div><div class="py">qù<span class="transcript"> [цюй]</span></div><div class="tj">рафтан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xuexiao','学校')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">学校</div><div class="py">xuéxiào<span class="transcript"> [сюэсяо]</span></div><div class="tj">мактаб</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kan4','看')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">看</div><div class="py">kàn<span class="transcript"> [кань]</span></div><div class="tj">дидан, хондан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shu1','书')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">书</div><div class="py">shū<span class="transcript"> [шу]</span></div><div class="tj">китоб</div></div>
    </div>

    <div class="section-lbl">3. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ифодаи сана — моҳ, рӯз, ҳафта</div>
      <div class="gbody">Дар хитоӣ сана аз калон ба хурд гуфта мешавад: аввал моҳ, баъд рӯз/санаи моҳ, дар охир рӯзи ҳафта. Дар гуфтугӯ бештар 号 ба ҷои 日 истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>9月1号，星期三。— 1-уми сентябр, рӯзи чоршанбе.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷумлаи хабари исмӣ</div>
      <div class="gbody">Агар хабари ҷумла худаш исм/сана/сол бошад, феъли "будан" (是) лозим намеояд — исм мустақим паси мубтадо меояд. Барои синну сол, вақт, сана истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>我的汉语老师<b>33岁</b>。 明天<b>星期三</b>。 今天<b>9月1号</b>。</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Ҷумлаи бо ду феъл: 去 + ҷой + кор кардан</div>
      <div class="gbody">Хабари ҷумла аз ду ё бештар феъл иборат аст: феъли дуюм мақсади феъли якумро мефаҳмонад. Пуркунандаи феъли якум (ҷой) баъзан партофта мешавад.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + 去 + (ҷой) + феъли дуюм</div>
      <div class="gex"><span class="tag">намуна</span>我<b>去</b>学校<b>看书</b>。— Ман ба мактаб меравам то китоб хонам.</div>
    </div>

    <div class="section-lbl">4. Моҳҳо ва рӯзҳои ҳафта</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m01','一月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一月</div><div class="py">yī yuè<span class="transcript"> [и юэ]</span></div><div class="tj">январ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m02','二月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">二月</div><div class="py">èr yuè<span class="transcript"> [эр юэ]</span></div><div class="tj">феврал</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m03','三月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">三月</div><div class="py">sān yuè<span class="transcript"> [сань юэ]</span></div><div class="tj">март</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m04','四月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">四月</div><div class="py">sì yuè<span class="transcript"> [сы юэ]</span></div><div class="tj">апрел</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m05','五月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">五月</div><div class="py">wǔ yuè<span class="transcript"> [ву юэ]</span></div><div class="tj">май</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m06','六月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">六月</div><div class="py">liù yuè<span class="transcript"> [лиу юэ]</span></div><div class="tj">июн</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m07','七月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">七月</div><div class="py">qī yuè<span class="transcript"> [тси юэ]</span></div><div class="tj">июл</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m08','八月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">八月</div><div class="py">bā yuè<span class="transcript"> [ба юэ]</span></div><div class="tj">август</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m09','九月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">九月</div><div class="py">jiǔ yuè<span class="transcript"> [цзиу юэ]</span></div><div class="tj">сентябр</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m10','十月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">十月</div><div class="py">shí yuè<span class="transcript"> [ши юэ]</span></div><div class="tj">октябр</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m11','十一月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">十一月</div><div class="py">shíyī yuè<span class="transcript"> [шии юэ]</span></div><div class="tj">ноябр</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('m12','十二月')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">十二月</div><div class="py">shí'èr yuè<span class="transcript"> [шиэр юэ]</span></div><div class="tj">декабр</div></div>
    </div>
    <div class="wordgrid" style="margin-top:10px;">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w1','星期一')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期一</div><div class="py">xīngqī yī<span class="transcript"> [синци и]</span></div><div class="tj">душанбе</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w2','星期二')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期二</div><div class="py">xīngqī èr<span class="transcript"> [синци эр]</span></div><div class="tj">сешанбе</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w3','星期三')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期三</div><div class="py">xīngqī sān<span class="transcript"> [синци сань]</span></div><div class="tj">чоршанбе</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w4','星期四')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期四</div><div class="py">xīngqī sì<span class="transcript"> [синци сы]</span></div><div class="tj">панҷшанбе</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w5','星期五')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期五</div><div class="py">xīngqī wǔ<span class="transcript"> [синци ву]</span></div><div class="tj">ҷумъа</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w6','星期六')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期六</div><div class="py">xīngqī liù<span class="transcript"> [синци лиу]</span></div><div class="tj">шанбе</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('w7','星期日')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">星期日</div><div class="py">xīngqīrì<span class="transcript"> [синцири]</span></div><div class="tj">якшанбе</div></div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">请问，今天几号？</span><span class="py">Qǐngwèn, jīntiān jǐ hào?</span><span class="transcript">[Цинвэнь, цзиньтиен цзи хао?]</span><span class="tj">— Бубахшед, имрӯз чандум аст?</span><button class="playbtn inline" onclick="playAudio('l7_q1','请问今天几号')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">今天9月1号。</span><span class="py">Jīntiān jiǔ yuè yī hào.</span><span class="transcript">[Цзиньтиен цзиу юэ и хао.]</span><span class="tj">— Имрӯз 1-уми сентябр.</span><button class="playbtn inline" onclick="playAudio('l7_a1','今天九月一号')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">今天星期几？</span><span class="py">Jīntiān xīngqī jǐ?</span><span class="transcript">[Цзиньтиен синци цзи?]</span><span class="tj">— Имрӯз кадом рӯзи ҳафта аст?</span><button class="playbtn inline" onclick="playAudio('l7_q1b','今天星期几')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">星期三。</span><span class="py">Xīngqī sān.</span><span class="transcript">[Синци сань.]</span><span class="tj">— Чоршанбе.</span><button class="playbtn inline" onclick="playAudio('l7_a1b','星期三')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">昨天是几月几号？</span><span class="py">Zuótiān shì jǐ yuè jǐ hào?</span><span class="transcript">[Цзуотиен ши цзи юэ цзи хао?]</span><span class="tj">— Дирӯз кадом сана буд?</span><button class="playbtn inline" onclick="playAudio('l7_q2','昨天是几月几号')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">昨天是8月31号，星期二。</span><span class="py">Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.</span><span class="transcript">[Цзуотиен ши ба юэ саньшии хао, синци эр.]</span><span class="tj">— Дирӯз 31-уми август, сешанбе буд.</span><button class="playbtn inline" onclick="playAudio('l7_a2','昨天是八月三十一号星期二')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">明天呢？</span><span class="py">Míngtiān ne?</span><span class="transcript">[Минтиен нэ?]</span><span class="tj">— Пагоҳ-чӣ?</span><button class="playbtn inline" onclick="playAudio('l7_q2b','明天呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">明天是9月2号，星期四。</span><span class="py">Míngtiān shì jiǔ yuè èr hào, xīngqī sì.</span><span class="transcript">[Минтиен ши цзиу юэ эр хао, синци сы.]</span><span class="tj">— Пагоҳ 2-юми сентябр, панҷшанбе аст.</span><button class="playbtn inline" onclick="playAudio('l7_a2b','明天是九月二号星期四')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">明天星期六，你去学校吗？</span><span class="py">Míngtiān xīngqī liù, nǐ qù xuéxiào ma?</span><span class="transcript">[Минтиен синци лиу, ни цюй сюэсяо ма?]</span><span class="tj">— Пагоҳ шанбе аст, шумо ба мактаб меравед?</span><button class="playbtn inline" onclick="playAudio('l7_q3','明天星期六你去学校吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我去学校。</span><span class="py">Wǒ qù xuéxiào.</span><span class="transcript">[Во цюй сюэсяо.]</span><span class="tj">— Ман ба мактаб меравам.</span><button class="playbtn inline" onclick="playAudio('l7_a3','我去学校')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你去学校做什么？</span><span class="py">Nǐ qù xuéxiào zuò shénme?</span><span class="transcript">[Ни цюй сюэсяо цзуо шэньмэ?]</span><span class="tj">— Шумо ба мактаб рафта чӣ мекунед?</span><button class="playbtn inline" onclick="playAudio('l7_q3b','你去学校做什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我去学校看书。</span><span class="py">Wǒ qù xuéxiào kàn shū.</span><span class="transcript">[Во цюй сюэсяо кань шу.]</span><span class="tj">— Ман ба мактаб меравам то китоб хонам.</span><button class="playbtn inline" onclick="playAudio('l7_a3b','我去学校看书')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 7. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid7">
      <div class="strokecard"><div class="shz">请</div><div class="spy">qǐng <span class="transcript">[цин]</span></div><div class="starget" id="sw7-qing"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-qing')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-qing')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-qing-status"></div></div>
      <div class="strokecard"><div class="shz">问</div><div class="spy">wèn <span class="transcript">[вэнь]</span></div><div class="starget" id="sw7-wen"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-wen')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-wen')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-wen-status"></div></div>
      <div class="strokecard"><div class="shz">今</div><div class="spy">jīn <span class="transcript">[цзинь]</span></div><div class="starget" id="sw7-jin"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-jin')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-jin')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-jin-status"></div></div>
      <div class="strokecard"><div class="shz">天</div><div class="spy">tiān <span class="transcript">[тиень]</span></div><div class="starget" id="sw7-tian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-tian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-tian')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-tian-status"></div></div>
      <div class="strokecard"><div class="shz">号</div><div class="spy">hào <span class="transcript">[хао]</span></div><div class="starget" id="sw7-hao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-hao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-hao')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-hao-status"></div></div>
      <div class="strokecard"><div class="shz">月</div><div class="spy">yuè <span class="transcript">[юэ]</span></div><div class="starget" id="sw7-yue"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-yue')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-yue')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-yue-status"></div></div>
      <div class="strokecard"><div class="shz">星</div><div class="spy">xīng <span class="transcript">[син]</span></div><div class="starget" id="sw7-xing"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-xing')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-xing')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-xing-status"></div></div>
      <div class="strokecard"><div class="shz">期</div><div class="spy">qī <span class="transcript">[тси]</span></div><div class="starget" id="sw7-qi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-qi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-qi')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-qi-status"></div></div>
      <div class="strokecard"><div class="shz">昨</div><div class="spy">zuó <span class="transcript">[цзуо]</span></div><div class="starget" id="sw7-zuo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-zuo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-zuo')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-zuo-status"></div></div>
      <div class="strokecard"><div class="shz">明</div><div class="spy">míng <span class="transcript">[мин]</span></div><div class="starget" id="sw7-ming"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-ming')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-ming')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-ming-status"></div></div>
      <div class="strokecard"><div class="shz">去</div><div class="spy">qù <span class="transcript">[цюй]</span></div><div class="starget" id="sw7-qu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-qu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-qu')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-qu-status"></div></div>
      <div class="strokecard"><div class="shz">校</div><div class="spy">xiào <span class="transcript">[сяо]</span></div><div class="starget" id="sw7-xiao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-xiao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-xiao')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-xiao-status"></div></div>
      <div class="strokecard"><div class="shz">看</div><div class="spy">kàn <span class="transcript">[кань]</span></div><div class="starget" id="sw7-kan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-kan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-kan')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-kan-status"></div></div>
      <div class="strokecard"><div class="shz">书</div><div class="spy">shū <span class="transcript">[шу]</span></div><div class="starget" id="sw7-shu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw7-shu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw7-shu')">Худам нависам</button></div>
        <div class="sstatus" id="sw7-shu-status"></div></div>
    </div>

    <div class="section-lbl">7. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_si','四')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">四</div><div class="py">sì <span class="transcript">[сы]</span></div><div class="tj">чор</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_wu5','五')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">五</div><div class="py">wǔ <span class="transcript">[ву]</span></div><div class="tj">панҷ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_shu1','书')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">书</div><div class="py">shū <span class="transcript">[шу]</span></div><div class="tj">пештар маънои "қалами мӯина ба сиёҳӣ андохтан" дошт, ҳоло "навиштан/китоб"</div></div>
    </div>

    <div class="section-lbl">8. Сохти ҳарфҳо (2) ва радикалҳо</div>
    <div class="note"><b>Сохти чап-рост</b> (左右结构): мисол 你, 好. <b>Сохти чап-миён-рост</b> (左中右结构): мисол 谢, 树.</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">氵</div><div class="py">сеқатра об</div><div class="tj">одатан бо об алоқаманд: 汉 (hàn), 没 (méi)</div></div>
      <div class="wordcard"><div class="hz">讠</div><div class="py">тарафи гуфтор</div><div class="tj">одатан бо забон/гуфтор алоқаманд: 语 (yǔ), 谁 (shéi)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 7 (10 савол)</div>
      <div class="qcard"><div class="q">1. Дар хитоӣ санаро чӣ тартиб мегӯянд?</div><div class="opts">
        <label><input type="radio" name="q1" value="right">Аз калон ба хурд: моҳ → рӯз → рӯзи ҳафта</label>
        <label><input type="radio" name="q1" value="wrong">Аз хурд ба калон: рӯз → моҳ → сол</label>
        <label><input type="radio" name="q1" value="wrong">Тартиб муҳим нест</label>
      </div></div>
      <div class="qcard"><div class="q">2. 明天 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Дирӯз</label>
        <label><input type="radio" name="q2" value="right">Пагоҳ</label>
        <label><input type="radio" name="q2" value="wrong">Имрӯз</label>
      </div></div>
      <div class="qcard"><div class="q">3. Дар ҷумлаи хабари исмӣ (мисли "今天9月1号") кадом феъл лозим аст?</div><div class="opts">
        <label><input type="radio" name="q3" value="right">Ҳеҷ феъл лозим нест</label>
        <label><input type="radio" name="q3" value="wrong">是 ҳатман лозим аст</label>
        <label><input type="radio" name="q3" value="wrong">会 ҳатман лозим аст</label>
      </div></div>
      <div class="qcard"><div class="q">4. Дар ҷумлаи "我去学校看书" феъли дуюм (看书) чӣ вазифа дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="right">Мақсади рафтанро мефаҳмонад</label>
        <label><input type="radio" name="q4" value="wrong">Ҷойро нишон медиҳад</label>
        <label><input type="radio" name="q4" value="wrong">Инкор мекунад</label>
      </div></div>
      <div class="qcard"><div class="q">5. 星期三 кадом рӯзи ҳафта аст?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Душанбе</label>
        <label><input type="radio" name="q5" value="right">Чоршанбе</label>
        <label><input type="radio" name="q5" value="wrong">Ҷумъа</label>
      </div></div>
      <div class="qcard"><div class="q">6. 九月 кадом моҳ аст?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Июн</label>
        <label><input type="radio" name="q6" value="right">Сентябр</label>
        <label><input type="radio" name="q6" value="wrong">Ноябр</label>
      </div></div>
      <div class="qcard"><div class="q">7. Дар гуфтугӯи ҳаррӯза, ба ҷои 日 бештар кадом калима истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">号</label>
        <label><input type="radio" name="q7" value="wrong">月</label>
        <label><input type="radio" name="q7" value="wrong">星期</label>
      </div></div>
      <div class="qcard"><div class="q">8. 请问 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">Ташаккур</label>
        <label><input type="radio" name="q8" value="right">Бубахшед (пеш аз савол)</label>
        <label><input type="radio" name="q8" value="wrong">То дидан</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 讠 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Об</label>
        <label><input type="radio" name="q9" value="right">Забон, гуфтор</label>
        <label><input type="radio" name="q9" value="wrong">Одам</label>
      </div></div>
      <div class="qcard"><div class="q">10. Сохти ҳарфи 谢 (儿 не, худи 谢) кадом навъ аст?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Якҷузъа</label>
        <label><input type="radio" name="q10" value="wrong">Чап-рост</label>
        <label><input type="radio" name="q10" value="right">Чап-миён-рост</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson8(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">08</div>
      <div class="titles">
        <div class="zh">我想喝茶</div>
        <div class="py">Wǒ xiǎng hē chá</div>
        <div class="en">Ман мехоҳам чой нӯшам</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс — оҳангсозии калимаҳои дуҳиҷоӣ (4)</div>
    <div class="section-sub">Оҳанги 3 + оҳанги 1/2/3/4. Дар ин ҳолат ҳиҷои якум ба нимоҳанги 3 (фақат фуруд, бе бардошт) табдил меёбад, ва оҳанги дуюм пурра талаффуз мешавад. Мисол: 手机(shǒujī), 老师(lǎoshī), 每天(měitiān), 海边(hǎibiān).</div>
    <div class="drillgrid">
      <div class="drillcard">shǒujī<span class="transcript"><br>[шоуцзи]</span><br><button class="playbtn" onclick="playAudio('l8_drill_shouji','手机')">&#128266;</button></div>
      <div class="drillcard">shǒubiǎo<span class="transcript"><br>[шоубяо]</span><br><button class="playbtn" onclick="playAudio('l8_drill_shoubiao','手表')">&#128266;</button></div>
      <div class="drillcard">lǎoshī<span class="transcript"><br>[лаоши]</span><br><button class="playbtn" onclick="playAudio('laoshi','老师')">&#128266;</button></div>
      <div class="drillcard">měitiān<span class="transcript"><br>[мэйтиен]</span><br><button class="playbtn" onclick="playAudio('l8_drill_meitian','每天')">&#128266;</button></div>
      <div class="drillcard">měihǎo<span class="transcript"><br>[мэйхао]</span><br><button class="playbtn" onclick="playAudio('l8_drill_meihao','美好')">&#128266;</button></div>
      <div class="drillcard">hǎibiān<span class="transcript"><br>[хайбиен]</span><br><button class="playbtn" onclick="playAudio('l8_drill_haibian','海边')">&#128266;</button></div>
      <div class="drillcard">xǐzǎo<span class="transcript"><br>[сицзао]</span><br><button class="playbtn" onclick="playAudio('l8_drill_xizao','洗澡')">&#128266;</button></div>
      <div class="drillcard">yǐjīng<span class="transcript"><br>[ицзин]</span><br><button class="playbtn" onclick="playAudio('l8_drill_yijing','已经')">&#128266;</button></div>
    </div>
    <div class="note">Қоидаи 3+3-ро дар дарси 1 омӯхтем (якумаш ба оҳанги 2 иваз мешавад). Дар ин ҷо ҳолати дигар аст: 3+1/2/3/4 — ҳиҷои якум фақат фуруд мекунад, боло намебарорад.</div>

    <div class="section-lbl">2. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiang3','想')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">想</div><div class="py">xiǎng<span class="transcript"> [сян]</span></div><div class="tj">хостан, майл доштан (феъли модалӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('he1','喝')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">喝</div><div class="py">hē<span class="transcript"> [хэ]</span></div><div class="tj">нӯшидан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('cha2','茶')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">茶</div><div class="py">chá<span class="transcript"> [чха]</span></div><div class="tj">чой</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('chi1','吃')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">吃</div><div class="py">chī<span class="transcript"> [чхи]</span></div><div class="tj">хӯрдан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mifan','米饭')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">米饭</div><div class="py">mǐfàn<span class="transcript"> [мифань]</span></div><div class="tj">биринҷи пухта, шӯла</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiawu','下午')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">下午</div><div class="py">xiàwǔ<span class="transcript"> [сяуу]</span></div><div class="tj">баъд аз пешин</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shangdian','商店')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">商店</div><div class="py">shāngdiàn<span class="transcript"> [шандиен]</span></div><div class="tj">мағоза, дӯкон</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mai3','买')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">买</div><div class="py">mǎi<span class="transcript"> [май]</span></div><div class="tj">харидан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ge4','个')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">个</div><div class="py">gè<span class="transcript"> [гэ]</span></div><div class="tj">калимаи ченаки умумӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('beizi','杯子')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">杯子</div><div class="py">bēizi<span class="transcript"> [бэйцзы]</span></div><div class="tj">пиёла, стакан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhe4','这')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">这</div><div class="py">zhè<span class="transcript"> [чжэ]</span></div><div class="tj">ин</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('duoshao','多少')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">多少</div><div class="py">duōshao<span class="transcript"> [дуошао]</span></div><div class="tj">чанд, чиқадар (ҷонишини саволӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qian2','钱')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">钱</div><div class="py">qián<span class="transcript"> [циен]</span></div><div class="tj">пул</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kuai4','块')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">块</div><div class="py">kuài<span class="transcript"> [куай]</span></div><div class="tj">воҳиди пул, баробари "юан"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('na4','那')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">那</div><div class="py">nà<span class="transcript"> [на]</span></div><div class="tj">он</div></div>
    </div>

    <div class="section-lbl">3. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Феъли модалии <ruby>想<rt>xiǎng</rt></ruby></div>
      <div class="gbody">想 одатан пеш аз феъли дигар меояд ва умед ё нияти шахсро ифода мекунад — "хостан, майл доштан ки коре кунад".</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>想<rt>xiǎng</rt></ruby>学汉语。 — Ман мехоҳам забони хитоӣ омӯзам.</div>
      <div class="gex"><span class="tag">намуна</span>明天我<ruby>想<rt>xiǎng</rt></ruby>去学校看书。 — Пагоҳ мехоҳам ба мактаб равам, то китоб хонам.</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>想<rt>xiǎng</rt></ruby>买一个杯子。 — Ман мехоҳам як пиёла харам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷонишини саволии <ruby>多少<rt>duōshao</rt></ruby></div>
      <div class="gbody">多少 барои пурсидани миқдори аз даҳ зиёд истифода мешавад; калимаи ченаки баъд аз он метавонад партофта шавад. Бештар барои нархро пурсидан бо сохти "……多少钱？" истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>你们学校有<ruby>多少<rt>duōshao</rt></ruby>(个)学生？ — Дар мактаби шумо чанд донишҷӯ ҳаст?</div>
      <div class="gex"><span class="tag">намуна</span>这个杯子<ruby>多少<rt>duōshao</rt></ruby>钱？ — Ин пиёла чанд пул аст?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Калимаҳои ченак <ruby>个<rt>gè</rt></ruby> ва <ruby>口<rt>kǒu</rt></ruby></div>
      <div class="gbody">个 маъмултарин калимаи ченак дар хитоист — одатан пеш аз исмҳое истифода мешавад, ки калимаи ченаки махсуси худро надоранд. 口 низ калимаи ченак аст, вале махсус барои шумурдани аъзои оила истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>三<ruby>个<rt>gè</rt></ruby>老师, 一<ruby>个<rt>gè</rt></ruby>杯子 — се муаллим, як пиёла</div>
      <div class="gex"><span class="tag">намуна</span>你家有几<ruby>口<rt>kǒu</rt></ruby>人？ — Хонаводаи шумо чанд нафаранд?</div>
    </div>

    <div class="section-lbl">4. Ифодаи миқдори пул (人民币)</div>
    <div class="section-sub">Воҳиди асосии пули Хитой 元 (yuán) аст, вале дар гуфтугӯи ҳаррӯза бештар 块 (kuài) гуфта мешавад — маънояшон якхела.</div>
    <div class="drillgrid">
      <div class="drillcard">一元(块)<span class="transcript"><br>yī yuán (kuài) [и юэн]</span><br><button class="playbtn" onclick="playAudio('money_yi','一元')">&#128266;</button></div>
      <div class="drillcard">五元(块)<span class="transcript"><br>wǔ yuán (kuài) [ву юэн]</span><br><button class="playbtn" onclick="playAudio('money_wu','五元')">&#128266;</button></div>
      <div class="drillcard">十元(块)<span class="transcript"><br>shí yuán (kuài) [ши юэн]</span><br><button class="playbtn" onclick="playAudio('money_shi','十元')">&#128266;</button></div>
      <div class="drillcard">五十元(块)<span class="transcript"><br>wǔshí yuán (kuài) [вуши юэн]</span><br><button class="playbtn" onclick="playAudio('money_wushi','五十元')">&#128266;</button></div>
      <div class="drillcard">一百元(块)<span class="transcript"><br>yìbǎi yuán (kuài) [ибай юэн]</span><br><button class="playbtn" onclick="playAudio('money_yibai','一百元')">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你想喝什么？</span><span class="py">Nǐ xiǎng hē shénme?</span><span class="transcript">[Ни сян хэ шэньмэ?]</span><span class="tj">— Шумо чӣ нӯшидан мехоҳед?</span><button class="playbtn inline" onclick="playAudio('l8_q1','你想喝什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我想喝茶。</span><span class="py">Wǒ xiǎng hē chá.</span><span class="transcript">[Во сян хэ чха.]</span><span class="tj">— Ман мехоҳам чой нӯшам.</span><button class="playbtn inline" onclick="playAudio('l8_a1','我想喝茶')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你想吃什么？</span><span class="py">Nǐ xiǎng chī shénme?</span><span class="transcript">[Ни сян чхи шэньмэ?]</span><span class="tj">— Шумо чӣ хӯрдан мехоҳед?</span><button class="playbtn inline" onclick="playAudio('l8_q1b','你想吃什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我想吃米饭。</span><span class="py">Wǒ xiǎng chī mǐfàn.</span><span class="transcript">[Во сян чхи мифань.]</span><span class="tj">— Ман мехоҳам биринҷ хӯрам.</span><button class="playbtn inline" onclick="playAudio('l8_a1b','我想吃米饭')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">下午你想做什么？</span><span class="py">Xiàwǔ nǐ xiǎng zuò shénme?</span><span class="transcript">[Сяуу ни сян цзуо шэньмэ?]</span><span class="tj">— Баъд аз пешин чӣ кор кардан мехоҳед?</span><button class="playbtn inline" onclick="playAudio('l8_q2','下午你想做什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">下午我想去商店。</span><span class="py">Xiàwǔ wǒ xiǎng qù shāngdiàn.</span><span class="transcript">[Сяуу во сян цюй шандиен.]</span><span class="tj">— Баъд аз пешин мехоҳам ба мағоза равам.</span><button class="playbtn inline" onclick="playAudio('l8_a2','下午我想去商店')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你想买什么？</span><span class="py">Nǐ xiǎng mǎi shénme?</span><span class="transcript">[Ни сян май шэньмэ?]</span><span class="tj">— Шумо чӣ харидан мехоҳед?</span><button class="playbtn inline" onclick="playAudio('l8_q2b','你想买什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我想买一个杯子。</span><span class="py">Wǒ xiǎng mǎi yí ge bēizi.</span><span class="transcript">[Во сян май и гэ бэйцзы.]</span><span class="tj">— Ман мехоҳам як пиёла харам.</span><button class="playbtn inline" onclick="playAudio('l8_a2b','我想买一个杯子')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你好！这个杯子多少钱？</span><span class="py">Nǐ hǎo! Zhège bēizi duōshao qián?</span><span class="transcript">[Ни хао! Чжэгэ бэйцзы дуошао циен?]</span><span class="tj">— Салом! Ин пиёла чанд пул аст?</span><button class="playbtn inline" onclick="playAudio('l8_q3','你好这个杯子多少钱')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">28块。</span><span class="py">Èrshíbā kuài.</span><span class="transcript">[Эршиба куай.]</span><span class="tj">— 28 сомонӣ (28 юан).</span><button class="playbtn inline" onclick="playAudio('l8_a3','二十八块')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">那个杯子多少钱？</span><span class="py">Nàge bēizi duōshao qián?</span><span class="transcript">[Нагэ бэйцзы дуошао циен?]</span><span class="tj">— Он пиёла чанд пул аст?</span><button class="playbtn inline" onclick="playAudio('l8_q3b','那个杯子多少钱')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">那个杯子18块钱。</span><span class="py">Nàge bēizi shíbā kuài qián.</span><span class="transcript">[Нагэ бэйцзы шиба куай циен.]</span><span class="tj">— Он пиёла 18 сомонӣ (юан) аст.</span><button class="playbtn inline" onclick="playAudio('l8_a3b','那个杯子十八块钱')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">6. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 8. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid8">
      <div class="strokecard"><div class="shz">想</div><div class="spy">xiǎng <span class="transcript">[сян]</span></div><div class="starget" id="sw8-xiang"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-xiang')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-xiang')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-xiang-status"></div></div>
      <div class="strokecard"><div class="shz">喝</div><div class="spy">hē <span class="transcript">[хэ]</span></div><div class="starget" id="sw8-he"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-he')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-he')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-he-status"></div></div>
      <div class="strokecard"><div class="shz">茶</div><div class="spy">chá <span class="transcript">[чха]</span></div><div class="starget" id="sw8-cha"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-cha')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-cha')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-cha-status"></div></div>
      <div class="strokecard"><div class="shz">吃</div><div class="spy">chī <span class="transcript">[чхи]</span></div><div class="starget" id="sw8-chi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-chi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-chi')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-chi-status"></div></div>
      <div class="strokecard"><div class="shz">买</div><div class="spy">mǎi <span class="transcript">[май]</span></div><div class="starget" id="sw8-mai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-mai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-mai')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-mai-status"></div></div>
      <div class="strokecard"><div class="shz">杯</div><div class="spy">bēi <span class="transcript">[бэй]</span></div><div class="starget" id="sw8-bei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-bei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-bei')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-bei-status"></div></div>
      <div class="strokecard"><div class="shz">钱</div><div class="spy">qián <span class="transcript">[циен]</span></div><div class="starget" id="sw8-qian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-qian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-qian')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-qian-status"></div></div>
      <div class="strokecard"><div class="shz">那</div><div class="spy">nà <span class="transcript">[на]</span></div><div class="starget" id="sw8-na"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw8-na')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw8-na')">Худам нависам</button></div>
        <div class="sstatus" id="sw8-na-status"></div></div>
    </div>

    <div class="section-lbl">7. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_shao','少')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">少</div><div class="py">shǎo <span class="transcript">[шао]</span></div><div class="tj">кам, ками(миқдор) — муқобили 多 (бисёр)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ge4','个')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">个</div><div class="py">gè <span class="transcript">[гэ]</span></div><div class="tj">маънои аслиаш "як нафар одам"; ҳоло калимаи ченак шудааст</div></div>
    </div>

    <div class="section-lbl">8. Сохти ҳарфҳо (3) ва радикалҳо</div>
    <div class="note"><b>Сохти боло-поён</b> (上下结构): мисол 是 (shì — будан), 爸 (bà — падар). <b>Сохти боло-миён-поён</b> (上中下结构): мисол 茶 (chá — чой), 高 (gāo — баланд).</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">钅</div><div class="py">радикали металл</div><div class="tj">одатан бо металл алоқаманд: 钟 (zhōng — соат), 钱 (qián — пул)</div></div>
      <div class="wordcard"><div class="hz">口</div><div class="py">радикали даҳон</div><div class="tj">одатан бо даҳон алоқаманд: 吃 (chī — хӯрдан), 喝 (hē — нӯшидан)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 8 (10 савол)</div>
      <div class="qcard"><div class="q">1. 我想喝茶 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="right">Ман мехоҳам чой нӯшам</label>
        <label><input type="radio" name="q1" value="wrong">Ман чой нӯшидам</label>
        <label><input type="radio" name="q1" value="wrong">Ман чой намехоҳам</label>
      </div></div>
      <div class="qcard"><div class="q">2. 想 дар ҷумла кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Пуркунандаи феъл</label>
        <label><input type="radio" name="q2" value="right">Феъли модалӣ — ифодаи хостан/нияти шахс</label>
        <label><input type="radio" name="q2" value="wrong">Аломати саволӣ</label>
      </div></div>
      <div class="qcard"><div class="q">3. 米饭 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Чой</label>
        <label><input type="radio" name="q3" value="right">Биринҷи пухта</label>
        <label><input type="radio" name="q3" value="wrong">Нон</label>
      </div></div>
      <div class="qcard"><div class="q">4. Барои пурсидани нарх кадом сохт истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">……什么钱？</label>
        <label><input type="radio" name="q4" value="right">……多少钱？</label>
        <label><input type="radio" name="q4" value="wrong">……几钱？</label>
      </div></div>
      <div class="qcard"><div class="q">5. 块 ва 元 фарқашон чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">块 даҳ баробари 元 аст</label>
        <label><input type="radio" name="q5" value="right">Маънояшон якхела аст; 块 дар гуфтугӯ, 元 дар навишт бештар истифода мешавад</label>
        <label><input type="radio" name="q5" value="wrong">Ҳеҷ алоқа надоранд</label>
      </div></div>
      <div class="qcard"><div class="q">6. 个 одатан пеш аз кадом навъи калима меояд?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Танҳо пеш аз феъл</label>
        <label><input type="radio" name="q6" value="right">Пеш аз исмҳое, ки калимаи ченаки махсуси худро надоранд</label>
        <label><input type="radio" name="q6" value="wrong">Танҳо пеш аз ҷонишин</label>
      </div></div>
      <div class="qcard"><div class="q">7. 这 ва 那 фарқашон чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">这 — ин (наздик), 那 — он (дур)</label>
        <label><input type="radio" name="q7" value="wrong">Ҳарду маънои "ин"-ро доранд</label>
        <label><input type="radio" name="q7" value="wrong">这 — он, 那 — ин</label>
      </div></div>
      <div class="qcard"><div class="q">8. Дар оҳангсозии 3+1/2/3/4, ҳиҷои якум чӣ гуна талаффуз мешавад?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">Пурра ба оҳанги 2 иваз мешавад</label>
        <label><input type="radio" name="q8" value="right">Фақат фуруд мекунад, боло намебарорад (нимоҳанги 3)</label>
        <label><input type="radio" name="q8" value="wrong">Тағйир намеёбад</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 钅 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Даҳон</label>
        <label><input type="radio" name="q9" value="right">Металл</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. Сохти ҳарфи 茶 кадом навъ аст?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Якҷузъа</label>
        <label><input type="radio" name="q10" value="wrong">Боло-поён</label>
        <label><input type="radio" name="q10" value="right">Боло-миён-поён</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson9(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">09</div>
      <div class="titles">
        <div class="zh">你儿子在哪儿工作</div>
        <div class="py">Nǐ érzi zài nǎr gōngzuò</div>
        <div class="en">Писари шумо дар куҷо кор мекунад</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньини дарс — оҳангсозии калимаҳои дуҳиҷоӣ (5)</div>
    <div class="section-sub">Оҳанги 4 + оҳанги 1/2/3/4. Оҳанги 4 (поёнравон) бо тезӣ фуруд меояд. Мисол: 面包(miànbāo), 电脑(diànnǎo), 电话(diànhuà), 唱歌(chàng gē).</div>
    <div class="drillgrid">
      <div class="drillcard">miànbāo<span class="transcript"><br>[миенбао]</span><br><button class="playbtn" onclick="playAudio('l9_drill_mianbao','面包')">&#128266;</button></div>
      <div class="drillcard">miàntiáo<span class="transcript"><br>[миентяо]</span><br><button class="playbtn" onclick="playAudio('l9_drill_miantiao','面条')">&#128266;</button></div>
      <div class="drillcard">diànnǎo<span class="transcript"><br>[диенно]</span><br><button class="playbtn" onclick="playAudio('l9_drill_diannao','电脑')">&#128266;</button></div>
      <div class="drillcard">diànhuà<span class="transcript"><br>[диенхуа]</span><br><button class="playbtn" onclick="playAudio('l9_drill_dianhua','电话')">&#128266;</button></div>
      <div class="drillcard">xiàtiān<span class="transcript"><br>[сятиен]</span><br><button class="playbtn" onclick="playAudio('l9_drill_xiatian','夏天')">&#128266;</button></div>
      <div class="drillcard">chàng gē<span class="transcript"><br>[чхан гэ]</span><br><button class="playbtn" onclick="playAudio('l9_drill_changge','唱歌')">&#128266;</button></div>
      <div class="drillcard">jiànkāng<span class="transcript"><br>[дзиенкан]</span><br><button class="playbtn" onclick="playAudio('l9_drill_jiankang','健康')">&#128266;</button></div>
      <div class="drillcard">dìtú<span class="transcript"><br>[дитху]</span><br><button class="playbtn" onclick="playAudio('l9_drill_ditu','地图')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiao3','小')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">小</div><div class="py">xiǎo<span class="transcript"> [сяо]</span></div><div class="tj">хурд, майда</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('mao1','猫')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">猫</div><div class="py">māo<span class="transcript"> [мао]</span></div><div class="tj">гурба</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zai4','在')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">在</div><div class="py">zài<span class="transcript"> [цзай]</span></div><div class="tj">будан (дар ҷое); ҳамчун пешоянд низ "дар"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nar_there','那儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">那儿</div><div class="py">nàr<span class="transcript"> [нар]</span></div><div class="tj">он ҷо</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('gou3','狗')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">狗</div><div class="py">gǒu<span class="transcript"> [гоу]</span></div><div class="tj">саг</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yizi3','椅子')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">椅子</div><div class="py">yǐzi<span class="transcript"> [ицзы]</span></div><div class="tj">курсӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiamian','下面')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">下面(下)</div><div class="py">xiàmiàn (xià)<span class="transcript"> [сямиен]</span></div><div class="tj">зери, поён</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nar_where','哪儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">哪儿</div><div class="py">nǎr<span class="transcript"> [нар]</span></div><div class="tj">куҷо (ҷонишини саволӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('gongzuo','工作')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">工作</div><div class="py">gōngzuò<span class="transcript"> [гунцзуо]</span></div><div class="tj">кор кардан; кор (исм)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('erzi','儿子')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">儿子</div><div class="py">érzi<span class="transcript"> [эрцзы]</span></div><div class="tj">писар</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yiyuan','医院')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">医院</div><div class="py">yīyuàn<span class="transcript"> [ийюен]</span></div><div class="tj">беморхона</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yisheng','医生')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">医生</div><div class="py">yīshēng<span class="transcript"> [ишэн]</span></div><div class="tj">духтур</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('baba','爸爸')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">爸爸</div><div class="py">bàba<span class="transcript"> [баба]</span></div><div class="tj">падар</div></div>
    </div>

    <div class="section-lbl">3. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Феъли <ruby>在<rt>zài</rt></ruby></div>
      <div class="gbody">在 феъл аст, ки баъд аз он калимаи ҷойро меорем — он хабари ҷумларо месозад ва мавқеи шахс ё чизро нишон медиҳад.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + 在 + ҷой</div>
      <div class="gex"><span class="tag">намуна</span>我朋友<ruby>在<rt>zài</rt></ruby>学校。 — Дӯсти ман дар мактаб аст.</div>
      <div class="gex"><span class="tag">намуна</span>小狗<ruby>在<rt>zài</rt></ruby>椅子下面。 — Сагбача зери курсӣ аст.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷонишини саволии <ruby>哪儿<rt>nǎr</rt></ruby></div>
      <div class="gbody">哪儿 барои пурсидани мавқеи шахс ё чиз истифода мешавад — дар ҷои калимаи ҷой дар ҷумла гузошта мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>我的杯子在<ruby>哪儿<rt>nǎr</rt></ruby>？ — Пиёлаи ман дар куҷост?</div>
      <div class="gex"><span class="tag">намуна</span>小猫在<ruby>哪儿<rt>nǎr</rt></ruby>？ — Гурбача дар куҷост?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Пешоянди <ruby>在<rt>zài</rt></ruby></div>
      <div class="gbody">在 инчунин ҳамчун пешоянд кор мекунад — пеш аз калимаи ҷой меояд ва ҷоеро нишон медиҳад, ки амал дар он рух медиҳад. Дар ин ҳолат баъди калимаи ҷой боз феъли дигар меояд.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + 在 + ҷой + феъл</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>在<rt>zài</rt></ruby>朋友家喝茶。 — Ман дар хонаи дӯстам чой менӯшам.</div>
      <div class="gex"><span class="tag">намуна</span>我儿子<ruby>在<rt>zài</rt></ruby>医院工作。 — Писари ман дар беморхона кор мекунад.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Зарраи саволии <ruby>呢<rt>ne</rt></ruby> (2)</div>
      <div class="gbody">Зарраи 呢 дар охири ҷумла омада, дар бораи мавқеи шахс ё чиз мепурсад — маънояш "пас...чӣ?", "..чист?", "..дар куҷост?".</div>
      <div class="gex"><span class="tag">намуна</span>我的小猫<ruby>呢<rt>ne</rt></ruby>？ — Гурбачаи ман чӣ? (дар куҷост?)</div>
      <div class="gex"><span class="tag">намуна</span>他在哪儿<ruby>呢<rt>ne</rt></ruby>？ — Ӯ дар куҷо аст?</div>
    </div>

    <div class="section-lbl">4. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">小猫在哪儿？</span><span class="py">Xiǎo māo zài nǎr?</span><span class="transcript">[Сяо мао цзай нар?]</span><span class="tj">— Гурбача дар куҷост?</span><button class="playbtn inline" onclick="playAudio('l9_q1','小猫在哪儿')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">小猫在那儿。</span><span class="py">Xiǎo māo zài nàr.</span><span class="transcript">[Сяо мао цзай нар.]</span><span class="tj">— Гурбача он ҷост.</span><button class="playbtn inline" onclick="playAudio('l9_a1','小猫在那儿')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">小狗在哪儿？</span><span class="py">Xiǎo gǒu zài nǎr?</span><span class="transcript">[Сяо гоу цзай нар?]</span><span class="tj">— Сагбача дар куҷост?</span><button class="playbtn inline" onclick="playAudio('l9_q1b','小狗在哪儿')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">小狗在椅子下面。</span><span class="py">Xiǎo gǒu zài yǐzi xiàmiàn.</span><span class="transcript">[Сяо гоу цзай ицзы сямиен.]</span><span class="tj">— Сагбача зери курсӣ аст.</span><button class="playbtn inline" onclick="playAudio('l9_a1b','小狗在椅子下面')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你在哪儿工作？</span><span class="py">Nǐ zài nǎr gōngzuò?</span><span class="transcript">[Ни цзай нар гунцзуо?]</span><span class="tj">— Шумо дар куҷо кор мекунед?</span><button class="playbtn inline" onclick="playAudio('l9_q2','你在哪儿工作')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我在学校工作。</span><span class="py">Wǒ zài xuéxiào gōngzuò.</span><span class="transcript">[Во цзай сюэсяо гунцзуо.]</span><span class="tj">— Ман дар мактаб кор мекунам.</span><button class="playbtn inline" onclick="playAudio('l9_a2','我在学校工作')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你儿子在哪儿工作？</span><span class="py">Nǐ érzi zài nǎr gōngzuò?</span><span class="transcript">[Ни эрцзы цзай нар гунцзуо?]</span><span class="tj">— Писари шумо дар куҷо кор мекунад?</span><button class="playbtn inline" onclick="playAudio('l9_q2b','你儿子在哪儿工作')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我儿子在医院工作，他是医生。</span><span class="py">Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.</span><span class="transcript">[Во эрцзы цзай ийюен гунцзуо, тха ши ишэн.]</span><span class="tj">— Писари ман дар беморхона кор мекунад, ӯ духтур аст.</span><button class="playbtn inline" onclick="playAudio('l9_a2b','我儿子在医院工作他是医生')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你爸爸在家吗？</span><span class="py">Nǐ bàba zài jiā ma?</span><span class="transcript">[Ни баба цзай цзя ма?]</span><span class="tj">— Падари шумо хонааст?</span><button class="playbtn inline" onclick="playAudio('l9_q3','你爸爸在家吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">不在家。</span><span class="py">Bú zài jiā.</span><span class="transcript">[Бу цзай цзя.]</span><span class="tj">— Хона нест.</span><button class="playbtn inline" onclick="playAudio('l9_a3','不在家')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">他在哪儿呢？</span><span class="py">Tā zài nǎr ne?</span><span class="transcript">[Тха цзай нар нэ?]</span><span class="tj">— Пас ӯ дар куҷост?</span><button class="playbtn inline" onclick="playAudio('l9_q3b','他在哪儿呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">他在医院。</span><span class="py">Tā zài yīyuàn.</span><span class="transcript">[Тха цзай ийюен.]</span><span class="tj">— Ӯ дар беморхона аст.</span><button class="playbtn inline" onclick="playAudio('l9_a3b','他在医院')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 9. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid9">
      <div class="strokecard"><div class="shz">小</div><div class="spy">xiǎo <span class="transcript">[сяо]</span></div><div class="starget" id="sw9-xiao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-xiao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-xiao')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-xiao-status"></div></div>
      <div class="strokecard"><div class="shz">猫</div><div class="spy">māo <span class="transcript">[мао]</span></div><div class="starget" id="sw9-mao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-mao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-mao')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-mao-status"></div></div>
      <div class="strokecard"><div class="shz">狗</div><div class="spy">gǒu <span class="transcript">[гоу]</span></div><div class="starget" id="sw9-gou"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-gou')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-gou')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-gou-status"></div></div>
      <div class="strokecard"><div class="shz">椅</div><div class="spy">yǐ <span class="transcript">[и]</span></div><div class="starget" id="sw9-yizi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-yizi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-yizi')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-yizi-status"></div></div>
      <div class="strokecard"><div class="shz">工</div><div class="spy">gōng <span class="transcript">[гун]</span></div><div class="starget" id="sw9-gong"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-gong')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-gong')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-gong-status"></div></div>
      <div class="strokecard"><div class="shz">医</div><div class="spy">yī <span class="transcript">[и]</span></div><div class="starget" id="sw9-yi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-yi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-yi')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-yi-status"></div></div>
      <div class="strokecard"><div class="shz">爸</div><div class="spy">bà <span class="transcript">[ба]</span></div><div class="starget" id="sw9-ba"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-ba')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-ba')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-ba-status"></div></div>
      <div class="strokecard"><div class="shz">子</div><div class="spy">zi <span class="transcript">[цзы]</span></div><div class="starget" id="sw9-zi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw9-zi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw9-zi')">Худам нависам</button></div>
        <div class="sstatus" id="sw9-zi-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zai4','在')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">在</div><div class="py">zài <span class="transcript">[цзай]</span></div><div class="tj">шаклаш ба гиёҳи навшукуфта аз замин монанд буд; ҳоло маънои "зиндагӣ кардан, вуҷуд доштан"-ро дорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zi3','子')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">子</div><div class="py">zǐ <span class="transcript">[цзы]</span></div><div class="tj">аслан маънои "кӯдак"-ро дошт; ҳоло дар бисёр калима меояд: 儿子 (писар), 电子 (электрон)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('gong1','工')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">工</div><div class="py">gōng <span class="transcript">[гун]</span></div><div class="tj">шаклаш ба хаткаши устои кордон монанд буд; ҳоло дар 工人 (коргар), 工作 (кор) меояд</div></div>
    </div>

    <div class="section-lbl">7. Сохти ҳарфҳо (4): сохти нимиҳотадор ва радикалҳо</div>
    <div class="note"><b>Сохти нимиҳотадор</b> (半包围结构) — ҳарф аз ду ё се тараф иҳота шудааст. Мисол: 店 (diàn — мағоза), 习 (xí — омӯхтан), 这 (zhè — ин), 同 (tóng — якхела), 凶 (xiōng — ваҳшӣ), 医 (yī — духтур).</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">辶</div><div class="py">радикали роҳгардӣ</div><div class="tj">одатан бо роҳ рафтан алоқаманд: 这 (zhè — ин), 送 (sòng — фиристодан)</div></div>
      <div class="wordcard"><div class="hz">门</div><div class="py">радикали дар</div><div class="tj">одатан бо хона/дар алоқаманд: 问 (wèn — пурсидан), 间 (jiān — калимаи ченаки утоқ)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 9 (10 савол)</div>
      <div class="qcard"><div class="q">1. 小狗在椅子下面 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Сагбача рӯи курсист</label>
        <label><input type="radio" name="q1" value="right">Сагбача зери курсист</label>
        <label><input type="radio" name="q1" value="wrong">Сагбача паҳлӯи курсист</label>
      </div></div>
      <div class="qcard"><div class="q">2. 在 ҳамчун феъл кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q2" value="right">Мавқеи шахс/чизро нишон медиҳад</label>
        <label><input type="radio" name="q2" value="wrong">Замони гузаштаро нишон медиҳад</label>
        <label><input type="radio" name="q2" value="wrong">Аломати саволист</label>
      </div></div>
      <div class="qcard"><div class="q">3. 哪儿 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Чӣ</label>
        <label><input type="radio" name="q3" value="right">Куҷо</label>
        <label><input type="radio" name="q3" value="wrong">Кай</label>
      </div></div>
      <div class="qcard"><div class="q">4. Дар ҷумлаи "我在朋友家喝茶" 在 кадом вазифаро дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Феъли асосии ҷумла</label>
        <label><input type="radio" name="q4" value="right">Пешоянд — ҷои амалро нишон медиҳад</label>
        <label><input type="radio" name="q4" value="wrong">Ҷонишини саволӣ</label>
      </div></div>
      <div class="qcard"><div class="q">5. 呢 дар охири ҷумла бо мақсади пурсидани мавқеъ чӣ маъно дорад?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Инкор мекунад</label>
        <label><input type="radio" name="q5" value="right">"...пас чӣ? дар куҷост?"</label>
        <label><input type="radio" name="q5" value="wrong">Замони ояндаро нишон медиҳад</label>
      </div></div>
      <div class="qcard"><div class="q">6. 医生 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Беморхона</label>
        <label><input type="radio" name="q6" value="right">Духтур</label>
        <label><input type="radio" name="q6" value="wrong">Муаллим</label>
      </div></div>
      <div class="qcard"><div class="q">7. 儿子 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Духтар</label>
        <label><input type="radio" name="q7" value="right">Писар</label>
        <label><input type="radio" name="q7" value="wrong">Падар</label>
      </div></div>
      <div class="qcard"><div class="q">8. Кадоме аз ин ҳарфҳо сохти нимиҳотадор (半包围结构) дорад?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">医</label>
        <label><input type="radio" name="q8" value="wrong">人</label>
        <label><input type="radio" name="q8" value="wrong">十</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 门 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Об</label>
        <label><input type="radio" name="q9" value="right">Хона, дар</label>
        <label><input type="radio" name="q9" value="wrong">Роҳ рафтан</label>
      </div></div>
      <div class="qcard"><div class="q">10. "你爸爸在家吗？" — "不在家。他在医院。" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Падараш хонааст, беморхона не</label>
        <label><input type="radio" name="q10" value="right">Падараш хона нест, ӯ дар беморхона аст</label>
        <label><input type="radio" name="q10" value="wrong">Падараш дар мактаб аст</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson10(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">10</div>
      <div class="titles">
        <div class="zh">我能坐这儿吗</div>
        <div class="py">Wǒ néng zuò zhèr ma</div>
        <div class="en">Ман метавонам ин ҷо шинам?</div>
      </div>
    </div>

    <div class="section-lbl">1. Пиньин — оҳанги хомӯш (轻声)</div>
    <div class="section-sub">Баландии воқеии ҳиҷои хомӯш аз ҳиҷои пешаш вобаста аст: баъд аз оҳанги 1, 2 ё 4 — пасттар аз он; баъд аз оҳанги 3 — баландтар аз он.</div>
    <div class="drillgrid">
      <div class="drillcard">zhuōzi<span class="transcript"><br>[чжуоцзы]</span><br><button class="playbtn" onclick="playAudio('zhuozi','桌子')">&#128266;</button></div>
      <div class="drillcard">pánzi<span class="transcript"><br>[панцзы]</span><br><button class="playbtn" onclick="playAudio('l10_drill_panzi','盘子')">&#128266;</button></div>
      <div class="drillcard">yǐzi<span class="transcript"><br>[ицзы]</span><br><button class="playbtn" onclick="playAudio('yizi3','椅子')">&#128266;</button></div>
      <div class="drillcard">kùzi<span class="transcript"><br>[кхуцзы]</span><br><button class="playbtn" onclick="playAudio('l10_drill_kuzi','裤子')">&#128266;</button></div>
    </div>

    <div class="section-sub" style="margin-top:14px;"><b>Калимаҳои такрорӣ (叠音词)</b> — ҳиҷои дуюм одатан хомӯш талаффуз мешавад:</div>
    <div class="drillgrid">
      <div class="drillcard">bàba<span class="transcript"><br>[баба]</span><br><button class="playbtn" onclick="playAudio('baba','爸爸')">&#128266;</button></div>
      <div class="drillcard">māma<span class="transcript"><br>[мама]</span><br><button class="playbtn" onclick="playAudio('l10_drill_mama','妈妈')">&#128266;</button></div>
      <div class="drillcard">gēge<span class="transcript"><br>[гэгэ]</span><br><button class="playbtn" onclick="playAudio('l10_drill_gege','哥哥')">&#128266;</button></div>
      <div class="drillcard">jiějie<span class="transcript"><br>[цзиецзие]</span><br><button class="playbtn" onclick="playAudio('l10_drill_jiejie','姐姐')">&#128266;</button></div>
    </div>

    <div class="section-sub" style="margin-top:14px;"><b>Суффиксҳои -们, -子, -头</b> — ин суффиксҳо низ одатан хомӯш талаффуз мешаванд:</div>
    <div class="drillgrid">
      <div class="drillcard">wǒmen<span class="transcript"><br>[вомэн]</span><br><button class="playbtn" onclick="playAudio('l10_suffix_women','我们')">&#128266;</button></div>
      <div class="drillcard">tāmen<span class="transcript"><br>[тхамэн]</span><br><button class="playbtn" onclick="playAudio('l10_suffix_tamen','他们')">&#128266;</button></div>
      <div class="drillcard">shítou<span class="transcript"><br>[шитхоу]</span><br><button class="playbtn" onclick="playAudio('l10_suffix_shitou','石头')">&#128266;</button></div>
      <div class="drillcard">mùtou<span class="transcript"><br>[мутхоу]</span><br><button class="playbtn" onclick="playAudio('l10_suffix_mutou','木头')">&#128266;</button></div>
    </div>

    <div class="section-lbl">2. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhuozi','桌子')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">桌子</div><div class="py">zhuōzi<span class="transcript"> [чжуоцзы]</span></div><div class="tj">миз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shang0','上')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">上</div><div class="py">shang<span class="transcript"> [шан]</span></div><div class="tj">рӯй, боло</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('diannao','电脑')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">电脑</div><div class="py">diànnǎo<span class="transcript"> [диенно]</span></div><div class="tj">компютер</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('he2','和')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">和</div><div class="py">hé<span class="transcript"> [хэ]</span></div><div class="tj">ва (пайвандак)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ben3','本')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">本</div><div class="py">běn<span class="transcript"> [бэнь]</span></div><div class="tj">калимаи ченак барои китоб</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('li3','里')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">里</div><div class="py">lǐ<span class="transcript"> [ли]</span></div><div class="tj">дарун, дохил</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qianmian','前面')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">前面</div><div class="py">qiánmiàn<span class="transcript"> [циенмиен]</span></div><div class="tj">пеш, пешрав</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('houmian','后面')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">后面</div><div class="py">hòumiàn<span class="transcript"> [хоумиен]</span></div><div class="tj">пас, ақиб</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zher4','这儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">这儿</div><div class="py">zhèr<span class="transcript"> [чжар]</span></div><div class="tj">ин ҷо</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('meiyou','没有(没)')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">没有(没)</div><div class="py">méiyǒu (méi)<span class="transcript"> [мэйёу]</span></div><div class="tj">нест, вуҷуд надорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('neng2','能')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">能</div><div class="py">néng<span class="transcript"> [нэн]</span></div><div class="tj">тавонистан, иҷозат доштан (феъли модалӣ)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zuo4','坐')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">坐</div><div class="py">zuò<span class="transcript"> [цзуо]</span></div><div class="tj">нишастан</div></div>
    </div>
    <div class="note"><b>Номҳои хос:</b> 王方 (Wáng Fāng) ва 谢朋 (Xiè Péng) — номи ду шахс дар дарс.</div>

    <div class="section-lbl">3. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷумлаи бо <ruby>有<rt>yǒu</rt></ruby> — ифодаи мавҷудият</div>
      <div class="gbody">有 метавонад дар ҷумлае истифода шавад, ки мавҷудияти касе/чизеро дар ҷое ифода мекунад. Шакли инкорӣ 没有 аст, ва дар ин ҳолат пеш аз пуркунанда рақам/муайянкунанда лозим нест.</div>
      <div class="gex"><span class="tag">сохт</span>Ҷой + 有 + шахс/чиз</div>
      <div class="gex"><span class="tag">намуна</span>桌子上<ruby>有<rt>yǒu</rt></ruby>一个电脑和一本书。 — Дар рӯи миз як компютер ва як китоб ҳаст.</div>
      <div class="gex"><span class="tag">намуна</span>椅子下面<ruby>没有<rt>méiyǒu</rt></ruby>小狗。 — Зери курсӣ сагбача нест.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Пайвандаки <ruby>和<rt>hé</rt></ruby></div>
      <div class="gbody">和 барои пайваст кардани ду ё зиёда ҷузъҳои баробарҳуқуқ дар ҷумла истифода мешавад — муносибати ҳамрадифиро ифода мекунад.</div>
      <div class="gex"><span class="tag">намуна</span>我有一个中国朋友<ruby>和<rt>hé</rt></ruby>一个美国朋友。 — Ман як дӯсти хитоӣ ва як дӯсти амрикоӣ дорам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Феъли модалии <ruby>能<rt>néng</rt></ruby></div>
      <div class="gbody">能 одатан пеш аз феъл меояд ва бо феъли асосӣ якҷоя хабари ҷумларо месозад — қобилият ё имконро ифода мекунад. Сохти саволии 能……吗？ бештар барои дархост ё пурсидани иҷозат истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>明天下午我<ruby>能<rt>néng</rt></ruby>去商店。 — Пагоҳ баъд аз пешин ман метавонам ба мағоза равам.</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>能<rt>néng</rt></ruby>坐这儿吗？ — Ман метавонам ин ҷо шинам?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Ҷумлаи амрӣ бо <ruby>请<rt>qǐng</rt></ruby></div>
      <div class="gbody">Феъли 请 пеш аз феъли дигар омада, ҷумлаи амриро месозад — бо эҳтиром пешниҳод ё хоҳиш мекунад, ки тарафи муқобил коре кунад.</div>
      <div class="gex"><span class="tag">намуна</span>请喝茶。 — Марҳамат, чой нӯшед.</div>
      <div class="gex"><span class="tag">намуна</span>请坐。 — Марҳамат, шинед.</div>
    </div>

    <div class="section-lbl">4. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">桌子上有什么？</span><span class="py">Zhuōzi shang yǒu shénme?</span><span class="transcript">[Чжуоцзы шан ёу шэньмэ?]</span><span class="tj">— Дар рӯи миз чӣ ҳаст?</span><button class="playbtn inline" onclick="playAudio('l10_q1','桌子上有什么')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">桌子上有一个电脑和一本书。</span><span class="py">Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.</span><span class="transcript">[Чжуоцзы шан ёу и гэ диенно хэ и бэнь шу.]</span><span class="tj">— Дар рӯи миз як компютер ва як китоб ҳаст.</span><button class="playbtn inline" onclick="playAudio('l10_a1','桌子上有一个电脑和一本书')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">杯子在哪儿？</span><span class="py">Bēizi zài nǎr?</span><span class="transcript">[Бэйцзы цзай нар?]</span><span class="tj">— Пиёла дар куҷост?</span><button class="playbtn inline" onclick="playAudio('l10_q1b','杯子在哪儿')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">杯子在桌子里。</span><span class="py">Bēizi zài zhuōzi li.</span><span class="transcript">[Бэйцзы цзай чжуоцзы ли.]</span><span class="tj">— Пиёла дар дохили миз аст.</span><button class="playbtn inline" onclick="playAudio('l10_a1b','杯子在桌子里')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">前面那个人叫什么名字？</span><span class="py">Qiánmiàn nàge rén jiào shénme míngzi?</span><span class="transcript">[Циенмиен нагэ жэнь цзяо шэньмэ минцзы?]</span><span class="tj">— Он шахси пешрав чӣ ном дорад?</span><button class="playbtn inline" onclick="playAudio('l10_q2','前面那个人叫什么名字')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她叫王方，在医院工作。</span><span class="py">Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.</span><span class="transcript">[Тха цзяо Ван Фан, цзай ийюен гунцзуо.]</span><span class="tj">— Номаш Ван Фан, дар беморхона кор мекунад.</span><button class="playbtn inline" onclick="playAudio('l10_a2','她叫王方在医院工作')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">后面那个人呢？他叫什么名字？</span><span class="py">Hòumiàn nàge rén ne? Tā jiào shénme míngzi?</span><span class="transcript">[Хоумиен нагэ жэнь нэ? Тха цзяо шэньмэ минцзы?]</span><span class="tj">— Пас он шахси ақибӣ чӣ? Номаш чист?</span><button class="playbtn inline" onclick="playAudio('l10_q2b','后面那个人呢他叫什么名字')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">他叫谢朋，在商店工作。</span><span class="py">Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.</span><span class="transcript">[Тха цзяо Сие Пхэн, цзай шандиен гунцзуо.]</span><span class="tj">— Номаш Сие Пхэн, дар мағоза кор мекунад.</span><button class="playbtn inline" onclick="playAudio('l10_a2b','他叫谢朋在商店工作')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">这儿有人吗？</span><span class="py">Zhèr yǒu rén ma?</span><span class="transcript">[Чжар ёу жэнь ма?]</span><span class="tj">— Ин ҷо касе ҳаст?</span><button class="playbtn inline" onclick="playAudio('l10_q3','这儿有人吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">没有。</span><span class="py">Méi yǒu.</span><span class="transcript">[Мэй ёу.]</span><span class="tj">— Нест.</span><button class="playbtn inline" onclick="playAudio('l10_a3','没有')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">我能坐这儿吗？</span><span class="py">Wǒ néng zuò zhèr ma?</span><span class="transcript">[Во нэн цзуо чжар ма?]</span><span class="tj">— Ман метавонам ин ҷо шинам?</span><button class="playbtn inline" onclick="playAudio('l10_q3b','我能坐这儿吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">请坐。</span><span class="py">Qǐng zuò.</span><span class="transcript">[Цин цзуо.]</span><span class="tj">— Марҳамат, шинед.</span><button class="playbtn inline" onclick="playAudio('l10_a3b','请坐')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 10. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid10">
      <div class="strokecard"><div class="shz">桌</div><div class="spy">zhuō <span class="transcript">[чжуо]</span></div><div class="starget" id="sw10-zhuo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-zhuo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-zhuo')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-zhuo-status"></div></div>
      <div class="strokecard"><div class="shz">电</div><div class="spy">diàn <span class="transcript">[диен]</span></div><div class="starget" id="sw10-dian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-dian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-dian')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-dian-status"></div></div>
      <div class="strokecard"><div class="shz">脑</div><div class="spy">nǎo <span class="transcript">[но]</span></div><div class="starget" id="sw10-nao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-nao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-nao')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-nao-status"></div></div>
      <div class="strokecard"><div class="shz">和</div><div class="spy">hé <span class="transcript">[хэ]</span></div><div class="starget" id="sw10-he"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-he')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-he')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-he-status"></div></div>
      <div class="strokecard"><div class="shz">本</div><div class="spy">běn <span class="transcript">[бэнь]</span></div><div class="starget" id="sw10-ben"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-ben')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-ben')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-ben-status"></div></div>
      <div class="strokecard"><div class="shz">里</div><div class="spy">lǐ <span class="transcript">[ли]</span></div><div class="starget" id="sw10-li"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-li')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-li')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-li-status"></div></div>
      <div class="strokecard"><div class="shz">能</div><div class="spy">néng <span class="transcript">[нэн]</span></div><div class="starget" id="sw10-neng"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-neng')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-neng')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-neng-status"></div></div>
      <div class="strokecard"><div class="shz">坐</div><div class="spy">zuò <span class="transcript">[цзуо]</span></div><div class="starget" id="sw10-zuo"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw10-zuo')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw10-zuo')">Худам нависам</button></div>
        <div class="sstatus" id="sw10-zuo-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_shang','上')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">上</div><div class="py">shàng <span class="transcript">[шан]</span></div><div class="tj">хатти уфуқии поён — сарҳад; хатти кӯтоҳи боло — мавқеъ дар боло; маънои "боло, ҷои баланд"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_xia','下')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">下</div><div class="py">xià <span class="transcript">[ся]</span></div><div class="tj">муқобили 上 — маънои "поён, ҷои паст"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ben3','本')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">本</div><div class="py">běn <span class="transcript">[бэнь]</span></div><div class="tj">шаклаш дарахт бо нуқтае дар зерин буд — маънои аслӣ "реша"; ҳоло "асос, реша"-и ҳама чиз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_mo','末')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">末</div><div class="py">mò <span class="transcript">[мо]</span></div><div class="tj">маънои аслӣ "нӯги дарахт"; ҳоло "ғайриасосӣ, дуюмдараҷа"</div></div>
    </div>

    <div class="section-lbl">7. Сохти пурраиҳота ва радикалҳо</div>
    <div class="note"><b>Сохти пурраиҳота</b> (全包围结构) — ҳарф аз ҳамаи чор тараф иҳота шудааст. Мисол: 四 (sì — чор), 国 (guó — кишвар).</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">囗</div><div class="py">радикали қуттӣ</div><div class="tj">одатан маънои дар банд/иҳота будан дорад: 国 (guó — кишвар), 困 (kùn — дар банд будан)</div></div>
      <div class="wordcard"><div class="hz">礻</div><div class="py">радикали қурбонӣ (варианти 示)</div><div class="tj">одатан бо худо, маросим, тақдир алоқаманд: 视 (shì — нигоҳ кардан), 祝 (zhù — орзу кардан)</div></div>
    </div>

    <div class="section-lbl">8. Фарҳанг: номи хитоӣ</div>
    <div class="note">Номи хитоӣ аз насаб (姓) ва номи шахсӣ (名字) иборат аст — насаб пеш, ном пас меояд (баръакси тартиби тоҷикӣ). Насабҳои маъмул: 张, 王, 李, 赵. Барои муроҷиат, метавон насабро бо касбу кор пайваст кард: масалан 李老师 (муаллим Ли), 王医生 (духтур Ван).</div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 10 (10 савол)</div>
      <div class="qcard"><div class="q">1. 桌子上有一个电脑和一本书 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="right">Дар рӯи миз як компютер ва як китоб ҳаст</label>
        <label><input type="radio" name="q1" value="wrong">Дар мизи компютер китоб нест</label>
        <label><input type="radio" name="q1" value="wrong">Компютер зери китоб аст</label>
      </div></div>
      <div class="qcard"><div class="q">2. Шакли инкории 有 кадом аст?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">不有</label>
        <label><input type="radio" name="q2" value="right">没有</label>
        <label><input type="radio" name="q2" value="wrong">不是有</label>
      </div></div>
      <div class="qcard"><div class="q">3. 和 кадом вазифаро иҷро мекунад?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Аломати саволӣ</label>
        <label><input type="radio" name="q3" value="right">Пайвандаки "ва"</label>
        <label><input type="radio" name="q3" value="wrong">Феъли модалӣ</label>
      </div></div>
      <div class="qcard"><div class="q">4. 我能坐这儿吗？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Ман ин ҷо нишастам</label>
        <label><input type="radio" name="q4" value="right">Ман метавонам ин ҷо шинам?</label>
        <label><input type="radio" name="q4" value="wrong">Шумо ин ҷо нанишинед</label>
      </div></div>
      <div class="qcard"><div class="q">5. 请坐 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Марҳамат, биравед</label>
        <label><input type="radio" name="q5" value="right">Марҳамат, шинед</label>
        <label><input type="radio" name="q5" value="wrong">Бубахшед</label>
      </div></div>
      <div class="qcard"><div class="q">6. Дар калимаи такрории 妈妈, ҳиҷои дуюм чӣ гуна талаффуз мешавад?</div><div class="opts">
        <label><input type="radio" name="q6" value="right">Хомӯш (轻声)</label>
        <label><input type="radio" name="q6" value="wrong">Бо оҳанги 4</label>
        <label><input type="radio" name="q6" value="wrong">Бо оҳанги 1</label>
      </div></div>
      <div class="qcard"><div class="q">7. 里 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Берун</label>
        <label><input type="radio" name="q7" value="right">Дарун, дохил</label>
        <label><input type="radio" name="q7" value="wrong">Боло</label>
      </div></div>
      <div class="qcard"><div class="q">8. Кадоме аз ин ҳарфҳо сохти пурраиҳота (全包围结构) дорад?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">国</label>
        <label><input type="radio" name="q8" value="wrong">你</label>
        <label><input type="radio" name="q8" value="wrong">谢</label>
      </div></div>
      <div class="qcard"><div class="q">9. Дар номи хитоӣ, кадом қисм пеш меояд?</div><div class="opts">
        <label><input type="radio" name="q9" value="right">Насаб (姓)</label>
        <label><input type="radio" name="q9" value="wrong">Номи шахсӣ (名字)</label>
        <label><input type="radio" name="q9" value="wrong">Тартиб муҳим нест</label>
      </div></div>
      <div class="qcard"><div class="q">10. Радикали 礻 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Металл</label>
        <label><input type="radio" name="q10" value="wrong">Об</label>
        <label><input type="radio" name="q10" value="right">Худо, маросим, тақдир</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson11(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">11</div>
      <div class="titles">
        <div class="zh">现在几点</div>
        <div class="py">Xiànzài jǐ diǎn</div>
        <div class="en">Ҳозир соат чанд аст</div>
      </div>
    </div>

    <div class="section-lbl">1. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xianzai4','现在')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">现在</div><div class="py">xiànzài<span class="transcript"> [сяньцзай]</span></div><div class="tj">ҳозир, айни ҳол</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dian3','点')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">点</div><div class="py">diǎn<span class="transcript"> [диен]</span></div><div class="tj">калимаи ченаки соат</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('fen1','分')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">分</div><div class="py">fēn<span class="transcript"> [фэнь]</span></div><div class="tj">калимаи ченаки дақиқа</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhongwu3','中午')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">中午</div><div class="py">zhōngwǔ<span class="transcript"> [чжунву]</span></div><div class="tj">нисфирӯзӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('chifan','吃饭')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">吃饭</div><div class="py">chī fàn<span class="transcript"> [чхи фань]</span></div><div class="tj">хӯрок хӯрдан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shihou','时候')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">时候</div><div class="py">shíhou<span class="transcript"> [шихоу]</span></div><div class="tj">вақт, лаҳза</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hui2','回')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">回</div><div class="py">huí<span class="transcript"> [хуй]</span></div><div class="tj">баргаштан, бозгаштан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('women3','我们')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">我们</div><div class="py">wǒmen<span class="transcript"> [вомэнь]</span></div><div class="tj">мо (ҷамъи "ман")</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dianying3','电影')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">电影</div><div class="py">diànyǐng<span class="transcript"> [диенин]</span></div><div class="tj">филм, кино</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhu4','住')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">住</div><div class="py">zhù<span class="transcript"> [чжу]</span></div><div class="tj">зиндагӣ кардан, истиқомат кардан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('qian_before','前')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">前</div><div class="py">qián<span class="transcript"> [циен]</span></div><div class="tj">пеш аз, қаблан</div></div>
    </div>
    <div class="note"><b>Номи хос:</b> 北京 (Běijīng) — Пекин, пойтахти Хитой.</div>

    <div class="section-lbl">2. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ифодаи вақт (соат ва дақиқа)</div>
      <div class="gbody">Дар хитоӣ вақт бо 点 (соат) ва 分 (дақиқа) ифода мешавад — аз воҳиди калон ба хурд. Барои соатҳои дуруст фақат 点 кифоя аст. Диққат: соати 2 на 二点, балки <b>两点</b> (liǎng diǎn) гуфта мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>9:00 → 九点 &nbsp; 11:00 → 十一点 &nbsp; 2:00 → 两点</div>
      <div class="gex"><span class="tag">намуна</span>5:30 → 五点三十分 &nbsp; 2:05 → 两点零五分 (零 líng — сифр, барои дақиқаи то 10)</div>
      <div class="gex"><span class="tag">намуна</span>8:00 пагоҳирӯзӣ → 上午八点 &nbsp; 3:10 бегоҳирӯзӣ → 下午三点十分</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Калимаи вақт ҳамчун ҳолат</div>
      <div class="gbody">Калимаи вақт дар ҷумла ҳамчун ҳолат меояд — одатан баъд аз мубтадо, вале метавонад пеш аз он низ ояд.</div>
      <div class="gex"><span class="tag">намуна</span>妈妈<ruby>六点<rt>liù diǎn</rt></ruby>做饭。 — Модарам соати 6 хӯрок мепазад.</div>
      <div class="gex"><span class="tag">намуна</span><ruby>七点<rt>qī diǎn</rt></ruby>我吃饭。 — Соати 7 ман хӯрок мехӯрам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Исми <ruby>前<rt>qián</rt></ruby></div>
      <div class="gbody">前 метавонад муддате пеш аз ҳозир ё пеш аз вақти зикршударо ифода кунад.</div>
      <div class="gex"><span class="tag">намуна</span>三天<ruby>前<rt>qián</rt></ruby> — се рӯз пеш &nbsp; 星期五<ruby>前<rt>qián</rt></ruby> — пеш аз рӯзи ҷумъа</div>
      <div class="gex"><span class="tag">намуна</span>你什么时候去学校？八点<ruby>前<rt>qián</rt></ruby>。 — Кай ба мактаб меравед? Пеш аз соати 8.</div>
    </div>

    <div class="section-lbl">3. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">现在几点？</span><span class="py">Xiànzài jǐ diǎn?</span><span class="transcript">[Сяньцзай цзи диен?]</span><span class="tj">— Ҳозир соат чанд аст?</span><button class="playbtn inline" onclick="playAudio('l11_t1_1','现在几点')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">现在十点十分。</span><span class="py">Xiànzài shí diǎn shí fēn.</span><span class="transcript">[Сяньцзай ши диен ши фэнь.]</span><span class="tj">— Ҳозир соати 10:10 аст.</span><button class="playbtn inline" onclick="playAudio('l11_t1_2','现在十点十分')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">中午几点吃饭？</span><span class="py">Zhōngwǔ jǐ diǎn chī fàn?</span><span class="transcript">[Чжунву цзи диен чхи фань?]</span><span class="tj">— Нисфирӯзӣ соати чанд хӯрок мехӯред?</span><button class="playbtn inline" onclick="playAudio('l11_t1_3','中午几点吃饭')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">十二点吃饭。</span><span class="py">Shí'èr diǎn chī fàn.</span><span class="transcript">[Шиэр диен чхи фань.]</span><span class="tj">— Соати 12 хӯрок мехӯрем.</span><button class="playbtn inline" onclick="playAudio('l11_t1_4','十二点吃饭')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">爸爸什么时候回家？</span><span class="py">Bàba shénme shíhou huí jiā?</span><span class="transcript">[Баба шэньмэ шихоу хуй цзя?]</span><span class="tj">— Падар кай хона мебарояд?</span><button class="playbtn inline" onclick="playAudio('l11_t2_1','爸爸什么时候回家')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">下午五点。</span><span class="py">Xiàwǔ wǔ diǎn.</span><span class="transcript">[Сяуу ву диен.]</span><span class="tj">— Баъд аз пешин соати 5.</span><button class="playbtn inline" onclick="playAudio('l11_t2_2','下午五点')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">我们什么时候去看电影？</span><span class="py">Wǒmen shénme shíhou qù kàn diànyǐng?</span><span class="transcript">[Вомэнь шэньмэ шихоу цюй кхань диенин?]</span><span class="tj">— Мо кай ба тамошои филм меравем?</span><button class="playbtn inline" onclick="playAudio('l11_t2_3','我们什么时候去看电影')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">六点三十分。</span><span class="py">Liù diǎn sānshí fēn.</span><span class="transcript">[Лиу диен саньши фэнь.]</span><span class="tj">— Соати 6:30.</span><button class="playbtn inline" onclick="playAudio('l11_t2_4','六点三十分')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">我星期一去北京。</span><span class="py">Wǒ xīngqī yī qù Běijīng.</span><span class="transcript">[Во синци и цюй Бэйцзин.]</span><span class="tj">— Ман рӯзи душанбе ба Пекин меравам.</span><button class="playbtn inline" onclick="playAudio('l11_t3_1','我星期一去北京')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">你想在北京住几天？</span><span class="py">Nǐ xiǎng zài Běijīng zhù jǐ tiān?</span><span class="transcript">[Ни сян цзай Бэйцзин чжу цзи тиен?]</span><span class="tj">— Шумо мехоҳед дар Пекин чанд рӯз бошед?</span><button class="playbtn inline" onclick="playAudio('l11_t3_2','你想在北京住几天')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">住三天。</span><span class="py">Zhù sān tiān.</span><span class="transcript">[Чжу сань тиен.]</span><span class="tj">— Се рӯз мемонам.</span><button class="playbtn inline" onclick="playAudio('l11_t3_3','住三天')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">星期五前能回家吗？</span><span class="py">Xīngqī wǔ qián néng huí jiā ma?</span><span class="transcript">[Синци ву циен нэн хуй цзя ма?]</span><span class="tj">— Пеш аз рӯзи ҷумъа метавонед хона баргардед?</span><button class="playbtn inline" onclick="playAudio('l11_t3_4','星期五前能回家吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">能。</span><span class="py">Néng.</span><span class="transcript">[Нэн.]</span><span class="tj">— Метавонам.</span><button class="playbtn inline" onclick="playAudio('l11_t3_5','能')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">4. Пиньин — вазифаи оҳанги хомӯш</div>
    <div class="section-sub">Оҳанги хомӯш на танҳо ҳодисаи талаффуз аст, балки маъноро низ фарқ мекунонад — як калима вобаста ба он ки ҳиҷои дуюмаш хомӯш аст ё не, маънои дигар мегирад.</div>
    <table class="pytable">
      <tr><th>Ҳарф</th><th>Бе оҳанги хомӯш</th><th>Бо оҳанги хомӯш</th></tr>
      <tr><td>东西</td><td>dōngxī — самт (шарқ-ғарб) <button class="playbtn inline" onclick="playAudio('dongxi_dir','东西')">&#128266;</button></td><td>dōngxi — чиз, ашё <button class="playbtn inline" onclick="playAudio('dongxi_stuff','东西')">&#128266;</button></td></tr>
      <tr><td>老子</td><td>Lǎozǐ — Лаосзи (файласуфи қадим) <button class="playbtn inline" onclick="playAudio('laozi_name','老子')">&#128266;</button></td><td>lǎozi — падар (гуфтугӯӣ) <button class="playbtn inline" onclick="playAudio('laozi_father','老子')">&#128266;</button></td></tr>
      <tr><td>买卖</td><td>mǎimài — фурӯхтан ва харидан (феъл) <button class="playbtn inline" onclick="playAudio('maimai_v','买卖')">&#128266;</button></td><td>mǎimai — тиҷорат, кору бор (исм) <button class="playbtn inline" onclick="playAudio('maimai_n','买卖')">&#128266;</button></td></tr>
      <tr><td>大意</td><td>dàyì — фикри умумӣ <button class="playbtn inline" onclick="playAudio('dayi_idea','大意')">&#128266;</button></td><td>dàyi — бепарво, беэҳтиёт <button class="playbtn inline" onclick="playAudio('dayi_careless','大意')">&#128266;</button></td></tr>
    </table>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 11. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid11">
      <div class="strokecard"><div class="shz">现</div><div class="spy">xiàn <span class="transcript">[сиен]</span></div><div class="starget" id="sw11-xian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-xian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-xian')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-xian-status"></div></div>
      <div class="strokecard"><div class="shz">点</div><div class="spy">diǎn <span class="transcript">[диен]</span></div><div class="starget" id="sw11-dian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-dian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-dian')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-dian-status"></div></div>
      <div class="strokecard"><div class="shz">分</div><div class="spy">fēn <span class="transcript">[фэнь]</span></div><div class="starget" id="sw11-fen"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-fen')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-fen')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-fen-status"></div></div>
      <div class="strokecard"><div class="shz">回</div><div class="spy">huí <span class="transcript">[хуй]</span></div><div class="starget" id="sw11-hui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-hui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-hui')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-hui-status"></div></div>
      <div class="strokecard"><div class="shz">住</div><div class="spy">zhù <span class="transcript">[чжу]</span></div><div class="starget" id="sw11-zhu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-zhu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-zhu')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-zhu-status"></div></div>
      <div class="strokecard"><div class="shz">前</div><div class="spy">qián <span class="transcript">[циен]</span></div><div class="starget" id="sw11-qian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-qian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-qian')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-qian-status"></div></div>
      <div class="strokecard"><div class="shz">午</div><div class="spy">wǔ <span class="transcript">[ву]</span></div><div class="starget" id="sw11-wu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-wu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-wu')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-wu-status"></div></div>
      <div class="strokecard"><div class="shz">电</div><div class="spy">diàn <span class="transcript">[диен]</span></div><div class="starget" id="sw11-dian2"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw11-dian2')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw11-dian2')">Худам нависам</button></div>
        <div class="sstatus" id="sw11-dian2-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('wu3_noon','午')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">午</div><div class="py">wǔ <span class="transcript">[ву]</span></div><div class="tj">муддати аз соати 11 то 1-и рӯз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dian4_lightning','电')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">电</div><div class="py">diàn <span class="transcript">[диен]</span></div><div class="tj">маънои аслӣ — барқи тез дар осмон ҳангоми борон; ҳам падидаи физикӣ, ҳам манбаи энергия</div></div>
    </div>

    <div class="section-lbl">7. Радикалҳо: 阝 ва 亻</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">阝</div><div class="py">радикали заминшакл</div><div class="tj">одатан бо шакли замин, мавқеъ алоқаманд: 院 (yuàn — ҳавлӣ), 阳 (yáng — офтоб)</div></div>
      <div class="wordcard"><div class="hz">亻</div><div class="py">радикали одам</div><div class="tj">одатан бо одам алоқаманд: 你 (nǐ — ту), 他 (tā — ӯ)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 11 (10 савол)</div>
      <div class="qcard"><div class="q">1. Соати 2:00 бо кадом ибора ифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">二点</label>
        <label><input type="radio" name="q1" value="right">两点</label>
        <label><input type="radio" name="q1" value="wrong">俩点</label>
      </div></div>
      <div class="qcard"><div class="q">2. 现在十点十分 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q2" value="right">Ҳозир соати 10:10 аст</label>
        <label><input type="radio" name="q2" value="wrong">Ҳозир соати 10:00 аст</label>
        <label><input type="radio" name="q2" value="wrong">10 дақиқа монд</label>
      </div></div>
      <div class="qcard"><div class="q">3. Дар ҷумлаи хитоӣ калимаи вақт дар кадом ҷой меояд?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Танҳо дар охири ҷумла</label>
        <label><input type="radio" name="q3" value="right">Одатан баъд аз мубтадо, гоҳо пеш аз он</label>
        <label><input type="radio" name="q3" value="wrong">Танҳо пеш аз феъл</label>
      </div></div>
      <div class="qcard"><div class="q">4. 前 дар "星期五前" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Баъд аз рӯзи ҷумъа</label>
        <label><input type="radio" name="q4" value="right">Пеш аз рӯзи ҷумъа</label>
        <label><input type="radio" name="q4" value="wrong">Дар рӯзи ҷумъа</label>
      </div></div>
      <div class="qcard"><div class="q">5. 我们什么时候去看电影？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Мо кай хона мебароем?</label>
        <label><input type="radio" name="q5" value="right">Мо кай ба тамошои филм меравем?</label>
        <label><input type="radio" name="q5" value="wrong">Филм кай сар мешавад?</label>
      </div></div>
      <div class="qcard"><div class="q">6. 住三天 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Се рӯз пеш омад</label>
        <label><input type="radio" name="q6" value="right">Се рӯз мемонад</label>
        <label><input type="radio" name="q6" value="wrong">Се рӯз кор кард</label>
      </div></div>
      <div class="qcard"><div class="q">7. 东西 бо оҳанги хомӯш (dōngxi) чӣ маъно дорад?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Самти шарқу ғарб</label>
        <label><input type="radio" name="q7" value="right">Чиз, ашё</label>
        <label><input type="radio" name="q7" value="wrong">Хона</label>
      </div></div>
      <div class="qcard"><div class="q">8. 电 маънои аслиаш чӣ буд?</div><div class="opts">
        <label><input type="radio" name="q8" value="wrong">Об</label>
        <label><input type="radio" name="q8" value="right">Барқи тез дар осмон ҳангоми борон</label>
        <label><input type="radio" name="q8" value="wrong">Оташ</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 阝 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Одам</label>
        <label><input type="radio" name="q9" value="right">Шакли замин, мавқеъ</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. 中午 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Бегоҳирӯзӣ</label>
        <label><input type="radio" name="q10" value="right">Нисфирӯзӣ</label>
        <label><input type="radio" name="q10" value="wrong">Пагоҳирӯзӣ</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson12(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">12</div>
      <div class="titles">
        <div class="zh">明天天气怎么样</div>
        <div class="py">Míngtiān tiānqì zěnmeyàng</div>
        <div class="en">Пагоҳ ҳаво чӣ хел мешавад</div>
      </div>
    </div>

    <div class="section-lbl">1. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('tianqi4','天气')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">天气</div><div class="py">tiānqì<span class="transcript"> [тиенци]</span></div><div class="tj">ҳаво (обу ҳаво)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zenmeyang3','怎么样')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">怎么样</div><div class="py">zěnmeyàng<span class="transcript"> [цзэньмэян]</span></div><div class="tj">чӣ хел, чӣ гуна (ҳолат/вазъро мепурсад)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('tai4','太')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">太</div><div class="py">tài<span class="transcript"> [тхай]</span></div><div class="tj">хеле, аз ҳад зиёд; 太……了 — "хеле..." </div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('re4','热')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">热</div><div class="py">rè<span class="transcript"> [жэ]</span></div><div class="tj">гарм</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('leng3','冷')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">冷</div><div class="py">lěng<span class="transcript"> [лэн]</span></div><div class="tj">хунук, сард</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiayu','下雨')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">下雨</div><div class="py">xià yǔ<span class="transcript"> [ся юй]</span></div><div class="tj">борон боридан (下 — фуромадан, 雨 — борон)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiaojie3','小姐')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">小姐</div><div class="py">xiǎojiě<span class="transcript"> [сяоцзие]</span></div><div class="tj">хонум, духтар (муроҷиат)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('lai2','来')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">来</div><div class="py">lái<span class="transcript"> [лай]</span></div><div class="tj">омадан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shenti3','身体')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">身体</div><div class="py">shēntǐ<span class="transcript"> [шэньтхи]</span></div><div class="tj">бадан, саломатӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ai4','爱')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">爱</div><div class="py">ài<span class="transcript"> [ай]</span></div><div class="tj">дӯст доштан, дил бастан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xie1','些')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">些</div><div class="py">xiē<span class="transcript"> [сие]</span></div><div class="tj">калимаи ченаки миқдори номуайян — каме, чанде</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shuiguo3','水果')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">水果</div><div class="py">shuǐguǒ<span class="transcript"> [шуйгуо]</span></div><div class="tj">мева</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shui3','水')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">水</div><div class="py">shuǐ<span class="transcript"> [шуй]</span></div><div class="tj">об</div></div>
    </div>

    <div class="section-lbl">2. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Ҷонишини саволии <ruby>怎么样<rt>zěnmeyàng</rt></ruby></div>
      <div class="gbody">怎么样 барои пурсидани ҳолат ё вазъи чизе истифода мешавад — "чӣ хел аст?".</div>
      <div class="gex"><span class="tag">намуна</span>你的汉语<ruby>怎么样<rt>zěnmeyàng</rt></ruby>？ — Забони хитоии шумо чӣ хел аст?</div>
      <div class="gex"><span class="tag">намуна</span>明天天气<ruby>怎么样<rt>zěnmeyàng</rt></ruby>？ — Пагоҳ ҳаво чӣ хел мешавад?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ҷумлаи бо ибораи мубтадо-хабар ҳамчун хабар</div>
      <div class="gbody">Дар хитоӣ ҷумлае ҳаст, ки хабараш худаш ибораи мубтадо-хабар аст: Мубтадои умумии ҷумла + (мубтадои хурд + хабари хурд).</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>身体<rt>shēntǐ</rt></ruby>不太好。 — Ман (бадани ман) чандон хуб не.</div>
      <div class="gex"><span class="tag">намуна</span>明天<ruby>天气<rt>tiānqì</rt></ruby>很好。 — Пагоҳ (ҳаво) хеле хуб мешавад.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Зарфи <ruby>太<rt>tài</rt></ruby></div>
      <div class="gbody">太 дараҷаи баландро ифода мекунад. Дар ҷумлаи тасдиқӣ бо 太 одатан 了 дар охир меояд; дар ҷумлаи инкорӣ 了 истифода намешавад.</div>
      <div class="gex"><span class="tag">намуна</span><ruby>太<rt>tài</rt></ruby>热了。 — Хеле гарм аст.</div>
      <div class="gex"><span class="tag">намуна</span>我身体不<ruby>太<rt>tài</rt></ruby>好。 — Ҳолати ман чандон хуб не. (бидуни 了)</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Феъли модалии <ruby>会<rt>huì</rt></ruby> (2)</div>
      <div class="gbody">会 дар ин ҷумла имконияти рӯй додани вазъи зикршударо ифода мекунад — "мумкин аст, эҳтимол дорад".</div>
      <div class="gex"><span class="tag">намуна</span>今天<ruby>会<rt>huì</rt></ruby>下雨吗？今天不<ruby>会<rt>huì</rt></ruby>下雨。 — Имрӯз борон меборад? Имрӯз намеборад.</div>
      <div class="gex"><span class="tag">намуна</span>明天她<ruby>会<rt>huì</rt></ruby>来吗？她<ruby>会<rt>huì</rt></ruby>来。 — Пагоҳ ӯ меояд? Ӯ меояд.</div>
    </div>

    <div class="section-lbl">3. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">昨天北京的天气怎么样？</span><span class="py">Zuótiān Běijīng de tiānqì zěnmeyàng?</span><span class="transcript">[Цзотиен Бэйцзин дэ тиенци цзэньмэян?]</span><span class="tj">— Дирӯз ҳавои Пекин чӣ хел буд?</span><button class="playbtn inline" onclick="playAudio('l12_q1','昨天北京的天气怎么样')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">太热了。</span><span class="py">Tài rè le.</span><span class="transcript">[Тхай жэ лэ.]</span><span class="tj">— Хеле гарм буд.</span><button class="playbtn inline" onclick="playAudio('l12_a1','太热了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">明天呢？明天天气怎么样？</span><span class="py">Míngtiān ne? Míngtiān tiānqì zěnmeyàng?</span><span class="transcript">[Минтиен нэ? Минтиен тиенци цзэньмэян?]</span><span class="tj">— Пас пагоҳ чӣ? Пагоҳ ҳаво чӣ хел мешавад?</span><button class="playbtn inline" onclick="playAudio('l12_q1b','明天呢明天天气怎么样')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">明天天气很好，不冷不热。</span><span class="py">Míngtiān tiānqì hěn hǎo, bù lěng bú rè.</span><span class="transcript">[Минтиен тиенци хэнь хао, бу лэн бу жэ.]</span><span class="tj">— Пагоҳ ҳаво хеле хуб мешавад, на хунук на гарм.</span><button class="playbtn inline" onclick="playAudio('l12_a1b','明天天气很好不冷不热')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">今天会下雨吗？</span><span class="py">Jīntiān huì xià yǔ ma?</span><span class="transcript">[Цзинтиен хуй ся юй ма?]</span><span class="tj">— Имрӯз борон меборад?</span><button class="playbtn inline" onclick="playAudio('l12_q2','今天会下雨吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">今天不会下雨。</span><span class="py">Jīntiān bú huì xià yǔ.</span><span class="transcript">[Цзинтиен бу хуй ся юй.]</span><span class="tj">— Имрӯз намеборад.</span><button class="playbtn inline" onclick="playAudio('l12_a2','今天不会下雨')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">王小姐今天会来吗？</span><span class="py">Wáng xiǎojiě jīntiān huì lái ma?</span><span class="transcript">[Ван сяоцзие цзинтиен хуй лай ма?]</span><span class="tj">— Хонум Ван имрӯз меояд?</span><button class="playbtn inline" onclick="playAudio('l12_q2b','王小姐今天会来吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">不会来，天气太冷了。</span><span class="py">Bú huì lái, tiānqì tài lěng le.</span><span class="transcript">[Бу хуй лай, тиенци тхай лэн лэ.]</span><span class="tj">— Намеояд, ҳаво хеле хунук аст.</span><button class="playbtn inline" onclick="playAudio('l12_a2b','不会来天气太冷了')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你身体怎么样？</span><span class="py">Nǐ shēntǐ zěnmeyàng?</span><span class="transcript">[Ни шэньтхи цзэньмэян?]</span><span class="tj">— Ҳолати шумо чӣ хел аст?</span><button class="playbtn inline" onclick="playAudio('l12_q3','你身体怎么样')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我身体不太好。天气太热了，不爱吃饭。</span><span class="py">Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.</span><span class="transcript">[Во шэньтхи бу тхай хао. Тиенци тхай жэ лэ, бу ай чхи фань.]</span><span class="tj">— Ҳолати ман чандон хуб не. Ҳаво хеле гарм аст, иштиҳо надорам.</span><button class="playbtn inline" onclick="playAudio('l12_a3','我身体不太好天气太热了不爱吃饭')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你多吃些水果，多喝水。</span><span class="py">Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.</span><span class="transcript">[Ни дуо чхи сие шуйгуо, дуо хэ шуй.]</span><span class="tj">— Шумо бештар мева хӯред, бештар об нӯшед.</span><button class="playbtn inline" onclick="playAudio('l12_q3b','你多吃些水果多喝水')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">谢谢你，医生。</span><span class="py">Xièxie nǐ, yīshēng.</span><span class="transcript">[Сиесие ни, ишэн.]</span><span class="tj">— Ташаккур, духтур.</span><button class="playbtn inline" onclick="playAudio('l12_a3b','谢谢你医生')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">4. Пиньини дарс — оҳангсозии калимаҳои сеҳиҷоӣ (1): аз оҳанги 1 сар мешаванд</div>
    <div class="section-sub">Ҳиҷои якум бо оҳанги 1 (баланд-ҳамвор), ду ҳиҷои дигар оҳанги гуногун гирифта метавонанд. Мисол: 星期一(1+1+1), 冰激凌(1+1+2), 星期五(1+1+3), 星期六(1+1+4).</div>
    <div class="drillgrid">
      <div class="drillcard">xīngqī yī<span class="transcript"><br>[синци и]</span><br><button class="playbtn" onclick="playAudio('l12_drill_xingqiyi','星期一')">&#128266;</button></div>
      <div class="drillcard">xīngqī wǔ<span class="transcript"><br>[синци ву]</span><br><button class="playbtn" onclick="playAudio('l12_drill_xingqiwu','星期五')">&#128266;</button></div>
      <div class="drillcard">xīngqī liù<span class="transcript"><br>[синци лиу]</span><br><button class="playbtn" onclick="playAudio('l12_drill_xingqiliu','星期六')">&#128266;</button></div>
      <div class="drillcard">chī píngguǒ<span class="transcript"><br>[чхи пхинго]</span><br><button class="playbtn" onclick="playAudio('l12_drill_chipingguo','吃苹果')">&#128266;</button></div>
      <div class="drillcard">Jiānádà<span class="transcript"><br>[Цзянада]</span><br><button class="playbtn" onclick="playAudio('l12_drill_jianada','加拿大')">&#128266;</button></div>
      <div class="drillcard">chī mǐfàn<span class="transcript"><br>[чхи мифань]</span><br><button class="playbtn" onclick="playAudio('l12_drill_chimifan','吃米饭')">&#128266;</button></div>
      <div class="drillcard">jīqìrén<span class="transcript"><br>[цзицирэнь]</span><br><button class="playbtn" onclick="playAudio('l12_drill_jiqiren','机器人')">&#128266;</button></div>
      <div class="drillcard">hāmiguā<span class="transcript"><br>[хамигуа]</span><br><button class="playbtn" onclick="playAudio('l12_drill_hamigua','哈密瓜')">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 12. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid12">
      <div class="strokecard"><div class="shz">天</div><div class="spy">tiān <span class="transcript">[тиен]</span></div><div class="starget" id="sw12-tian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-tian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-tian')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-tian-status"></div></div>
      <div class="strokecard"><div class="shz">气</div><div class="spy">qì <span class="transcript">[ци]</span></div><div class="starget" id="sw12-qi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-qi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-qi')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-qi-status"></div></div>
      <div class="strokecard"><div class="shz">雨</div><div class="spy">yǔ <span class="transcript">[юй]</span></div><div class="starget" id="sw12-yu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-yu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-yu')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-yu-status"></div></div>
      <div class="strokecard"><div class="shz">热</div><div class="spy">rè <span class="transcript">[жэ]</span></div><div class="starget" id="sw12-re"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-re')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-re')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-re-status"></div></div>
      <div class="strokecard"><div class="shz">冷</div><div class="spy">lěng <span class="transcript">[лэн]</span></div><div class="starget" id="sw12-leng"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-leng')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-leng')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-leng-status"></div></div>
      <div class="strokecard"><div class="shz">来</div><div class="spy">lái <span class="transcript">[лай]</span></div><div class="starget" id="sw12-lai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-lai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-lai')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-lai-status"></div></div>
      <div class="strokecard"><div class="shz">爱</div><div class="spy">ài <span class="transcript">[ай]</span></div><div class="starget" id="sw12-ai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-ai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-ai')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-ai-status"></div></div>
      <div class="strokecard"><div class="shz">水</div><div class="spy">shuǐ <span class="transcript">[шуй]</span></div><div class="starget" id="sw12-shui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw12-shui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw12-shui')">Худам нависам</button></div>
        <div class="sstatus" id="sw12-shui-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_tian','天')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">天</div><div class="py">tiān <span class="transcript">[тиен]</span></div><div class="tj">маънои аслӣ "тахти сар"; баъдтар маънои "осмон" гирифт, муқобили 地 (замин)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_qi','气')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">气</div><div class="py">qì <span class="transcript">[ци]</span></div><div class="tj">шаклаш ба 三 монанд аст; маънояш газест бе шаклу ҳаҷми муайян, ки озодона паҳн мешавад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_yu','雨')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">雨</div><div class="py">yǔ <span class="transcript">[юй]</span></div><div class="tj">шаклаш ба қатраҳои аз осмон фуромада монанд аст — ҳодисаи табиии "борон"</div></div>
    </div>

    <div class="section-lbl">7. Радикалҳо: 女 ва 饣</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">女</div><div class="py">радикали занона</div><div class="tj">одатан бо зан алоқаманд: 姐 (jiě — хоҳари калон), 妈 (mā — модар)</div></div>
      <div class="wordcard"><div class="hz">饣</div><div class="py">радикали хӯрок</div><div class="tj">одатан бо хӯрок алоқаманд: 饭 (fàn — хӯрок), 饮 (yǐn — нӯшидан)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 12 (10 савол)</div>
      <div class="qcard"><div class="q">1. 天气怎么样？ маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Имрӯз чанд шанбе аст?</label>
        <label><input type="radio" name="q1" value="right">Ҳаво чӣ хел аст?</label>
        <label><input type="radio" name="q1" value="wrong">Соат чанд аст?</label>
      </div></div>
      <div class="qcard"><div class="q">2. 太热了 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Каме гарм аст</label>
        <label><input type="radio" name="q2" value="right">Хеле гарм аст</label>
        <label><input type="radio" name="q2" value="wrong">Гарм нест</label>
      </div></div>
      <div class="qcard"><div class="q">3. Дар ҷумлаи инкории бо 太, оё 了 истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Ҳа, ҳамеша</label>
        <label><input type="radio" name="q3" value="right">Не, дар ҷумлаи инкорӣ 了 намеояд</label>
        <label><input type="radio" name="q3" value="wrong">Фарқ надорад</label>
      </div></div>
      <div class="qcard"><div class="q">4. 会 дар "今天会下雨吗？" кадом маъноро дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Тавонистан (қобилият)</label>
        <label><input type="radio" name="q4" value="right">Имконият/эҳтимоли рӯй додан</label>
        <label><input type="radio" name="q4" value="wrong">Хостан</label>
      </div></div>
      <div class="qcard"><div class="q">5. 水果 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Об</label>
        <label><input type="radio" name="q5" value="right">Мева</label>
        <label><input type="radio" name="q5" value="wrong">Чой</label>
      </div></div>
      <div class="qcard"><div class="q">6. 小姐 кадом маъноро дорад?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Муаллим</label>
        <label><input type="radio" name="q6" value="right">Хонум, духтар (муроҷиат)</label>
        <label><input type="radio" name="q6" value="wrong">Духтур</label>
      </div></div>
      <div class="qcard"><div class="q">7. Дар "我身体不太好", кадом қисм хабари ҷумлаи хурд (ибораи мубтадо-хабар) аст?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">我</label>
        <label><input type="radio" name="q7" value="wrong">身体</label>
        <label><input type="radio" name="q7" value="right">不太好</label>
      </div></div>
      <div class="qcard"><div class="q">8. Дар оҳангсозии сеҳиҷоӣ 1+1+1, ҳар се ҳиҷо кадом оҳангро доранд?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Ҳар се бо оҳанги 1 (баланд-ҳамвор)</label>
        <label><input type="radio" name="q8" value="wrong">Ҳар се бо оҳанги 3</label>
        <label><input type="radio" name="q8" value="wrong">Омехта</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 饣 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Зан</label>
        <label><input type="radio" name="q9" value="right">Хӯрок</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. "你多吃些水果，多喝水" маслиҳати кӣ аст ва ба кӣ дода мешавад?</div><div class="opts">
        <label><input type="radio" name="q10" value="right">Духтур ба бемор медиҳад</label>
        <label><input type="radio" name="q10" value="wrong">Бемор ба духтур медиҳад</label>
        <label><input type="radio" name="q10" value="wrong">Модар ба фарзанд медиҳад</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson13(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">13</div>
      <div class="titles">
        <div class="zh">他在学做中国菜呢</div>
        <div class="py">Tā zài xué zuò Zhōngguó cài ne</div>
        <div class="en">Ӯ таоми хитоиро омӯхта истодааст</div>
      </div>
    </div>

    <div class="section-lbl">1. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('wei4','喂')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">喂</div><div class="py">wèi<span class="transcript"> [вэй]</span></div><div class="tj">алло (ҳангоми занг задан/ҷавоб додан ба телефон)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ye3','也')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">也</div><div class="py">yě<span class="transcript"> [е]</span></div><div class="tj">низ, ҳам</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xuexi2','学习(学)')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">学习(学)</div><div class="py">xuéxí (xué)<span class="transcript"> [сюеси]</span></div><div class="tj">омӯхтан, хондан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shangwu3','上午')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">上午</div><div class="py">shàngwǔ<span class="transcript"> [шанву]</span></div><div class="tj">пеш аз пешин, пагоҳирӯзӣ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('shuijiao','睡觉')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">睡觉</div><div class="py">shuì jiào<span class="transcript"> [шуй цзяо]</span></div><div class="tj">хоб рафтан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dianshi4','电视')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">电视</div><div class="py">diànshì<span class="transcript"> [диенши]</span></div><div class="tj">телевизор</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xihuan3','喜欢')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">喜欢</div><div class="py">xǐhuan<span class="transcript"> [сихуан]</span></div><div class="tj">дӯст доштан, маъқул будан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('gei3','给')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">给</div><div class="py">gěi<span class="transcript"> [гэй]</span></div><div class="tj">ба (пешоянд)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dadianhua','打电话')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">打电话</div><div class="py">dǎ diànhuà<span class="transcript"> [да диенхуа]</span></div><div class="tj">занг задан, телефон кардан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ba0','吧')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">吧</div><div class="py">ba<span class="transcript"> [ба]</span></div><div class="tj">зарраи модалӣ — пешниҳод, хоҳиш ё амри мулоим</div></div>
    </div>
    <div class="note"><b>Номи хос:</b> 大卫 (Dàwèi) — Довуд (Дэвид), номи шахс дар дарс.</div>

    <div class="section-lbl">2. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Нидои <ruby>喂<rt>wèi</rt></ruby></div>
      <div class="gbody">喂 ҳамчун нидо дар аввали сӯҳбати телефонӣ — ҳангоми занг задан ё ҷавоб додан ба телефон истифода мешавад.</div>
      <div class="gex"><span class="tag">намуна</span><ruby>喂<rt>wèi</rt></ruby>，李老师在家吗？ — Алло, муаллим Ли хонааст?</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Сохти «在……呢» — амали дар ҷараён</div>
      <div class="gbody">Барои нишон додани амале, ки ҳоло рӯй медиҳад, пеш аз феъл 在 илова карда мешавад ва/ё дар охири ҷумла 呢 меояд. Шакли инкорӣ: 没(在) + феъл/ибора — бе 呢 дар охир.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + 在 + феъл (+呢)</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>在<rt>zài</rt></ruby>睡觉<ruby>呢<rt>ne</rt></ruby>。 — Ман хоб рафта истодаам.</div>
      <div class="gex"><span class="tag">намуна</span>小王<ruby>在<rt>zài</rt></ruby>学习汉语。 — Хиёу Ван забони хитоӣ омӯхта истодааст.</div>
      <div class="gex"><span class="tag">намуна</span>他<ruby>没<rt>méi</rt></ruby>(在)看书。 — Ӯ китоб намехонад (ҳоло).</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Хониши рақами телефон</div>
      <div class="gbody">Рақами телефон ба таври оддии рақамҳо хонда намешавад — ҳар рақам алоҳида хонда мешавад. Рақами "1" дар рақами телефон на yī, балки <b>yāo</b> хонда мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>82304156 → 八二三零四<ruby>幺<rt>yāo</rt></ruby>五六 (bā èr sān líng sì yāo wǔ liù)</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Зарраи модалии <ruby>吧<rt>ba</rt></ruby></div>
      <div class="gbody">吧 дар охири ҷумлаи амрӣ омада, оҳанги амрро мулоим мекунад — пешниҳод ё маслиҳат медиҳад.</div>
      <div class="gex"><span class="tag">намуна</span>请坐<ruby>吧<rt>ba</rt></ruby>。 — Марҳамат, шинед (бо мулоимӣ).</div>
      <div class="gex"><span class="tag">намуна</span>她在工作呢，你下午打<ruby>吧<rt>ba</rt></ruby>。 — Ӯ кор карда истодааст, шумо баъд аз пешин занг занед.</div>
    </div>

    <div class="section-lbl">3. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">喂，你在做什么呢？</span><span class="py">Wèi, nǐ zài zuò shénme ne?</span><span class="transcript">[Вэй, ни цзай цзуо шэньмэ нэ?]</span><span class="tj">— Алло, шумо чӣ кор карда истодаед?</span><button class="playbtn inline" onclick="playAudio('l13_q1','喂你在做什么呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我在看书呢。</span><span class="py">Wǒ zài kàn shū ne.</span><span class="transcript">[Во цзай кхань шу нэ.]</span><span class="tj">— Ман китоб хонда истодаам.</span><button class="playbtn inline" onclick="playAudio('l13_a1','我在看书呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">大卫也在看书吗？</span><span class="py">Dàwèi yě zài kàn shū ma?</span><span class="transcript">[Давэй е цзай кхань шу ма?]</span><span class="tj">— Довуд низ китоб мехонад?</span><button class="playbtn inline" onclick="playAudio('l13_q1b','大卫也在看书吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">他没看书，他在学做中国菜呢。</span><span class="py">Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.</span><span class="transcript">[Тха мэй кхань шу, тха цзай сюе цзуо Чжунгуо цхай нэ.]</span><span class="tj">— Ӯ китоб намехонад, ӯ таоми хитоиро омӯхта истодааст.</span><button class="playbtn inline" onclick="playAudio('l13_a1b','他没看书他在学做中国菜呢')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">昨天上午你在做什么呢？</span><span class="py">Zuótiān shàngwǔ nǐ zài zuò shénme ne?</span><span class="transcript">[Цзотиен шанву ни цзай цзуо шэньмэ нэ?]</span><span class="tj">— Дирӯз пеш аз пешин шумо чӣ кор карда будед?</span><button class="playbtn inline" onclick="playAudio('l13_q2','昨天上午你在做什么呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我在睡觉呢。你呢？</span><span class="py">Wǒ zài shuì jiào ne. Nǐ ne?</span><span class="transcript">[Во цзай шуй цзяо нэ. Ни нэ?]</span><span class="tj">— Ман хоб рафта будам. Шумо чӣ?</span><button class="playbtn inline" onclick="playAudio('l13_a2','我在睡觉呢你呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">我在家看电视呢。你喜欢看电视吗？</span><span class="py">Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?</span><span class="transcript">[Во цзай цзя кхань диенши нэ. Ни сихуан кхань диенши ма?]</span><span class="tj">— Ман хона телевизор тамошо мекардам. Шумо телевизор дидан дӯст медоред?</span><button class="playbtn inline" onclick="playAudio('l13_q2b','我在家看电视呢你喜欢看电视吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我不喜欢看电视，我喜欢看电影。</span><span class="py">Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.</span><span class="transcript">[Во бу сихуан кхань диенши, во сихуан кхань диенин.]</span><span class="tj">— Ман телевизор дидан дӯст надорам, ман филм дидан дӯст медорам.</span><button class="playbtn inline" onclick="playAudio('l13_a2b','我不喜欢看电视我喜欢看电影')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">82304155，这是李老师的电话吗？</span><span class="py">Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?</span><span class="transcript">[Ба эр сань лин сы яо ву ву, чжэ ши Ли лаоши дэ диенхуа ма?]</span><span class="tj">— 82304155, ин рақами телефони муаллим Ли аст?</span><button class="playbtn inline" onclick="playAudio('l13_q3','这是李老师的电话吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">不是。她的电话是82304156。</span><span class="py">Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.</span><span class="transcript">[Бу ши. Тха дэ диенхуа ши ба эр сань лин сы яо ву лиу.]</span><span class="tj">— Не. Рақами телефони ӯ 82304156 аст.</span><button class="playbtn inline" onclick="playAudio('l13_a3','不是她的电话是82304156')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">好，我现在给她打电话。</span><span class="py">Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.</span><span class="transcript">[Хао, во сяньцзай гэй тха да диенхуа.]</span><span class="tj">— Хуб, ман ҳозир ба ӯ занг мезанам.</span><button class="playbtn inline" onclick="playAudio('l13_q3b','我现在给她打电话')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">她在工作呢，你下午打吧。</span><span class="py">Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.</span><span class="transcript">[Тха цзай гунцзуо нэ, ни сяуу да ба.]</span><span class="tj">— Ӯ кор карда истодааст, шумо баъд аз пешин занг занед.</span><button class="playbtn inline" onclick="playAudio('l13_a3b','她在工作呢你下午打吧')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">4. Пиньини дарс — оҳангсозии калимаҳои сеҳиҷоӣ (2): аз оҳанги 2 сар мешаванд</div>
    <div class="drillgrid">
      <div class="drillcard">yánjiūshēng<span class="transcript"><br>[янцзюшэн]</span><br><button class="playbtn" onclick="playAudio('l13_drill_yanjiusheng','研究生')">&#128266;</button></div>
      <div class="drillcard">túshūguǎn<span class="transcript"><br>[тхушугуан]</span><br><button class="playbtn" onclick="playAudio('l13_drill_tushuguan','图书馆')">&#128266;</button></div>
      <div class="drillcard">Hánguó rén<span class="transcript"><br>[Хангуо жэнь]</span><br><button class="playbtn" onclick="playAudio('l13_drill_hanguoren','韩国人')">&#128266;</button></div>
      <div class="drillcard">rénmínbì<span class="transcript"><br>[жэньминьби]</span><br><button class="playbtn" onclick="playAudio('l13_drill_renminbi','人民币')">&#128266;</button></div>
      <div class="drillcard">yóuyǒngchí<span class="transcript"><br>[ёуёнчхи]</span><br><button class="playbtn" onclick="playAudio('l13_drill_youyongchi','游泳池')">&#128266;</button></div>
      <div class="drillcard">niúzǎikù<span class="transcript"><br>[ниуцзайкху]</span><br><button class="playbtn" onclick="playAudio('l13_drill_niuzaiku','牛仔裤')">&#128266;</button></div>
      <div class="drillcard">fúwùyuán<span class="transcript"><br>[фуувуюень]</span><br><button class="playbtn" onclick="playAudio('l13_drill_fuwuyuan','服务员')">&#128266;</button></div>
      <div class="drillcard">bówùguǎn<span class="transcript"><br>[боувугуан]</span><br><button class="playbtn" onclick="playAudio('l13_drill_bowuguan','博物馆')">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 13. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid13">
      <div class="strokecard"><div class="shz">喂</div><div class="spy">wèi <span class="transcript">[вэй]</span></div><div class="starget" id="sw13-wei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-wei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-wei')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-wei-status"></div></div>
      <div class="strokecard"><div class="shz">学</div><div class="spy">xué <span class="transcript">[сюе]</span></div><div class="starget" id="sw13-xue"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-xue')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-xue')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-xue-status"></div></div>
      <div class="strokecard"><div class="shz">上</div><div class="spy">shàng <span class="transcript">[шан]</span></div><div class="starget" id="sw13-shang"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-shang')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-shang')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-shang-status"></div></div>
      <div class="strokecard"><div class="shz">睡</div><div class="spy">shuì <span class="transcript">[шуй]</span></div><div class="starget" id="sw13-shui2"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-shui2')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-shui2')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-shui2-status"></div></div>
      <div class="strokecard"><div class="shz">视</div><div class="spy">shì <span class="transcript">[ши]</span></div><div class="starget" id="sw13-shi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-shi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-shi')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-shi-status"></div></div>
      <div class="strokecard"><div class="shz">欢</div><div class="spy">huān <span class="transcript">[хуан]</span></div><div class="starget" id="sw13-huan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-huan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-huan')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-huan-status"></div></div>
      <div class="strokecard"><div class="shz">给</div><div class="spy">gěi <span class="transcript">[гэй]</span></div><div class="starget" id="sw13-gei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-gei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-gei')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-gei-status"></div></div>
      <div class="strokecard"><div class="shz">吧</div><div class="spy">ba <span class="transcript">[ба]</span></div><div class="starget" id="sw13-ba"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw13-ba')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw13-ba')">Худам нависам</button></div>
        <div class="sstatus" id="sw13-ba-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_ri','日')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">日</div><div class="py">rì <span class="transcript">[жи]</span></div><div class="tj">тасвири офтоб — маънои аслӣ "офтоб", инчунин "рӯз"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_mu','目')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">目</div><div class="py">mù <span class="transcript">[му]</span></div><div class="tj">тасвири чашм — маънои аслӣ "чашм"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_xi2','习')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">习</div><div class="py">xí <span class="transcript">[си]</span></div><div class="tj">маънои аслӣ такрор кардан баъд аз омӯхтан то расидан ба маҳорат; ҳоло тақрибан ҳамон маънои 学-ро дорад</div></div>
    </div>

    <div class="section-lbl">7. Радикалҳо: 日 ва 目</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">日</div><div class="py">радикали офтоб/рӯз</div><div class="tj">одатан бо вақт алоқаманд: 明 (míng — оянда), 时 (shí — вақт)</div></div>
      <div class="wordcard"><div class="hz">目</div><div class="py">радикали чашм</div><div class="tj">одатан бо чашм алоқаманд: 眼 (yǎn — чашм), 睡 (shuì — хоб рафтан)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 13 (10 савол)</div>
      <div class="qcard"><div class="q">1. 喂 кай истифода мешавад?</div><div class="opts">
        <label><input type="radio" name="q1" value="right">Ҳангоми занг задан ё ҷавоб додан ба телефон</label>
        <label><input type="radio" name="q1" value="wrong">Ҳангоми хайрухуш</label>
        <label><input type="radio" name="q1" value="wrong">Ҳангоми пурсидани нарх</label>
      </div></div>
      <div class="qcard"><div class="q">2. 我在看书呢 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Ман китоб хондам</label>
        <label><input type="radio" name="q2" value="right">Ман китоб хонда истодаам</label>
        <label><input type="radio" name="q2" value="wrong">Ман китоб намехонам</label>
      </div></div>
      <div class="qcard"><div class="q">3. Шакли инкории амали дар ҷараён кадом аст?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">不在 + феъл + 呢</label>
        <label><input type="radio" name="q3" value="right">没(在) + феъл (бе 呢)</label>
        <label><input type="radio" name="q3" value="wrong">没有 + феъл + 呢</label>
      </div></div>
      <div class="qcard"><div class="q">4. Рақами "1" дар рақами телефон чӣ хел хонда мешавад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">yī</label>
        <label><input type="radio" name="q4" value="right">yāo</label>
        <label><input type="radio" name="q4" value="wrong">yí</label>
      </div></div>
      <div class="qcard"><div class="q">5. 吧 дар охири ҷумлаи амрӣ чӣ вазифа дорад?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Аломати саволӣ месозад</label>
        <label><input type="radio" name="q5" value="right">Оҳанги амрро мулоим мекунад</label>
        <label><input type="radio" name="q5" value="wrong">Замони ояндаро нишон медиҳад</label>
      </div></div>
      <div class="qcard"><div class="q">6. 喜欢 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Нафрат доштан</label>
        <label><input type="radio" name="q6" value="right">Дӯст доштан, маъқул будан</label>
        <label><input type="radio" name="q6" value="wrong">Донистан</label>
      </div></div>
      <div class="qcard"><div class="q">7. 也 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="right">Низ, ҳам</label>
        <label><input type="radio" name="q7" value="wrong">Аммо</label>
        <label><input type="radio" name="q7" value="wrong">Зеро</label>
      </div></div>
      <div class="qcard"><div class="q">8. Дар оҳангсозии сеҳиҷоии 2+1+1, ҳиҷои якум кадом оҳангро дорад?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Оҳанги 2 (баландшаванда)</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги 4</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги хомӯш</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 目 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Вақт</label>
        <label><input type="radio" name="q9" value="right">Чашм</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. 82304156 чӣ хел хонда мешавад?</div><div class="opts">
        <label><input type="radio" name="q10" value="right">八二三零四幺五六 (bā èr sān líng sì yāo wǔ liù)</label>
        <label><input type="radio" name="q10" value="wrong">八十二萬三千四百一十五 (тарзи оддии рақам)</label>
        <label><input type="radio" name="q10" value="wrong">Ҳашт-миллион...</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson14(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">14</div>
      <div class="titles">
        <div class="zh">她买了不少衣服</div>
        <div class="py">Tā mǎile bùshǎo yīfu</div>
        <div class="en">Ӯ либоси зиёде харидааст</div>
      </div>
    </div>

    <div class="section-lbl">1. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dongxi3','东西')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">东西</div><div class="py">dōngxi<span class="transcript"> [дунси]</span></div><div class="tj">чиз, ашё</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yidianr','一点儿')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一点儿</div><div class="py">yìdiǎnr<span class="transcript"> [идианр]</span></div><div class="tj">каме, андаке</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('pingguo2','苹果')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">苹果</div><div class="py">píngguǒ<span class="transcript"> [пхингуо]</span></div><div class="tj">себ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kanjian4','看见')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">看见</div><div class="py">kànjiàn<span class="transcript"> [кханьцзиен]</span></div><div class="tj">дидан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('xiansheng1','先生')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">先生</div><div class="py">xiānsheng<span class="transcript"> [сяньшэн]</span></div><div class="tj">ҷаноб, оғо</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('kai1','开')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">开</div><div class="py">kāi<span class="transcript"> [кхай]</span></div><div class="tj">ронда бурдан (мошин)</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('che1','车')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">车</div><div class="py">chē<span class="transcript"> [чхэ]</span></div><div class="tj">мошин, воситаи нақлиёт</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('huilai2','回来')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">回来</div><div class="py">huílai<span class="transcript"> [хуйлай]</span></div><div class="tj">баргаштан, бозгаштан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('fenzhong1','分钟')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">分钟</div><div class="py">fēnzhōng<span class="transcript"> [фэньчжун]</span></div><div class="tj">дақиқа</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('hou4','后')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">后</div><div class="py">hòu<span class="transcript"> [хоу]</span></div><div class="tj">баъд, пас аз</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yifu1','衣服')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">衣服</div><div class="py">yīfu<span class="transcript"> [ифу]</span></div><div class="tj">либос</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('piaoliang4','漂亮')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">漂亮</div><div class="py">piàoliang<span class="transcript"> [пяолян]</span></div><div class="tj">зебо, хушрӯй</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('a0','啊')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">啊</div><div class="py">a<span class="transcript"> [а]</span></div><div class="tj">зарраи модалӣ — тасдиқ/розигиро ифода мекунад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('bushao3','不少')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">少 / 不少</div><div class="py">shǎo / bùshǎo<span class="transcript"> [шао / бушао]</span></div><div class="tj">кам / зиёд, бисёр</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('zhexie4','这些')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">这些</div><div class="py">zhèxiē<span class="transcript"> [чжэсие]</span></div><div class="tj">инҳо</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('dou1','都')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">都</div><div class="py">dōu<span class="transcript"> [доу]</span></div><div class="tj">ҳама, ҳар ду/ҳамагӣ</div></div>
    </div>
    <div class="note"><b>Номи хос:</b> 张 (Zhāng) — Чжан, насаби хитоӣ.</div>

    <div class="section-lbl">2. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Зарраи <ruby>了<rt>le</rt></ruby> — нишон додани рӯй додан ё анҷоми амал</div>
      <div class="gbody">了 дар охири ҷумла омада, амали ба анҷомрасидаро нишон медиҳад. Инчунин байни феъл ва пуркунанда меояд — дар ин ҳолат пеш аз пуркунанда одатан муайянкунанда (сон, сифат, ҷонишин) лозим аст. Шакли инкорӣ: 没 + феъл (+пуркунанда), 了 бардошта мешавад.</div>
      <div class="gex"><span class="tag">намуна</span>他去学开车<ruby>了<rt>le</rt></ruby>。 — Ӯ рафт мошинронӣ омӯхтан.</div>
      <div class="gex"><span class="tag">намуна</span>她买<ruby>了<rt>le</rt></ruby>一点儿苹果。 — Ӯ каме себ харид.</div>
      <div class="gex"><span class="tag">намуна</span>我<ruby>没<rt>méi</rt></ruby>买。 — Ман нахаридам.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Исми <ruby>后<rt>hòu</rt></ruby></div>
      <div class="gbody">后 давраи баъд аз ҳозира ё вақти зикршударо ифода мекунад.</div>
      <div class="gex"><span class="tag">намуна</span>你什么时候回家？五点<ruby>后<rt>hòu</rt></ruby>。 — Шумо кай ба хона бармегардед? Баъд аз соати 5.</div>
      <div class="gex"><span class="tag">намуна</span>他什么时候能回来？40分钟<ruby>后<rt>hòu</rt></ruby>回来。 — Ӯ кай баргашта метавонад? Баъд аз 40 дақиқа бармегардад.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">3.</span>Зарраи модалии <ruby>啊<rt>a</rt></ruby></div>
      <div class="gbody">啊 дар охири ҷумлаи хабарӣ омада, ба ҷумла ранги эҳсосӣ мебахшад. Талаффузи он вобаста ба садоноки охирини ҳиҷои пешин каме тағйир меёбад.</div>
      <div class="gex"><span class="tag">намуна</span>你是王小姐吗？是<ruby>啊<rt>a</rt></ruby>。 — Шумо хонум Ван ҳастед? Бале, ҳамин тавр.</div>
      <div class="gex"><span class="tag">намуна</span>王方的衣服太漂亮了！是<ruby>啊<rt>a</rt></ruby>，她买了不少衣服。 — Либоси Ван Фан хеле зебост! Ҳа, ӯ либоси зиёде харидааст.</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">4.</span>Зарфи <ruby>都<rt>dōu</rt></ruby></div>
      <div class="gbody">都 маънои "ҳама, ҳар ду"-ро дорад. Чизҳо/шахсоне, ки дар бар гирифта мешаванд, бояд пеш аз 都 гузошта шаванд.</div>
      <div class="gex"><span class="tag">намуна</span>我们<ruby>都<rt>dōu</rt></ruby>是中国人。 — Ҳамаи мо хитоӣ ҳастем.</div>
      <div class="gex"><span class="tag">намуна</span>这些<ruby>都<rt>dōu</rt></ruby>是王方的东西。 — Инҳо ҳама чизҳои Ван Фан ҳастанд.</div>
    </div>

    <div class="section-lbl">3. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">昨天上午你去哪儿了？</span><span class="py">Zuótiān shàngwǔ nǐ qù nǎr le?</span><span class="transcript">[Цзотиен шанву ни цюй нар лэ?]</span><span class="tj">— Дирӯз пеш аз пешин шумо ба куҷо рафта будед?</span><button class="playbtn inline" onclick="playAudio('l14_q1','昨天上午你去哪儿了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我去商店买东西了。</span><span class="py">Wǒ qù shāngdiàn mǎi dōngxi le.</span><span class="transcript">[Во цюй шандиен май дунси лэ.]</span><span class="tj">— Ман ба мағоза харид кардан рафта будам.</span><button class="playbtn inline" onclick="playAudio('l14_a1','我去商店买东西了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你买什么了？</span><span class="py">Nǐ mǎi shénme le?</span><span class="transcript">[Ни май шэньмэ лэ?]</span><span class="tj">— Шумо чӣ харидед?</span><button class="playbtn inline" onclick="playAudio('l14_q1b','你买什么了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我买了一点儿苹果。</span><span class="py">Wǒ mǎile yìdiǎnr píngguǒ.</span><span class="transcript">[Во майлэ идианр пхингуо.]</span><span class="tj">— Ман каме себ харидам.</span><button class="playbtn inline" onclick="playAudio('l14_a1b','我买了一点儿苹果')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你看见张先生了吗？</span><span class="py">Nǐ kànjiàn Zhāng xiānsheng le ma?</span><span class="transcript">[Ни кханьцзиен Чжан сяньшэн лэ ма?]</span><span class="tj">— Шумо ҷаноб Чжангро дидед?</span><button class="playbtn inline" onclick="playAudio('l14_q2','你看见张先生了吗')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">看见了，他去学开车了。</span><span class="py">Kànjiàn le, tā qù xué kāi chē le.</span><span class="transcript">[Кханьцзиен лэ, тха цюй сюе кхай чхэ лэ.]</span><span class="tj">— Дидам, ӯ рафт мошинронӣ омӯхтан.</span><button class="playbtn inline" onclick="playAudio('l14_a2','看见了他去学开车了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">他什么时候能回来？</span><span class="py">Tā shénme shíhou néng huílai?</span><span class="transcript">[Тха шэньмэ шихоу нэн хуйлай?]</span><span class="tj">— Ӯ кай баргашта метавонад?</span><button class="playbtn inline" onclick="playAudio('l14_q2b','他什么时候能回来')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">40分钟后回来。</span><span class="py">Sìshí fēnzhōng hòu huílai.</span><span class="transcript">[Сыши фэньчжун хоу хуйлай.]</span><span class="tj">— Баъд аз 40 дақиқа бармегардад.</span><button class="playbtn inline" onclick="playAudio('l14_a2b','40分钟后回来')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">王方的衣服太漂亮了！</span><span class="py">Wáng Fāng de yīfu tài piàoliang le!</span><span class="transcript">[Ван Фан дэ ифу тхай пяолян лэ!]</span><span class="tj">— Либоси Ван Фан хеле зебост!</span><button class="playbtn inline" onclick="playAudio('l14_q3','王方的衣服太漂亮了')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">是啊，她买了不少衣服。</span><span class="py">Shì a, tā mǎile bùshǎo yīfu.</span><span class="transcript">[Ши а, тха майлэ бушао ифу.]</span><span class="tj">— Ҳа, ӯ либоси зиёде харидааст.</span><button class="playbtn inline" onclick="playAudio('l14_a3','是啊她买了不少衣服')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你买什么了？</span><span class="py">Nǐ mǎi shénme le?</span><span class="transcript">[Ни май шэньмэ лэ?]</span><span class="tj">— Шумо чӣ харидед?</span><button class="playbtn inline" onclick="playAudio('l14_q3b','你买什么了2')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我没买，这些都是王方的东西。</span><span class="py">Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.</span><span class="transcript">[Во мэй май, чжэсие доу ши Ван Фан дэ дунси.]</span><span class="tj">— Ман нахаридам, инҳо ҳама чизҳои Ван Фан ҳастанд.</span><button class="playbtn inline" onclick="playAudio('l14_a3b','我没买这些都是王方的东西')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">4. Пиньини дарс — оҳангсозии калимаҳои сеҳиҷоӣ (3): аз оҳанги 3 сар мешаванд</div>
    <div class="drillgrid">
      <div class="drillcard">xǐyījī<span class="transcript"><br>[сиициц]</span><br><button class="playbtn" onclick="playAudio('l14_drill_xiyiji','洗衣机')">&#128266;</button></div>
      <div class="drillcard">huǒchē piào<span class="transcript"><br>[хуочхэ пяо]</span><br><button class="playbtn" onclick="playAudio('l14_drill_huochepiao','火车票')">&#128266;</button></div>
      <div class="drillcard">jǐngchájú<span class="transcript"><br>[цзинчхацзю]</span><br><button class="playbtn" onclick="playAudio('l14_drill_jingchaju','警察局')">&#128266;</button></div>
      <div class="drillcard">měiróngyuàn<span class="transcript"><br>[мэйжунюень]</span><br><button class="playbtn" onclick="playAudio('l14_drill_meirongyuan','美容院')">&#128266;</button></div>
      <div class="drillcard">Mǐlǎoshǔ<span class="transcript"><br>[Милаошу]</span><br><button class="playbtn" onclick="playAudio('l14_drill_milaoshu','米老鼠')">&#128266;</button></div>
      <div class="drillcard">yǎnchànghuì<span class="transcript"><br>[яньчхануй]</span><br><button class="playbtn" onclick="playAudio('l14_drill_yanchanghui','演唱会')">&#128266;</button></div>
      <div class="drillcard">pǎobù xié<span class="transcript"><br>[пхаобу сие]</span><br><button class="playbtn" onclick="playAudio('l14_drill_paobuxie','跑步鞋')">&#128266;</button></div>
      <div class="drillcard">měishùguǎn<span class="transcript"><br>[мэйшугуан]</span><br><button class="playbtn" onclick="playAudio('l14_drill_meishuguan','美术馆')">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 14. Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid14">
      <div class="strokecard"><div class="shz">东</div><div class="spy">dōng <span class="transcript">[дун]</span></div><div class="starget" id="sw14-dong"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-dong')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-dong')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-dong-status"></div></div>
      <div class="strokecard"><div class="shz">看</div><div class="spy">kàn <span class="transcript">[кхань]</span></div><div class="starget" id="sw14-kan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-kan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-kan')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-kan-status"></div></div>
      <div class="strokecard"><div class="shz">先</div><div class="spy">xiān <span class="transcript">[сянь]</span></div><div class="starget" id="sw14-xian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-xian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-xian')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-xian-status"></div></div>
      <div class="strokecard"><div class="shz">开</div><div class="spy">kāi <span class="transcript">[кхай]</span></div><div class="starget" id="sw14-kai"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-kai')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-kai')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-kai-status"></div></div>
      <div class="strokecard"><div class="shz">车</div><div class="spy">chē <span class="transcript">[чхэ]</span></div><div class="starget" id="sw14-che"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-che')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-che')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-che-status"></div></div>
      <div class="strokecard"><div class="shz">回</div><div class="spy">huí <span class="transcript">[хуй]</span></div><div class="starget" id="sw14-hui"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-hui')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-hui')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-hui-status"></div></div>
      <div class="strokecard"><div class="shz">衣</div><div class="spy">yī <span class="transcript">[и]</span></div><div class="starget" id="sw14-yi"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-yi')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-yi')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-yi-status"></div></div>
      <div class="strokecard"><div class="shz">都</div><div class="spy">dōu <span class="transcript">[доу]</span></div><div class="starget" id="sw14-dou"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw14-dou')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw14-dou')">Худам нависам</button></div>
        <div class="sstatus" id="sw14-dou-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_kai','开')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">开</div><div class="py">kāi <span class="transcript">[кхай]</span></div><div class="tj">шаклаш ба ду даст, ки чакраи дарро мекашанд, монанд буд — маънои аслӣ "кушодани дар"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_che','车')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">车</div><div class="py">chē <span class="transcript">[чхэ]</span></div><div class="tj">шаклаш ба олоти ду чарха монанд буд, ки бо гов ё асп кашида мешуд — ҳоло маънои воситаи нақлиёт дорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_hui','回')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">回</div><div class="py">huí <span class="transcript">[хуй]</span></div><div class="tj">шаклаш ба гирдоби об монанд буд — ҳоло маънои "баргаштан" дорад</div></div>
    </div>

    <div class="section-lbl">7. Радикалҳо: 月 ва 扌</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">月</div><div class="py">радикали бадан/гӯшт</div><div class="tj">одатан бо бадани инсон алоқаманд: 服 (fú — либос), 胖 (pàng — фарбеҳ)</div></div>
      <div class="wordcard"><div class="hz">扌</div><div class="py">радикали даст</div><div class="tj">одатан бо амали дастӣ алоқаманд: 打 (dǎ — задан), 找 (zhǎo — ҷустуҷӯ кардан)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 14 (10 савол)</div>
      <div class="qcard"><div class="q">1. 她买了不少衣服 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Ӯ либос нахарид</label>
        <label><input type="radio" name="q1" value="right">Ӯ либоси зиёде харидааст</label>
        <label><input type="radio" name="q1" value="wrong">Ӯ либос мехоҳад</label>
      </div></div>
      <div class="qcard"><div class="q">2. Шакли инкории 了 (амали анҷомёфта) кадом аст?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">不 + феъл + 了</label>
        <label><input type="radio" name="q2" value="right">没 + феъл (бе 了)</label>
        <label><input type="radio" name="q2" value="wrong">没有 + феъл + 了</label>
      </div></div>
      <div class="qcard"><div class="q">3. 40分钟后回来 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">40 дақиқа пеш баргашт</label>
        <label><input type="radio" name="q3" value="right">Баъд аз 40 дақиқа бармегардад</label>
        <label><input type="radio" name="q3" value="wrong">40 дақиқа интизор шуд</label>
      </div></div>
      <div class="qcard"><div class="q">4. 啊 дар охири ҷумла чӣ вазифа дорад?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Замони гузаштаро нишон медиҳад</label>
        <label><input type="radio" name="q4" value="right">Ба ҷумла ранги эҳсосӣ мебахшад</label>
        <label><input type="radio" name="q4" value="wrong">Ҷумларо инкор мекунад</label>
      </div></div>
      <div class="qcard"><div class="q">5. 都 дар куҷои ҷумла меояд, вобаста ба он чизе, ки дар бар мегирад?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Баъд аз чизи дар бар гирифташуда</label>
        <label><input type="radio" name="q5" value="right">Пеш аз чизи дар бар гирифташуда</label>
        <label><input type="radio" name="q5" value="wrong">Фарқ надорад</label>
      </div></div>
      <div class="qcard"><div class="q">6. 看见 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Гӯш кардан</label>
        <label><input type="radio" name="q6" value="right">Дидан</label>
        <label><input type="radio" name="q6" value="wrong">Гуфтан</label>
      </div></div>
      <div class="qcard"><div class="q">7. 一点儿 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Хеле зиёд</label>
        <label><input type="radio" name="q7" value="right">Каме, андаке</label>
        <label><input type="radio" name="q7" value="wrong">Ҳеҷ чиз</label>
      </div></div>
      <div class="qcard"><div class="q">8. Дар оҳангсозии сеҳиҷоии 3+1+1, ҳиҷои якум кадом оҳангро дорад?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Оҳанги 3</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги 1</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги хомӯш</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 扌 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Бадан</label>
        <label><input type="radio" name="q9" value="right">Амали дастӣ</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. "这些都是王方的东西" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="wrong">Баъзеи инҳо чизи Ван Фан аст</label>
        <label><input type="radio" name="q10" value="right">Ҳамаи инҳо чизи Ван Фан ҳастанд</label>
        <label><input type="radio" name="q10" value="wrong">Ҳеҷ кадоме чизи Ван Фан нест</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function renderLesson15(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="idx">15</div>
      <div class="titles">
        <div class="zh">我是坐飞机来的</div>
        <div class="py">Wǒ shì zuò fēijī lái de</div>
        <div class="en">Ман бо ҳавопаймо омадам</div>
      </div>
    </div>

    <div class="section-lbl">1. Калимаҳои нав</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('renshi4','认识')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">认识</div><div class="py">rènshi<span class="transcript"> [жэньши]</span></div><div class="tj">шинохтан, ошно шудан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('nian2','年')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">年</div><div class="py">nián<span class="transcript"> [ниень]</span></div><div class="tj">сол</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('daxue4','大学')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">大学</div><div class="py">dàxué<span class="transcript"> [дасюе]</span></div><div class="tj">донишгоҳ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('fandian4','饭店')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">饭店</div><div class="py">fàndiàn<span class="transcript"> [фаньдиен]</span></div><div class="tj">меҳмонхона, тарабхона</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('chuzuche1','出租车')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">出租车</div><div class="py">chūzūchē<span class="transcript"> [чхуцзучхэ]</span></div><div class="tj">такси</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('yiqi3','一起')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">一起</div><div class="py">yìqǐ<span class="transcript"> [ициц]</span></div><div class="tj">якҷоя, ҳамроҳ</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('gaoxing1','高兴')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">高兴</div><div class="py">gāoxìng<span class="transcript"> [гаосин]</span></div><div class="tj">хушҳол, шод</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('ting1','听')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">听</div><div class="py">tīng<span class="transcript"> [тхин]</span></div><div class="tj">гӯш кардан</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('feiji1','飞机')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">飞机</div><div class="py">fēijī<span class="transcript"> [фэйцзи]</span></div><div class="tj">ҳавопаймо</div></div>
    </div>

    <div class="section-lbl">2. Грамматика</div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">1.</span>Сохти «是……的» — таъкиди вақт, ҷой ё тарз</div>
      <div class="gbody">Вақте ки рӯй додани коре аллакай маълум аст, «是……的» барои таъкид кардани вақт, ҷой ё тарзи он истифода мешавад. Дар ҷумлаи тасдиқӣ ва саволӣ 是 метавонад бардошта шавад, вале дар ҷумлаи инкорӣ бардошта намешавад.</div>
      <div class="gex"><span class="tag">сохт</span>Мубтадо + (是) + вақт/ҷой/тарз + феъл + 的</div>
      <div class="gex"><span class="tag">намуна</span>我们<ruby>是<rt>shì</rt></ruby>2011年9月认识<ruby>的<rt>de</rt></ruby>。 — Мо соли 2011, моҳи сентябр шинос шудем.</div>
      <div class="gex"><span class="tag">намуна</span>我们<ruby>不是<rt>bú shì</rt></ruby>坐出租车来<ruby>的<rt>de</rt></ruby>。 — Мо бо такси наомадем. (шакли инкорӣ, 是 бардошта намешавад)</div>
    </div>
    <div class="gcard">
      <div class="gtitle"><span class="zh">2.</span>Ифодаи сана (2): сол, моҳ, рӯз/сана, рӯзи ҳафта</div>
      <div class="gbody">Сана дар хитоӣ аз воҳиди калон ба хурд навишта ва хонда мешавад. Сол — ҳар рақам алоҳида хонда мешавад, баъд 年. Моҳ ва рӯз — рақами пурра хонда мешавад, баъд 月 ва 日/号. Рӯзи ҳафта — калимаи 星期 + рақам.</div>
      <div class="gex"><span class="tag">намуна</span>明天是2014年5月11号。 — Пагоҳ 11 майи соли 2014 аст.</div>
      <div class="gex"><span class="tag">намуна</span>今天9月10号，星期三。 — Имрӯз 10 сентябр аст, чоршанбе.</div>
    </div>

    <div class="section-lbl">3. Ҷумлаҳо</div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你和李小姐是什么时候认识的？</span><span class="py">Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?</span><span class="transcript">[Ни хэ Ли сяоцзие ши шэньмэ шихоу жэньши дэ?]</span><span class="tj">— Шумо ва хонум Ли кай шинос шудед?</span><button class="playbtn inline" onclick="playAudio('l15_q1','你和李小姐是什么时候认识的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我们是2011年9月认识的。</span><span class="py">Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.</span><span class="transcript">[Вомэнь ши эр лин и и ниень цзю юе жэньши дэ.]</span><span class="tj">— Мо соли 2011, моҳи сентябр шинос шудем.</span><button class="playbtn inline" onclick="playAudio('l15_a1','我们是2011年9月认识的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">你们在哪儿认识的？</span><span class="py">Nǐmen zài nǎr rènshi de?</span><span class="transcript">[Нимэнь цзай нар жэньши дэ?]</span><span class="tj">— Шумо дар куҷо шинос шудед?</span><button class="playbtn inline" onclick="playAudio('l15_q1b','你们在哪儿认识的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我们是在学校认识的，她是我大学同学。</span><span class="py">Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.</span><span class="transcript">[Вомэнь ши цзай сюесяо жэньши дэ, тха ши во дасюе тхунсюе.]</span><span class="tj">— Мо дар мактаб шинос шудем, ӯ ҳамдарси донишгоҳии ман аст.</span><button class="playbtn inline" onclick="playAudio('l15_a1b','我们是在学校认识的她是我大学同学')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">你们是怎么来饭店的？</span><span class="py">Nǐmen shì zěnme lái fàndiàn de?</span><span class="transcript">[Нимэнь ши цзэньмэ лай фаньдиен дэ?]</span><span class="tj">— Шумо чӣ хел ба меҳмонхона омадед?</span><button class="playbtn inline" onclick="playAudio('l15_q2','你们是怎么来饭店的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">我们是坐出租车来的。</span><span class="py">Wǒmen shì zuò chūzūchē lái de.</span><span class="transcript">[Вомэнь ши цзуо чхуцзучхэ лай дэ.]</span><span class="tj">— Мо бо такси омадем.</span><button class="playbtn inline" onclick="playAudio('l15_a2','我们是坐出租车来的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">李先生呢？</span><span class="py">Lǐ xiānsheng ne?</span><span class="transcript">[Ли сяньшэн нэ?]</span><span class="tj">— Ҷаноб Ли чӣ?</span><button class="playbtn inline" onclick="playAudio('l15_q2b','李先生呢')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">他是和朋友一起开车来的。</span><span class="py">Tā shì hé péngyou yìqǐ kāi chē lái de.</span><span class="transcript">[Тха ши хэ пхэнъёу ициц кхай чхэ лай дэ.]</span><span class="tj">— Ӯ бо дӯсташ якҷоя мошинронӣ карда омад.</span><button class="playbtn inline" onclick="playAudio('l15_a2b','他是和朋友一起开车来的')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>
    <div class="dialog">
      <div class="line"><span class="who">A:</span><span class="hz">很高兴认识您！李小姐。</span><span class="py">Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.</span><span class="transcript">[Хэнь гаосин жэньши нинь! Ли сяоцзие.]</span><span class="tj">— Аз шиносоӣ бо шумо хеле хушҳолам! Хонум Ли.</span><button class="playbtn inline" onclick="playAudio('l15_q3','很高兴认识您李小姐')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">认识你我也很高兴！</span><span class="py">Rènshi nǐ wǒ yě hěn gāoxìng!</span><span class="transcript">[Жэньши ни во е хэнь гаосин!]</span><span class="tj">— Аз шиносоӣ бо шумо ман низ хеле хушҳолам!</span><button class="playbtn inline" onclick="playAudio('l15_a3','认识你我也很高兴')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">A:</span><span class="hz">听张先生说，您是坐飞机来北京的？</span><span class="py">Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?</span><span class="transcript">[Тхин Чжан сяньшэн шуо, нинь ши цзуо фэйцзи лай Бэйцзин дэ?]</span><span class="tj">— Аз гуфтаи ҷаноб Чжан шунидам, шумо бо ҳавопаймо ба Пекин омадед?</span><button class="playbtn inline" onclick="playAudio('l15_q3b','您是坐飞机来北京的')" aria-label="Гӯш кардан">&#128266;</button></div>
      <div class="line"><span class="who">B:</span><span class="hz">是的。</span><span class="py">Shì de.</span><span class="transcript">[Ши дэ.]</span><span class="tj">— Ҳа, ҳамин тавр.</span><button class="playbtn inline" onclick="playAudio('l15_a3b','是的')" aria-label="Гӯш кардан">&#128266;</button></div>
    </div>

    <div class="section-lbl">4. Пиньини дарс — оҳангсозии калимаҳои сеҳиҷоӣ (4): аз оҳанги 4 сар мешаванд</div>
    <div class="drillgrid">
      <div class="drillcard">diànbīngxiāng<span class="transcript"><br>[диенбинсян]</span><br><button class="playbtn" onclick="playAudio('l15_drill_diaobingxiang','电冰箱')">&#128266;</button></div>
      <div class="drillcard">bàngōngshì<span class="transcript"><br>[банунши]</span><br><button class="playbtn" onclick="playAudio('l15_drill_bangongshi','办公室')">&#128266;</button></div>
      <div class="drillcard">kuàngquánshuǐ<span class="transcript"><br>[хуанцюеншуй]</span><br><button class="playbtn" onclick="playAudio('l15_drill_kuangquanshui','矿泉水')">&#128266;</button></div>
      <div class="drillcard">dàshǐguǎn<span class="transcript"><br>[дашигуан]</span><br><button class="playbtn" onclick="playAudio('l15_drill_dashiguan','大使馆')">&#128266;</button></div>
      <div class="drillcard">mièhuǒqì<span class="transcript"><br>[мехуоци]</span><br><button class="playbtn" onclick="playAudio('l15_drill_miehuoqi','灭火器')">&#128266;</button></div>
      <div class="drillcard">zhàoxiàngjī<span class="transcript"><br>[чжаосянцзи]</span><br><button class="playbtn" onclick="playAudio('l15_drill_zhaoxiangji','照相机')">&#128266;</button></div>
      <div class="drillcard">diànhuàkǎ<span class="transcript"><br>[диенхуакха]</span><br><button class="playbtn" onclick="playAudio('l15_drill_dianhuaka','电话卡')">&#128266;</button></div>
      <div class="drillcard">Àoyùnhuì<span class="transcript"><br>[Аоюньхуй]</span><br><button class="playbtn" onclick="playAudio('l15_drill_aoyunhui','奥运会')">&#128266;</button></div>
    </div>

    <div class="section-lbl">5. Тартиби навишти ҳарфҳо — аниматсия ва худтамрин</div>
    <div class="section-sub">Ҳарфҳои нави дарси 15 (ва чанд ҳарфи такрории пешин). Аввал «Нишон додан»-ро занед, баъд «Худам нависам»-ро.</div>
    <div class="strokegrid" id="strokegrid15">
      <div class="strokecard"><div class="shz">认</div><div class="spy">rèn <span class="transcript">[жэнь]</span></div><div class="starget" id="sw15-ren"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-ren')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-ren')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-ren-status"></div></div>
      <div class="strokecard"><div class="shz">年</div><div class="spy">nián <span class="transcript">[ниень]</span></div><div class="starget" id="sw15-nian"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-nian')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-nian')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-nian-status"></div></div>
      <div class="strokecard"><div class="shz">大</div><div class="spy">dà <span class="transcript">[да]</span></div><div class="starget" id="sw15-da"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-da')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-da')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-da-status"></div></div>
      <div class="strokecard"><div class="shz">饭</div><div class="spy">fàn <span class="transcript">[фань]</span></div><div class="starget" id="sw15-fan"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-fan')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-fan')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-fan-status"></div></div>
      <div class="strokecard"><div class="shz">出</div><div class="spy">chū <span class="transcript">[чху]</span></div><div class="starget" id="sw15-chu"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-chu')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-chu')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-chu-status"></div></div>
      <div class="strokecard"><div class="shz">高</div><div class="spy">gāo <span class="transcript">[гао]</span></div><div class="starget" id="sw15-gao"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-gao')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-gao')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-gao-status"></div></div>
      <div class="strokecard"><div class="shz">听</div><div class="spy">tīng <span class="transcript">[тхин]</span></div><div class="starget" id="sw15-ting"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-ting')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-ting')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-ting-status"></div></div>
      <div class="strokecard"><div class="shz">飞</div><div class="spy">fēi <span class="transcript">[фэй]</span></div><div class="starget" id="sw15-fei"></div>
        <div class="strokebtns"><button class="sbtn" onclick="hwAnimate('sw15-fei')">Нишон додан</button><button class="sbtn primary" onclick="hwQuiz('sw15-fei')">Худам нависам</button></div>
        <div class="sstatus" id="sw15-fei-status"></div></div>
    </div>

    <div class="section-lbl">6. Ҳарфҳои якҷузъа (独体字) — намунаҳои китоб</div>
    <div class="wordgrid">
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_nian','年')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">年</div><div class="py">nián <span class="transcript">[ниень]</span></div><div class="tj">маънои аслӣ — овардани ҳосили ҷамъоваришуда ба хона; ҳоло воҳиди вақт "сол"</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_chu','出')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">出</div><div class="py">chū <span class="transcript">[чху]</span></div><div class="tj">шаклаш ба пойе, ки аз ҷое дур мешавад, монанд буд; ҳоло маънои "аз дарун ба берун баромадан"-ро дорад</div></div>
      <div class="wordcard"><button class="playbtn" onclick="playAudio('sc_fei','飞')" aria-label="Гӯш кардан">&#128266;</button><div class="hz">飞</div><div class="py">fēi <span class="transcript">[фэй]</span></div><div class="tj">маънои аслӣ — паррондани парранда/ҳашарот дар ҳаво бо болу пар; ҳоло умуман маънои "дар осмон паридан", "тез"-ро дорад</div></div>
    </div>

    <div class="section-lbl">7. Радикалҳо: 艹 ва 宀</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">艹</div><div class="py">радикали алаф/растанӣ</div><div class="tj">одатан бо алаф ё растанӣ алоқаманд: 茶 (chá — чой), 菜 (cài — сабзавот)</div></div>
      <div class="wordcard"><div class="hz">宀</div><div class="py">радикали хона</div><div class="tj">одатан бо хона алоқаманд: 安 (ān — ором шудан), 家 (jiā — хона)</div></div>
    </div>

    <button class="quizbtn" onclick="showQuiz()">Гузаштани тест &#8594;</button>

    <div class="qwrap" id="qwrap">
      <div class="section-lbl" style="margin-top:32px;">Тести дарси 15 (10 савол)</div>
      <div class="qcard"><div class="q">1. 我们是2011年9月认识的 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q1" value="wrong">Мо соли 2011 хоҳем шинос шуд</label>
        <label><input type="radio" name="q1" value="right">Мо соли 2011, моҳи сентябр шинос шудем</label>
        <label><input type="radio" name="q1" value="wrong">Мо ҳанӯз шинос нашудаем</label>
      </div></div>
      <div class="qcard"><div class="q">2. Дар сохти «是……的», дар ҷумлаи инкорӣ 是 бардошта мешавад ё не?</div><div class="opts">
        <label><input type="radio" name="q2" value="wrong">Ҳа, ҳамеша бардошта мешавад</label>
        <label><input type="radio" name="q2" value="right">Не, дар ҷумлаи инкорӣ бардошта намешавад</label>
        <label><input type="radio" name="q2" value="wrong">Фарқ надорад</label>
      </div></div>
      <div class="qcard"><div class="q">3. Санаи хитоӣ аз кадом тартиб навишта мешавад?</div><div class="opts">
        <label><input type="radio" name="q3" value="wrong">Аз хурд ба калон (рӯз-моҳ-сол)</label>
        <label><input type="radio" name="q3" value="right">Аз калон ба хурд (сол-моҳ-рӯз)</label>
        <label><input type="radio" name="q3" value="wrong">Тартиб надорад</label>
      </div></div>
      <div class="qcard"><div class="q">4. 出租车 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q4" value="wrong">Ҳавопаймо</label>
        <label><input type="radio" name="q4" value="right">Такси</label>
        <label><input type="radio" name="q4" value="wrong">Автобус</label>
      </div></div>
      <div class="qcard"><div class="q">5. 认识 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q5" value="wrong">Дидан</label>
        <label><input type="radio" name="q5" value="right">Шинос шудан</label>
        <label><input type="radio" name="q5" value="wrong">Гуфтан</label>
      </div></div>
      <div class="qcard"><div class="q">6. 一起 маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q6" value="wrong">Танҳо</label>
        <label><input type="radio" name="q6" value="right">Якҷоя, ҳамроҳ</label>
        <label><input type="radio" name="q6" value="wrong">Аввал</label>
      </div></div>
      <div class="qcard"><div class="q">7. "他是和朋友一起开车来的" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q7" value="wrong">Ӯ танҳо мошин ронд</label>
        <label><input type="radio" name="q7" value="right">Ӯ бо дӯсташ якҷоя мошинронӣ карда омад</label>
        <label><input type="radio" name="q7" value="wrong">Ӯ бо такси омад</label>
      </div></div>
      <div class="qcard"><div class="q">8. Дар оҳангсозии сеҳиҷоии 4+1+1, ҳиҷои якум кадом оҳангро дорад?</div><div class="opts">
        <label><input type="radio" name="q8" value="right">Оҳанги 4 (поёнравон)</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги 1</label>
        <label><input type="radio" name="q8" value="wrong">Оҳанги 3</label>
      </div></div>
      <div class="qcard"><div class="q">9. Радикали 宀 бо чӣ алоқаманд аст?</div><div class="opts">
        <label><input type="radio" name="q9" value="wrong">Растанӣ</label>
        <label><input type="radio" name="q9" value="right">Хона</label>
        <label><input type="radio" name="q9" value="wrong">Об</label>
      </div></div>
      <div class="qcard"><div class="q">10. "听张先生说，您是坐飞机来北京的？" — "是的。" маънояш чист?</div><div class="opts">
        <label><input type="radio" name="q10" value="right">Тасдиқ мекунад, ки ӯ бо ҳавопаймо омадааст</label>
        <label><input type="radio" name="q10" value="wrong">Инкор мекунад</label>
        <label><input type="radio" name="q10" value="wrong">Намедонад</label>
      </div></div>
      <div id="qerror" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
      <button class="quizbtn" onclick="submitQuiz()">Супоридани тест</button>

      <div class="result" id="result">
        <div class="seal" id="sealMark"></div>
        <div class="score" id="scoreText"></div>
        <div class="msg" id="scoreMsg"></div>
        <button class="retrybtn" id="retryBtn" onclick="retryQuiz()" style="display:none;">Такрори дарс ва тести дубора</button>
      </div>
    </div>
  `;
}

function showQuiz(){
  document.getElementById('qwrap').classList.add('active');
}

function submitQuiz(){
  const qs = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];
  let answered = 0, correct = 0;
  qs.forEach(q=>{
    const sel = document.querySelector(`input[name="${q}"]:checked`);
    if(sel){ answered++; if(sel.value === 'right') correct++; }
  });
  const err = document.getElementById('qerror');
  if(answered < qs.length){
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  const pct = Math.round(correct/qs.length*100);
  const result = document.getElementById('result');
  const seal = document.getElementById('sealMark');
  const retryBtn = document.getElementById('retryBtn');
  result.classList.add('show');
  document.getElementById('scoreText').textContent = pct + '%';
  if(pct >= 80){
    result.className = 'result show pass';
    document.getElementById('scoreMsg').textContent = 'Табрик! Дарси ' + (currentLessonNum+1) + ' кушода шуд.';
    seal.innerHTML = 'ГУЗАШТ';
    retryBtn.style.display = 'none';
    if(currentLessonNum + 1 > lessonUnlocked){ lessonUnlocked = currentLessonNum + 1; saveProgress(); }
    renderPath();
  } else {
    result.className = 'result show fail';
    document.getElementById('scoreMsg').textContent = 'Натиҷа кофӣ нест. Аввал дарси ' + currentLessonNum + '-ро такрор кунед.';
    seal.innerHTML = '';
    retryBtn.style.display = 'inline-block';
  }
}

function retryQuiz(){
  document.getElementById('result').classList.remove('show');
  document.querySelectorAll('#qwrap input[type=radio]').forEach(r=>r.checked=false);
  window.scrollTo({top: document.getElementById('panel').offsetTop, behavior:'smooth'});
}

/* ---------- Тартиби навишт: аниматсия ва худтамрин ---------- */
const strokeChars = {
  'sw-ni':'你','sw-hao':'好','sw-nin':'您','sw-men':'们','sw-dui':'对',
  'sw-bu':'不','sw-qi':'起','sw-mei':'没','sw-guan':'关','sw-xi':'系',
  'sw2-xie':'谢','sw2-ke':'客','sw2-qi':'气','sw2-zai':'再','sw2-jian':'见',
  'sw2-kou':'口','sw2-shan':'山','sw2-xiao':'小',
  'sw3-jiao':'叫','sw3-shen':'什','sw3-me':'么','sw3-ming':'名','sw3-zi':'字',
  'sw3-wo':'我','sw3-shi4':'是','sw3-lao':'老','sw3-shi1':'师','sw3-ma':'吗',
  'sw3-xue':'学','sw3-sheng':'生','sw3-ren':'人',
  'sw4-ta1':'她','sw4-shei':'谁','sw4-de':'的','sw4-han':'汉','sw4-yu':'语',
  'sw4-na':'哪','sw4-guo':'国','sw4-ne':'呢','sw4-ta2':'他','sw4-tong':'同',
  'sw4-peng':'朋','sw4-you':'友',
  'sw5-jia':'家','sw5-you':'有','sw5-kou':'口','sw5-nv':'女','sw5-er':'儿',
  'sw5-ji':'几','sw5-sui':'岁','sw5-le':'了','sw5-jin':'今','sw5-nian':'年',
  'sw5-duo':'多','sw5-da':'大',
  'sw6-hui':'会','sw6-shuo':'说','sw6-mama':'妈','sw6-cai':'菜','sw6-hen':'很',
  'sw6-zuo':'做','sw6-xie':'写','sw6-zenme':'怎','sw6-me':'么','sw6-du':'读','sw6-chi':'吃',
  'sw7-qing':'请','sw7-wen':'问','sw7-jin':'今','sw7-tian':'天','sw7-hao':'号','sw7-yue':'月',
  'sw7-xing':'星','sw7-qi':'期','sw7-zuo':'昨','sw7-ming':'明','sw7-qu':'去','sw7-xiao':'校',
  'sw7-kan':'看','sw7-shu':'书',
  'sw8-xiang':'想','sw8-he':'喝','sw8-cha':'茶','sw8-chi':'吃',
  'sw8-mai':'买','sw8-bei':'杯','sw8-qian':'钱','sw8-na':'那',
  'sw9-xiao':'小','sw9-mao':'猫','sw9-gou':'狗','sw9-yizi':'椅',
  'sw9-gong':'工','sw9-yi':'医','sw9-ba':'爸','sw9-zi':'子',
  'sw10-zhuo':'桌','sw10-dian':'电','sw10-nao':'脑','sw10-he':'和',
  'sw10-ben':'本','sw10-li':'里','sw10-neng':'能','sw10-zuo':'坐',
  'sw11-xian':'现','sw11-dian':'点','sw11-fen':'分','sw11-hui':'回',
  'sw11-zhu':'住','sw11-qian':'前','sw11-wu':'午','sw11-dian2':'电',
  'sw12-tian':'天','sw12-qi':'气','sw12-yu':'雨','sw12-re':'热',
  'sw12-leng':'冷','sw12-lai':'来','sw12-ai':'爱','sw12-shui':'水',
  'sw13-wei':'喂','sw13-xue':'学','sw13-shang':'上','sw13-shui2':'睡',
  'sw13-shi':'视','sw13-huan':'欢','sw13-gei':'给','sw13-ba':'吧',
  'sw14-dong':'东','sw14-kan':'看','sw14-xian':'先','sw14-kai':'开',
  'sw14-che':'车','sw14-hui':'回','sw14-yi':'衣','sw14-dou':'都',
  'sw15-ren':'认','sw15-nian':'年','sw15-da':'大','sw15-fan':'饭',
  'sw15-chu':'出','sw15-gao':'高','sw15-ting':'听','sw15-fei':'飞'
};
const writers = {};
function initStrokeWriters(){
  if(typeof HanziWriter === 'undefined') return;
  Object.keys(strokeChars).forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    writers[id] = HanziWriter.create(id, strokeChars[id], {
      width: 118, height: 118, padding: 6,
      strokeColor: '#241F19',
      radicalColor: '#B23A2E',
      outlineColor: '#D9CFB8',
      drawingColor: '#B23A2E',
      showOutline: true,
      showCharacter: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 250
    });
  });
}
function hwAnimate(id){
  const w = writers[id];
  if(!w) return;
  const status = document.getElementById(id+'-status');
  if(status){ status.className = 'sstatus'; status.textContent = 'Тамошо кунед...'; }
  w.showCharacter();
  w.animateCharacter({
    onComplete: () => { if(status) status.textContent = 'Акнун худатон кӯшиш кунед.'; }
  });
}
function hwQuiz(id){
  const w = writers[id];
  if(!w) return;
  const status = document.getElementById(id+'-status');
  w.hideCharacter();
  w.quiz({
    onMistake: () => { if(status){ status.className='sstatus bad'; status.textContent = 'Хато — боз кӯшиш кунед.'; } },
    onCorrectStroke: (data) => { if(status){ status.className='sstatus'; status.textContent = 'Дуруст! (' + (data.strokeNum+1) + '/' + (data.strokeNum+1+data.strokesRemaining) + ')'; } },
    onComplete: () => { if(status){ status.className='sstatus ok'; status.textContent = 'Офарин! Комил навишта шуд.'; } }
  });
  if(status){ status.className='sstatus'; status.textContent = 'Аз аввалин харф кашед...'; }
}

/* ===================== NEW FEATURES: views, dark mode, flashcards, dictionary, game, exam ===================== */

let darkMode = false;
try{ darkMode = localStorage.getItem('hsk1_dark') === '1'; }catch(e){}
function applyDark(){
  document.body.classList.toggle('dark', darkMode);
  const btn = document.getElementById('darkBtn');
  if(btn) btn.textContent = darkMode ? '☀️ Равшан' : '🌙 Торик';
}
function toggleDark(){
  darkMode = !darkMode;
  try{ localStorage.setItem('hsk1_dark', darkMode ? '1' : '0'); }catch(e){}
  applyDark();
}

function setToolbarActive(view){
  const btns = document.querySelectorAll('.toolbtn:not(.darktoggle)');
  const labels = ['path','basics','flashcards','dictionary','game','exam'];
  btns.forEach((b,idx)=>{ b.classList.toggle('active', labels[idx]===view); });
}

function showView(view){
  setToolbarActive(view);
  const pathEl = document.getElementById('path');
  if(view === 'path'){
    pathEl.style.display = '';
    renderPath();
    openLesson(currentLessonNum || 1);
    return;
  }
  pathEl.style.display = 'none';
  if(view === 'basics') renderBasicsView();
  else if(view === 'flashcards') renderFlashcardsView();
  else if(view === 'dictionary') renderDictionaryView();
  else if(view === 'game') renderGameView();
  else if(view === 'exam') renderExamView();
}

/* ---------- Flashcards ---------- */
let fcDeck = [], fcIndex = 0;
function renderFlashcardsView(){
  const learned = VOCAB.filter(v => v.lesson < lessonUnlocked || v.lesson === 1);
  const pool = learned.length ? learned : VOCAB.slice(0, 15);
  fcDeck = [...pool].sort(()=>Math.random()-0.5);
  fcIndex = 0;
  drawFlashcard();
}
function drawFlashcard(){
  const panel = document.getElementById('panel');
  if(!fcDeck.length){ panel.innerHTML = '<p>Аввал ягон дарс кушоед, то калима ҷамъ шавад.</p>'; return; }
  const card = fcDeck[fcIndex];
  panel.innerHTML = `
    <div class="fc-wrap">
      <div class="fc-progress">Дарси ${card.lesson} · Карта ${fcIndex+1}/${fcDeck.length}</div>
      <div class="fc-card" id="fcCard" onclick="document.getElementById('fcCard').classList.toggle('flipped')">
        <div class="fc-hz">${card.hz}</div>
        <div class="fc-py">${card.py}</div>
        <div class="fc-tj">${card.tj}</div>
      </div>
      <div class="fc-hint">Барои дидани тарҷума болои карта зер кунед</div>
      <div class="fc-nav">
        <button class="toolbtn" onclick="fcPrev()">&#8592; Пеш</button>
        <button class="toolbtn" onclick="playAudio('${card.audio}','${card.hz}')">&#128266; Гӯш кунед</button>
        <button class="toolbtn" onclick="fcNext()">Оянда &#8594;</button>
      </div>
    </div>`;
}
function fcNext(){ fcIndex = (fcIndex+1) % fcDeck.length; drawFlashcard(); }
function fcPrev(){ fcIndex = (fcIndex-1+fcDeck.length) % fcDeck.length; drawFlashcard(); }

/* ---------- "Луғати ман" (My Dictionary) ---------- */
function renderDictionaryView(){
  const panel = document.getElementById('panel');
  const learned = VOCAB.filter(v => v.lesson < lessonUnlocked || v.lesson === 1);
  const byLesson = {};
  learned.forEach(v=>{ (byLesson[v.lesson] = byLesson[v.lesson] || []).push(v); });
  let html = '<div class="panel-head"><div class="titles"><div class="zh">我的词典</div><div class="en">Луғати ман — калимаҳои омӯхтаи шумо</div></div></div>';
  if(!learned.length){ html += '<p>Ҳанӯз калимае ҷамъ нашудааст — аввал як дарсро бинед.</p>'; }
  Object.keys(byLesson).sort((a,b)=>a-b).forEach(les=>{
    html += `<div class="section-lbl">Дарси ${les}</div><div class="wordgrid">`;
    byLesson[les].forEach(v=>{
      html += `<div class="wordcard"><button class="playbtn" onclick="playAudio('${v.audio}','${v.hz}')">&#128266;</button><div class="hz">${v.hz}</div><div class="py">${v.py}</div><div class="tj">${v.tj}</div></div>`;
    });
    html += '</div>';
  });
  panel.innerHTML = html;
}

/* ---------- Word-match game ---------- */
let gameTimer = null, gameSeconds = 60, gameScore = 0, gameSelectedHz = null, gameSelectedTj = null;
function renderGameView(){
  const learned = VOCAB.filter(v => v.lesson < lessonUnlocked || v.lesson === 1);
  const pool = (learned.length >= 8 ? learned : VOCAB).slice();
  const picks = pool.sort(()=>Math.random()-0.5).slice(0, 8);
  const hzCol = [...picks].sort(()=>Math.random()-0.5);
  const tjCol = [...picks].sort(()=>Math.random()-0.5);
  gameScore = 0; gameSeconds = 60; gameSelectedHz = null; gameSelectedTj = null;
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head"><div class="titles"><div class="zh">Бозии калимаҳо</div><div class="en">Ҳарфро бо тарҷумааш пайваст кунед — то таймер тамом нашудааст!</div></div></div>
    <div class="game-timer" id="gameTimer">60</div>
    <div class="game-score" id="gameScoreLbl">Ҷуфт: 0/8</div>
    <div class="game-grid">
      <div class="game-col" id="gameColHz"></div>
      <div class="game-col" id="gameColTj"></div>
    </div>`;
  const colHz = document.getElementById('gameColHz');
  const colTj = document.getElementById('gameColTj');
  hzCol.forEach(v=>{
    const d = document.createElement('div');
    d.className = 'game-item'; d.dataset.id = v.hz+'|'+v.lesson;
    d.innerHTML = '<span class="hz">'+v.hz+'</span>';
    d.onclick = ()=> gamePick(d, 'hz', v);
    colHz.appendChild(d);
  });
  tjCol.forEach(v=>{
    const d = document.createElement('div');
    d.className = 'game-item'; d.dataset.id = v.hz+'|'+v.lesson;
    d.textContent = v.tj;
    d.onclick = ()=> gamePick(d, 'tj', v);
    colTj.appendChild(d);
  });
  clearInterval(gameTimer);
  gameTimer = setInterval(()=>{
    gameSeconds--;
    const t = document.getElementById('gameTimer');
    if(t) t.textContent = gameSeconds;
    if(gameSeconds <= 0){
      clearInterval(gameTimer);
      const panel2 = document.getElementById('panel');
      if(panel2) panel2.insertAdjacentHTML('afterbegin', '<div class="note" style="color:var(--seal);font-weight:600;">Вақт тамом шуд! Натиҷа: '+gameScore+'/8. Бозиро аз нав кунед: тугмаи "Бозӣ"-ро боз зер кунед.</div>');
    }
  }, 1000);
}
function gamePick(el, side, v){
  if(el.classList.contains('matched')) return;
  if(side === 'hz'){
    if(gameSelectedHz) gameSelectedHz.el.classList.remove('selected');
    gameSelectedHz = { el, v };
    el.classList.add('selected');
  } else {
    if(gameSelectedTj) gameSelectedTj.el.classList.remove('selected');
    gameSelectedTj = { el, v };
    el.classList.add('selected');
  }
  if(gameSelectedHz && gameSelectedTj){
    if(gameSelectedHz.v.hz === gameSelectedTj.v.hz && gameSelectedHz.v.lesson === gameSelectedTj.v.lesson){
      gameSelectedHz.el.classList.add('matched'); gameSelectedHz.el.classList.remove('selected');
      gameSelectedTj.el.classList.add('matched'); gameSelectedTj.el.classList.remove('selected');
      gameScore++;
      const lbl = document.getElementById('gameScoreLbl');
      if(lbl) lbl.textContent = 'Ҷуфт: ' + gameScore + '/8';
      if(gameScore >= 8){
        clearInterval(gameTimer);
        const panel2 = document.getElementById('panel');
        if(panel2) panel2.insertAdjacentHTML('afterbegin', '<div class="note" style="color:var(--jade-dark);font-weight:600;">Офарин! Ҳамаро ёфтед дар '+(60-gameSeconds)+' сония!</div>');
      }
    } else {
      setTimeout(()=>{
        if(gameSelectedHz) gameSelectedHz.el.classList.remove('selected');
        if(gameSelectedTj) gameSelectedTj.el.classList.remove('selected');
        gameSelectedHz = null; gameSelectedTj = null;
      }, 500);
      return;
    }
    gameSelectedHz = null; gameSelectedTj = null;
  }
}

/* ---------- Final exam (50 questions sampled from all learned vocab) ---------- */
function buildExamQuestions(){
  const learned = VOCAB.filter(v => v.lesson < lessonUnlocked || v.lesson === 1);
  const pool = learned.length >= 20 ? learned : VOCAB;
  const shuffled = [...pool].sort(()=>Math.random()-0.5);
  const n = Math.min(50, shuffled.length);
  const qs = [];
  for(let i=0;i<n;i++){
    const correct = shuffled[i];
    const distractors = pool.filter(v=>v.hz!==correct.hz).sort(()=>Math.random()-0.5).slice(0,2);
    const options = [correct, ...distractors].sort(()=>Math.random()-0.5);
    qs.push({ correct, options });
  }
  return qs;
}
/* ---------- Асосҳои Пиньин (supplementary reference material) ---------- */
function renderBasicsView(){
  const panel = document.getElementById('panel');
  panel.innerHTML = `
    <div class="panel-head">
      <div class="titles">
        <div class="zh">拼音基础</div>
        <div class="en">Асосҳои Пиньин — маводи иловагӣ пеш аз дарсҳо</div>
      </div>
    </div>
    <div class="section-sub">Пиньин (拼音) низоми ба ҳарфи лотинӣ навиштани талаффузи хитоист. Худи хат (ҳарфҳои хитоӣ) бо талаффуз алоқаи мустақим надорад — барои ҳамин пиньин барои омӯзандагон эҷод шудааст. Пеш аз сар кардани дарсҳо, ин саҳифаро як бор бо диққат бинед.</div>

    <div class="section-lbl">1. Чор оҳанг (声调)</div>
    <div class="section-sub">Дар забони хитоӣ ҳар ҳиҷо оҳанг дорад — тағйири оҳанг маънои калимаро тағйир медиҳад. Мисол: 妈 (mā, модар), 麻 (má, канаб), 马 (mǎ, асп), 骂 (mà, дашном).</div>
    <div class="tonebox">
      <div class="t"><div class="mark">mā ¯</div><div class="name">Оҳанги 1 — баланд, ҳамвор</div><button class="playbtn" onclick="playAudio('','妈')">&#128266;</button></div>
      <div class="t"><div class="mark">má ˊ</div><div class="name">Оҳанги 2 — бардошта</div><button class="playbtn" onclick="playAudio('','麻')">&#128266;</button></div>
      <div class="t"><div class="mark">mǎ ˇ</div><div class="name">Оҳанги 3 — фуруду боло</div><button class="playbtn" onclick="playAudio('','马')">&#128266;</button></div>
      <div class="t"><div class="mark">mà ˋ</div><div class="name">Оҳанги 4 — тез фуруд</div><button class="playbtn" onclick="playAudio('','骂')">&#128266;</button></div>
    </div>
    <div class="note">Дар дарсҳои 1–15 барои ҳар як бо ҳам омадани оҳангҳо (масалан 3+3, 3+1, 1+2 ва ғ.) машқи алоҳида ҳаст — онҳоро дар дарсҳои дахлдор бинед.</div>

    <div class="section-lbl">2. Ҳамсадоҳо (声母 — initials)</div>
    <div class="section-sub">Ҳамсадои аввали ҳиҷо. Гуруҳбандӣ бо ҷои ҳосилшавии садо:</div>
    <div class="drillgrid" style="grid-template-columns:repeat(6,1fr);">
      <div class="drillcard">b<span class="transcript"><br>[б]</span></div>
      <div class="drillcard">p<span class="transcript"><br>[пх]</span></div>
      <div class="drillcard">m<span class="transcript"><br>[м]</span></div>
      <div class="drillcard">f<span class="transcript"><br>[ф]</span></div>
      <div class="drillcard">d<span class="transcript"><br>[д]</span></div>
      <div class="drillcard">t<span class="transcript"><br>[тх]</span></div>
      <div class="drillcard">n<span class="transcript"><br>[н]</span></div>
      <div class="drillcard">l<span class="transcript"><br>[л]</span></div>
      <div class="drillcard">g<span class="transcript"><br>[г]</span></div>
      <div class="drillcard">k<span class="transcript"><br>[кх]</span></div>
      <div class="drillcard">h<span class="transcript"><br>[х]</span></div>
      <div class="drillcard">j<span class="transcript"><br>[ҷ мулоим]</span></div>
      <div class="drillcard">q<span class="transcript"><br>[чх мулоим]</span></div>
      <div class="drillcard">x<span class="transcript"><br>[с мулоим]</span></div>
      <div class="drillcard">zh<span class="transcript"><br>[җ]</span></div>
      <div class="drillcard">ch<span class="transcript"><br>[чх]</span></div>
      <div class="drillcard">sh<span class="transcript"><br>[ш]</span></div>
      <div class="drillcard">r<span class="transcript"><br>[ж/р мулоим]</span></div>
      <div class="drillcard">z<span class="transcript"><br>[дз]</span></div>
      <div class="drillcard">c<span class="transcript"><br>[тс]</span></div>
      <div class="drillcard">s<span class="transcript"><br>[с]</span></div>
      <div class="drillcard">y<span class="transcript"><br>[й]</span></div>
      <div class="drillcard">w<span class="transcript"><br>[в/у]</span></div>
    </div>
    <div class="note">Ҳарфҳои <b>j, q, x</b> аз <b>zh, ch, sh</b> фарқ доранд — якум мулоим (забон дар пеш), дуюм ғафс (забон каме ба қафо). Дар дарсҳои 3, 4, 13 ва 15 машқҳои алоҳида барои фарқ гузоштани онҳо ҳастанд.</div>

    <div class="section-lbl">3. Садонокҳо (韵母 — finals)</div>
    <div class="drillgrid" style="grid-template-columns:repeat(6,1fr);">
      <div class="drillcard">a<span class="transcript"><br>[а]</span></div>
      <div class="drillcard">o<span class="transcript"><br>[о]</span></div>
      <div class="drillcard">e<span class="transcript"><br>[ы/э]</span></div>
      <div class="drillcard">i<span class="transcript"><br>[и]</span></div>
      <div class="drillcard">u<span class="transcript"><br>[у]</span></div>
      <div class="drillcard">ü<span class="transcript"><br>[ю мулоим]</span></div>
      <div class="drillcard">ai<span class="transcript"><br>[ай]</span></div>
      <div class="drillcard">ei<span class="transcript"><br>[эй]</span></div>
      <div class="drillcard">ao<span class="transcript"><br>[ао]</span></div>
      <div class="drillcard">ou<span class="transcript"><br>[оу]</span></div>
      <div class="drillcard">an<span class="transcript"><br>[ан]</span></div>
      <div class="drillcard">en<span class="transcript"><br>[эн]</span></div>
      <div class="drillcard">in<span class="transcript"><br>[ин]</span></div>
      <div class="drillcard">ang<span class="transcript"><br>[ан ғунна]</span></div>
      <div class="drillcard">eng<span class="transcript"><br>[эн ғунна]</span></div>
      <div class="drillcard">ing<span class="transcript"><br>[ин ғунна]</span></div>
      <div class="drillcard">ong<span class="transcript"><br>[ун ғунна]</span></div>
      <div class="drillcard">er<span class="transcript"><br>[эр]</span></div>
    </div>
    <div class="note">Ҳарфҳои бо <b>-ng</b> тамомшуда бо бинӣ талаффуз мешаванд (садои ғунна), дар ҳоле ки <b>-n</b> бе ин хусусият аст. Фарқи <b>an/ang</b>, <b>en/eng</b>, <b>in/ing</b>-ро бодиққат гӯш кунед.</div>

    <div class="section-lbl">4. Барномаи омӯзиш — тавсия</div>
    <div class="wordgrid">
      <div class="wordcard"><div class="hz">①</div><div class="tj">Пеш аз ҳар дарс, суръати овозро (дар боло, 🔊) ба «Оҳиста» гузоред, то ҳар ҳиҷоро равшан бишнавед.</div></div>
      <div class="wordcard"><div class="hz">②</div><div class="tj">Ҳар калимаро баланд такрор кунед — на танҳо гӯш кунед.</div></div>
      <div class="wordcard"><div class="hz">③</div><div class="tj">Баъд аз ҳар дарс «Флешкартаҳо» ва «Бозӣ»-ро истифода баред, то калимаҳо дар хотир монанд.</div></div>
      <div class="wordcard"><div class="hz">④</div><div class="tj">Вақте ба суръат одат кардед, суръатро ба «Тез» баргардонед — забони воқеӣ бо суръати муқаррарӣ гуфта мешавад.</div></div>
    </div>
  `;
}

function renderExamView(){
  const qs = buildExamQuestions();
  const panel = document.getElementById('panel');
  let html = '<div class="panel-head"><div class="titles"><div class="zh">Тести ниҳоии HSK1</div><div class="en">'+qs.length+' савол — маънои ҳарфро интихоб кунед</div></div></div>';
  qs.forEach((q, idx)=>{
    html += `<div class="qcard"><div class="q">${idx+1}. ${q.correct.hz} <span style="font-style:italic;color:var(--seal-dark);">(${q.correct.py})</span> — маънояш чист?</div><div class="opts">`;
    q.options.forEach((o,oi)=>{
      html += `<label><input type="radio" name="exq${idx}" value="${o.hz===q.correct.hz?'right':'wrong'}">${o.tj}</label>`;
    });
    html += '</div></div>';
  });
  html += `<div id="examError" style="display:none;color:var(--seal);font-size:13px;margin-bottom:10px;">Ба ҳамаи саволҳо ҷавоб диҳед.</div>
    <button class="quizbtn" onclick="submitExam(${qs.length})">Супоридани тести ниҳоӣ</button>
    <div class="result" id="examResult">
      <div class="seal" id="examSeal"></div>
      <div class="score" id="examScoreText"></div>
      <div class="msg" id="examScoreMsg"></div>
    </div>`;
  panel.innerHTML = html;
}
function submitExam(total){
  let answered = 0, correct = 0;
  for(let i=0;i<total;i++){
    const sel = document.querySelector('input[name="exq'+i+'"]:checked');
    if(sel){ answered++; if(sel.value === 'right') correct++; }
  }
  if(answered < total){ document.getElementById('examError').style.display = 'block'; return; }
  document.getElementById('examError').style.display = 'none';
  const pct = Math.round(correct/total*100);
  const result = document.getElementById('examResult');
  const seal = document.getElementById('examSeal');
  result.className = 'result show ' + (pct >= 60 ? 'pass' : 'fail');
  seal.textContent = pct >= 60 ? 'ГУЗАШТ' : '';
  document.getElementById('examScoreText').textContent = pct + '%';
  document.getElementById('examScoreMsg').textContent = correct + '/' + total + ' дуруст. ' + (pct >= 60 ? 'Табрик — шумо HSK1-ро гузаштед!' : 'Боз кӯшиш кунед — камтар аз 60%.');
}

applyDark();
try{
  const sel = document.getElementById('speedSelect');
  if(sel){ sel.value = String(voiceSpeed); }
}catch(e){}

renderPath();
openLesson(1);

/* ===================== Auth modal (login / register) ===================== */

const API_BASE = 'http://localhost:5000/api';

function openAuthScreen(){
  document.getElementById('authModalOverlay').classList.add('open');
}
function closeAuthScreen(){
  document.getElementById('authModalOverlay').classList.remove('open');
}
document.getElementById('authModalOverlay').addEventListener('click', (e)=>{
  if(e.target.id === 'authModalOverlay') closeAuthScreen();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeAuthScreen();
});

const authCard = document.getElementById('authCard');
document.getElementById('toSignUp').onclick = () => authCard.classList.add('right-panel-active');
document.getElementById('toSignIn').onclick = () => authCard.classList.remove('right-panel-active');

function setAuthMsg(elId, text, isError){
  const el = document.getElementById(elId);
  el.textContent = text;
  el.className = 'auth-msg ' + (isError ? 'error' : 'ok');
}

function checkUserStatus(){
  const authBtn = document.getElementById('authBtn');
  const token = localStorage.getItem('hsk1_token');
  const userRaw = localStorage.getItem('hsk1_user');
  if(token && userRaw){
    const user = JSON.parse(userRaw);
    authBtn.textContent = user.name + ' · Баромадан';
    authBtn.classList.add('logged-in');
    authBtn.onclick = () => {
      localStorage.removeItem('hsk1_token');
      localStorage.removeItem('hsk1_user');
      checkUserStatus();
    };
  } else {
    authBtn.textContent = 'Воридшавӣ';
    authBtn.classList.remove('logged-in');
    authBtn.onclick = openAuthScreen;
  }
}
checkUserStatus();

document.getElementById('signinForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  setAuthMsg('signinMsg', 'Дар ҳоли санҷиш...', false);
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) { setAuthMsg('signinMsg', data.error || 'Хатои воридшавӣ.', true); return; }
    localStorage.setItem('hsk1_token', data.token);
    localStorage.setItem('hsk1_user', JSON.stringify(data.user));
    setAuthMsg('signinMsg', 'Хуш омадед, ' + data.user.name + '!', false);
    checkUserStatus();
    setTimeout(closeAuthScreen, 700);
  } catch (err) {
    setAuthMsg('signinMsg', 'Сервер дастрас нест. Бекендро санҷед (node server.js).', true);
  }
});

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  setAuthMsg('signupMsg', 'Дар ҳоли сабти ном...', false);
  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) { setAuthMsg('signupMsg', data.error || 'Хатои сабти ном.', true); return; }
    localStorage.setItem('hsk1_token', data.token);
    localStorage.setItem('hsk1_user', JSON.stringify(data.user));
    setAuthMsg('signupMsg', 'Аккаунт сохта шуд! Хуш омадед, ' + data.user.name + '.', false);
    checkUserStatus();
    setTimeout(closeAuthScreen, 700);
  } catch (err) {
    setAuthMsg('signupMsg', 'Сервер дастрас нест. Бекендро санҷед (node server.js).', true);
  }
});
// Санҷиши пайвастшавӣ ба бекэнд
fetch('http://localhost:5000/api/words')
  .then(res => res.json())
  .then(data => {
    console.log('Луғатҳо аз бекэнд:', data);
  })
  .catch(err => console.error('Хатогӣ ҳангоми пайвастшавӣ:', err));

// 1. Пайвасти формаи Воридшавӣ (Login)
const signinForm = document.getElementById('signinForm');
if (signinForm) {
  signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        localStorage.setItem('hsk1_token', data.token);
        localStorage.setItem('hsk1_user', JSON.stringify(data.user));
        if (typeof closeAuthScreen === 'function') closeAuthScreen();
      }
    } catch (err) {
      alert('Хатогӣ ҳангоми пайвастшавӣ ба сервер!');
    }
  });
}

// 2. Пайвасти формаи Сабти ном (Register)
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');

    const name = nameInput ? nameInput.value : 'Корбар';
    const email = emailInput ? emailInput.value : '';
    const password = passwordInput ? passwordInput.value : '';

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        localStorage.setItem('hsk1_token', data.token);
        localStorage.setItem('hsk1_user', JSON.stringify(data.user));
        if (typeof closeAuthScreen === 'function') closeAuthScreen();
      }
    } catch (err) {
      alert('Хатогӣ ҳангоми пайвастшавӣ ба сервер!');
    }
  });
}
// Илова кардани функсияи фиристодани пешрафт ба бекэнд
function saveProgressToBackend(progressValue) {
  const user = JSON.parse(localStorage.getItem('hsk1_user'));
  if (!user || !user.id) return;

  fetch('http://localhost:5000/api/auth/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: user.id, progress: progressValue })
  })
  .then(res => res.json())
  .then(data => console.log('Пешрафт дар база сабт шуд:', data))
  .catch(err => console.error('Хатогии сабти пешрафт:', err));
}
// Функсияи боргирии Сертификати PDF
function downloadCertificate() {
  const user = JSON.parse(localStorage.getItem('hsk1_user'));
  if (!user || !user.id) {
    alert('Лутфан аввал ба система ворид шавед!');
    return;
  }

  window.open(`http://localhost:5000/api/certificates/download/${user.id}`, '_blank');
}
// Санҷиши натиҷаи тест ва кушодани дарси навӣ
function checkQuizResult(score, totalQuestions, currentLesson) {
  const percentage = (score / totalQuestions) * 100;

  if (percentage >= 80) {
    alert(`Офарин! Шумо ${percentage.toFixed(0)}% балл гирифтед. Дарси навбати кушода шуд!`);
    
    // Кушодани дарси навбатӣ
    if (currentLesson >= lessonUnlocked) {
      lessonUnlocked = currentLesson + 1;
      saveProgress(); // Сабти пешрафт дар база
    }

    // Агар ҳамаи 15 дарс хатм шуда бошад, сертификатро ба Gmail мефиристем
    if (lessonUnlocked > TOTAL_LESSONS) {
      sendCertificateToEmail();
    }
  } else {
    alert(`Натиҷаи шумо: ${percentage.toFixed(0)}%. Барои кушодани дарси навбати ҳадди ақал 80% лозим аст. Лутфан аз нав санҷед!`);
  }
}

// Функсияи даъвати фиристодани почта
function sendCertificateToEmail() {
  const user = JSON.parse(localStorage.getItem('hsk1_user'));
  if (!user || !user.id) return;

  fetch(`http://localhost:5000/api/certificates/send-email/${user.id}`)
    .then(res => res.json())
    .then(data => alert('🎓 Сертификат ба почтаи электронӣ (Gmail)-и шумо фиристода шуд!'))
    .catch(err => console.error('Хатогии фиристодани почта:', err));
}
document.addEventListener('DOMContentLoaded', () => {

  // 1. САБТИ НОМ (SignUp / Register)
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Пешгирӣ аз перезагрузкаи саҳифа

      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value.trim();
      const msgDiv = document.getElementById('signupMsg');

      try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
          if (msgDiv) msgDiv.textContent = data.message;
          alert(data.message); // Намоиши паёми хатогӣ (масалан: "Ин почта аллакай сабт шудааст!")
          return;
        }

        // Сабти муваффақона
        alert('✅ ' + data.message);
        localStorage.setItem('hsk1_user', JSON.stringify(data.user));
        localStorage.setItem('hsk1_token', data.token);

        closeAuthScreen();
        window.location.reload(); // Саҳифаро нав мекунем, то аккаунти нав фаъол шавад

      } catch (err) {
        console.error('Хатогӣ:', err);
        alert('Хатогӣ дар пайвастшавӣ ба сервер!');
      }
    });
  }

  // 2. ВОРИДШАВӢ (SignIn / Login)
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message);
          return;
        }

        alert('✅ ' + data.message);
        localStorage.setItem('hsk1_user', JSON.stringify(data.user));
        localStorage.setItem('hsk1_token', data.token);

        closeAuthScreen();
        window.location.reload();

      } catch (err) {
        console.error('Хатогӣ:', err);
        alert('Хатогӣ дар пайвастшавӣ ба сервер!');
      }
    });
  }

});
// 1. Фиристодани коди тасдиқ ба почта
async function handleSendCode() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const msgDiv = document.getElementById('signupMsg');

  if (!email || !password) {
    msgDiv.innerText = 'Лутфан почта ва паролро пур кунед!';
    msgDiv.style.color = 'red';
    return;
  }

  msgDiv.innerText = 'Дар ҳоли фиристодани код...';
  msgDiv.style.color = 'blue';

  try {
    const res = await fetch('http://localhost:5000/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    msgDiv.innerText = data.message;

    if (res.ok) {
      msgDiv.style.color = 'green';
      document.getElementById('codeStep').style.display = 'block';
      document.getElementById('verifyBtn').style.display = 'block';
      document.getElementById('sendCodeBtn').style.display = 'none';
    } else {
      msgDiv.style.color = 'red';
    }
  } catch (err) {
    msgDiv.innerText = 'Хатогӣ дар пайвастшавӣ ба сервер!';
    msgDiv.style.color = 'red';
  }
}

// 2. Санҷидани код ва сабти номи корбар
document.getElementById('signupForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('regEmail').value.trim();
  const code = document.getElementById('regCode').value.trim();
  const msgDiv = document.getElementById('signupMsg');

  try {
    const res = await fetch('http://localhost:5000/api/auth/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code })
    });

    const data = await res.json();

    if (!res.ok) {
      msgDiv.innerText = data.message;
      msgDiv.style.color = 'red';
      return;
    }

    msgDiv.innerText = '✅ ' + data.message;
    msgDiv.style.color = 'green';

    localStorage.setItem('hsk1_user', JSON.stringify(data.user));
    localStorage.setItem('hsk1_token', data.token);

    setTimeout(() => {
      window.location.reload();
    }, 1500);

  } catch (err) {
    msgDiv.innerText = 'Хатогӣ ҳангоми тасдиқи код!';
    msgDiv.style.color = 'red';
  }
});