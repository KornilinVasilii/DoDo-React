import s from "./Contacts.module.css"

export function Contacts() {
  return (
       <div className={s.contacts}>
          <p className={s.tell}>8 800 302-00-60</p>
          <p className={s.call}>Звонок бесплатный</p>
   
        </div>
  )
}