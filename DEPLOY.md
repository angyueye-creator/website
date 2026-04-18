# 微晖医疗官网部署指南

## 快速部署

小伙伴只需要三步：

```bash
# 1. 克隆仓库（替换为实际 GitLab 地址）
git clone <仓库地址>
cd website

# 2. 安装依赖
pnpm install

# 3. 构建
pnpm run build
```

构建产物在 `dist/` 目录，直接部署即可。

---

## 部署方式

### 方式一：Nginx（推荐）

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存（代码分割后的 chunk 文件）
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 方式二：Docker

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

```bash
docker build -t weihui-website .
docker run -d -p 80:80 weihui-website
```

### 方式三：静态托管

将 `dist/` 目录上传到：
- 阿里云 OSS
- 腾讯云 COS
- Vercel / Netlify

---

## 文件结构（构建后）

```
dist/
├── index.html              # 入口
├── vendors.*.js            # 第三方库（282K，缓存）
├── main.*.js               # 主应用（46K）
├── *.chunk.js              # 页面懒加载（5-10K each）
└── assets/                 # 静态资源
    ├── logo.png
    └── weihui-english-朝阳橙.svg
```

---

## 本地预览

```bash
cd dist
python3 -m http.server 8080
# 或
npx serve .
```

访问 http://localhost:8080

---

## 注意事项

- **路由模式**: HashRouter（URL 带 `#`，如 `/#/about`）
- **浏览器**: 支持现代浏览器
- **HTTPS**: 生产环境建议启用

---

有问题找叶昂越 or 叶知秋 🍂