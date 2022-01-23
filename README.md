:
## 启用 corepack

```shell
# Node.js >=16.10
corepack enable

# Node.js <16.10
npm i -g corepack
```

[https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

## 添加 IDE 支持

* vscode 请安装 [ZipFs](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) 插件，参考：(https://yarnpkg.com/getting-started/editor-sdks)

## 设置 shell 代理

set http_proxy=http://127.0.0.1:7890 && set https_proxy=http://127.0.0.1:7890
