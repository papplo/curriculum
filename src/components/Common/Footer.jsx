import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Pablo Anttila
      {/* <small className={Styles.byline}>🚀 Built by Astro</small> */}
    </footer>
  );
}
export default Footer;
