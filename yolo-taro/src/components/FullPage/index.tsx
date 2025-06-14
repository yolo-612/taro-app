import { View } from '@tarojs/components';
import { useRef, useEffect, useState } from 'react';
import style from './index.module.scss';

interface PropsType {
  className?: string;                // 外部传入的自定义 className，用于样式扩展
  children: React.ReactNode[];      // 子元素，每个视图为一个全屏页面
}

export default (props: PropsType) => {
  const { className, children } = props;

  const [pageIndex, setPageIndex] = useState(0);      // 当前页索引
  const wrapperRef = useRef<HTMLDivElement>(null);    // 滚动容器引用
  const isScrolling = useRef(false);                  // 滚动锁，用于节流处理防止频繁滚动

  /**
   * 根据索引滚动到对应页面
   * @param index 要滚动到的页面索引
   */
  const scrollToPage = (index: number) => {
    if (!wrapperRef.current) return;

    const offset = index * window.innerHeight;
    wrapperRef.current.style.transform = `translateY(-${offset}px)`;  // 通过 Y 轴平移实现翻页
  };

  /**
   * 鼠标滚轮事件处理函数（仅适用于 H5 端）
   */
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling.current) return;

    // 启用节流，防止滚动过快
    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // 与动画时长匹配

    // 根据滚轮方向切换页面
    if (e.deltaY > 0 && pageIndex < children.length - 1) {
      setPageIndex(prev => prev + 1); // 向下滚
    } else if (e.deltaY < 0 && pageIndex > 0) {
      setPageIndex(prev => prev - 1); // 向上滚
    }
  };

  /**
   * 页面索引更新时执行滚动
   */
  useEffect(() => {
    scrollToPage(pageIndex);
  }, [pageIndex]);

  /**
   * 组件挂载时绑定滚轮事件监听器
   * 卸载时移除监听器以避免内存泄漏
   */
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [pageIndex]);

  return (
    <View className={`${style['full-page-box']} ${className || ''}`}>
      <View className={style['full-page-wrapper']} ref={wrapperRef}>
        {children.map((child, idx) => (
          <View key={idx} className={style['full-page-item']}>
            {child}
          </View>
        ))}
      </View>
      {/* 最后一页不展示 */}
      {pageIndex < children.length - 1 && (
        <View className={style['top-arrow']}></View>
      )}
    </View>
  );
};
