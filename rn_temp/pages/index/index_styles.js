
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "searchBar": {
    "position": "sticky",
    "top": 0,
    "left": 0,
    "zIndex": 10
  },
  "hctabs": {
    "height": "calc(100vh - 86px)",
    "overflow": "auto",
    "paddingBottom": scalePx2dp(68),
    "paddingTop": scalePx2dp(20),
    "boxSizing": "border-box",
    "backgroundColor": "#eee"
  }
})
