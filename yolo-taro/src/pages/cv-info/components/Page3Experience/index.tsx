import type { Experience } from '@/store/modules/cvInfoSlice'

import { View } from '@tarojs/components'
import { useState } from 'react'
import style from './index.module.scss'


interface PropsType extends Experience {
  className?: string;
}

export default function Experience({ className = '', expList }: PropsType) {
  const [selectExpIndex, setSelectExpIndex] = useState(0)
  const expCur = expList[selectExpIndex]

  const handleSwitch = (index: number) => {
    setSelectExpIndex(index)
  }

  return (
    <View className={`${style.experience} ${className}`}>
      <View className={style.content}>
        <View className={style.slider}>
          <View className={style['slider-container']}>
            {/* 左侧图文 */}
            <View className={style.left}>
              <View
                className={style.img}
                style={{ backgroundImage: `url(${expCur.img})` }}
              />
              <View className={style.title}>
                <h4>{expCur.title}</h4>
                <p className={style['-post']}>"{expCur.post}"</p>
              </View>
            </View>

            {/* 右侧时间 + 列表 */}
            <View className={style.right}>
              <p className={style['-time']}>{expCur.time}</p>
              <View className={style['-list']}>
                {expCur.contentList.map((item, index) => (
                  <View key={index} className={style['exp-item']}>
                    {item}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* 切换器 */}
        {expList.length > 1 && (
          <View className={style['shout-cut']}>
            <View className={style.ul}>
              {expList.map((_, index) => (
                <View
                  key={index}
                  className={
                    index === selectExpIndex
                      ? `${style.li} ${style['-selected']}`
                      : style.li
                  }
                  onClick={() => handleSwitch(index)}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
