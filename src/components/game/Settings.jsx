import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'

export const Settings = () => {
   const inputEl = useRef(null)

   useEffect(() => {
      M.FormSelect.init(inputEl.current)
   }, [])
   return (
      <div className="settings">
         <div className="settings__select row">
            <div className="settings__input input-field col s6 m3">
               <select ref={inputEl} defaultValue="Animals" className="settings__select icons">
                  <option value="Animals" data-icon="assets/icons/animals-icon.jpg">Животные</option>
                  <option value="Cards" data-icon="assets/icons/cards-icon.jpg">Игральные карты</option>
                  <option value="Signs" data-icon="assets/icons/signs-icon.jpg">Дорожные знаки</option>
               </select>
               <label>Выберите тип карточек</label>
            </div>
         </div>
      </div>
   )
}