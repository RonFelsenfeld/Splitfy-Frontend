import { useSelector } from 'react-redux'
import { hideModal } from '../../store/actions/system.actions'
import { DynamicModalContent } from './DynamicModalContent'

export function DynamicModal() {
  const modal = useSelector(store => store.systemModule.modal)
  const { isOpen, cmp } = modal

  if (!isOpen) return
  return (
    <dialog
      className="dynamic-modal"
      style={{
        display: `${isOpen ? 'block' : 'none'}`,
      }}
    >
      <section className="dynamic-modal-content">
        <header className="modal-header flex align-center justify-between">
          <h1 className="modal-title">{cmp.title}</h1>
          <button className="btn-close-modal" onClick={hideModal}></button>
        </header>

        <DynamicModalContent {...cmp} />
      </section>
    </dialog>
  )
}
