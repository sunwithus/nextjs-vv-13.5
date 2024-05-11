'use client';
import React, { useEffect } from 'react';

import { useRouter, usePathname } from 'next/navigation';

const VkComments = () => {
  const router = useRouter();
  const pathName = usePathname();
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
      VK.Widgets.Comments('vk_comments', { limit: 15, pageUrl: pathName });
      VK.Widgets.Like('vk_like', { pageUrl: pathName });

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
  }, [pathName]);

  return (
    <>
      <div id="vk_like"></div>
      <br />
      <div id="vk_comments"></div>
    </>
  );
};

export default VkComments;

/*
'use client';
import React, { useEffect } from 'react';
import VK, { Comments, Like } from 'react-vk';

const handleNewComment = (num, last_comment, date, sign) => {
  console.log(last_comment);
};

const VkComments = () => {
  return (
    <VK apiId={4690424}>
      <Like
        onLike={(quantity) => {
          console.log(quantity);
        }}
      />
      <Comments onNewComment={handleNewComment} />
    </VK>
  );
};

export default VkComments;
*/
