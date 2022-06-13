import LayoutNavBar from "../../../components/layout-navbar";
import styles from "../../../components/grid/css_grid_layout/styles.module.scss";
import LayoutNavBarGridExamples from "../../../components/grid/css_grid_layout/gridNavbar";

export default function GridLayout() {
  return (
    <LayoutNavBar>
      <LayoutNavBarGridExamples>
        <h1>grid layout example</h1>

        <div className={styles.wrapper}>
          <div className={styles.one}>One</div>
          <div className={styles.two}>Two</div>
          <div className={styles.three}>Three</div>
          <div className={styles.four}>Four</div>
          <div className={styles.five}>Five</div>
          <div className={styles.six}>Six</div>
        </div>
      </LayoutNavBarGridExamples>
    </LayoutNavBar>
  );
}
