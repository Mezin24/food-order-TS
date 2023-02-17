import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = () => {
  return <div className={classes.backdrop}></div>
}

const ModalOverlay = ({children}: {children: JSX.Element[]}) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
}

const portalEl = document.getElementById('overlays')!

const Modal = ({children}: {children:  JSX.Element[]}) => {
  return ( <>
    {ReactDOM.createPortal(<Backdrop/>, portalEl)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
  </> );
}
 
export default Modal;