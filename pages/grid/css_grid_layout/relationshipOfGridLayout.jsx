import React from "react";
import LayoutNavBar from "../../../components/layout-navbar";
import LayoutNavBarGridExamples from "../../../components/grid/css_grid_layout/gridNavbar";
import * as numToWord from "number-to-words";
import s from "../../../components/grid/css_grid_layout/relationshipOfGridLayout.module.scss";
import classNames from "classnames";

const BoxesLayout = ({
  activeLayoutModuleClassName,
  boxCount,
  innerContentRenderProp,
}) => (
  <div className={activeLayoutModuleClassName}>
    {Array.from(Array(boxCount).keys())
      .map((n) => n + 1)
      .map((num) => (
        <div className={`box${num}`} key={num}>
          {innerContentRenderProp(num)}
        </div>
      ))}
  </div>
);

const initialLayout = ({ activeLayoutModuleClassName, boxCount }) => {
  return {
    activeLayoutModuleClassName,
    layoutJSX: (
      <BoxesLayout
        activeLayoutModuleClassName={activeLayoutModuleClassName}
        boxCount={boxCount}
        innerContentRenderProp={(num) => <>{numToWord.toWords(num)}</>}
      />
    ),
  };
};

function init(activeLayoutModuleClassName) {
  const boxCount = 5;

  return initialLayout({ activeLayoutModuleClassName, boxCount });
}

function layoutReducer(state, action) {
  const boxCount = 5;
  const activeLayoutModuleClassName = action.payload;

  switch (action.type) {
    case "wrapperGridWithAbsolutelyPositionedBox":
      return {
        activeLayoutModuleClassName,
        layoutJSX: (
          <BoxesLayout
            activeLayoutModuleClassName={activeLayoutModuleClassName}
            boxCount={boxCount}
            innerContentRenderProp={(num) => {
              return num === 3 ? (
                <>
                  <p>{numToWord.toWords(num)}</p>
                  <p>This block might be absolutely positioned.</p>
                </>
              ) : (
                <>{numToWord.toWords(num)}</>
              );
            }}
          />
        ),
      };

    case "wrapperGridWithAbsolutelyPositionedBoxNestedInBox3":
      return {
        activeLayoutModuleClassName,
        layoutJSX: (
          <BoxesLayout
            activeLayoutModuleClassName={activeLayoutModuleClassName}
            boxCount={boxCount}
            innerContentRenderProp={(num) => {
              return num === 3 ? (
                <>
                  <div className="abspos">
                    <p>{numToWord.toWords(num)}</p>
                    <p>
                      This block is absolutely positioned. In this example the
                      grid area is the containing block and so the absolute
                      positioning offset values are calculated in from the outer
                      edges of the grid area.
                    </p>
                  </div>
                </>
              ) : (
                <>{numToWord.toWords(num)}</>
              );
            }}
          />
        ),
      };

    case "wrapperGridDisplayContents":
      return {
        activeLayoutModuleClassName,
        layoutJSX: (
          <BoxesLayout
            activeLayoutModuleClassName={activeLayoutModuleClassName}
            boxCount={boxCount}
            innerContentRenderProp={(num) => {
              return num === 1 ? (
                <>
                  <div className="nested">a {numToWord.toWords(num)}</div>
                  <div className="nested">b</div>
                  <div className="nested">c</div>
                </>
              ) : (
                <>{numToWord.toWords(num)}</>
              );
            }}
          />
        ),
      };
    default:
      return initialLayout({
        activeLayoutModuleClassName,
        boxCount,
      });
  }
}

export default function AnotherGridLayout() {
  const layouts = React.useMemo(() => {
    const wrappers = Object.entries(s)
      .filter(([key, val]) => key.includes("wrapper"))
      .map(([key, val]) => ({
        className: key,
        classModuleName: val,
      }));
    return wrappers;
  }, []);

  const [firstWrapperVal] = Object.values(layouts);

  const [activeLayoutStateComponent, dispatchActiveLayout] = React.useReducer(
    layoutReducer,
    firstWrapperVal.classModuleName,
    init
  );

  return (
    <LayoutNavBar>
      <LayoutNavBarGridExamples>
        <h1>Relationship of grid layout to other layout methods</h1>

        <ul className={s.listChooseLayout}>
          {layouts.map((layout, i) => (
            <li className={s.liChooseOption} key={i}>
              <input
                checked={
                  activeLayoutStateComponent.activeLayoutModuleClassName ===
                  layout.classModuleName
                }
                type="radio"
                name="layoutChoose"
                id={`${layout.classModuleName}${i}`}
                onChange={() => {
                  dispatchActiveLayout({
                    type: layout.className,
                    payload: layout.classModuleName,
                  });
                }}
              />
              <label
                className={classNames(
                  activeLayoutStateComponent.activeLayoutModuleClassName ===
                    layout.classModuleName && "text-info"
                )}
                htmlFor={`${layout.classModuleName}${i}`}
              >
                {layout.classModuleName}
              </label>
            </li>
          ))}
        </ul>
        {activeLayoutStateComponent.layoutJSX}
      </LayoutNavBarGridExamples>
    </LayoutNavBar>
  );
}
