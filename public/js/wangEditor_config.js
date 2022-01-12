// wangEditor的所有配置项
// console.log(window.wangEditor);
const E = window.wangEditor
const editor = new E("#div1")
const { $, BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E

// 继承PanelMenu的公式功能
class Kityformula extends PanelMenu {
  // 公式编辑器
  constructor(editor) {
    // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
    const $elem = E.$(
      `<div class="w-e-menu">
                <i class="iconfont icongongshi" style="font-size:18px;"></i>
            </div>`
    );
    super($elem, editor);
  }
  // 菜单点击事件
  clickHandler() {
    // 做任何你想做的事情
    // 可参考【常用 API】文档，来操作编辑器

    // alert('hello world')
    const conf = createKityformula(editor);
    console.log(conf);
    const panel = new Panel(this, conf);
    panel.create();
  }
  // 菜单是否被激活（如果不需要，这个函数可以空着）
  tryChangeActive() {
    // 激活菜单
    // 1. 菜单 DOM 节点会增加一个 .w-e-active 的 css class
    // 2. this.this.isActive === true
    // this.active()
    // // 取消激活菜单
    // // 1. 菜单 DOM 节点会删掉 .w-e-active
    // // 2. this.this.isActive === false
    // this.unActive()
  }
}

// 继承PanelMenu的手写板功能
class Myscript extends PanelMenu {
  // 公式手写插件
  constructor(editor) {
    const $elem = E.$(
      `<div class="w-e-menu">
                <i class="iconfont iconshouxieban" style="font-size:18px;"></i>
            </div>`
    );
    super($elem, editor)
  }
  // 菜单点击事件
  clickHandler() {
    // 做任何你想做的事情
    // 可参考【常用 API】文档，来操作编辑器
    const conf = myscriptMath(editor)
    const panel = new Panel(this, conf)
    panel.create();
  }

  tryChangeActive() {}
}
// 注册公式菜单
const menuKey = "kityformulaKey"; // 菜单 key ，各个菜单不能重复
editor.menus.extend("kityformulaKey", Kityformula)
// 注册手写板菜单
const menuKey2 = "myscriptKey"; // 菜单 key ，各个菜单不能重复
editor.menus.extend("myscriptKey", Myscript)

// 注册菜单
E.registerMenu(menuKey, Kityformula)
E.registerMenu(menuKey2, Myscript)

// 挂载highlight（图片高亮）插件
editor.highlight = hljs;

/**
 * @基本配置开始
 */

// 配置 server API接口地址 后台接口地址 返回参数请查看wangEditor文档
editor.config.uploadImgServer = "./upload-img"
// 限制图片大小
editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
// 限制类型  默认为['jpg', 'jpeg', 'png', 'gif', 'bmp']
editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
// 限制图片上传个数
editor.config.uploadImgMaxLength = 5 // 一次最多上传 5 个图片
// 自定义上传参数
/* editor.config.uploadImgParams = {
  token: 'xxxxx',
  x: 100
} */

// 跨域上传中如果需要传递 cookie 需设置 withCredentials
// editor.config.withCredentials = true

// 自定义上传图片 可以查看wangEditor文档
/*
editor.config.customUploadImg = function (resultFiles, insertImgFn) {
  // resultFiles 是 input 中选中的文件列表
  // insertImgFn 是获取图片 url 后，插入到编辑器的方法

  // 上传图片，返回结果，将图片插入到编辑器中
  insertImgFn(imgUrl)
}
*/

// 可使用 base64 格式保存图片
// editor.config.uploadImgShowBase64 = true  // 这和uploadImgServer（上传图片到服务器）两者不能同时使用

// 配置视频 server API 接口地址
editor.config.uploadVideoServer = '/api/upload-video'

// 如果需要配置多语言 可以查看wangEditor文档

// 设置编辑区域高度为 500px  默认为300px
// editor.config.height = 500;

// 使用textarea同步Editor内容到其中
var text=$("#text1")
// 第一步，初始化 textarea 的值
text.html(editor.txt.html());
editor.config.onchange = function (html) {
  // 第二步，监控变化，同步更新到 textarea
  text.html(html);
  // console.log(11);
}

// 配置触发 onchange 的时间频率，默认为 200ms
// editor.config.onchangeTimeout = 500; // 修改为 500ms

// 配置颜色（文字颜色、背景色）
editor.config.colors = [
  '#000000',
  '#eeece0',
  '#1c487f',
  '#4d80bf'
]

// 配置字体
editor.config.fontNames = [
    // 对象形式 v4.6.16
    // {name:"黑体",value:"黑体"},
    // 字符串形式
    '黑体',
    '仿宋',
    '楷体',
    '标楷体',
    '华文仿宋',
    '华文楷体',
    '宋体',
    '微软雅黑',
    'Arial',
    'Tahoma',
    'Verdana',
    'Times New Roman',
    'Courier New',
]

// 配置行高
editor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3']

// 隐藏菜单栏提示
editor.config.showMenuTooltips = false

// 自定义检查插入的链接
editor.config.linkCheck = function(text, link) {
  // 以下情况，请三选一

  // 1. 返回 true ，说明检查通过
  return true

  // // 2. 返回一个字符串，说明检查未通过，编辑器会阻止链接插入。会 alert 出错误信息（即返回的字符串）
  // return '链接有 xxx 错误'

  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止链接插入。
  // 此处，你可以自定义提示错误信息，自由发挥
}

// 自定义检查插入图片的链接
// 参数中的imgSrc、alt、href分别代表图片地址、图片文本说明和跳转链接
// 后面两个参数是可选参数
editor.config.linkImgCheck = function(imgSrc,alt,href) {
  // 以下情况，请三选一

  // 1. 返回 true ，说明检查通过
  return true

  // // 2. 返回一个字符串，说明检查未通过，编辑器会阻止图片插入。会 alert 出错误信息（即返回的字符串）
  // return '图片 src 有 xxx 错误'

  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止图片插入。
  // 此处，你可以自定义提示错误信息，自由发挥
}

// 自定义检查插入视频的链接
editor.config.onlineVideoCheck = function(video) {
  // 编辑器会根据返回的内容做校验：比如以下几种情况

  // 1. 返回 true ，说明检查通过
  return true

  // 2. 返回一个字符串，说明检查未通过，编辑器会阻止视频插入。会 alert 出错误信息（即返回的字符串）
  // return '插入的视频 有 xxx 错误'

  // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止视频插入。
  // 此处，你可以自定义提示错误信息，自由发挥
}

editor.config.pasteFilterStyle = false // 来关闭样式过滤 不适用于 IE11

editor.config.pasteIgnoreImg = true // 来忽略粘贴的图片 只粘贴文字 不粘贴图片

// 配置粘贴文本的内容处理
editor.config.pasteTextHandle = function (pasteStr) {
  // 对粘贴的文本进行处理，然后返回处理后的结果
  // 可以利用正则表达式进行过滤，然后返回新的文本
  return pasteStr
}

// 生成编辑器
editor.create();

// 得到编辑器html内容
function getHtml() {
  let htmls = editor.txt.html();
  // console.log(htmls);
  alert(htmls);
}
// 得到编辑器text内容
function getText() {
  let texts = editor.txt.text();
  alert(texts);
}
// 清空编辑器内容
function clearCont() {
  editor.txt.clear();
  text.html(' ');
}
