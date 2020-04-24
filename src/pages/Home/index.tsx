import { createElement, useState } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';


import '../../public/css/common.css';
import './index.css';

import Slogn from '../../components/Slogn';
import Wheel from '../../components/Wheel';

const titleBg = {
  uri: '/public/img/draw_title.png'
}

const bottomBg = {
  uri: '/public/img/draw_bg_bottom.png'
}

export default function Home() {
  return (
    <View className="home">
      <Image className="lucky-title" resizeMode="cover" source={titleBg} />
      <View className="lucky-main">
        <Slogn></Slogn>
        <Wheel></Wheel>
      </View>
      <Image className="lucky-bottom-bg" source={bottomBg}></Image>
    </View>
  );
}
