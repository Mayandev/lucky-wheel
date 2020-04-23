import { createElement, useState } from 'rax';
import View from 'rax-view';

import './index.css';

interface ButtonProps {
  style: string,
  text: string
}

export default (props: ButtonProps) => {
  const {style, text} = props;
  return (
    <View className="lucky-button-container">
      <View className={`lucky-button ${style}`}>
        {text}
      </View>
    </View>
  );
};
