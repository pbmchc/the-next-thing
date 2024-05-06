'use client';

import { useEffect, useRef } from 'react';
import type { ElementRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export function Dialog({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  function handleDialogDismiss() {
    router.back();
  }

  useEffect(() => {
    const { current: dialog } = dialogRef;

    if (!dialog?.open) {
      dialog?.showModal();
    }
  }, []);

  return createPortal(
    <div>
      <dialog
        ref={dialogRef}
        className="relative max-w-3xl px-4 py-8"
        onClose={handleDialogDismiss}
      >
        <button
          className="absolute right-4 top-2 mb-4 p-2 font-mono text-4xl"
          title="Dismiss dialog"
          onClick={handleDialogDismiss}
        >
          &times;
        </button>
        {children}
      </dialog>
    </div>,
    document.getElementById('dialog-root') as HTMLElement
  );
}
