import Link from "next/link";

import type { FaqItem, FlowerCard, GalleryItem } from "../lib/mock/ti-m-hoa-c-l";
import styles from "./TiMHoaCL.module.css";

type HomeContent = {
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    action: { label: string; href: string };
  };
  hero: {
    image: string;
    alt: string;
    eyebrow: string;
    title: string;
    copy: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  flowers: FlowerCard[];
  gallery: GalleryItem[];
  faqs: FaqItem[];
  address: string;
  footer: {
    about: string;
    copyright: string;
  };
};

export function TiMHoaCL({ content }: { content: HomeContent }) {
  return (
    <>
      <div className={styles.block} data-block-type="nav">
        <nav className={`${styles.nav} ${styles.navSticky}`}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandText}>{content.nav.brand}</span>
          </Link>
          <div className={styles.navLinks}>
            {content.nav.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`} href={content.nav.action.href}>
              {content.nav.action.label}
            </Link>
          </div>
        </nav>
      </div>

      <div className={styles.block} data-block-type="hero">
        <section className={`${styles.hero} ${styles.heroSplit}`}>
          <div className={styles.heroMedia}>
            <img className={styles.heroImg} src={content.hero.image} alt={content.hero.alt} />
          </div>
          <div className={styles.heroBody}>
            <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
            <h1 className={styles.heroHeadline}>{content.hero.title}</h1>
            <p className={styles.heroSub}>{content.hero.copy}</p>
            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href={content.hero.primary.href}>
                {content.hero.primary.label}
              </a>
              <a className={`${styles.btn} ${styles.btnGhost}`} href={content.hero.secondary.href}>
                {content.hero.secondary.label}
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.block} data-block-type="feature_grid" data-band="1">
        <section className={styles.gridSection}>
          <h2>Mẫu hoa và giá tham khảo</h2>
          <div className={styles.cardGrid}>
            {content.flowers.map((flower) => (
              <article className={styles.card} key={flower.title}>
                <h3 className={styles.cardTitle}>{flower.title}</h3>
                <p className={styles.cardNote}>{flower.note}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.block} data-block-type="gallery">
        <section className={styles.gallery}>
          <h2>Ảnh bó hoa đã cắm</h2>
          <div className={styles.galleryTrack}>
            {content.gallery.map((item) => (
              <figure key={item.caption}>
                <img className={styles.galleryImg} src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.block} data-block-type="faq" data-band="1">
        <section className={styles.faq}>
          <h2>Khách hay hỏi</h2>
          {content.faqs.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary>{item.question}</summary>
              <div className={styles.faqAnswer}>{item.answer}</div>
            </details>
          ))}
        </section>
      </div>

      <div className={styles.block} data-block-type="map_hours">
        <section className={styles.mapHours}>
          <h2>Giờ mở cửa và đường tới tiệm</h2>
          <p className={styles.address}>
            <LocationIcon />
            {content.address}
          </p>
          <div className={styles.mapActions} />
        </section>
      </div>

      <div className={styles.block} data-block-type="footer">
        <footer className={styles.footer}>
          <div className={styles.footerCols}>
            <div className={styles.footerAbout}>
              <p>{content.footer.about}</p>
            </div>
            <div className={styles.footerContact}>
              <p>
                <LocationIcon />
                {content.address}
              </p>
            </div>
          </div>
          <p className={styles.copyright}>{content.footer.copyright}</p>
        </footer>
      </div>
    </>
  );
}

function LocationIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z M12 12.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
