import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { AtSearchBar, AtTabs, AtTabsPane, AtTabBar } from 'taro-ui';
import indexStyleSheet from "./index_styles";
import { View } from "@tarojs/components-rn";

import Hot from "../hot/hot";
import Find from "../find/find";
import Topic from "../topic/topic";
var _styleSheet = indexStyleSheet;
let Index = class Index extends Component {
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
      current: 0,
      pageIndex: 0
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
  pageChange(value) {
    this.setState({
      pageIndex: value
    });
  }
  render() {
    const tabList = [{ title: '热门' }, { title: '发现' }, { title: '话题' }];
    return <View style={_styleSheet["index"]}>
        <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} style={_styleSheet["searchBar"]} />
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} style={_styleSheet["hctabs"]}>
            <View>
              <Hot />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1} style={_styleSheet["hctabs"]}>
            <View>
              <Find />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2} style={_styleSheet["hctabs"]}>
            <View>
              <Topic />
            </View>
          </AtTabsPane>
        </AtTabs>
        <AtTabBar fixed tabList={[{ title: '', iconType: 'home' }, { title: '', iconType: 'message' }, { title: '', iconType: 'add' }, { title: '', iconType: 'tags' }, { title: '', iconType: 'user' }]} onClick={this.pageChange.bind(this)} current={this.state.pageIndex} />
      </View>;
  }
};
Index.config = {
  navigationBarTitleText: '首页'
};
export { Index as default };

0;