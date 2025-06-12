import { View } from '@tarojs/components';
import style from './index.module.scss';


interface DemoPropsType {
  /** 样式name */
  className?: string;
}
export default (props: DemoPropsType) => {
  return <View className={`${style['demo-box']} ${props.className || ''}` }>
    Demo组件示例
  </View>;
};
