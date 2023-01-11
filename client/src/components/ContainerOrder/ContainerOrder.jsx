import s from "./ContainerOrder.module.css"

export function ContainerOrder({ children }) {
  return (
    <div className={s.container}>{ children }</div>
  )
}