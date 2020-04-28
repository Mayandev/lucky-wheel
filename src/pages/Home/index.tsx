import { createElement, createContext, useContext, useState } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import Slogn from '../../components/Slogn';
import Wheel from '../../components/Wheel';
import LuckyModal from '../../components/LuckyModal';

import '../../public/css/common.css';
import './index.css';

import { AppContext } from '../../common/context';

const titleBg = {
  uri: '/public/img/draw_title.png'
}
const bottomBg = {
  uri: '/public/img/draw_bg_bottom.png'
}



export default function Home(props: { history: any; }) {
  // const context = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const { history } = props;
  
  const modalView = () => {
    return showModal
          ? (<LuckyModal image="/public/img/draw_lucky_prize.png"
            isLucky={false}
            closeTxt="知道了"
            desc="谢谢您的参与"
            title="未中奖" />)
          : null;
  }
  return (
    <AppContext.Provider value={{setShowModal}}>
      <View className="home">
        <View className="prize-list-link" onClick={() => history.push('/prizeList')}>奖品</View>
        <Image className="lucky-title" resizeMode="cover" source={titleBg} />
        <View className="lucky-main">
          <Slogn></Slogn>
          <Wheel></Wheel>
        </View>
        {modalView()}
        <Image className="lucky-bottom-bg" source={bottomBg}></Image>
      </View>
    </AppContext.Provider>
  );
}
