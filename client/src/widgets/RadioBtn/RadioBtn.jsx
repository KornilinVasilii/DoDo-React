import s from "./RadioBtn.module.css";
export function RadioBtn() {
  return (
    <>
      <div className={s.form_toggle}>
        <div className={s.form_toggle_item}>
          <input
            className={s.input}
            id="fid-1"
            type="radio"
            name="radio"
            value="off"
          />
          <label className={s.label} for="fid-1">
            Традиционное
          </label>
        </div>
        <div className={s.form_toggle_item}>
          <input
            className={s.input}
            id="fid-2"
            type="radio"
            name="radio"
            value="on"
          />
          <label className={s.label} for="fid-2">
            Тонкое
          </label>
        </div>
      </div>
    </>
  );
}
