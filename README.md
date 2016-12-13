# angular-clipboard-directive
angular-clipboard Directive using clipboard.js that without using flash

# 安装
> npm install angular-clipboard-directive --save

# 用法
## 引入clipboard.js
在你的页面中引入`clipboard.js`、和`angular-clipboard-directive`js文件
## 加载依赖
将`angular-clipboard`添加到你的应用的依赖中
```javascript
angular.module('myApp', ['angular-clipboard']);
```
## 使用方法
```html
<!-- Target -->
    <textarea id="bar" ng-model='text'></textarea>
    <!-- Trigger -->
    <button class="btn"  clip-action="copy" clip-model="text" clip-alert='true' clip-success-text="地址已经复制到剪贴板!" clipboard>
        复制到剪贴板
    </button>
```
其中button按钮拥有4个属性分别为：
* clip-action：设置行为，默认是copy，还可以设置为cut；
* clip-model：需要复制的model，这里的model要等于前面的`ng-model='text'`;
* clip-alert：是否需要弹出框提醒，true是弹出框提醒，false则不弹出；
* clip-success-text：弹出框提醒文字。
