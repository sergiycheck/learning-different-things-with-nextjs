import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function LayoutNavBar({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        {" | "}
        <Link href="/blog/posts-server-side">
          <a>Server Side Posts</a>
        </Link>
        {" | "}
        <Link href="/parallax/parallax">
          <a>Parallax Page</a>
        </Link>
        {" | "}
        <Link href="/grid/css_grid_layout/gridLayout">
          <a>grid layout example</a>
        </Link>
      </nav>

      {children}
    </>
  );
}
