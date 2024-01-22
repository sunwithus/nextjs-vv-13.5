'use client';
import React, { useEffect } from 'react';

const VkComments = () => {
  useEffect(() => {
    if (typeof VK !== 'undefined') {
      VK.init({
        apiId: 4690424,
        onlyWidgets: true,
      });
      VK.Widgets.Comments('vk_comments', { width: 600, height: 133, limit: 15 });
      VK.Widgets.Like('vk_like');
    }
  }, []);

  return (
    <>
      <div id="vk_like"></div>
      <div id="vk_comments"></div>
    </>
  );
};

export default VkComments;
