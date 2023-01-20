import s from './ModalWindowTwo.module.css'
import image from './image.png'
import { BtnModal } from '../../components/BtnModal/BtnModal'
import svg from './btn_out.svg'

export function ModalWindowTwo({ look,setLook }) {
  return (
    <div className={look ? s.modal : s.active} onClick={() => setLook(false)}>
      <div className={s.modal_section} onClick={(e) => e.stopPropagation()} >
        <img src={image} alt="" className={s.modal_img} />
        <div className={s.modal_info}>
          <h3 className={s.modal_title}>
            Рулетики с ананасами + Рулетики с брусникой, 16
          </h3>
          <span className={s.modal_quantity}>16 шт</span>
          <p className={s.modal_composition}>
            Микс рулетиков со сгущенным молоком: 8 штук с ананасом и корицей, 8
            штук с брусникой
          </p>
          <BtnModal />
        </div>
        <input onClick={() => setLook(false)} type="image" src={svg} className={s.btn_out}></input>
      </div>
    </div>
  );
}
