---
title: 《Go语言高级开发与实战》系列03：Web编程 从基础到分布式实战
createTime: 2026/04/02 15:58:48
permalink: /article/tv5dau1k/
tags:
  - 《Go语言高级开发与实战》系列
  - Go语言
---
> 本文基于《Go语言高级开发与实战》第3章内容，系统讲解Go Web编程的核心技术。涵盖HTTP服务器创建、请求处理、HTTP/2和HTTP/3编程、Socket通信（TCP/UDP）、MySQL与Redis使用技巧、gRPC框架应用，以及一个完整的分布式爬虫系统实战。通过大量代码示例，帮助读者掌握Go语言在Web后端开发中的实战能力。

## 一、Go Web基础

### 1.1 接收HTTP请求

#### 1. 服务器创建

Go语言通过 `net/http` 包轻松构建HTTP服务器：

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func hiWorld(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi, Web World!")
}

func main() {
    http.HandleFunc("/hi", hiWorld)
    if err := http.ListenAndServe(":8085", nil); err != nil {
        log.Fatal(err)
    }
}
```

- `http.ListenAndServe(":8085", nil)`：启动8085端口服务器，第二个参数为nil时使用默认多路复用器 `DefaultServeMux`
- 浏览器访问 `http://127.0.0.1:8085/hi` 即可看到输出

**服务器请求响应流程**：

1. 客户端发送请求
2. 多路复用器接收请求
3. 根据URL找到注册的处理器
4. 处理器执行业务逻辑（可能访问数据库）
5. 调用模板引擎渲染数据
6. 通过HTTP响应返回客户端
7. 客户端渲染展示

#### 2. 多路复用器

`DefaultServeMux` 是 `net/http` 包默认提供的多路复用器（`ServeMux`实例）。`HandleFunc` 内部调用 `DefaultServeMux.HandleFunc` 注册处理器。

#### 3. 处理器和处理器函数

**处理器（Handler）**：实现 `Handler` 接口的结构，接口定义：

```go
type Handler interface {
    ServeHTTP(w ResponseWriter, r *Request)
}
```

**处理器函数**：

```go
http.HandleFunc("/", hello)

func hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello Web.")
}
```

### 1.2 处理HTTP请求

#### 1. Request结构体

`net/http` 包中的 `Request` 结构体封装了HTTP请求报文，包含 `Method`、`URL`、`Header`、`Body`、`Form`、`PostForm` 等字段。

#### 2. 请求URL

URL结构体定义：

```go
type URL struct {
    Scheme   string
    Opaque   string
    User     *Userinfo
    Host     string
    Path     string
    RawQuery string
    Fragment string
    // ...
}
```

使用 `url.Parse()` 可解析URL字符串。

#### 3. 请求首部

`Header` 类型为 `map[string][]string`，提供 `Get`、`Set`、`Add`、`Del`、`Write` 等方法。

#### 4. 请求主体

`Body` 字段类型为 `io.ReadCloser`（组合了 `io.Reader` 和 `io.Closer`）。可通过 `Body.Read()` 读取主体内容。

#### 5. ResponseWriter接口

`ResponseWriter` 接口用于创建HTTP响应，包含三个方法：

- `Header() Header`：设置/获取响应头
- `Write([]byte) (int, error)`：写入响应体
- `WriteHeader(statusCode int)`：设置状态码

底层由 `http.response` 结构体支撑。

## 二、Go HTTP/2编程

### 2.1 HTTP/1.1的问题

- 高延迟导致页面加载慢
- 无状态使头部信息量大
- 明文传输不安全
- 不支持服务器推送

### 2.2 HTTP/2简介

HTTP/2基于Google的SPDY协议，于2015年发布。主要特性：

- 二进制分帧
- 多路复用（单一连接）
- 头部压缩（HPACK）
- 服务器推送
- 请求优先级

性能提升20%~60%。

