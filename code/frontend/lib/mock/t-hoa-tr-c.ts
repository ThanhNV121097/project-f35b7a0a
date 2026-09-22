export type BookingField = {
  id: string;
  label: string;
  kind: "input" | "select" | "textarea";
  type?: string;
  placeholder?: string;
  options?: string[];
};

export type DatHoaTruocContent = {
  nav: {
    brand: string;
    links: { label: string; href: string; primary?: boolean }[];
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  booking: {
    title: string;
    fields: BookingField[];
    action: string;
    note: string;
  };
  footer: {
    about: string;
    address: string;
    copyright: string;
  };
};

export const datHoaTruocContent: DatHoaTruocContent = {
  nav: {
    brand: "Tiệm hoa Cỏ Lạ",
    links: [
      { label: "Mẫu hoa", href: "/mau-hoa" },
      { label: "Giờ mở cửa", href: "/lien-he" },
      { label: "Đặt hoa trước", href: "/dat-hoa", primary: true },
    ],
  },
  hero: {
    eyebrow: "Đặt hoa trước",
    title: "Đặt hoa trước để tiệm giữ hoa đẹp cho dịp của bạn",
    lead:
      "Bạn chuẩn bị dịp tặng, ngân sách, màu hoa thích, người nhận và giờ giao. Tiệm sẽ gọi lại để chốt mẫu theo hoa có đẹp ở chợ sáng.",
  },
  booking: {
    title: "Thông tin nên chuẩn bị khi gọi đặt hoa",
    fields: [
      { id: "name", label: "Tên của bạn", kind: "input", type: "text", placeholder: "Ví dụ: Minh Anh" },
      { id: "phone", label: "Số điện thoại", kind: "input", type: "tel", placeholder: "Tiệm gọi lại để chốt mẫu" },
      { id: "occasion", label: "Dịp tặng", kind: "select", options: ["Sinh nhật", "Hoa cưới", "Hoa để bàn", "Dịp khác"] },
      { id: "style", label: "Ngân sách hoặc màu hoa", kind: "input", type: "text", placeholder: "Ví dụ: 700.000đ, tông trắng xanh" },
      { id: "message", label: "Lời nhắn hoặc yêu cầu", kind: "textarea", placeholder: "Loại hoa thích, ảnh tham khảo, lời nhắn trên thiệp" },
      { id: "address", label: "Địa chỉ giao", kind: "textarea", placeholder: "Địa chỉ trong nội thành Hà Nội" },
      { id: "time", label: "Giờ muốn nhận", kind: "input", type: "text", placeholder: "Ví dụ: sáng mai, trước 9h" },
    ],
    action: "Gọi tiệm để chốt đặt hoa",
    note:
      "Tiệm sẽ xác nhận tình trạng hoa, phí giao và giờ nhận qua điện thoại trước khi chuẩn bị bó hoa.",
  },
  footer: {
    about:
      "Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.",
    address: "Phố Phan Đình Phùng, Hà Nội",
    copyright: "© Tiệm hoa Cỏ Lạ",
  },
};
