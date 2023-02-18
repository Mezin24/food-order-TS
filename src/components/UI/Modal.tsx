import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

interface BackdropProps {
  onClose: () => void
}

interface ModalProps {children:  JSX.Element[], onClose: () => void}

const Backdrop = ({onClose}: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({children}: {children: JSX.Element[]}) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
}

const portalEl = document.getElementById('overlays')!



const Modal = ({children, onClose}:ModalProps ) => {
  return ( <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose}/>, portalEl)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
  </> );
}
 
export default Modal;