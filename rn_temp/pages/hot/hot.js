import React from 'react';
import { Component } from "@tarojs/taro-rn";
import hotStyleSheet from "./hot_styles";
import { View, ScrollView, Label, Text, Image } from "@tarojs/components-rn";
var _styleSheet = hotStyleSheet;
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

    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  onScrollToUpper() {}
  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e) {
    console.log(e.detail);
  }
  render() {
    const scrollStyle = {
      minHeight: '100%'
    };
    const scrollTop = 0;
    const Threshold = 20;
    return <View>
        <ScrollView scrollY scrollWithAnimation scrollTop={scrollTop} style={[_styleSheet["scrollview"], scrollStyle]} lowerThreshold={Threshold} upperThreshold={Threshold} onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      onScroll={this.onScroll}>
          <View style={_styleSheet["cardsBox"]}>
            <View style={_styleSheet["cards"]}>
              <View style={_styleSheet["cardsTop"]}>
                <Image src="nerv_logo.png" style={_styleSheet["avatar"]} />

              </View>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>
            <View style={_styleSheet["cards"]}>
              <Label style={_styleSheet["example-body__label"]}>
                aaaaaaaaaa
              </Label>
              <Text>bbbbbbbbbbbbbbbbbbbbbbbbb</Text>

            </View>

          </View>

        </ScrollView>
      </View>;
  }
};
Home.config = {
  navigationBarTitleText: '热门'
};
export { Home as default };