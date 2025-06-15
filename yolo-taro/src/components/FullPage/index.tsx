import { View } from '@tarojs/components';
import { useRef, useEffect } from 'react';
import style from './index.module.scss';

interface PropsType {
  className?: string;
  children: React.ReactNode[];
  pageIndex: number; // 当前页索引（由外部控制）
  onPageChange?: (index: number) => void; // 页码改变时通知外部
}

export default (props: PropsType) => {
  const { className, children, pageIndex, onPageChange } = props;

  const wrapperRef = useRef<HTMLDivElement>(null); // 滚动容器引用
  const isScrolling = useRef(false);               // 滚动锁（节流）

  /**
   * 根据索引滚动到对应页面
   */
  const scrollToPage = (index: number) => {
    if (!wrapperRef.current) return;
    const offset = index * window.innerHeight;
    wrapperRef.current.style.transform = `translateY(-${offset}px)`;
  };

  /**
   * 滚轮事件处理（H5 专用）
   */
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // 与 CSS 动画节奏匹配

    if (e.deltaY > 0 && pageIndex < children.length - 1) {
      onPageChange?.(pageIndex + 1);
    } else if (e.deltaY < 0 && pageIndex > 0) {
      onPageChange?.(pageIndex - 1);
    }
  };

  /**
   * 外部页码变化 → 执行滚动
   */
  useEffect(() => {
    scrollToPage(pageIndex);
  }, [pageIndex]);

  /**
   * 组件挂载时绑定滚轮事件
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

      {/* 非最后一页才展示向上箭头 */}
      {pageIndex < children.length - 1 && (
        <View className={style['top-arrow']}></View>
      )}
    </View>
  );
};
