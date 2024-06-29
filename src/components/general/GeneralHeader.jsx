export function GeneralHeader({ title, imgUrl }) {
  return (
    <header className="general-header flex align-center justify-between">
      <div className="details-container flex align-center">
        {imgUrl && <img src={imgUrl} alt="Profile image" className="header-image" />}

        <h2 className="header-title">{title}</h2>
      </div>

      <button
        className="btn-add-expense"
        onClick={() => setExpenseToEdit(groupService.getDefaultExpense())}
      >
        Add an expense
      </button>
    </header>
  )
}
