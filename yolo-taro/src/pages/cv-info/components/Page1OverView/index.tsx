import { View } from '@tarojs/components';
import style from './index.module.scss';

interface PropsType {
  /** 样式名扩展（可选） */
  className?: string;
}

export default ({
  className,
}: PropsType) => {

  return (
    <View className={`${style['overview']} ${className || ''}`}>
      
    </View>
  );
};