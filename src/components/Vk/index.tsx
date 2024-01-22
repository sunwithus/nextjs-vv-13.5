"use client";
import React, { useEffect } from "react";

const VKontakteWidget = () => {
  useEffect(() => {
    if (typeof VK !== "undefined") {
      VK.Widgets.Group(
        "vk_groups",
        {
          redesign: 1,
          mode: 3,
          width: "198",
          height: "198",
          color1: "FFFFFF",
          color2: "444444",
          color3: "00A1E0",
        },
        80097286
      );
    }
  }, []);

  return <div id="vk_groups"></div>;
};

export default VKontakteWidget;