### 2.3 Go HTTP/2编程实例

Go的 `net/http` 包默认支持HTTP/2，但必须与TLS一起使用。

**生成自签名证书**（Linux/macOS）：

```bash
openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt
```

**服务器端代码**：

```go
package main

import (
    "golang.org/x/net/http2"
    "log"
    "net/http"
    "time"
)

const idleTimeout = 5 * time.Minute
const activeTimeout = 10 * time.Minute

func main() {
    var srv http.Server
    srv.Addr = ":8972"
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("hello http2"))
    })
    http2.ConfigureServer(&srv, &http2.Server{})
    go func() {
        log.Fatal(srv.ListenAndServeTLS("server.crt", "server.key"))
    }()
    select {}
}
```

浏览器访问 `https://127.0.0.1:8972` 即可。

## 三、Go HTTP/3编程

### 3.1 HTTP/3简介

HTTP/3 弃用TCP，改用基于UDP的 **QUIC协议**，主要解决HTTP/2的队头阻塞问题。

**QUIC新功能**：

1. **0-RTT**：缓存会话上下文，恢复连接时0个RTT即可发送数据，比TLS会话复用更快
2. **多路复用**：单个连接上的多个stream之间无依赖，一个丢包不影响其他stream
3. **加密认证报文**：头部认证、主体加密，防止篡改和窃听
4. **向前纠错（FEC）**：每个包包含其他包的部分数据，少量丢包可直接组装无需重传

### 3.2 Go HTTP/3编程实例

官方尚未支持，可使用第三方库 `github.com/lucas-clemente/quic-go`。

**服务器端**：

```go
import "github.com/lucas-clemente/quic-go/http3"

func main() {
    handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "this is http3 root")
    })
    server := &http3.Server{
        Server: &http.Server{Addr: ":8088", Handler: handler},
    }
    server.ListenAndServeTLS("server.crt", "server.key")
}
```

**客户端**：

```go
roundTripper := &http3.RoundTripper{
    TLSClientConfig: &tls.Config{RootCAs: pool},
}
defer roundTripper.Close()
httpClient := &http.Client{Transport: roundTripper}
resp, err := httpClient.Get("https://localhost:8088")
```

## 四、Go Socket编程

### 4.1 Socket简介

Socket是应用层与传输层之间的抽象层，封装了TCP/IP协议，提供进程间通信的端点。

### 4.2 TCP Socket

使用 `net.Dial()` 建立连接：

```go
conn, err := net.Dial("tcp", "192.168.0.1:8087")
```

`DialTCP` 用于更精细的控制。

连接成功后使用 `Write()` 发送、`Read()` 接收。

### 4.3 UDP Socket

UDP无连接，使用 `ResolveUDPAddr` 解析地址，`ListenUDP` 监听，`ReadFromUDP` / `WriteToUDP` 收发数据。

### 4.4 【实战】简易聊天程序

#### TCP版

**服务器端**：监听端口，每个连接启动一个goroutine处理读写。

**客户端**：拨号连接，从标准输入读取并发送，接收服务器响应。

#### UDP版

**服务器端**：无连接，直接监听UDP端口，收到消息后回复“收到~”。

**客户端**：`DialUDP` 建立连接，发送消息，接收回复。

## 五、Go MySQL使用技巧

### 5.1 使用database/sql

**导入驱动**：

```go
import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)
```

**连接数据库**：

```go
db, err := sql.Open("mysql", "user:password@tcp(127.0.0.1:3306)/dbname")
defer db.Close()
err = db.Ping()  // 验证连接
```

**连接池配置**：

```go
db.SetMaxOpenConns(100)   // 最大打开连接数
db.SetMaxIdleConns(10)    // 最大空闲连接数
```

### 5.2 数据库查询

**多行查询**：

```go
rows, err := db.Query("SELECT id, name FROM users WHERE id > ?", 1)
defer rows.Close()
for rows.Next() {
    var id int
    var name string
    rows.Scan(&id, &name)
}
err = rows.Err()
```

