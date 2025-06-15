import { View } from '@tarojs/components';
import { useState } from 'react';
import style from './index.module.scss';
import type { Header } from '@/store/modules/cvInfoSlice';

interface PropsType {
  /** 样式名扩展（可选） */
  className?: string;

  /** 是否为 PC 端，用于控制某些元素是否展示 */
  isPc?: boolean;

  /** 页面头部数据结构，包含标题列表 */
  header: Header;

  /** 当前页面索引 */
  pageIndex: number;

  /** 切换页面方法，由父组件传入 */
  handleDirectToPage: (index: number) => void;
}

export default ({
  className,
  isPc = false,
  header,
  pageIndex,
  handleDirectToPage,
}: PropsType) => {
  /** 控制导航是否展开（移动端用） */
  const [isShowNav, setIsShowNav] = useState(false);

  /**
   * 标题点击事件，用于展开或关闭导航菜单
   */
  const handleTitleClick = () => {
    setIsShowNav(!isShowNav);
  };

  /**
   * 点击导航项跳转指定页
   * @param index 跳转的目标页索引
   */
  const directToPage = (index: number) => {
    handleDirectToPage(index);   // 通知父组件切换页码
    setIsShowNav(false);         // 同时关闭导航菜单
  };

  return (
    <View className={`${style['header']} ${className || ''}`}>
      {/* 顶部标题区域 */}
      <View className={style['title']}>
        {/* 在非 PC 且当前页不是第一页时才显示标题内容 */}
        {!(isPc && pageIndex === 0) && (
          <View
            className={`${style['title-content']} ${isShowNav ? style['-rotate'] : ''}`}
            onClick={handleTitleClick}
          >
            {/* 当前页标题文案 */}
            {header.titleList[pageIndex].title}
          </View>
        )}
      </View>

      {/* 可展开的导航菜单 */}
      <View className={`${style['nav']} ${isShowNav ? style['show-nav'] : ''}`}>
        <View className={style['ul']}>
          {header.titleList.map((item, index) => (
            <View
              key={index}
              className={`${style['nav-item']} ${pageIndex === index ? style['-cur-index'] : ''}`}
            >
              <View onClick={() => directToPage(index)}>
                {/* 可自定义图标部分 */}
                <View className={style['-img']}>
                  <View className={style['-img-content']}>
                    {/* 示例为占位图标，可替换为 <Image src={item.icon} /> */}
                  </View>
                </View>
                {/* 标题文字 */}
                <View className={style['-title']}>{item.title}</View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};