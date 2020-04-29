import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import Coupon from '../../components/Coupon';

import './index.css'

export default function PrizeList() {
  return (
    <View className="list">
      <Coupon></Coupon>
    </View>
  );
}
