# 清华大学网络学堂默认卡片模式

自动将清华大学网络学堂(https://learn.tsinghua.edu.cn)课程列表页的默认显示方式从列表模式切换为卡片模式。

## 安装

选择以下任一方式：

### 方式一：Chrome 扩展

1. 浏览器打开 `chrome://extensions`
2. 右上角开启 **开发者模式**
3. 点击左上角 **加载已解压的扩展程序**
4. 选择 `extension/` 文件夹
5. 刷新课程页面即可

### 方式二：Tampermonkey 用户脚本

1. 浏览器安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展
2. 打开 Tampermonkey → 管理面板 → 新建脚本
3. 将 `userscript/tsinghua-card-mode.user.js` 内容粘贴进去
4. Ctrl + S保存
5. 刷新课程页面