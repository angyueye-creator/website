## PR 标题

```
fix: 修复 CI 流程依赖遗漏、测试代码问题及文档规范
```

## PR 描述

### 修复内容

- **ci.yml**: `build` job 的 `needs` 依赖从仅 `lint-and-typecheck` 改为 `[lint-and-typecheck, e2e-tests]`，确保 lint 和 E2E 测试均通过后才执行构建
- **ci.yml**: 添加 `concurrency` 配置，防止同一分支或 PR 的多个 CI 任务同时运行造成资源浪费和潜在冲突
- **release-build.yml**: 添加 `concurrency` 配置，基于 `github.event.release.tag_name` 分组，取消同一 tag 的重复构建任务
- **release-build.yml**: 修复 `cd -` 回退目录的方式，改为 `WORKDIR="$PWD"` 保存初始路径再使用绝对路径拼接，避免依赖 shell 历史状态

### 测试代码修复

- **navigation.spec.ts**: 修复 `page.on('pageerror')` 事件监听器在 `for` 循环内重复绑定导致的内存泄漏问题，将监听器绑定移到循环外部
- **basic.spec.ts**: 移除硬编码的 `page.waitForTimeout(500)` 等待，改为 `expect(locator).toBeVisible({ timeout: 5000 })` 动态等待
- **basic.spec.ts**: 修复编辑时遗留的 `mobileMenu` 未定义变量引用

### Playwright 多浏览器覆盖

- **playwright.config.ts**: 在 `projects` 配置中添加 Firefox 和 WebKit 项目，补充 Chromium 之外的浏览器覆盖

### 文档规范

- **README.md**: 修复 `pnnpm run build` 拼写错误，改为 `pnpm run build`
- **DEPLOY.md**: 移除文件末尾的 emoji 字符（🍂），符合项目规范
