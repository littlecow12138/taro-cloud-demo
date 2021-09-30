import React, { Component, useState } from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtMessage } from "taro-ui";
import "./index.less";

import Login from "../../components/login/index.weapp";

function Index() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const insertCandidate = async () => {
    const res = await Taro.cloud.callFunction({
      name: "insertCandidates",
      data: { name, age }
    });
    console.log(res);
    if (res.errMsg == "cloud.callFunction:ok") {
      Taro.atMessage({
        message: "添加成功!",
        type: "success"
      });
      Taro.switchTab({url:'../../pages/list/list'})
    } else {
      Taro.atMessage({
        message: res.errMsg,
        type: "error"
      });
    }
  };

  const onInputChange = (dataType, v) => {
    if (dataType === "name") setName(v);
    if (dataType === "age") setAge(v);
  };

  const onSubmit = () => {
    insertCandidate();
  };

  return (
    <View className="index">
      {/* <Login /> */}
      <AtMessage />
      <AtForm>
        <AtInput
          name="name"
          title="姓名"
          value={name}
          onChange={v => onInputChange("name", v)}
        ></AtInput>
        <AtInput
          name="age"
          title="年龄"
          value={age}
          onChange={v => onInputChange("age", v)}
        ></AtInput>
        <AtButton onClick={onSubmit}>Submit</AtButton>
      </AtForm>
    </View>
  );
}

export default Index;
