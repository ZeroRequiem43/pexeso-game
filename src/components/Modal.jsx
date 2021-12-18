import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModal } from '../store/boardReducer'

const Modal = ({ header, children }) => {
   const modalState = useSelector(state => state.board.showModal)
   const dispatch = useDispatch()

   return (
      <> {modalState &&
         <div className="modal" onClick={() => dispatch(showModal(false))}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
               <div className="modal__header">
                  <h4>{header}</h4>
               </div>
               <div className="modal__body">
                  {children}
               </div>
               <div className="modal__footer">
                  <button className="btn btn-primary" onClick={() => dispatch(showModal(false))}>Закрыть</button>
               </div>
            </div>
         </div>
      }
      </>
   )
}

export default Modal