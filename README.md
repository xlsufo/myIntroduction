# 许立松 · 模块化个人主页

这是一个为 GitHub Pages 设计的纯静态、模块化个人主页。个人信息、科研成果与项目内容分别维护，项目详情页共享统一渲染逻辑。

## 目录结构

```text
.
├── index.html                      # 首页骨架
├── projects/                       # 每个项目一个独立 URL
│   ├── ssm-soft-robot/index.html
│   ├── space-continuum/index.html
│   └── ...
├── assets/
│   ├── css/
│   │   ├── tokens.css              # 颜色、尺寸等设计变量
│   │   ├── global.css              # 全站公共样式
│   │   ├── home.css                # 首页样式
│   │   └── project.css             # 项目详情页样式
│   ├── data/
│   │   ├── profile.js              # 个人简介、教育、论文、专利、奖项
│   │   └── projects.js             # 所有项目文字、标签、媒体和详情章节
│   ├── js/
│   │   ├── home.js                 # 首页渲染
│   │   ├── project.js              # 项目页通用渲染器
│   │   ├── theme.js                # 深浅色主题
│   │   └── utils.js                # 公共工具
│   └── media/
│       ├── contact/                # 联系方式二维码
│       └── projects/<项目ID>/      # 每个项目自己的图片 / GIF / 视频
├── CONTENT_GUIDE.md                # 如何增加项目、图片、GIF、视频
└── .nojekyll
```

## 为什么这样拆分

- 简历中的内容只维护在 `assets/data/profile.js` 和 `assets/data/projects.js`。
- 项目页共用一个 `project.js` 渲染器，不需要为每个项目复制大段 HTML。
- 新增图片或 GIF 时，只需要放入项目媒体目录并在 `projects.js` 中添加一条媒体记录。
- GitHub Pages 可以直接部署，不需要 Node.js、VuePress、Vite 或构建命令。

## 本地预览

当前版本不依赖 ES Modules，可以直接双击根目录的 `index.html` 预览。也可以在项目根目录启动本地 HTTP 服务：

```bash
python3 -m http.server 8000
```

然后浏览器打开 `http://localhost:8000/`。

## GitHub Pages 部署

1. 将整个目录上传到 GitHub 仓库根目录。
2. 打开仓库 `Settings → Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. 选择 `main` 和 `/(root)`。
5. 保存后等待 GitHub Pages 发布。

项目使用相对路径，因此既适合 `username.github.io`，也适合 `username.github.io/repository-name/` 形式的 Pages 地址。



## 网站图标

网站 favicon 已统一使用仓库根目录的 `app_icon.ico`。`icon.rc` 同样引用该文件，因此网页与 Windows 资源脚本使用同一图标资源。
