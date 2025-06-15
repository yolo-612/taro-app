import type { Works } from '@/store/modules/cvInfoSlice'

import { View, Text, Image } from '@tarojs/components'
import style from './index.module.scss'
import { useState } from 'react'

interface PropsType extends Works {
  className?: string;
  isEng?: boolean;             // 是否使用英文文案
  onSwitch?: (dir: 'left' | 'right') => void; // 可选：切换时的回调
}


export default function Work({ worksList, viewMore, gitUrl, isEng = false }: PropsType) {
  const [workIndex, setWorkIndex] = useState(0)

  const switchWork = (dir: 'left' | 'right') => {
    if (dir === 'left' && workIndex > 0) {
      setWorkIndex(workIndex - 1)
    } else if (dir === 'right' && workIndex < worksList.length - 1) {
      setWorkIndex(workIndex + 1)
    }
  }

  return (
    <View className={style['work']}>
      <View className={style['content']}>
        {/* 作品列表 */}
        <View className={style['work-list']}>
          {worksList.map((item, i) => (
            <View
              key={i}
              className={style['work-list-item']}
              style={item.style}
            >
              {/* 标题 */}
              <View className={style['-title']}>
                <Text className={style['-link']}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </Text>
              </View>

              {/* 描述 */}
              <View
                className={`${style['work-des']} ${isEng ? style['-work-des-en'] : ''}`}
              >
                {item.des}
              </View>

              {/* 小程序二维码 */}
              {item.mini && (
                <View className={style['-qrcode']}>
                  <Image className={style['-img']} src={item.mini} mode="aspectFit" />
                  <Text className={style['qrcode-tips']}>
                    {isEng ? '(Press in wechat)' : '（微信内长按识别）'}
                  </Text>
                </View>
              )}

              {/* 页面链接及提示 */}
              {item.url && (
                <View className={style['work-link']}>
                  <a
                    className={style['-img']}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  />
                  {item.url.includes('quickapp') && (
                    <Text className={style['link-tips']}>
                      {isEng ? '(Android can jump)' : '（安卓浏览器可跳转）'}
                    </Text>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* 查看更多 */}
        <View className={style['more']}>
          <a href={gitUrl} target="_blank" rel="noreferrer">
            {viewMore}
          </a>
        </View>

        {/* 切换按钮 */}
        <View className={style['switch']}>
          <View
            className={style['left']}
            style={workIndex === 0 ? { filter: 'brightness(70%)' } : {}}
            onClick={() => switchWork('left')}
          />
          <View
            className={style['right']}
            style={
              workIndex === worksList.length - 1
                ? { filter: 'brightness(70%)' }
                : {}
            }
            onClick={() => switchWork('right')}
          />
        </View>
      </View>
    </View>
  )
}
