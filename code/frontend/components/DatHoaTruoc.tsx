import Link from "next/link";
import type { DatHoaTruocContent, BookingField } from "../lib/mock/t-hoa-tr-c";
import styles from "./DatHoaTruoc.module.css";

type Props = {
  content: DatHoaTruocContent;
};

function Field({ field }: { field: BookingField }) {
  if (field.kind === "select") {
    return (
      <label className={styles.label} htmlFor={field.id}>
        {field.label}
        <select className={styles.control} id={field.id} name={field.id} defaultValue="">
          <option value="" disabled>
            Chọn một mục
          </option>
          {field.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  if (field.kind === "textarea") {
    return (
      <label className={`${styles.label} ${styles.wide}`} htmlFor={field.id}>
        {field.label}
        <textarea className={styles.control} id={field.id} name={field.id} placeholder={field.placeholder} rows={3} />
      </label>
    );
  }

  return (
    <label className={styles.label} htmlFor={field.id}>
      {field.label}
      <input className={styles.control} id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} />
    </label>
  );
}

export default function DatHoaTruoc({ content }: Props) {
  return (
    <div className={styles.page}>
      <nav className={styles.nav} aria-label="Điều hướng chính">
        <a className={styles.brand} href="/">
          {content.nav.brand}
        </a>
        <div className={styles.navLinks}>
          {content.nav.links.map((link) => (
            <a className={link.primary ? styles.navPrimary : styles.navLink} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroLead}>{content.hero.lead}</p>
        </section>

        <section className={styles.band} aria-labelledby="booking-title">
          <div className={styles.bookingGrid}>
            <h2 id="booking-title" className={styles.sectionTitle}>
              {content.booking.title}
            </h2>
            <form className={styles.form} action="#" aria-describedby="booking-note">
              {content.booking.fields.map((field) => (
                <Field field={field} key={field.id} />
              ))}
              <button className={styles.button} type="button">
                {content.booking.action}
              </button>
              <p className={styles.note} id="booking-note">
                {content.booking.note}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerCols}>
          <p className={styles.footerAbout}>{content.footer.about}</p>
          <p className={styles.footerContact}>{content.footer.address}</p>
        </div>
        <p className={styles.copyright}>{content.footer.copyright}</p>
      </footer>
    </div>
  );
}
