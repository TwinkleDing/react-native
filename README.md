# react-native

cd react-native

npm install

**android** _npm run android_

**ios** _npm run ios_

* Dynamic Bottom Navigation

* Top Navigation

* DetailsPage

* Redux with store、reducer work normally

学习的react-native简单地框架，后续完善一下

## 坑
**swiper的坑**
_I removed 1.5.14 (yarn remove react-native-swiper) then installed the nightly with yarn add react-native-swiper@nightly and it’s working on Android now._

**抽屉菜单完成，但是只能在根路由下加载，不会抽到组件，初始不出来open和close等方法**

**一开始的tabview不生效以为什么问题，在写抽屉菜单发现滑动无法关闭，搜索，添加了Android权限，然后能滑动了，发现tabview也能滑动切换了，很多原生时间都要添加permission，比如Android，还未在ios写**

**backBehavior: 'initialRoute',默认，none否定:控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。**

19-12-15
按照中文官网的文档组件和api基本都写了一遍，先熟悉一下，接下来仿照写app

19-12-16
andriod返回确认功能，发现，react-native和react-react-navigation使用有时候会记混乱，react-navigtionshi用导航功能的，其他一般都是引自react-native

19-12-17
写了一个navigation的goBack事件，点击返回没问题，但是手机的返回遇到了问题，this等传值进不去

19-12-18
上一个问题解决了,sss(){}方法this只想有问题,用sss=()=>{}就可以了,this.props.navigation.goBack()和this.props.navigation.pop()效果一样,都是返回上一页.
添加搞得地图定位 //https://github.com/qiuxiang/react-native-amap3d

19-12-19
用amap3d,自我定位出现了问题,过一会好了,可能debugger模式卡了
    
19-12-20
首页添加了swiper，循环出来了图片地址，然后要用redux存取