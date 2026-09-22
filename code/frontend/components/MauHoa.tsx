import { mauHoaItems, type MauHoaItem } from "../lib/mock/m-u-hoa";
import styles from "./MauHoa.module.css";

type MauHoaProps = {
  items?: MauHoaItem[];
};

export function MauHoa({ items = mauHoaItems }: MauHoaProps) {
  return (
    <div className={styles.page}>
      <nav className={styles.nav} aria-label="Chính">
        <a className={styles.brand} href="/">
          Tiệm hoa Cỏ Lạ
        </a>
        <div className={styles.navLinks}>
          <a href="/mau-hoa/">Mẫu hoa</a>
          <a href="/lien-he/">Giờ mở cửa</a>
          <a className={`${styles.button} ${styles.buttonSmall} ${styles.buttonPrimary}`} href="/dat-hoa/">
            Đặt hoa trước
          </a>
        </div>
      </nav>

      <section className={styles.hero} aria-labelledby="mau-hoa-title">
        <p className={styles.eyebrow}>Mẫu hoa</p>
        <h1 id="mau-hoa-title" className={styles.heroHeadline}>
          Mẫu hoa và giá tham khảo
        </h1>
        <p className={styles.heroLead}>
          Mẫu chỉ để bạn hình dung kiểu bó. Hoa thay theo mùa và theo chợ sáng Quảng Bá, tiệm sẽ báo lại loại hoa đang đẹp trước khi cắm.
        </p>
      </section>

      <section className={styles.menuSection} aria-labelledby="mau-hoa-list-title">
        <h2 id="mau-hoa-list-title">Mẫu hoa</h2>
        <ul className={styles.menuRows}>
          {items.map((item) => (
            <li className={styles.menuRow} key={item.name}>
              <div>
                <h3 className={styles.menuName}>{item.name}</h3>
                <p className={styles.menuNote}>{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerCols}>
          <div className={styles.footerAbout}>
            <p>
              Tiệm hoa nhỏ ở phố Phan Đình Phùng. Mỗi sáng tự đi chợ hoa Quảng Bá, chọn hoa theo mùa rồi bó theo dịp: sinh nhật, cưới, văn phòng, một bó tặng người thương cũng được.
            </p>
          </div>
          <div className={styles.footerContact}>
            <p>Phố Phan Đình Phùng, Hà Nội</p>
          </div>
        </div>
        <p className={styles.copyright}>© Tiệm hoa Cỏ Lạ</p>
      </footer>
    </div>
  );
}
