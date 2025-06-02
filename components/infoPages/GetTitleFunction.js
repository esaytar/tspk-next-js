"use client";

import { useEffect } from 'react';
import { useTitleStore } from '../../store/useGetCurrentTitleInfoPages';
import { usePathname } from 'next/navigation';

export default function GetTitleFunction() {
  const setTitle = useTitleStore((state) => state.setTitle);
  const pathname = usePathname()

  useEffect(() => {
    // Устанавливаем начальный заголовок
    setTitle(document.title);

    // Следим за изменениями <title>
    const observer = new MutationObserver(() => {
      console.log('Title changed to:', document.title); // Для отладки
      setTitle(document.title);
    });

    const titleElement = document.querySelector('title');
    if (titleElement) {
      observer.observe(titleElement, { childList: true });
    }

    return () => observer.disconnect();
  }, [pathname, setTitle]);

  return null;
}