# tauri

- Tauri仅能接受Next.js所生成的静态文件，使用Next.js的静态网站生成模式。

## src-tauri

### Cargo.toml

- Cargo.toml是Cargo的清单文件。可以声明在应用所依赖的Rust包和应用的元数据等等。

### tauri.conf.json
- tauri.conf.json让自定义Tauri应用的各方面，包括应用名称到允许的API列表。

### src/main.ts

- 这是Rust程序的入口点和我们启动Tauri的地方。

```rust
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

- 1. 由`cfg!宏`所开始的一行仅有一个目的: 关闭构建好的应用在Windows上运行时一般会出现的控制台窗口。若您是Windows用户，您可以试试去掉这行看看会发生什么。
- 2. `main`函数是您程序的入口点，也是运行时调用的第一个函数。


### 图标



