import { View } from '@tarojs/components';
import style from './index.module.scss';


interface PropsType {
  /** 样式name */
  className?: string;
}
export default (props: PropsType) => {
  return <View className={`${style['header']} ${props.className || ''}` }>
    <View className={style['title']}>
      mobileTop
    </View>
  </View>;
};
