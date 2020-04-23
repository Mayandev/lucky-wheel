import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';

import './index.css';
import { getSlognList } from '../../api/slognList';

export default () => {

  const [slogn, setSlogn] = useState({ name: '', url: '' });

  useEffect(() => {
    getSlognList().then((list: any) => {
      setInterval(() => {
        let index = Math.floor((Math.random() * list.length));
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
