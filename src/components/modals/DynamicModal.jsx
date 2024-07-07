import { useRef } from 'react'
import { useSelector } from 'react-redux'

import { hideDynamicModal } from '../../store/actions/system.actions'
import { DynamicModalContent } from './DynamicModalContent'
import { useClickOutside } from '../../customHooks/useClickOutside'

export function DynamicModal() {
  const modal = useSelector(store => store.systemModule.modal)
  const modalRef = useRef()
  const { isOpen, cmp, isCentered } = modal

  useClickOutside(modalRef, hideDynamicModal)

  if (!isOpen) return
  return (
    <>
      {isCentered && <div className="modal-backdrop"></div>}

      <dialog
        className={`dynamic-modal ${isCentered ? 'center' : 'slide-right'}`}
        style={{
          display: `${isOpen ? 'block' : 'none'}`,
        }}
        ref={modalRef}
      >
        <section className="dynamic-modal-content">
          <header className="modal-header flex align-center justify-between">
            <h1 className="modal-title">{cmp.title}</h1>
            <button className="btn-close-modal" onClick={hideDynamicModal}></button>
          </header>

          <DynamicModalContent {...cmp} />
        </section>
      </dialog>
    </>
  )
}
