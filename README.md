:running:BGAIssueBlog:running:
============

### [使用了该博客系统的个人博客站点列表](https://github.com/bingoogolapple/BGAIssueBlog/issues/4)，如果你的个人博客站点也使用了该博客系统，希望你能追加你的个人博客站点链接到这里面

## 目录

* [项目背景](#项目背景)
* [效果图](#效果图)
* [使用方法](#使用方法)
* [关于我](#关于我)
* [打赏支持](#打赏支持)

## 项目背景

刚接触 GitHub 的时候就开始在仓库 [bingoogolapple.github.io](https://github.com/bingoogolapple/bingoogolapple.github.io) 里创建 [Issues](https://github.com/bingoogolapple/bingoogolapple.github.io/issues) 来记录学习笔记，那时候我还不知道有 GitHub Pages，后来了解到了可以通过 GitHub Pages 来搭建 [个人博客站点](http://www.bingoogolapple.cn)，但是如果涉及到在文章里嵌套图片的话还是比较麻烦的

通过 Issues 记录学习笔记的优点：

- [x] 在线编辑和预览，随时添加和提交（不用担心电脑坏了导致笔记丢失）
- [x] 当笔记里到嵌套图片时，支持粘贴屏幕截图和拖拽添加图片
- [x] 带有搜索和排序功能
- [x] 可通过 Label 来对 Issues 进行分类
- [x] 可以把每一个 Comment 作为一个小的知识点不停的追加到 Issue 里
- [x] 结合 GitHub Pages 绑定域名来搭建个人博客站点

## 效果图

> 列表界面

![列表界面](https://user-images.githubusercontent.com/8949716/29306642-28079ec8-81d1-11e7-959f-4da1e0dc488a.png)

> 详情界面

![详情界面](https://user-images.githubusercontent.com/8949716/29306679-4bb2d824-81d1-11e7-9e9b-d792f17aaf89.png)
![详情界面-滚动到顶部和评论](https://user-images.githubusercontent.com/8949716/29306736-809e28c2-81d1-11e7-8252-8526a3baedbd.png)

> 关于我界面

![关于我界面](https://user-images.githubusercontent.com/8949716/29306836-d88c4c12-81d1-11e7-80c6-d461c05abeca.png)

## 使用方法

#### 本地运行

> 1.安装依赖

```
npm install
```
> 2.在本地开启服务，然后就可以通过 http://localhost:8080 访问了

```
npm run dev
```
> 3.[创建 OAuth Application](https://github.com/settings/applications/new)

![OAuth Application](https://user-images.githubusercontent.com/8949716/29244726-34983f0c-7ff2-11e7-98a7-6435b419c8dd.png)
> 4.个人配置 - 修改「BGAIssueBlog/src/store/modules/account.js」文件中的「state」属性

```JavaScript
const state = {
  accessToken: localStorage.getItem(LS_KEY_ACCESS_TOKEN),  // 这个不要修改，这个不要修改，这个不要修改。当前登录用户的 GitHub AccessToken
  auth: {
    proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', // 这个不要修改，这个不要修改，这个不要修改。
    clientID: '8fe09ec96875938b908d',   // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client ID
    clientSecret: '46df51ccde6f3499c3b90861bba660fb1bcf15e4'  // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client Secret
  },
  gitHubUser: null,  // 这个不要修改，这个不要修改，这个不要修改。
  gitHubUsername: 'bingoogolapple',  // 修改成你自己的 GitHub 账号
  copyright: '2014 - 2017',  // 修改成你自己的
  recordNumber: '蜀ICP备17023604号',  // 修改成你自己的备案编号，如果没有备案的话就设置为 null
  repo: 'bingoogolapple/bingoogolapple.github.io',  // 记录 Issue 的仓库的全名「用户名/仓库名」
  pageSize: 10,  // 博客列表每页显示多少条博客
  showQQGroup: true,  // 如果要显示你自己的 QQ 群二维码图片的话这里配置成 true 并且替换「BGAIssueBlog-Web/static/img/qq-group.png」为你自己的 QQ 群二维码图片，否则配置成 false 即可
  thirdPartySite: [  // 配置你想在左上角展示的第三方站点信息
    {
      img: 'static/img/github.png',  // 第三方站点图标，存放在「BGAIssueBlog-Web/static/img」目录中
      url: 'https://github.com/bingoogolapple'  // 第三方站点的 url
    },
    {
      img: 'static/img/weibo.png',
      url: 'http://weibo.com/bingoogol'
    },
    {
      img: 'static/img/git.png',
      url: 'https://bingoogolapple.gitbooks.io/bgalearningnotes-git/content'
    }
    // 如果还有其他站点需要显示，继续在这里追加
  ]
}
```
> 5.个人配置 - 修改网站图标

```
修改「BGAIssueBlog/static/img/favicon.ico」文件
```
> 6.个人配置 - 修改网站标题

```
修改「BGAIssueBlog/index.html」文件里「<title>」标签里的内容
```

#### 发布到 GitHub Pages

> 1.打包

```
npm run build
```
> 2.发布

```
拷贝「BGAIssueBlog/docs」目录里的所有文件到「GitHub Pages」的根目录下
并将「GitHub Pages」仓库 PUSH 到 GitHub 上
```

#### 绑定域名到 GitHub Pages

> 1.在「GitHub Pages」根目录下添加文件名为「CNAME」的文件，文件内容就是你的二级域名，例如我的是

```
www.bingoogolapple.cn
```
> 2.登录你的域名控制台添加域名解析

```
「记录类型」选择「CNAME」
「主机记录」填「www」
「记录值」填「GitHub用户名.github.io」，例如我的是「bingoogolapple.github.io」
```

## 3. 提高 API 访问次数的配额

默认情况下你是用匿名权限访问 github 接口的， github 的访问限制是一个小时最多 60 次请求，这显然是不够的，如何提高限制呢？ 

1. 到个人设置下的 Personal access tokens 页（https://github.com/settings/tokens ），如下图，点击右上角的 Generate new token
    
    ![](http://img-storage.qiniudn.com/15-6-12/56879685.jpg)

2. 填写名称，只勾选 `public_repo`,然后保存，github 会生成一个可访问你公开项目的 access_token，将它填入到配置文件的 access_token 的值中，并取消注释。
    ![](http://img-storage.qiniudn.com/15-6-12/64340386.jpg)
    
3. 打开 `store/modules/accounts`, 配置 `SET_ACCESS_TOKEN`参数

## License

    Copyright 2016 bingoogolapple

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
