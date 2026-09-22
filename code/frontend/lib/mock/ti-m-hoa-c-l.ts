export type FlowerCard = {
  title: string;
  note: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeContent = {
  nav: {
    brand: "Tiệm hoa Cỏ Lạ",
    links: [
      { label: "Mẫu hoa", href: "/mau-hoa" },
      { label: "Giờ mở cửa", href: "/lien-he" },
    ],
    action: { label: "Đặt hoa trước", href: "/dat-hoa" },
  },
  hero: {
    image: "/a/a9398fa8-3625-41e0-ad37-d1f83638b6d8/hero-image",
    alt: "Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn",
    eyebrow: "Phan Đình Phùng, Hà Nội",
    title: "Hoa tươi đi chợ mỗi sáng, bó theo dịp của bạn",
    copy: "Tiệm nhỏ mở từ 2019. Hoa theo mùa, bó sinh nhật, hoa cưới, hoa để bàn văn phòng. Đặt trước qua điện thoại, giao nội thành trong hai tiếng.",
    primary: { label: "Đặt hoa trước", href: "/dat-hoa" },
    secondary: { label: "Xem mẫu hoa", href: "/mau-hoa" },
  },
  flowers: [
    { title: "Bó hoa sinh nhật theo mùa", note: "Chọn màu theo yêu cầu" },
    { title: "Bó hồng và cúc tana", note: "Mẫu tham khảo, hoa thay theo chợ sáng" },
    { title: "Hoa cưới cầm tay", note: "Cần đặt trước" },
    { title: "Hoa để bàn văn phòng", note: "Gọn, dễ đặt trên bàn làm việc" },
  ] satisfies FlowerCard[],
  gallery: [
    { src: "/a/a9398fa8-3625-41e0-ad37-d1f83638b6d8/gallery-0", alt: "Bó hoa theo mùa", caption: "Bó hoa theo mùa" },
    { src: "/a/a9398fa8-3625-41e0-ad37-d1f83638b6d8/gallery-1", alt: "Bó sinh nhật màu nhẹ", caption: "Bó sinh nhật màu nhẹ" },
    { src: "/a/a9398fa8-3625-41e0-ad37-d1f83638b6d8/gallery-2", alt: "Hoa để bàn văn phòng", caption: "Hoa để bàn văn phòng" },
  ] satisfies GalleryItem[],
  faqs: [
    { question: "Bó hoa tặng sinh nhật giá khoảng bao nhiêu?", answer: "Giá tùy mùa hoa và cỡ bó. Bạn nhắn ngân sách, màu thích và người nhận, tiệm bó vừa vặn rồi báo lại trước khi làm." },
    { question: "Tiệm có cắm theo yêu cầu không?", answer: "Có. Bạn gửi màu, loại hoa thích hoặc ảnh tham khảo. Hoa nào đúng mùa và chợ sáng có đẹp thì tiệm ưu tiên dùng." },
    { question: "Có cần đặt trước không?", answer: "Nên đặt trước để tiệm giữ hoa đẹp. Hoa cưới và hoa để bàn số lượng nhiều cần báo sớm hơn." },
    { question: "Có giao trong nội thành không?", answer: "Có giao trong nội thành trong hai tiếng sau khi chốt mẫu và còn hoa sẵn. Phí giao và giờ nhận tiệm sẽ xác nhận khi bạn đặt." },
  ] satisfies FaqItem[],
  address: "Phố Phan Đình Phùng, Hà Nội",
  footer: {
    about: "Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.",
    copyright: "© Tiệm hoa Cỏ Lạ",
  },
};
