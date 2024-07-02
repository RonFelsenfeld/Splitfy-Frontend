import { useSelector } from 'react-redux'
import { hideDynamicModal } from '../../store/actions/system.actions'
import { DynamicModalContent } from './DynamicModalContent'

export function DynamicModal() {
  const modal = useSelector(store => store.systemModule.modal)
  const { isOpen, cmp, isCentered } = modal

  if (!isOpen) return
  return (
    <>
      {isCentered && <div className="modal-backdrop"></div>}

      <dialog
        className={`dynamic-modal ${isCentered ? 'center' : 'slide-right'}`}
        style={{
          display: `${isOpen ? 'block' : 'none'}`,
        }}
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
