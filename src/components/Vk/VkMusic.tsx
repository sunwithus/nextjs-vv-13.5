'use client';
import React, { useEffect } from 'react';
import VK, { Playlist } from 'react-vk';

const VkMusic = () => {
  return (
    <VK>
      <Playlist ownerId={80097286} playlistId={1} hash={'7b61794f963e4dc204'} />
    </VK>
  );
};

export default VkMusic;
/*

'use client';
import React, { useEffect } from 'react';
import VK, { Playlist } from 'react-vk';

const VkMusic = () => {
  return (
    <VK apiId={4690424}>
      <Playlist elementId={'vk_playlist_-80097286_1'} ownerId={-80097286} playlistId={1} hash={'7b61794f963e4dc204'} />
    </VK>
  );
};

export default VkMusic;

*/

/*

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

*/
