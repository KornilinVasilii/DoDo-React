 import s from './RadioButton.module.css'
export function RadioButton() { 
  return (
    <div className={s.form_radio_group}>
    < div className = { s.form_radio_group_item } >
        <input id="radio-1" type="radio" name="rad" value="1" />
        <label for="radio-1">Маленькая</label>
      </div>
      <div className={ s.form_radio_group_item}>
        <input id="radio-2" type="radio" name="rad" value="2" />
        <label for="radio-2">Средняя</label>
      </div>
        <div className={s.form_radio_group_item}>
        <input id="radio-3" type="radio" name="rad" value="3" />
        <label for="radio-3">Большая</label>
      </div>
    </div>
    
  );
}