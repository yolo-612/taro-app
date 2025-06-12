import { View } from '@tarojs/components';
import style from './index.module.scss';


interface PropsType {
  /** 样式name */
  className?: string;
}
export default (props: PropsType) => {
  return <View className={`${style['full-page-box']} ${props.className || ''}` }>
    
  </View>;
};
