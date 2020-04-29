import { createElement } from 'rax';
import View from 'rax-view';

import './index.scss';

export default () => {
  return (
    <View className="coupon-container">
      <View className="coupon-left">
        <View className="coupon-img">

        </View>
        <View className="coupon-desc-container">
          <View className="coupon-title">
            <View className="coupon-money">
              <View className="money-unit"></View>
            </View>
            <View className="coupon-limit"></View>
          </View>
          <View className="coupon-desc"></View>
          <View className="coupon-date"></View>
        </View>
      </View>
      <View className="coupon-dash"></View>
      <View className="coupon-right">
        <View className="coupon-operate">
          去使用
        </View>
      </View>
    </View>
  );
}