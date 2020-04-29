import {createElement, useState, useEffect} from 'rax';

import { getPrizeList } from '../../api/prizeList'
import View from 'rax-view';
import Coupon from '../Coupon';
export default () => {

  const [prizeList, setPrizeList] = useState([]);
  useEffect(() => {
    getPrizeList().then((res: any) => {
      console.log(res);
      setPrizeList(res);
    })
  }, [])

  return (
    <View className="couponList">
      {prizeList.map(item => {
        return (
          <Coupon></Coupon>
        );
      })}
    </View>
  );

}