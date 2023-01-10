import s from './FooterContacts.module.css'
import appstore from './appstore-2x.png'
import gplay from './gplay-2x.png'
import { FooterPhon } from '../FooterPhon/FooterPhon';


export function FooterContacts() { 
  return (
    <div className={s.contacts}>
      <img className={s.gplay} src={gplay} alt="" height="40" width="135" />
      <img className={s.app} src={appstore} alt="" height="40" width="135" />
       <FooterPhon/>
      <a href="mailto:feedback@dodopizza.com" className={s.email}>
        feedback@dodopizza.com
      </a>
    </div>
  );
}