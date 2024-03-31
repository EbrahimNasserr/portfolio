import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.facebook.com/profile.php?id=100027680303933"
        target="_blank"
      >
        facebook
      </a>
      <a href="https://www.instagram.com/ebrahim_nasserr/" target="_blank">
        Instagram
      </a>
      <a href="https://github.com/EbrahimNasserr" target="_blank">
        githup
      </a>
      <a href="https://www.linkedin.com/in/ebrahim-nasser/" target="_blank">
        LinkedIn
      </a>
      <a
        href="https://wa.me/+201152153667"
        target="_blank"
        rel="noopener noreferrer"
      >
        whatsApp
      </a>
    </div>
  );
}
