import Taro, { Component, Config } from '@tarojs/taro'
import { AtTabBar,AtList, AtListItem, AtGrid } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { View, Image  } from '@tarojs/components'
import './index.less'


import Hot from '../hot/hot'
// @import "~taro-ui/dist/style/components/flex.scss";
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/components/flex.scss'
// eslint-disable-next-line import/first
import "taro-ui/dist/style/components/grid.scss";

// eslint-disable-next-line import/first
import "taro-ui/dist/style/components/list.scss";

// eslint-disable-next-line import/first
import "taro-ui/dist/style/components/tab-bar.scss";
// eslint-disable-next-line import/first
import "taro-ui/dist/style/components/badge.scss";


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
            <View className='at-row at-row__justify--around uls'>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
              <View className='at-col lis'>
                <View className='bannerWeekday'>Sun</View>
                <View className='bannerDay'>7</View>
                <View></View>
              </View>
            </View>
          </View>
        </View>

        <View className='indexFunction'>
          <AtGrid hasBorder={false} data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '心跳表白'
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '跳蚤市场'
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '合租找房'
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '校园互助'
              },
              {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: '兼职招聘'
              },
              {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: '代取快递'
              }
            ]
          } />
        </View>

        <View className='todayTask'>
          <View className='taskTitle'>今日任务</View>
          <View className='taskMine'>
            <View className='minePublish'>
              <View className='mineIcon'></View>
              <View className='mineSpans'>我的发布</View>
            </View>
            <View className='addtask'>+添加</View>
          </View>
          <View className='taskListBox'>
            <AtList>
              <AtListItem
                title='第一个'
                note='描述信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
              />
              <AtListItem
                title='第二个'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
              />
              <AtListItem
                title='第三个'
                note='描述信息'
                extraText='详细信息'
                arrow='right'
                iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
              />
            </AtList>
          </View>

        </View>
        <View className='tabBottomHidden'></View>

        <AtTabBar
          fixed
          className='tabBottom'
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

