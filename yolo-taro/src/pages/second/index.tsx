import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import style from './index.module.scss';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={style['index']}>
      <Text>第二页</Text>
    </View>
  )
}
