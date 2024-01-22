'use client';
import React, { useEffect } from 'react';

const VkMusic = () => {
  useEffect(() => {
    if (typeof VK !== 'undefined') {
      VK.Widgets.Playlist('vk_playlist_-80097286_1', -80097286, 1, '7b61794f963e4dc204');
    }
  }, []);

  return <div id="vk_playlist_-80097286_1"></div>;
};

export default VkMusic;
