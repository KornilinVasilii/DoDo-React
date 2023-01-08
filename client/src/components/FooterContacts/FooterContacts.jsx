import s from './FooterContacts.module.css'
import appstore from './appstore-2x.png'
import gplay from './gplay-2x.png'
export function FooterContacts() { 
  return (
    <div className={s.contacts}>
      <img className={s.gplay} src={gplay} alt="" height="40" width="135" />
      <img className={s.app} src={appstore} alt="" height="40" width="135" />
      <a href="tel:88003020060" className={s.tell}>
        8-800-302-00-60
      </a>
      <p className={s.call}> Звонок бесплатный</p>
      <a href="mailto:feedback@dodopizza.com" className={s.email}>
        feedback@dodopizza.com
      </a>
    </div>
  );
}