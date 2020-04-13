import Taro, { Component, Config } from '@tarojs/taro'
import { AtSearchBar, AtTabs, AtTabsPane, AtTabBar } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { View } from '@tarojs/components'
import './index.less'

import Hot from '../hot/hot'
import Find from '../find/find'
import Topic from '../topic/topic'


export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      current: 0,
      pageIndex: 0,
    }
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChange(value) {
    this.setState({
      value: value
    })
    console.log(value)
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

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
    const tabList = [{ title: '热门' }, { title: '发现' }, { title: '话题' }]
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          className='searchBar'
        />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)} >
          <AtTabsPane className='hctabs' current={this.state.current} index={0} >
            <View>
              <Hot />
            </View>
          </AtTabsPane>
          <AtTabsPane className='hctabs' current={this.state.current} index={1}>
            <View>
              <Find />
            </View>
          </AtTabsPane>
          <AtTabsPane className='hctabs' current={this.state.current} index={2}>
            <View>
              <Topic />
            </View>
          </AtTabsPane>
        </AtTabs>
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
0
