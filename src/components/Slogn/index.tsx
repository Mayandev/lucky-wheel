import { createElement, useState, useEffect } from 'rax';
import View from "rax-view";

import './index.css';
import { getSlognList } from '../../api/slognList';

const animationConfig = {
  // slogn 显示时间
  duration: 4000,
  // 旋转效果
  mode: 'ease-in-out'
}

export default () => {

  const [slogn, setSlogn] = useState({ name: '', url: '' });

  useEffect(() => {
    getSlognList().then((list: any) => {
      setSlogn(list[0]);
      setInterval(() => {
        const index = Math.floor((Math.random() * list.length));
        setSlogn(list[index])
      }, 2000)
    })
  }, []);


  return (
    <View className="slogn-main">
      <View>{slogn.name}</View>
    </View>
  );
};
