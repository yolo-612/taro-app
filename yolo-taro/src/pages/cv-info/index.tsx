import { useLoad } from '@tarojs/taro';
import { View, Swiper, SwiperItem } from '@tarojs/components'
import MobileTopTabBar from './components/MobileTopTabBar'
import style from './index.module.scss';

import { useAppSelector, useAppDispatch } from '@/common/hooks/app'
import { setFootValue, setOverviewValue } from '@/store/modules/cvInfoSlice'

export default function CVInfo() {
  const cvInfo = useAppSelector(state => state.cvInfo)

  const dispatch = useAppDispatch()

  useLoad(()=>{
    dispatch(setFootValue(['12Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`]))
    dispatch(setOverviewValue({
      infoList: [`${new Date().getFullYear() - 1996}1岁`, '硕士', '深圳', '在职'],
    }))
    console.log(cvInfo, 'cvInfo data')
  })

  return (
    // <View>{JSON.stringify(cvInfo)}</View>
    <MobileTopTabBar/>
    // <Swiper
    //   vertical
    //   circular
    //   style="height: 100vh"
    // >
    //   <SwiperItem><View className="page">第一页</View></SwiperItem>
    //   <SwiperItem><View className="page">第二页</View></SwiperItem>
    // </Swiper>
  )
}
