'use client';
import React, { useEffect } from 'react';

/* 

Чтобы обновить виджеты VK при каждом переходе на странице, нужно добавить код, который будет отключать и повторно инициализировать виджеты VK при размонтировании компонента. 

*/

const VkComments = () => {
  /**
 * useEffect с пустым массивом зависимостей [] вызывает переданный callback только при монтировании компонента и только один раз. При размонтировании компонента будет вызван возвращаемый callback, в котором происходит уничтожение виджета комментариев.

Таким образом, при каждом монтировании компонента будут созданы и настроены виджеты комментариев и лайков, а при размонтировании компонента они будут уничтожены.
 */

  useEffect(() => {
    let isMounted = true;

    if (typeof VK !== 'undefined') {
      VK.init({
        apiId: 4690424,
        onlyWidgets: true,
      });
      VK.Widgets.Comments('vk_comments', { limit: 15 });
      VK.Widgets.Like('vk_like');

      return () => {
        if (isMounted) {
          if (VK.Widgets && VK.Widgets.comments) {
            VK.Widgets.destroy('vk_comments');
          }
          if (VK.Widgets && VK.Widgets.likes) {
            VK.Widgets.destroy('vk_like');
          }
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div id="vk_like"></div>
      <br />
      <div id="vk_comments"></div>
    </>
  );
};

export default VkComments;
