import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';

import { CouponProps } from '../../common/type';

import './index.css';


export default (props: CouponProps) => {
  const {
    image,
    couponAmount,
    couponLimit,
    couponType,
    couponStarTime,
    couponExpireTime } = props;
  return (
    <View className="coupon-container">
      <View className="coupon-left">
        <View className="coupon-img-container">
          <Image className="coupon-img" source={{ uri: image }} resizeMode="cover"></Image>
        </View>
        <View className="coupon-desc-container">
          <View className="coupon-title">
            <View className="coupon-money">
              <View className="money-unit">￥</View>
              <View className="money-amount">{couponAmount}</View>
            </View>
            <View className="coupon-limit">满 {couponLimit} 使用</View>
          </View>
          <View className="coupon-desc">{couponType}</View>
          <View className="coupon-date">{couponStarTime}-{couponExpireTime}</View>
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