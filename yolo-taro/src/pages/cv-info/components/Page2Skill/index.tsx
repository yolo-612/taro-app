import { View } from '@tarojs/components';
import style from './index.module.scss';
import type { Skill } from '@/store/modules/cvInfoSlice'
interface PropsType extends Skill {
  className?: string;
}

export default ({
  className,
  outCircleList,
  innerCircleList,
  desList,
  isEng = false,
}: PropsType) => {
  return (
    <View className={`${style['skill']} ${className || ''}`}>
      <View className={style['content']}>

        {/* 技能圆圈展示 */}
        <View className={style['skill-circle']}>
          <View className={style['out']}>
            {outCircleList.map((item, index) => (
              <View
                key={index}
                className={style['item']}
                style={item.bg ? { background: item.bg.backgroundColor } : {}}
              >
                {item.name}
              </View>
            ))}
          </View>

          <View className={style['inner']}>
            {innerCircleList.map((item, index) => (
              <View
                key={index}
                className={style['inner-item']}
                style={item.bg ? { background: item.bg.backgroundColor } : {}}
              >
                {item.name}
              </View>
            ))}
          </View>
        </View>

        {/* 描述区 */}
        <View className={`${style['des']} ${isEng ? style['-des-en'] : ''}`}>
          {desList.map((item, index) => (
            <View key={index}>{item}</View>
          ))}
        </View>

      </View>
    </View>
  );
};
