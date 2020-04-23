import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';


import '../../public/css/common.css';
import './index.css';

import Wheel from '../../components/Wheel';
import Slogn from '../../components/Slogn';
import Button from '../../components/Button';

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
        <Button text={'马上抽奖'} style={'ongoing'}></Button>
      </View>
      <Image className="lucky-bottom-bg" source={bottomBg}></Image>
    </View>
  );
}
