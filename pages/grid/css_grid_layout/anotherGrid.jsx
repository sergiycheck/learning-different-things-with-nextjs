import React from "react";
import LayoutNavBar from "../../../components/layout-navbar";
import LayoutNavBarGridExamples from "../../../components/grid/css_grid_layout/gridNavbar";
import s from "../../../components/grid/css_grid_layout/anotherGridLayout.module.scss";
import classNames from "classnames";
import * as numToWord from "number-to-words";

export default function AnotherGridLayout() {
  const [activeLayout, setActiveLayout] = React.useState(s.wrapper);
  const [layouts] = React.useState(() => {
    const wrappers = Object.values(s).filter((style) =>
      style.includes("wrapper")
    );
    return wrappers;
  });

  const boxCount = 5;

  return (
    <LayoutNavBar>
      <LayoutNavBarGridExamples>
        <h1>another grid layout example</h1>

        <ul className={s.listChooseLayout}>
          {layouts.map((layout, i) => (
            <li className={s.liChooseOption} key={i}>
              <input
                type="radio"
                name="layoutChoose"
                id={`${layout}${i}`}
                onChange={() => {
                  setActiveLayout(layout);
                }}
              />
              <label
                className={classNames(activeLayout === layout && "text-info")}
                htmlFor={`${layout}${i}`}
              >
                {layout}
              </label>
            </li>
          ))}
        </ul>

        <div className={activeLayout}>
          {Array.from(Array(boxCount).keys())
            .map((n) => n + 1)
            .map((num) => (
              <div className={`box${num}`} key={num}>
                {num === 1 ? (
                  <>
                    <div className="nested1">a {numToWord.toWords(num)} </div>
                    <div className="nested2">b</div>
                    <div className="nested3">c</div>
                  </>
                ) : (
                  <>{numToWord.toWords(num)}</>
                )}
              </div>
            ))}
        </div>
      </LayoutNavBarGridExamples>
    </LayoutNavBar>
  );
}
