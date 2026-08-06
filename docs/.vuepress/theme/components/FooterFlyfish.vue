<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

/**
 * 页脚小鱼游动动画
 * 源码来自 FixIt 主题组件 hugo-fixit/cmpt-flyfish（作者 Lruihao，原始算法作者不详）
 * 已移植到 VuePress + vuepress-theme-plume：
 *  - 去掉 Hugo 的 @params 依赖，颜色写进组件常量
 *  - 挂载点 .footer -> .vp-footer
 *  - 暗色判断 fixit.isDark -> document.documentElement.dataset.theme === 'dark'
 *  - window.onload -> onMounted，onBeforeUnmount 完整清理
 *  - 增加 prefers-reduced-motion 与页面隐藏时暂停
 */

// 水面/鱼填充色，贴合本站主题：浅色品牌蓝 / 深色磷光绿（带透明度，让网格背景透出）
// 学作者：浅色用实色淡蓝（作者是实色淡紫 #e6e5f8），深色用半透明绿（作者深色是半透明白）
const COLOR_LIGHT = '#dbe7fb' // 浅色：品牌蓝的极淡实色
const COLOR_DARK = 'rgb(69 221 127 / 12%)' // 深色：磷光绿半透明

let renderer: any = null

// 水面波动点
function SURFACE_POINT(this: any, renderer: any, x: number) {
  this.renderer = renderer
  this.x = x
  this.init()
}
SURFACE_POINT.prototype = {
  SPRING_CONSTANT: 0.03,
  SPRING_FRICTION: 0.9,
  WAVE_SPREAD: 0.3,
  ACCELARATION_RATE: 0.01,
  init(this: any) {
    this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE
    this.height = this.initHeight
    this.fy = 0
    this.force = { previous: 0, next: 0 }
  },
  setPreviousPoint(this: any, previous: any) { this.previous = previous },
  setNextPoint(this: any, next: any) { this.next = next },
  interfere(this: any, y: number, velocity: number) {
    this.fy = this.renderer.height * this.ACCELARATION_RATE
      * (this.renderer.height - this.height - y >= 0 ? -1 : 1)
      * Math.abs(velocity)
  },
  updateSelf(this: any) {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height)
    this.fy *= this.SPRING_FRICTION
    this.height += this.fy
  },
  updateNeighbors(this: any) {
    if (this.previous) this.force.previous = this.WAVE_SPREAD * (this.height - this.previous.height)
    if (this.next) this.force.next = this.WAVE_SPREAD * (this.height - this.next.height)
  },
  render(this: any, context: CanvasRenderingContext2D) {
    if (this.previous) { this.previous.height += this.force.previous; this.previous.fy += this.force.previous }
    if (this.next) { this.next.height += this.force.next; this.next.fy += this.force.next }
    context.lineTo(this.x, this.renderer.height - this.height)
  },
}

