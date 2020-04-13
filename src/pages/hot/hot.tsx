import Taro, { Component, Config } from '@tarojs/taro'
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { View } from '@tarojs/components'
import './hot.less'
import { AtList, AtListItem, AtCard } from "taro-ui"


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
    navigationBarTitleText: '首页'
  }

  render() {

    return (
      <View>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='这是个标题'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          className='cards'
        >
          这也是内容区 可以随意定义功能
          </AtCard>
      </View>
    )
  }
}
