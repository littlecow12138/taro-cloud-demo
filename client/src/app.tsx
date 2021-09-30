import React, { useEffect, useState } from "react";
import Taro, { Config } from "@tarojs/taro";
import "taro-ui/dist/style/index.scss";
import "./app.less";

function App(props) {
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init();
    }
  }, []);
  // props.children 是将要会渲染的页面
  return <div>{props.children}</div>;
}

export default App;
