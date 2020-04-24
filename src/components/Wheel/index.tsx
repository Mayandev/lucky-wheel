import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import LuckyButton from './LuckyButton'
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
const angleList:Array<number>= []

const formatPrizeList = (list: any) => {
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
    angleList.push(i * average)
  })
  return list;
}

export default () => {

  const [prizeList, setPrizeList] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    getPrizeList().then((res: any) => {
      console.log(res);
      const list = formatPrizeList(res);
      setPrizeList(list);
    })
  }, [])

  const wheelBgStyle = {
    transition: `transform ${config.duration}ms ${config.mode}`,
    transform: `rotate(${rotateAngle}deg)`,
  }

  // 开始转动转盘
  const rotateWheel = () => {
    const index = random(prizeList.length - 1);
    // 开始转动
    // 如果已经在转动，则停止
    if (isRotating) return;
    setIsRotating(true);

    // 旋转角度
    const angle = 
      // 旋转角度
      rotateAngle + 
      // 旋转圈数
      config.circle * CIRCLE_ANGLE+
      // 到当前奖项的角度
      angleList[index]-(rotateAngle % CIRCLE_ANGLE);
    console.log(angle);
    
    // 重新设置角度，启动动画
    setRotateAngle(angle);
    // 重置按钮, duration 秒后可重新按动按钮
    setTimeout(() => {
      setIsRotating(false);
    }, config.duration);
  }

  const random = (max: number, min = 0) => {
    return Math.floor( Math.random() * (max - min + 1) + min);
  }

  return (
    <View className="wheel-main">
      <Image
        source={pointer} 
        className="wheel-pointer" />
      <View className="wheel-bg" style={wheelBgStyle}>
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
      <LuckyButton onClick={rotateWheel}></LuckyButton>
    </View>
  );
};
