import { useLoad } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/common/hooks/app'
import { setFootValue, setOverviewValue } from '@/store/modules/cvInfoSlice'

import FullPage from '@/components/FullPage';
import MobileTopTabBar from './components/MobileTopTabBar'

import style from './index.module.scss';


export default function CVInfo() {
  const cvInfo = useAppSelector(state => state.cvInfo)
  const dispatch = useAppDispatch()

  const [pageIndex, setPageIndex] = useState(0); // 当前页索引

  // 跳转指定页码
  const handleDirectToPage = (index: number) => {
    setPageIndex(index);
  };

  useLoad(()=>{
    dispatch(setFootValue(['12Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} Korey Zhao`]))
    dispatch(setOverviewValue({
      infoList: [`${new Date().getFullYear() - 1996}1岁`, '硕士', '深圳', '在职'],
    }))
  })

  return (
    <View className={style['main']}>
      <MobileTopTabBar
        header={cvInfo.header}
        pageIndex={pageIndex}
        handleDirectToPage={handleDirectToPage}
      />      
      <FullPage pageIndex={pageIndex} onPageChange={(index) => setPageIndex(index)}>
        <View className={style['overview']}>{pageIndex}</View>
        <View style={{ background: 'lightcoral' }}>{pageIndex}</View>
        <View style={{ background: 'lightgreen' }}>{pageIndex}</View>
      </FullPage>
    </View>
  )
}
