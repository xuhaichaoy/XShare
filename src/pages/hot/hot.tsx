import Taro, { Component, Config } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import { View, ScrollView, Label, Text, Image } from '@tarojs/components'
import { AtList, AtListItem, AtCard } from "taro-ui"
import './hot.less'

// 功能页


export default class Home extends Component {

  constructor() {
    super(...arguments)
    this.state = {
    }
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '热门'
  }

  onScrollToUpper() { }

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }

  render() {
    const scrollStyle = {
      minHeight: '100%'
    }
    const scrollTop = 0
    const Threshold = 20

    return (
      <View>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View className='cardsBox'>
            <View className='cards'>
              <View className='cardsTop'>
                <Image
                  src='nerv_logo.png'
                  className='avatar'
                />

              </View>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View className='cards'>
              <Label className='example-body__label'>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>

          </View>

        </ScrollView>
      </View>
    )
  }
}
