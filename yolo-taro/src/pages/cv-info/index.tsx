import { useLoad } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/common/hooks/app'
import { setFootValue, setOverviewValue } from '@/store/modules/cvInfoSlice'

import FullPage from '@/components/FullPage';
import MobileTopTabBar from './components/MobileTopTabBar'
import Page1OverView from './components/Page1OverView';
import Page2Skill from './components/Page2Skill';
import Page3Experience from './components/Page3Experience';
import Page4Work from './components/Page4Work';
import Page5Contact from './components/Page5Contact';

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
      infoList: [`${new Date().getFullYear() - 1996}岁`, '硕士', '深圳', '在职'],
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
        {/* Overview：包含个人基本信息、引言和描述列表
          TODO： photoUrl需要优化
          */}
        <Page1OverView
          photoUrl={cvInfo.overview.photoUrl}
          infoList={cvInfo.overview.infoList}
          quote={cvInfo.overview.quote}
          desList={cvInfo.overview.desList}
        />
        <Page2Skill/>
        <Page3Experience/>
        <Page4Work/>
        <Page5Contact/>
      </FullPage>
    </View>
  )
}
