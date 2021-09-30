export default {
  pages: ["pages/index/index", "pages/list/list"],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
        // 未点击时显示的图片
        // iconPath:"pages/images/a.jpg",
        // 点击后显示的图片
        // selectedIconPath:"pages/images/b.jpg"
      },
      {
        pagePath: "pages/list/list",
        text: "列表"
        // iconPath:"pages/images/a.jpg",
        // selectedIconPath:"pages/images/b.jpg"
      }
    ]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  cloud: true
};
