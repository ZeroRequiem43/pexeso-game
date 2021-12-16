import React from 'react'

const Modal = ({ header, modalActive, setModal, children }) => {
   return (
      <> {modalActive &&
         <div className="modal" onClick={() => setModal(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
               <div className="modal__header">
                  <h4>{header}</h4>
               </div>
               <div className="modal__body">
                  {children}
               </div>
               <div className="modal__footer">
                  <button className="btn btn-primary" onClick={() => setModal(false)}>Закрыть</button>
               </div>
            </div>
         </div>
      }
      </>
   )
}

export default Modal