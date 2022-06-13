import classNames from "classnames";

export function ActiveLayoutList({
  setActiveLayout,
  layouts,
  activeLayout,
  s,
}) {
  return (
    <ul className={s.listChooseLayout}>
      {layouts.map((layout, i) => (
        <li className={s.liChooseOption} key={i}>
          <input
            checked={activeLayout === layout}
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
  );
}
