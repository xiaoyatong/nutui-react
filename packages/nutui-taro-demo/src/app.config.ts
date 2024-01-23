
const subPackages = [
  {
    "root": "base",
    "pages": [
      "pages/button/index",
      "pages/cell/index",
      "pages/configprovider/index",
      "pages/icon/index",
      "pages/image/index",
      "pages/overlay/index"
    ]
  },
  {
    "root": "layout",
    "pages": [
      "pages/divider/index",
      "pages/grid/index",
      "pages/layout/index",
      "pages/safearea/index",
      "pages/space/index",
      "pages/sticky/index"
    ]
  },
  {
    "root": "nav",
    "pages": [
      "pages/backtop/index",
      "pages/elevator/index",
      "pages/fixednav/index",
      "pages/navbar/index",
      "pages/sidenavbar/index",
      "pages/tabbar/index",
      "pages/tabs/index"
    ]
  },
  {
    "root": "dentry",
    "pages": [
      "pages/address/index",
      "pages/calendar/index",
      "pages/calendarcard/index",
      "pages/cascader/index",
      "pages/checkbox/index",
      "pages/datepicker/index",
      "pages/form/index",
      "pages/input/index",
      "pages/inputnumber/index",
      "pages/menu/index",
      "pages/numberkeyboard/index",
      "pages/picker/index",
      "pages/radio/index",
      "pages/range/index",
      "pages/rate/index",
      "pages/searchbar/index",
      "pages/shortpassword/index",
      "pages/signature/index",
      "pages/switch/index",
      "pages/textarea/index",
      "pages/uploader/index"
    ]
  },
  {
    "root": "feedback",
    "pages": [
      "pages/actionsheet/index",
      "pages/badge/index",
      "pages/dialog/index",
      "pages/drag/index",
      "pages/empty/index",
      "pages/infiniteloading/index",
      "pages/loading/index",
      "pages/noticebar/index",
      "pages/notify/index",
      "pages/popover/index",
      "pages/popup/index",
      "pages/pulltorefresh/index",
      "pages/skeleton/index",
      "pages/swipe/index",
      "pages/toast/index"
    ]
  },
  {
    "root": "exhibition",
    "pages": [
      "pages/animate/index",
      "pages/animatingnumbers/index",
      "pages/audio/index",
      "pages/avatar/index",
      "pages/circleprogress/index",
      "pages/collapse/index",
      "pages/countdown/index",
      "pages/ellipsis/index",
      "pages/imagepreview/index",
      "pages/indicator/index",
      "pages/pagination/index",
      "pages/price/index",
      "pages/progress/index",
      "pages/steps/index",
      "pages/swiper/index",
      "pages/table/index",
      "pages/tag/index",
      "pages/tour/index",
      "pages/video/index",
      "pages/virtuallist/index"
    ]
  },
  {
    "root": "business",
    "pages": [
      "pages/avatarcropper/index",
      "pages/barrage/index",
      "pages/card/index",
      "pages/timeselect/index",
      "pages/trendarrow/index",
      "pages/watermark/index"
    ]
  }
];

export default defineAppConfig ({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI-React',
    navigationBarTextStyle: 'black'
  }
})