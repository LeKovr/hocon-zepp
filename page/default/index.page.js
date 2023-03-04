import { TEXT_STYLE } from './index.style'

import {
  DEFAULT_COLOR,
  DEFAULT_COLOR_TRANSPARENT,
} from "../../utils/config/constants";
import { DEVICE_WIDTH } from "../../utils/config/device";

const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
const { messageBuilder } = getApp()._options.globalData

Page({
  state: {},
  build() {

    logger.debug('page build invoked trex')
    this.state.day = hmUI.createWidget(hmUI.widget.BUTTON, {
      y: px(58),
      normal_color: 0x008000,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "Day",
      click_func: (button_widget) => {
        logger.log("click day");
        this.fetchData("DAY");
      },
      ...TEXT_STYLE,
    });

    this.state.night = hmUI.createWidget(hmUI.widget.BUTTON, {
      y: px(154),
      normal_color: 0xc0c0c0,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "Night", // TODO: gettext("btnNight")
      click_func: (button_widget) => {
        logger.log("click night");
        this.fetchData("NIGHT");
      },
      ...TEXT_STYLE,
    });

    this.state.off = hmUI.createWidget(hmUI.widget.BUTTON, {
      y: px(250),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "Off",
      click_func: (button_widget) => {
        logger.log("click off");
        this.fetchData("OFF");
      },
      ...TEXT_STYLE,
    });

    this.state.anno = hmUI.createWidget(hmUI.widget.TEXT, {
        x: px(20),
        y: px(335),
        w: px(288),
        h: px(46),
        color: 0xffffff,
        text_size: px(30),
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text:"Init.."
    });

    this.fetchData("UNKNOWN");

  },
  fetchData(mode) {
      this.state.anno.setProperty(hmUI.prop.MORE, {
        text:"fetching..."
      });
    messageBuilder.request({
      method: "GET_DATA",
      mode: mode,
    })
    .then(data => {
      logger.log('receive data:', data)
     // const { result = {} } = data.result
     // const { text } = result

      // check result == 'ERROR'
      if (data.result == 'ERROR' || !data.result) {
        this.state.anno.setProperty(hmUI.prop.MORE, {
          text:'ERROR'
        });
        return;
      }
      mode = data.result.scene;
      this.state.day.setProperty(hmUI.prop.VISIBLE, mode != 'DAY');
      this.state.night.setProperty(hmUI.prop.VISIBLE, mode != 'NIGHT');
      this.state.off.setProperty(hmUI.prop.VISIBLE, mode != 'OFF');

//    const cfg = settings.settingsStorage.getItem('appURL')
//    logger.log("config: "+cfg);
/*
var str = ''; //data.result;

var object=data.result;
  for (var k in object) {
    if (object.hasOwnProperty(k)) {
      str += k + '::' + object[k] + ' / ';
    }
  }
*/
      this.state.anno.setProperty(hmUI.prop.MORE, {
        text:"Current: "+mode //str //data.result
      });
    })
  },

  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})
