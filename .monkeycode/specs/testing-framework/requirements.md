# 测试框架需求文档

## 1. 概述

本项目为 Weihui Medical 网站前端项目添加完整的测试框架，确保代码质量、构建安全和功能正确性。

## 2. 需求

### 2.1 构建质量保障

**用户故事:** 作为开发者，我希望每次构建都必须通过质量检查，以确保部署的代码始终可用。

#### 验收标准

1. WHEN 执行 `npm run build` 命令，THEN 系统 SHALL 执行完整构建流程
2. WHEN 构建过程出现任何错误，THEN 系统 SHALL 返回非零退出码并终止构建
3. WHEN TypeScript 类型检查失败，THEN 系统 SHALL 阻止构建并输出错误信息
4. WHEN ESLint 检查发现错误，THEN 系统 SHALL 阻止构建并输出错误信息

### 2.2 代码格式统一

**用户故事:** 作为开发者，我希望代码格式自动统一，以减少代码审查时的格式问题。

#### 验收标准

1. WHEN 执行 `npm run lint` 命令，THEN 系统 SHALL 检查所有 TypeScript/TSX 文件的代码风格
2. WHEN 代码存在格式问题，THEN 系统 SHALL 自动修复可修复的问题
3. WHEN 执行 `npm run format` 命令，THEN 系统 SHALL 使用 Prettier 格式化所有代码文件
4. WHEN ESLint 配置的规则被违反，THEN 系统 SHALL 报告具体的规则违规位置

### 2.3 依赖安全检查

**用户故事:** 作为开发者，我希望在构建时自动检查依赖漏洞，以防止使用有安全问题的包。

#### 验收标准

1. WHEN 执行 `npm run build` 或 `npm run audit` 命令，THEN 系统 SHALL 使用 npm audit 检查所有依赖
2. WHEN 发现高危漏洞（Critical/High），THEN 系统 SHALL 阻止构建并输出漏洞报告
3. WHEN 发现中危漏洞（Medium），THEN 系统 SHALL 输出警告但允许构建继续
4. WHEN 漏洞检查完成，THEN 系统 SHALL 生成包含漏洞详情的报告

### 2.4 路由功能测试

**用户故事:** 作为开发者，我希望自动化测试验证页面路由正常工作，以确保用户导航功能正常。

#### 验收标准

1. WHEN 执行 `npm run test:e2e` 命令，THEN 系统 SHALL 使用 Playwright 运行端到端测试
2. WHEN 用户点击导航链接，THEN 系统 SHALL 验证页面正确跳转到目标路由
3. WHEN 访问 `/`、`/products`、`/solutions`、`/about` 路径，THEN 系统 SHALL 验证页面正确加载且无控制台错误
4. WHEN 路由测试失败，THEN 系统 SHALL 返回非零退出码

### 2.5 UI 组件测试

**用户故事:** 作为开发者，我希望有 UI 测试来确保组件渲染正常且无运行时错误。

#### 验收标准

1. WHEN 执行 `npm run test:ui` 命令，THEN 系统 SHALL 使用 Playwright 进行 UI 测试
2. WHEN 页面加载时，THEN 系统 SHALL 验证页面无控制台错误（Error 级别）
3. WHEN 页面存在交互元素，THEN 系统 SHALL 验证元素可点击且响应正常
4. WHEN UI 测试发现错误，THEN 系统 SHALL 截图并保存测试报告

## 3. 测试工具选型

| 测试类型    | 工具              | 说明           |
| ----------- | ----------------- | -------------- |
| 代码格式    | ESLint + Prettier | 统一代码风格   |
| 类型检查    | TypeScript        | 编译时类型检查 |
| 依赖安全    | npm audit         | 检查漏洞       |
| E2E/UI 测试 | Playwright        | 跨浏览器测试   |
| 预提交检查  | lint-staged       | Git hooks      |

## 4. 约束条件

- 测试框架必须与现有 Webpack + React + TypeScript 技术栈兼容
- 测试命令应在 5 分钟内完成（排除首次下载浏览器）
- 所有测试必须支持 CI/CD 集成
