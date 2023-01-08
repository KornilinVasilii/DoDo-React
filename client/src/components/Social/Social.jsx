import s from './Social.module.css'
import fb from './fb-2x.png'
import inst from "./inst-2x.png";
import ok from "./ok-2x.png";
import vk from "./vk-2x.png";
import youtube from "./youtube-2x.png";
export function Social() { 
  return (
    <div className={ s.social }>
      <img src={fb} alt="" width="32" height="32" />
      <img src={inst} alt="" width="32" height="32" />
      <img src={ok} alt="" width="32" height="32" />
      <img src={vk} alt="" width="32" height="32" />
      <img src={youtube} alt="" width="32" height="32" />
    </div>
  );
}