**预处理语句**：

```go
stmt, err := db.Prepare("SELECT name FROM users WHERE id = ?")
defer stmt.Close()
rows, err := stmt.Query(1)
```

**单行查询**：

```go
var name string
err := db.QueryRow("SELECT name FROM users WHERE id = ?", 1).Scan(&name)
```

**插入/更新/删除**：

```go
res, err := db.Exec("INSERT INTO users(name) VALUES(?)", "Shirdon")
lastId, _ := res.LastInsertId()
rowCnt, _ := res.RowsAffected()
```

### 5.3 事务处理

```go
tx, err := db.Begin()
defer tx.Rollback()  // 确保异常回滚

_, err = tx.Exec("UPDATE users SET score = score + 1 WHERE id = ?", 1)
if err != nil {
    return
}
err = tx.Commit()
```

### 5.4 错误处理技巧

- 使用 `rows.Err()` 检查迭代错误
- `sql.ErrNoRows` 表示空结果集
- 识别特定数据库错误：通过驱动提供的错误码（如 `mysql.MySQLError`）
- 处理NULL：使用 `sql.NullString` 等类型，或用 `COALESCE` 函数

### 5.5 连接池监控

```go
stat := db.Stats()
fmt.Printf("MaxOpen: %d, Open: %d, InUse: %d, Idle: %d\n",
    stat.MaxOpenConnections, stat.OpenConnections, stat.InUse, stat.Idle)
```

### 5.6 常见ORM

#### Gorm

安装：`go get -u github.com/jinzhu/gorm`

基本操作：

```go
db, _ := gorm.Open("mysql", "user:pass@/dbname")
defer db.Close()

// 自动迁移
db.AutoMigrate(&User{})

// 插入
db.Save(&User{Name: "Shirdon"})

// 查询
db.Where("phone = ?", "13888888888").First(&user)

// 更新
db.Model(&user).Update("phone", "13999999999")

// 删除
db.Where("phone = ?", "13888888888").Delete(&User{})

// 事务
tx := db.Begin()
tx.Create(&user)
tx.Commit()
```

#### Beego ORM

安装：`go get github.com/astaxie/beego/orm`

使用：

```go
o := orm.NewOrm()
user := &BeegoUser{Id: 1}
err := o.Read(user)
num, err := o.Update(user)
num, err := o.Delete(user)
```

## 六、Go Redis使用技巧

### 6.1 使用redigo包

安装：`go get github.com/garyburd/redigo/redis`

**连接与操作**：

```go
conn, err := redis.Dial("tcp", "127.0.0.1:6379")
defer conn.Close()

// 执行命令
_, err = conn.Do("SET", "name", "Shirdon")
name, err := redis.String(conn.Do("GET", "name"))
```

**辅助函数**：`redis.String`、`redis.Int`、`redis.StringMap` 等用于类型转换。

### 6.2 实现排行榜（有序集合）

```go
// 增加积分
conn.Do("ZINCRBY", "rank:20210701", 5, "uid:1")

// 获取Top10降序
conn.Do("ZREVRANGE", "rank:20210701", 0, 9, "WITHSCORES")

// 获取某用户积分
score, _ := redis.Int(conn.Do("ZSCORE", "rank:20210701", "Jack"))
```

## 七、Go gRPC使用

### 7.1 gRPC简介

gRPC是Google开源的高性能RPC框架，支持多语言、跨平台，基于HTTP/2和Protocol Buffers。

### 7.2 环境搭建

1. 安装protobuf编译器：从官网下载，配置环境变量
2. 安装Go插件：

   ```bash
   go get -u github.com/golang/protobuf/proto
   go get -u github.com/golang/protobuf/protoc-gen-go
   ```

### 7.3 定义proto文件

