import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui';
import findStyleSheet from "./find_styles";
import { View } from "@tarojs/components-rn";
var _styleSheet = findStyleSheet;
let Home = class Home extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.state = {
      value: '',
      current: 1
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  onChange(value) {
    this.setState({
      value: value
    });
    console.log(value);
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  render() {
    const tabList = [{ title: '热门' }, { title: '发现' }, { title: '话题' }];
    return <View style={_styleSheet["index"]}>
        <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} style={_styleSheet["searchBar"]} />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>;
  }
};
Home.config = {
  navigationBarTitleText: '首页'
};
export { Home as default };