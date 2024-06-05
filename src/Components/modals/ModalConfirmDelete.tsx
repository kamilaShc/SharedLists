interface Props {
  onDelete: () => void;
  onCancel: () => void;
}

export default function ModalConfirmDelete({ onDelete, onCancel }: Props) {
  return (
    <div className="modal" id="confirmDeleteModal" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete?</p>
            <div className="modal-buttons-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onDelete}
                data-dismiss="modal"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
