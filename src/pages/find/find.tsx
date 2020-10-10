import Taro, { Component, Config } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import { View, Text, Image } from '@tarojs/components'
import './find.less'


export default class Home extends Component {

  constructor() {
    super(...arguments)
    this.state = {
    }
  }


  componentWillMount() {
    console.log(222222222222)
  }

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
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='list'>

        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>
        <View className='listItem'>
          <Text className='listName'>跳蚤市场出售</Text>
          <View className='listItemContentBox'>
            <View className='listBoxItem'>
              <Text className='listBoxItemTips'>给闺蜜征友 她是个善良有爱心体贴漂亮的人 希望找到一个成熟聊的来的人</Text>
              <Text className='listBoxTime'>2021-03-08</Text>
            </View>
            <View className='listBoxItem'>
              <Image
                className='listBoxImage'
                src='http://pic.cgyouxi.com/orange/title/2083ddb939ab0a567a97ec3ec18279f3_12.jpg'
              />
            </View>
          </View>
        </View>


      </View>
    )
  }
}