// 鱼
function FISH(this: any, renderer: any) {
  this.renderer = renderer
  this.init()
}
FISH.prototype = {
  GRAVITY: 0.4, // 原版默认
  init(this: any) {
    this.direction = Math.random() < 0.5
    this.x = this.direction ? this.renderer.width + this.renderer.THRESHOLD : -this.renderer.THRESHOLD
    this.previousY = this.y
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1) // 原版默认
    if (this.renderer.reverse) {
      this.y = this.getRandomValue((this.renderer.height * 1) / 10, (this.renderer.height * 4) / 10)
      this.vy = this.getRandomValue(2, 5)
      this.ay = this.getRandomValue(0.05, 0.2)
    } else {
      this.y = this.getRandomValue((this.renderer.height * 6) / 10, (this.renderer.height * 9) / 10)
      this.vy = this.getRandomValue(-5, -2) // 原版默认
      this.ay = this.getRandomValue(-0.2, -0.05) // 原版默认
    }
    this.isOut = false
    this.theta = 0
    this.phi = 0
  },
  getRandomValue(this: any, min: number, max: number) { return min + (max - min) * Math.random() },
  controlStatus(this: any) {
    this.previousY = this.y
    this.x += this.vx
    this.y += this.vy
    this.vy += this.ay
    if (this.renderer.reverse) {
      if (this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE) { this.vy -= this.GRAVITY; this.isOut = true }
      else { if (this.isOut) this.ay = this.getRandomValue(0.05, 0.2); this.isOut = false }
    } else {
      if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) { this.vy += this.GRAVITY; this.isOut = true }
      else { if (this.isOut) this.ay = this.getRandomValue(-0.2, -0.05); this.isOut = false }
    }
    if (!this.isOut) {
      this.theta += Math.PI / 20; this.theta %= Math.PI * 2
      this.phi += Math.PI / 30; this.phi %= Math.PI * 2
    }
    this.renderer.generateEpicenter(
      this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
      this.y, this.y - this.previousY,
    )
    if ((this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD)
      || (this.vx < 0 && this.x < -this.renderer.THRESHOLD)) this.init()
  },
  render(this: any, context: CanvasRenderingContext2D) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(Math.PI + Math.atan2(this.vy, this.vx))
    context.scale(1, this.direction ? 1 : -1)
    context.beginPath()
    context.moveTo(-30, 0)
    context.bezierCurveTo(-20, 15, 15, 10, 40, 0)
    context.bezierCurveTo(15, -10, -20, -15, -30, 0)
    context.fill()
    context.save()
    context.translate(40, 0)
    context.scale(0.9 + 0.2 * Math.sin(this.theta), 1)
    context.beginPath()
    context.moveTo(0, 0)
    context.quadraticCurveTo(5, 10, 20, 8)
    context.quadraticCurveTo(12, 5, 10, 0)
    context.quadraticCurveTo(12, -5, 20, -8)
    context.quadraticCurveTo(5, -10, 0, 0)
    context.fill()
    context.restore()
    context.save()
    context.translate(-3, 0)
    context.rotate((Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) * (this.renderer.reverse ? -1 : 1))
    context.beginPath()
    if (this.renderer.reverse) {
      context.moveTo(5, 0)
      context.bezierCurveTo(10, 10, 10, 30, 0, 40)
      context.bezierCurveTo(-12, 25, -8, 10, 0, 0)
    } else {
      context.moveTo(-5, 0)
      context.bezierCurveTo(-10, -10, -10, -30, 0, -40)
      context.bezierCurveTo(12, -25, 8, -10, 0, 0)
    }
    context.closePath()
    context.fill()
    context.restore()
    context.restore()
    this.controlStatus()
  },
}

onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  const footer = document.querySelector('.vp-footer') as HTMLElement | null
  if (!footer) return

  const RENDERER: any = {
    POINT_INTERVAL: 5,
    FISH_COUNT: 3,
    MAX_INTERVAL_COUNT: 50,
    INIT_HEIGHT_RATE: 0.5, // 原版默认：水线在中间，上方留一半空气给鱼跃出
    THRESHOLD: 50,
    WATCH_INTERVAL: 100,
    rafId: 0,
    disposed: false,

    init() {
      this.setParameters()
      this.setStyle()
      this.reconstructMethods()
      this.setup()
      this.bindEvent()
      this.render()
    },
    setParameters() {
      this.window = window
      this.container = document.createElement('div')
      this.container.id = 'flyfish'
      this.canvas = document.createElement('canvas')
      this.context = this.canvas.getContext('2d')
      this.points = []
      this.fishes = []
      this.watchIds = []
      footer!.appendChild(this.container)
    },
    setStyle() {
      const style = document.createElement('style')
      style.id = 'flyfish-style'
      style.innerHTML = `
      .vp-footer {
        position: relative; min-height: 230px;
        display: flex; align-items: center; justify-content: center;
      }
      /* 强制版权容器全宽居中，覆盖主题带侧栏时的负 margin，保证在水面正中 */
      .vp-footer .container {
        width: 100%; max-width: 100%; margin: 0; text-align: center;
      }
      #flyfish {
        position: absolute; width: 100%; height: 230px;
        overflow: hidden; left: 0; bottom: 0; z-index: 0;
        pointer-events: none;
      }`
      document.head.appendChild(style)
      this.styleEl = style
    },
    createSurfacePoints() {
      const count = Math.round(this.width / this.POINT_INTERVAL)
      this.pointInterval = this.width / (count - 1)
      this.points.push(new SURFACE_POINT(this, 0))
      for (let i = 1; i < count; i++) {
        const point = new SURFACE_POINT(this, i * this.pointInterval)
        const previous = this.points[i - 1]
        point.setPreviousPoint(previous)
        previous.setNextPoint(point)
        this.points.push(point)
      }
    },
    reconstructMethods() {
      this.watchWindowSize = this.watchWindowSize.bind(this)
      this.jdugeToStopResize = this.jdugeToStopResize.bind(this)
      this.startEpicenter = this.startEpicenter.bind(this)
      this.moveEpicenter = this.moveEpicenter.bind(this)
      this.render = this.render.bind(this)
    },
    setup() {
      this.points.length = 0
      this.fishes.length = 0
      this.watchIds.length = 0
      this.intervalCount = this.MAX_INTERVAL_COUNT
      this.containerWidth = this.container.offsetWidth
      this.containerHeight = this.container.offsetHeight
      this.width = this.containerWidth
      this.height = this.containerHeight
      this.fishCount = (((this.FISH_COUNT * this.width) / 500) * this.height) / 500
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.reverse = false
      this.container.appendChild(this.canvas)
      this.fishes.push(new FISH(this))
      this.createSurfacePoints()
    },
    watchWindowSize() {
      this.clearTimer()
      this.tmpWidth = this.window.innerWidth
      this.tmpHeight = this.window.innerHeight
      this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL))
    },
    clearTimer() {
      while (this.watchIds.length > 0) clearTimeout(this.watchIds.pop())
    },
    jdugeToStopResize() {
      const width = this.window.innerWidth
      const height = this.window.innerHeight
      const stopped = width === this.tmpWidth && height === this.tmpHeight
      this.tmpWidth = width
      this.tmpHeight = height
      if (stopped) this.setup()
    },
    bindEvent() {
      const self = this
      this._onResize = () => self.watchWindowSize()
      this._onEnter = (e: MouseEvent) => self.startEpicenter(e)
      this._onMove = (e: MouseEvent) => self.moveEpicenter(e)
      this._onVisible = () => {
        if (document.hidden) {
          cancelAnimationFrame(self.rafId)
        } else if (!self.disposed) {
          self.render()
        }
      }
      this.window.addEventListener('resize', this._onResize)
      this.container.addEventListener('mouseenter', this._onEnter)
      this.container.addEventListener('mousemove', this._onMove)
      document.addEventListener('visibilitychange', this._onVisible)
    },
    dispose() {
      this.window.removeEventListener('resize', this._onResize)
      document.removeEventListener('visibilitychange', this._onVisible)
      this.clearTimer()
      this.container?.remove()
      this.styleEl?.remove()
    },
    getAxis(event: MouseEvent) {
      const offset = this.container.getBoundingClientRect()
      return {
        x: event.clientX - offset.left + this.window.scrollX,
        y: event.clientY - offset.top + this.window.scrollY,
      }
    },
    startEpicenter(event: MouseEvent) {
      this.axis = this.getAxis(event)
    },
    moveEpicenter(event: MouseEvent) {
      const axis = this.getAxis(event)
      if (!this.axis) this.axis = axis
      this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y)
      this.axis = axis
    },
    generateEpicenter(x: number, y: number, velocity: number) {
      if (y < this.height / 2 - this.THRESHOLD || y > this.height / 2 + this.THRESHOLD) return
      const index = Math.round(x / this.pointInterval)
      if (index < 0 || index >= this.points.length) return
      this.points[index].interfere(y, velocity)
    },
    controlStatus() {
      for (let i = 0, c = this.points.length; i < c; i++) this.points[i].updateSelf()
      for (let i = 0, c = this.points.length; i < c; i++) this.points[i].updateNeighbors()
      if (this.fishes.length < this.fishCount) {
        if (--this.intervalCount === 0) {
          this.intervalCount = this.MAX_INTERVAL_COUNT
          this.fishes.push(new FISH(this))
        }
      }
    },
    render() {
      const self = this
      const renderFrame = () => {
        if (self.disposed) return
        self.controlStatus()
        self.context.clearRect(0, 0, self.width, self.height)
        const isDark = document.documentElement.dataset.theme === 'dark'
        self.context.fillStyle = isDark ? COLOR_DARK : COLOR_LIGHT
        for (let i = 0, c = self.fishes.length; i < c; i++) self.fishes[i].render(self.context)
        self.context.save()
        self.context.globalCompositeOperation = 'xor'
        self.context.beginPath()
        self.context.moveTo(0, self.reverse ? 0 : self.height)
        for (let i = 0, c = self.points.length; i < c; i++) self.points[i].render(self.context)
        self.context.lineTo(self.width, self.reverse ? 0 : self.height)
        self.context.closePath()
        self.context.fill()
        self.context.restore()
        self.rafId = requestAnimationFrame(renderFrame)
      }
      renderFrame()
    },
  }

  RENDERER.init()
  renderer = RENDERER
})

onBeforeUnmount(() => {
  if (!renderer) return
  renderer.disposed = true
  cancelAnimationFrame(renderer.rafId)
  renderer.dispose?.()
  renderer = null
})
</script>

<template>
  <span aria-hidden="true" style="display: none" />
</template>
