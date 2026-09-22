import type { LienHePageData } from "@/lib/mock/gi-m-c-a-v-ng-t-i-ti-m";
import styles from "./GioMoCuaVaDuongToiTiem.module.css";

type Props = {
  data: LienHePageData;
};

function LocationIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z M12 12.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z" />
    </svg>
  );
}

export default function GioMoCuaVaDuongToiTiem({ data }: Props) {
  return (
    <>
      <header className={styles.block} data-block-type="nav">
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.brand} href="/">
            {data.nav.brand}
          </a>
          <div className={styles.navLinks}>
            {data.nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className={`${styles.button} ${styles.buttonSmall} ${styles.buttonPrimary}`} href={data.nav.action.href}>
              {data.nav.action.label}
            </a>
          </div>
        </nav>
      </header>
      <div className={styles.block} data-block-type="hero">
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{data.hero.eyebrow}</p>
          <h1>{data.hero.heading}</h1>
          <p className={styles.heroLead}>{data.hero.lead}</p>
        </section>
      </div>
      <div className={styles.block} data-block-type="map_hours">
        <section className={styles.mapHours}>
          <h2>{data.mapHours.heading}</h2>
          <p className={styles.address}>
            <LocationIcon />
            {data.mapHours.address}
          </p>
        </section>
      </div>
      <div className={styles.block} data-block-type="footer">
        <footer className={styles.footer}>
          <div className={styles.footerCols}>
            <div className={styles.footerAbout}>
              <p>{data.footer.about}</p>
            </div>
            <div className={styles.footerContact}>
              <p>
                <LocationIcon />
                {data.footer.address}
              </p>
            </div>
          </div>
          <p className={styles.copyright}>{data.footer.copyright}</p>
        </footer>
      </div>
    </>
  );
}
