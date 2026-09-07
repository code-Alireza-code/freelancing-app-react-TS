import ButtonIcon from "@/ui/ButtonIcon";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  className = "",
  showCloseButton = true,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleDialogClick}
      className={`m-auto w-full max-w-lg rounded-xl text-secondary-700 bg-secondary-100 p-0 shadow-xl backdrop:bg-black/50 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-b-secondary-300 p-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {showCloseButton && (
          <ButtonIcon
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="rounded-md p-1 text-muted-foreground hover:bg-muted"
          >
            <MdClose className="size-5" />
          </ButtonIcon>
        )}
      </div>
      <div className="p-4">{children}</div>
    </dialog>
  );
}
