# luoluo926.github.io

个人学术主页，原生静态站点（HTML + CSS + JS，无构建步骤），由 GitHub Pages 从 `main` 分支根目录直接发布。

线上地址：https://luoluo926.github.io/

## 目录结构

```
.
├── index.html                  # 首页语义结构，仅通过相对路径引用样式/脚本/图片
├── styles/
│   └── main.css                # 全站字体、颜色、间距、布局、组件规则
├── scripts/
│   └── main.js                 # 导航菜单等交互逻辑（JS 关闭时正文仍可阅读）
├── assets/
│   ├── avatar/                 # 头像 / hero 照片 / og 分享图
│   ├── icons/                  # favicon 等图标
│   └── projects/               # 各项目配图，按项目名称分子目录存放
├── projects/
│   └── sheng-guan-tu/
│       └── index.html          # 「升官图」项目独立详情页
└── README.md
```

## 1. 本地预览

仓库根目录下任选其一：

```bash
# Python 3
python -m http.server 8000

# 或 Node
npx serve .
```

然后打开 http://localhost:8000 。

直接双击 `index.html` 也能看，但相对路径在 `file://` 下部分浏览器可能限制脚本/资源，建议用本地服务器预览。

## 2. 修改首页文案

所有文案都在 `index.html` 中，按区块定位：

| 区块 | 选择器 |
|---|---|
| Hero 大标题与简介 | `.hero` |
| Research 兴趣列表 | `#research .interest-list` |
| Background 时间线 | `#background .timeline` |
| Projects 项目卡片 | `#projects .project-grid` |
| Contact | `.closing` |
| 页脚 | `.site-footer` |

时间统一写作 `2024 to 2028` 这类自然表述，**不要使用长破折号（— / --）**。

## 3. 替换头像 / 项目配图

- **Hero 头像**：替换 `assets/avatar/hero.jpg`（建议宽高比接近 1:1，文件名保持 `hero.jpg`）。同步替换 `assets/avatar/og-image.jpg`（社交分享缩略图，可与头像同图）。
- **favicon**：替换 `assets/icons/favicon.svg`。
- **项目配图**：项目卡片使用懒加载，图片不存在时自动显示文字占位、不会出现破图。把真实截图放到对应目录即可自动加载：
  - 升官图：`assets/projects/sheng-guan-tu/shengguan-screenshot.jpg`（或 `.png`）
  - 天元心市：`assets/projects/tianyuan/tianyuan-screenshot.jpg`（或 `.png`）

## 4. 新增一个项目

1. 新建目录 `projects/<项目名>/`，放一个 `index.html` 作为详情页（可复制 `projects/sheng-guan-tu/index.html` 改写）。
2. 把项目配图放到 `assets/projects/<项目名>/`。
3. 在首页 `index.html` 的 `#projects .project-grid` 里新增一个 `<article class="project">`，把 `<h3>` 包一层链接指向 `projects/<项目名>/`，`data-image` 指向新配图路径。

全局样式与脚本无需改动。

## 发布

所有改动提交到 `main` 分支后，GitHub Pages 自动从根目录发布，无需额外配置。

```bash
git add .
git commit -m "update site"
git push origin main
```
