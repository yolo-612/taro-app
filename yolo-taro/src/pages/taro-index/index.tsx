import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import style from './index.module.scss';

import { useAppSelector, useAppDispatch } from '@/common/hooks/app'
import { decrement, increment } from '@/store/modules/counterSlice'


export default function TaroIndex() {

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={style['index-box']}>
      <View className={style['demo-module-box']}>
        <View className={style['module-title']}>Store演示示例</View>
        <View className={style['demo-store']}>
          <View
            className={style['icon-item']}
            onClick={() => dispatch(decrement())}
          >
            -
          </View>
          <View className={style['count-box']}>{count}</View>
          <View
            className={style['icon-item']}
            onClick={() => dispatch(increment())}
          >
            +
          </View>
        </View>
      </View>
    </View>
  )
}
