# 内容维护指南

## 1. 修改个人简介 / 教育 / 论文

编辑：

```text
assets/data/profile.js
```

对应字段：

- `summary`：专业摘要
- `capabilities`：核心能力
- `education`：教育 / 访问经历
- `publications`：论文
- `patents`：专利
- `awards`：获奖

首页会自动更新，不需要改 `index.html`。

## 2. 修改一个项目

编辑：

```text
assets/data/projects.js
```

每个项目用唯一 `id` 标识，例如：

```js
{
  id: 'space-continuum',
  title: '某空间连续体机械臂项目',
  period: '2021.05 — 2024.12',
  summary: '...',
  tags: ['Cosserat Rod', 'Multi-IMU'],
  highlights: ['主要工作 1', '主要工作 2'],
  results: ['结果 1', '结果 2'],
  sections: [
    {
      title: '形态感知',
      paragraphs: ['这里写详细说明。'],
      media: []
    }
  ]
}
```

首页卡片和对应详情页都会读取同一份数据。

## 3. 给项目增加图片

先把图片放入：

```text
assets/media/projects/<项目ID>/
```

然后在该项目某个 `section.media` 中加入：

```js
{
  src: 'assets/media/projects/space-continuum/new-test.jpg',
  alt: '实验平台照片',
  caption: '实验平台与传感器布置'
}
```

图片会自动进入双列画廊，点击后可放大。

## 4. 增加 GIF

GIF 与普通图片使用完全相同的写法：

```js
{
  src: 'assets/media/projects/space-continuum/shape-reconstruction.gif',
  alt: '实时形态重构 GIF',
  caption: '分布式 IMU 实时形态重构'
}
```

浏览器会自动播放 GIF。建议单个 GIF 尽量压缩到 10 MB 以下，以减少 GitHub Pages 首次加载时间。

## 5. 增加 MP4 / WebM 视频

把视频放到对应项目目录，然后写：

```js
{
  kind: 'video',
  src: 'assets/media/projects/space-continuum/demo.mp4',
  caption: '轨迹跟踪实验'
}
```

详情页会自动渲染为带控制条的视频播放器。

## 6. 新增一个项目

1. 在 `assets/data/projects.js` 中新增项目对象，并设置唯一 `id`。
2. 新建目录：

```text
projects/<项目ID>/
```

3. 复制任意现有项目的 `index.html`，只修改 `<body>` 上的 `data-project`：

```html
<body class="project-page" data-project="你的项目ID" data-root="../../">
```

4. 可选：新建媒体目录：

```text
assets/media/projects/<项目ID>/
```

这样首页会自动出现新项目卡片，详情页也会由公共渲染器自动生成。

## 7. 建议的项目详情组织

对于后续补充内容，推荐每个科研 / 工程项目按以下顺序组织：

1. 背景与问题
2. 我的职责
3. 系统 / 机械设计
4. 建模与算法
5. 软件架构
6. 实验与结果
7. 图片 / GIF / 视频
8. 论文、专利或代码链接

这样会比按照“本科 / 硕士 / 博士”逐页堆内容更适合作为求职和科研主页。
