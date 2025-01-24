# 基于ESP32_CAM的无感链接小车

ESP32视频小车

![demo car](doc/demo_car.jpg)

## 硬件设计

- ESP32-CAM
  
## 软件设计

``` file tree
TUP_Robot/
├─.vscode
├─doc
├─HTML #HTML测试文件
├─Python #Python测试文件
│  ├─CHeck_IP
│  ├─Flask_test
│  ├─Get_local
│  ├─ScanWiFi
│  ├─Scapy
│  ├─UDP
│  └─WebSocket
├─Source #官方例程
│  └─CameraWebServer
├─TUP_Robot #单片机文件
│  ├─wificar #AP版
│  ├─wificar_sta #STA版
│  └─wificar_udp #UDP版（待测试）
└─WebView
    ├─audio
    ├─images
    ├─css
    └─js
    index.html #主页
```

## 通信框架

![demo car](doc/frame.png)

## 交互设计

### 欢迎界面

![demo car](doc/welcome.png)

### 主界面

![demo car](doc/main.png)

视频链接画面

![demo car](doc/main-2.png)

### 设置界面

按P键进入设置界面

![demo car](doc/dialog.png)

### 按键交互

- WASD 控制方向
- 左键 射击
- 待开发（可在WebView/js/scripts.js中添加）

## 使用

``` git bash

git clone https://github.com/TUP_Robot.git

```

### PC端

将热点名称改为`TUP_Robot`

将热点密码改为`12345678`

``` windows
//对应代码文件TUP_Robot/TUP_Robot/wificar_sta.ino

const char *ssid = "TUP_Robot";    // 你的WiFi名称
const char *password = "12345678"; // 你的WiFi密码

```

热点频段选择`2.4Ghz`

### 单片机

烧录TUP_Robot/wificar_sta.ino

### 网页端

打开WebView中的index.html文件

运行WebSocket.py

按P键进入设置界面，点击刷新，1S后自动读取机器人IP，点击登录，连接成功后，即可开始控制机器人

### 客户端

下载最新版release，TUP_Client客户端

### 手机端

热点打开后，手机连接热点，打开浏览器输入`http://192.168.4.1/`，即可访问小车控制页面

## 注意

## 后续改进

@125YueYuanhaoo