```protobuf
syntax = "proto3";
package proto;

service StudentService {
    rpc GetStudentInfo (Request) returns (Response);
}

message Request {
    string name = 1;
}

message Response {
    int32 uid = 1;
    string username = 2;
    string grade = 3;
    repeated string goodAt = 4;
}
```

编译：

```bash
protoc --go_out=plugins=grpc:. student.proto
```

### 7.4 服务器端实现

```go
type StudentServiceServer struct{}

func (s *StudentServiceServer) GetStudentInfo(ctx context.Context, req *pb.Request) (*pb.Response, error) {
    return &pb.Response{
        Uid:      1,
        Username: req.Name,
        Grade:    "6",
        GoodAt:   []string{"Go", "Python"},
    }, nil
}

func main() {
    lis, _ := net.Listen("tcp", ":8078")
    s := grpc.NewServer()
    pb.RegisterStudentServiceServer(s, &StudentServiceServer{})
    s.Serve(lis)
}
```

### 7.5 客户端调用

```go
conn, _ := grpc.Dial(":8078", grpc.WithInsecure())
defer conn.Close()
client := pb.NewStudentServiceClient(conn)
resp, _ := client.GetStudentInfo(context.Background(), &pb.Request{Name: "barry"})
fmt.Printf("%v\n", resp)
```

## 八、【实战】分布式爬虫系统

### 8.1 系统设计

目标：爬取GitHub上Go语言热门项目页面。

- Master节点：分配任务，管理Worker
- Worker节点：执行实际爬取任务
- 通信方式：RPC（基于net/rpc）

### 8.2 分析URL规律

GitHub搜索分页参数为 `p`：

- 第1页：`https://github.com/search?q=go&type=Repositories&p=1`
- 第2页：`https://github.com/search?p=2&q=go&type=Repositories`

### 8.3 核心组件实现

**RPC调用封装**（`rpcCall.go`）：

```go
func call(srv, rpcName string, args, reply interface{}) bool {
    c, err := rpc.DialHTTP("tcp", srv)
    if err != nil { return false }
    defer c.Close()
    err = c.Call(rpcName, args, reply)
    return err == nil
}
```

**Master结构**：

```go
type Master struct {
    addr         string
    regChan      chan string
    workers      map[*WorkInfo]bool
    jobChan      chan string
}
```

**Worker结构**：

```go
type Worker struct {
    addr          string
    addUrlChannel chan bool
}

func (w *Worker) DoJob(args *DoJobArgs, res *DoJobReply) error {
    if args.JobType == "crawler" {
        crawler.Do(args.Urls)
        w.addUrlChannel <- true
    }
    return nil
}
```

**爬虫核心函数**：

```go
func Get(url string) (result string, err error) {
    resp, err := http.Get(url)
    if err != nil { return }
    defer resp.Body.Close()
    buf := make([]byte, 4*1024)
    for {
        n, err := resp.Body.Read(buf)
        if err == io.EOF { break }
        result += string(buf[:n])
    }
    return
}

func SpiderPage(url string) {
    result, _ := Get(url)
    filename := "page_" + url + ".html"
    f, _ := os.Create(filename)
    f.WriteString(result)
    f.Close()
}
```

### 8.4 运行

启动Master：

```bash
go run crawler.go master 127.0.0.1:8806
```

启动Worker：

```bash
go run crawler.go worker 127.0.0.1:8806 127.0.0.1:8807
```

Master自动分配URL，Worker爬取并保存HTML文件。

## 九、回顾与启示

本章系统学习了：

- Go HTTP服务器的创建与请求处理
- HTTP/2和HTTP/3的新特性及Go实现
- TCP/UDP Socket编程与聊天室实战
- MySQL数据库操作（原生SQL、连接池、事务、ORM）
- Redis排行榜实现
- gRPC框架搭建微服务
- 分布式爬虫系统的完整设计

掌握这些Web开发核心技术，即可独立开发高性能、可扩展的Go后端服务。
