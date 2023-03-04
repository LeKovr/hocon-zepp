export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
      x: (DEVICE_WIDTH - px(300)) / 2,
      w: px(300),
      h: px(74),
      text_size: px(36),
      radius: px(12),
      align_h: hmUI.align.CENTER_H,
      text_style: hmUI.text_style.WRAP,
}
