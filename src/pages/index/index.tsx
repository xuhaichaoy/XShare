import Taro, { Component, Config } from '@tarojs/taro'
import { AtTabBar,AtList, AtListItem } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { View, Image  } from '@tarojs/components'
import './index.less'

import Hot from '../hot/hot'



export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      pageIndex: 0,
    }
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  pageChange(value) {
    this.setState({
      pageIndex: value
    })
  }

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
      <View className='index'>
        <View className='indexBanner'>
          <View className='bannerTips'>满怀激情地投入到对事理的探究中来，至于建筑变成了自然而然的结果。</View>
          <View className='bannerBottom'>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
            <View className='at-col'>
              <View className='bannerWeekday'>Sun</View>
              <View className='bannerDay'>7</View>
              <View></View>
            </View>
          </View>
        </View>

        <View className='indexFunction'>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
          <View className='at-col at-col-4'>
            <Image
              style='width: 300px;height: 100px;background: #fff;'
              src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
            />
            <View>心跳表白</View>
          </View>
        </View>

        <View className='todayTask'>
          <View className='taskTitle'>今日任务</View>
          <View className='taskMine'>
            <View>我的发布</View>
            <View>+添加</View>
          </View>
          <View>
            <AtList>
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
              />
            </AtList>
          </View>

        </View>



        <AtTabBar
          fixed
          tabList={[
            { title: '', iconType: 'home' },
            { title: '', iconType: 'message' },
            { title: '', iconType: 'add' },
            { title: '', iconType: 'tags' },
            { title: '', iconType: 'user', }
          ]}
          onClick={this.pageChange.bind(this)}
          current={this.state.pageIndex}
        />
      </View>
    )
  }
}

