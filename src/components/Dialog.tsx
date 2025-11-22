'use client';

import { useEffect, useRef } from 'react';
import type { ComponentRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export function Dialog({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ComponentRef<'dialog'>>(null);

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
          className="absolute top-2 right-4 mb-4 cursor-pointer p-2 font-mono text-4xl"
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
