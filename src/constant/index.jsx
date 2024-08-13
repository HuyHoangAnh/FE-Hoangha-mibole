
import BannerIphone from '../assets/ip11.png'
import BannerSony from '../assets/resize-job-sony.jpg'
import BannerNote13 from '../assets/note-13.png'
import BannerZFold from '../assets/fold-flip5.png'

import IconPhone from '../assets/icon-phone.png'
import IconAmthanh from '../assets/icon-amthanh.png'
import IconHangcu from '../assets/icon-hangcu.png'
import IconLaptop from '../assets/icon-laptop.png'
import IconPhukien from '../assets/icon-phukien.png'
import IconSuachua from '../assets/icon-suachua.png'
import IconTablet from '../assets/icon-tablet.png'
import IconThucu from '../assets/icon-thucu.png'
import IconTinhot from '../assets/icon-tinhot.png'
import IconWatch from '../assets/icon-watch.png'

export const listBanner = [
  {
      id: 0,
      imgPath: BannerIphone,
      title: "HUMG1",
      content: "Đại học Mỏ - Địa chất",
  },
  {
      id: 1,
      imgPath: BannerSony,
      title: "HUMG2",
      content: "Đại học Mỏ - Địa chất",
  },
  {
      id: 2,
      imgPath: BannerNote13,
      title: "HUMG3",
      content: "Đại học Mỏ - Địa chất",
  },
  {
      id: 3,
      imgPath: BannerZFold,
      title: "HUMG4",
      content: "Đại học Mỏ - Địa chất",
  },
]

export const listHeader = [
    {
        id: 1,
        title: 'Điện thoại',
        icon: IconPhone,
        url: '/collections',
    },
    {
        id: 2,
        title: 'Tablet',
        icon: IconTablet,
        url: '/collections',
    },
    {
        id: 3,
        title: 'Laptop',
        icon: IconLaptop,
        url: '/collections',
    },
    {
        id: 4,
        title: 'Đồng hồ',
        icon: IconWatch,
        url: '/collections',
    },
    {
        id: 5,
        title: 'Hàng cũ',
        icon: IconHangcu,
        url: '/collections',
    },
    {
        id: 6,
        title: 'Thu cũ đổi mới',
        icon: IconThucu,
        url: '/collections',
    },
    {
        id: 7,
        title: 'Phụ kiện',
        icon: IconPhukien,
        url: '/collections',
    },
    {
        id: 8,
        title: 'Âm thanh',
        icon: IconAmthanh,
        url: '/collections',
    },
    {
        id: 9,
        title: 'Sửa chữa',
        icon: IconSuachua,
        url: '/collections',
    },
    {
        id: 10,
        title: 'Đăng nhậ',
        icon: IconTinhot,
        url: '/account',
    },
]

export const listAppleReseller = [
    {
        id:1,
        header: "Apple authorised Reseller",
        linkCollection: [
            {
                id: 1,
                title: "Macbook",
                url: "/laptop/macbook",
            },
            {
                id: 2,
                title: "iPhone",
                url: "/dien-thoai-di-dong/iphone",
            },
            {
                id: 3,
                title: "iPad",
                url: "/tablet/ipad",
            },
            {
                id: 4,
                title: "Apple Watch",
                url: "/dong-ho/apple-watch",
            },
            {
                id: 5,
                title: "AirPods",
                url: "/tai-nghe/apple-airpods/airpods",
            },
            {
                id: 6,
                title: "EarPods",
                url: "/tai-nghe/apple-airpods/earpods",
            },
            {
                id: 7,
                title: "Phụ kiện chính hãng Apple",
                url: "/phu-kien/phu-kien-apple/phu-kien-chinh-hang-apple",
            },
            {
                id:8,
                title: "Xem tất cả",
                url: "/apple",
                class: "actived"
            }
        ],
    }
]