import Link from "next/link";
import styles from "../../../styles/Home.module.scss";

export default function LayoutNavBarGridExamples({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/grid/css_grid_layout/gridLayout">
          <a>grid layout example</a>
        </Link>
        {" | "}
        <Link href="/grid/css_grid_layout/anotherGrid">
          <a>another grid layout</a>
        </Link>
        {" | "}
      </nav>

      {children}
    </>
  );
}
