import { AtList, AtListItem } from "taro-ui";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { ICandidate } from "./dto";
import { View } from "@tarojs/components";

function List() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "TEST",
      age: 0
    }
  ]);

  const getCandidates = async () => {
    const res = await Taro.cloud.callFunction({
      name: "getCandidates",
      data: {}
    });
    // console.log(res);
    setCandidates(res.result?.data);
  };

  useEffect(() => {
    // console.log(candidates)
    getCandidates();
  }, [candidates]);

  return (
    <View>
      <h1>List</h1>
      <AtList>
        {candidates.map(candidate => {
          return (
            <AtListItem
              key={candidate.id}
              title={candidate.name}
              arrow="right"
            ></AtListItem>
          );
        })}
      </AtList>
    </View>
  );
}

export default List;
