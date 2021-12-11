import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../store/boardReducer'
import M from 'materialize-css'

export const Settings = ({ setModalActive }) => {
   const inputEl = useRef(null)
   const dispatch = useDispatch()
   const currentDifficult = useSelector(state => state.board.difficult)
   const currentCardsType = useSelector(state => state.board.cardsType)

   useEffect(() => {
      M.FormSelect.init(inputEl.current)
   }, [])

   function setDifficultAndSize(e) {
      dispatch(setOption('size', e.target.dataset.size))
      dispatch(setOption('difficult', e.target.value))
   }


   return (
      <div className="settings">
         <div className="settings__select-cards row">
            <div className="settings__input input-field col s12">
               <select
                  ref={inputEl}
                  defaultValue={currentCardsType}
                  className="settings__select icons"
                  onChange={(e) => dispatch(setOption('cardsType', e.target.value))}
               >
                  <option value="animals" data-icon="assets/icons/animals-icon.jpg">Животные</option>
                  <option value="cards" data-icon="assets/icons/cards-icon.jpg">Игральные карты</option>
                  <option value="signs" data-icon="assets/icons/signs-icon.jpg">Дорожные знаки</option>
               </select>
               <label>Выберите тип карточек</label>
            </div>
         </div>
         <div className="settings__select-diff">
            <div className="settings__label center">
               <h5>Выберите сложность</h5>
            </div>
            <div className="settings__form-diff row">
               <form onChange={(e) => setDifficultAndSize(e)} className="col s12 m-l">
                  <div>
                     <label>
                        <input
                           className="with-gap"
                           value="Лёгкая"
                           data-size="12"
                           type="radio"
                           name="difficult"
                           id="easy"
                           defaultChecked={currentDifficult === 'Лёгкая'} />
                        <span>Лёгкая</span>
                     </label>
                  </div>
                  <div>
                     <label>
                        <input
                           className="with-gap"
                           value="Средняя"
                           data-size="24"
                           type="radio"
                           name="difficult"
                           id="medium"
                           defaultChecked={currentDifficult === 'Средняя'} />
                        <span>Средняя</span>
                     </label>
                  </div>
                  <div>
                     <label>
                        <input
                           className="with-gap"
                           value="Высокая"
                           data-size="32"
                           type="radio"
                           name="difficult"
                           id="hard"
                           defaultChecked={currentDifficult === 'Высокая'} />
                        <span>Высокая</span>
                     </label>
                  </div>
               </form>
            </div>
         </div >
         <div className="settings__buttons">
            <button className="btn btn-primary" onClick={() => setModalActive(false)}>Закрыть</button>
         </div>
      </div >
   )
}