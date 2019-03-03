# Backdrop 幕布

```JS
import Vue from 'vue'
import { Backdrop } from 'yum'

Vue.use(Backdrop)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| value | 控制幕布显示 | Boolean | - | - |
| transition | 幕布过度效果 | String | - | ymu-backdrop |
| prevent-on-touchmove | 在幕布上滑动时，是否阻止页面滚动 | Boolean | - | true |

## Slots

| 名称 | 描述 |
| :-: | :-: |
| default | - |

## Events

| 名称 | 描述 |
| :-: | :-: |
| click | - |
| touchmove | - |

## Sass vars

```sass
$backdrop-zindex: 900;
$backdrop-bg: rgba(0, 0, 0, .6);
```