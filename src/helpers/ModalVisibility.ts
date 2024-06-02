export const hideModal = (modalId: string) => {
  document.getElementById(modalId)?.classList.remove("show");
  document.getElementById(modalId)!.style.display = "none";
  document.body.classList.remove("modal-open");
  document.getElementsByClassName("modal-backdrop")[0]?.remove();
};

export const showModal = (modalId: string) => {
  document.getElementById(modalId)?.classList.add("show");
  document.getElementById(modalId)!.style.display = "block";
  document.body.classList.add("modal-open");

  const backdrop = document.getElementsByClassName("modal-backdrop")[0];
  if (!backdrop) {
    const backdrop = document.createElement("div");
    backdrop.classList.add("modal-backdrop", "show");
    document.body.appendChild(backdrop);
  }
};
