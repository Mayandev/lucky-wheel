import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import { getPrizeList } from '../../api/prizeList';
import './index.css';

const pointer = {
  uri: '../../public/img/draw_pointer.png'
}
const wheelBg = {
  uri: '../../public/img/draw_wheel.png'
}

const CIRCLE_ANGLE = 360;
const config = {
  // 总旋转时间
  duration: 4000,
  // 总旋转圈数
  circle: 8,
  // 旋转效果
  mode: 'ease-in-out'
}

const formatPrizeList = (list: any) => {
  // 记录每个奖品的角度
  const angle = [];
  // 奖品个数
  const num = list.length;
  // 每个奖品夹角
  const average = CIRCLE_ANGLE / num;
  // 奖品放在中间位置
  const half = average / 2;
  // 循环计算出每个奖品的位置
  list.map((item, i: number) => {
    // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
    const angle = -((i * average));
    // 增加 style
    item.style = {
      transform: `rotate(${angle}deg)`
    }
  })
  return list;
}

export default () => {

  const [prizeList, setPrizeList] = useState([])

  useEffect(() => {
    getPrizeList().then((res: any) => {
      console.log(res);
      const list = formatPrizeList(res);
      setPrizeList(list);
    })
  }, [])

  return (
    <View className="wheel-main">
      <Image source={pointer} className="wheel-pointer" />
      <View className="wheel-bg">
        <Image source={wheelBg} resizeMode="contain" className="wheel-img" />
        <View className="prize-list">
          {
            prizeList.map((prizeItem) => {
              return (
                <View key={prizeItem.id} className="prize-item" style={prizeItem.style}>
                  <View className="prize-desc">
                    {prizeItem.name}
                  </View>
                  <Image className="prize-img" resizeMode="contain" source={{ uri: prizeItem.icon }}></Image>
                </View>
              );
            })
          }
        </View>
      </View>
    </View>
  );
};
