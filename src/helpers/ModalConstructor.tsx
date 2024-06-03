import { useState } from "react";
import { validateMaxLength } from "./validation";

interface Props {
  modalId: string;
  formId: string;
  formName: string;
  namePlaceholder: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
  onClose: () => void;
}

export default function ModalConstructor({
  modalId,
  formId,
  formName,
  namePlaceholder,
  handleSubmit,
  name,
  setName,
  maxLength,
  onClose,
}: Props) {
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateMaxLength(e.target.value, maxLength)) {
      setName(e.target.value);
      setError("");
    } else {
      setError(`Input cannot be more than ${maxLength} characters`);
    }
  };

  $(`#${modalId}`).on("hide.bs.modal", function () {
    setName("");
    setError("");
  });

  return (
    <div className="modal" id={modalId} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{formName}</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={onClose}>
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            <form
              className="form-inline"
              id={formId}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="form-group input-div">
                <input
                  className="form-control"
                  name="listName"
                  value={name}
                  onChange={handleChange}
                  placeholder={namePlaceholder}
                  required
                />
                {error && <small className="validation-warning">{error}</small>}
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
