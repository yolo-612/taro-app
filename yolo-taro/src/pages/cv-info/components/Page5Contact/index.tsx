import type { Contact } from '@/store/modules/cvInfoSlice'

import { View, Text, Image } from '@tarojs/components'
import style from './index.module.scss'


interface PropsType {
  className?: string;
  contact: Contact
  isEng?: boolean;
}


export default function Contact({ isEng = false, contact }: PropsType) {
  return (
    <View className={style.contact}>
      <View className={style.content}>
        {/* 顶部描述 */}
        <View className={`${style.words} ${isEng ? style['words-en'] : ''}`}>
          {contact.desList1.map((item, index) => (
            <Text key={index} className={style['span']}>{item}</Text>
          ))}
        </View>

        {/* 中部想法描述 */}
        <View className={style.idea}>
          {contact.desList2.map((item, index) => (
            <View key={index} className={style['idea-item']}>{item}</View>
          ))}
        </View>

        {/* 下载列表 */}
        {/* <View className={style.download}>
          <View className={style.title}>{contact.download}</View>
          <View className={style.list}>
            {contact.fileList.map((item, index) => (
              <View key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </View>
            ))}
          </View>
        </View> */}

        {/* 联系方式（图标链接） */}
        <View className={style.way}>
          {contact.typeList.map((item, index) => (
            <a
              key={index}
              className={style['way-item']}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <Image className={style['way-item-img']} src={item.icon} mode="aspectFit" />
            </a>
          ))}
        </View>
      </View>
    </View>
  )
}
