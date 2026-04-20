# 微晖医疗官网项目

本项目是一个基于 React + TypeScript + Webpack + Tailwind CSS 的企业官网，聚焦医疗行业数字化管理场景，包含首页、产品中心、解决方案、关于我们等页面。

## 功能概览

- 官网展示与品牌内容呈现
- 产品中心（9 大子系统）介绍
- 四大行业解决方案展示
- 关于我们、客户案例与联系方式
- 响应式导航与移动端菜单
- 页面级懒加载与代码分割

## 技术栈

- 前端框架：React 18、TypeScript
- 路由：React Router v6（`HashRouter`）
- 动效：Framer Motion
- 图标：Lucide React
- 样式：Tailwind CSS + PostCSS
- 构建工具：Webpack 5 + Babel
- 数据能力：Supabase JS SDK

## 页面与路由

- `/`：首页
- `/products`：产品中心
- `/solutions`：解决方案
- `/about`：关于我们

说明：项目使用 `HashRouter`，浏览器地址通常为 `/#/products` 这种形式。

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发环境

```bash
pnpm run dev
```

默认开发端口见 `webpack.config.js`（当前为 `3266`）。

### 3. 类型检查

```bash
pnpm run typecheck
```

### 4. 代码检查与格式化

```bash
pnpm run lint      # ESLint 检查并自动修复
pnpm run format    # Prettier 格式化代码
```

### 5. 生产构建

```bash
pnpm run build
```

构建产物输出到 `dist/`。

## 测试

### E2E 测试（Playwright）

```bash
pnpm run test:e2e        # 运行所有 E2E 测试
pnpm run test:e2e:ui     # 交互模式运行测试
```

测试覆盖：路由导航、页面加载、UI 组件、无控制台错误。

### 运行完整检查

```bash
pnpm run test            # typecheck + lint + test:e2e
```

## 项目结构

```text
website/
├── assets/                   # 静态资源
├── src/
│   ├── components/           # 通用组件（如 Layout）
│   ├── hooks/                # 自定义 Hooks
│   ├── pages/                # 页面组件（Home/Products/Solutions/About）
│   ├── styles/               # 全局样式与 Tailwind 入口
│   ├── supabase/             # Supabase 客户端与类型
│   ├── App.tsx               # 路由与页面懒加载
│   └── index.tsx             # 应用入口
├── index.html                # HTML 模板
├── webpack.config.js         # Webpack 配置
├── tailwind.config.js        # Tailwind 主题配置
└── DEPLOY.md                 # 部署说明
```

## 部署

可参考 `DEPLOY.md`，支持以下方式：

- Nginx 静态站点部署
- Docker 镜像部署
- Vercel/Netlify/对象存储静态托管

## 开发注意事项

- 项目依赖 `pnpm-lock.yaml`，建议统一使用 `pnpm`
- 路由为 Hash 模式，如需改为 History 模式，需要同步调整服务器回退配置
- `src/supabase/client.ts` 由工具生成，建议避免手动改动生成逻辑
