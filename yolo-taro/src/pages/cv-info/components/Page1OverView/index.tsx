import { View, Image } from '@tarojs/components';
import style from './index.module.scss';

interface PropsType {
  className?: string;
  /** 个人信息列表 */
  infoList: string[];
  /** 名言/引用 */
  quote: string;
  /** 描述内容列表 */
  desList: string[];
  /** 头像地址 */
  photoUrl?: string;
}

export default ({
  className,
  infoList,
  quote,
  desList,
  photoUrl = '/assets/hd_201911.jpg', // 默认头像路径
}: PropsType) => {
  return (
    <View className={`${style['overview']} ${className || ''}`}>
      <View className={style['content']}>

        {/* 左侧：头像 + 信息列表 */}
        <View className={style['info']}>
          <View className={style['photo']}>
            <Image src={photoUrl} alt="photo" />
          </View>

          <View className={style['-list']}>
            {infoList.map((item, index) => (
              <View key={index} className={style['-item']}>
                {item}
              </View>
            ))}
          </View>
        </View>

        {/* 右侧：名言 + 描述段落 */}
        <View className={style['des']}>
          <View className={style['quote']}>
            {quote}
          </View>
          <View className={style['des-list']}>
            {desList.map((item, index) => (
              <View key={index}>{item}</View>
            ))}
          </View>
        </View>

      </View>
    </View>
  );
};
