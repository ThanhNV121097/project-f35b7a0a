export type LienHePageData = {
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    action: { label: string; href: string };
  };
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  mapHours: {
    heading: string;
    address: string;
  };
  footer: {
    about: string;
    address: string;
    copyright: string;
  };
};

export const lienHePageData: LienHePageData = {
  nav: {
    brand: "Tiệm hoa Cỏ Lạ",
    links: [
      { label: "Mẫu hoa", href: "/mau-hoa" },
      { label: "Giờ mở cửa", href: "/lien-he" },
    ],
    action: { label: "Đặt hoa trước", href: "/dat-hoa" },
  },
  hero: {
    eyebrow: "Phan Đình Phùng, Hà Nội",
    heading: "Giờ mở cửa và đường tới tiệm",
    lead: "Tiệm ở phố Phan Đình Phùng, Hà Nội. Bạn gọi điện để tiệm xác nhận hoa, thời gian giao hoặc giờ ghé lấy trước khi đi.",
  },
  mapHours: {
    heading: "Giờ mở cửa và đường tới tiệm",
    address: "Phố Phan Đình Phùng, Hà Nội",
  },
  footer: {
    about:
      "Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.",
    address: "Phố Phan Đình Phùng, Hà Nội",
    copyright: "© Tiệm hoa Cỏ Lạ",
  },
};
