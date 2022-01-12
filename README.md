## github预览地址
https://123lujiaqiang.github.io/wangEditor_KITYandMATH/

## 关于此项目

1. 集成了Kityformula和MyscriptMathweb的wangEditor富文本编辑器

2. 初步参考wangEditor-formula(基于vue的实现)，github地址：https://github.com/mirror29/wangEditor-formula

3. 关于wangEditor的使用，请参考：https://www.wangeditor.com/

## 关于kityformula的使用说明

1. 在**public**中，存放这kityformula包，里面的index.html就是kityformula的页面文件；

2. 我们自定义了一个js文件**kityformula.js**(在public/js目录下)，用于生成kityformula的实例；

3. 在**kityformula.js**中，我们在拼接的模板字符中的**iframe**标签中的使用src属性引入了kityformula包中的**index.html**；

4. 至此，我们可以在生成wangEditor编辑器的页面引入**kityformula.js**，以便将kityformula集成到wangEditor中；

### 对于myscriptMath的使用说明

1. 由于myscriptMath的使用需要申请两个key（也就是手写公式功能），所以在预览页面中，此功能是不能使用的；

2. 如果需要使用此功能的朋友，可以拉取代码，然后在**myscriptMath**文件中的**index.html**文件中，填写自己的key；

3. 申请地址：https://developer.myscript.com/getting-started/web

## 注意

本wangEditor编辑器的实现全部基于HTML，未使用任何框架。