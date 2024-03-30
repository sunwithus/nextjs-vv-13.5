'use client';
import React, { useEffect } from 'react';

const VkComments = () => {
  useEffect(() => {
    if (typeof VK !== 'undefined') {
      VK.init({
        apiId: 4690424,
        onlyWidgets: true,
      });
      VK.Widgets.Comments('vk_comments', { limit: 15 });
      VK.Widgets.Like('vk_like');
    }
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
