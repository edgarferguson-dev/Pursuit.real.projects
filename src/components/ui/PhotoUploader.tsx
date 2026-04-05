"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

export type PhotoSlot = {
  id: string;
  url: string;
  file: File;
};

type Props = {
  max?: number;
  addLabel: string;
  removeLabel: string;
  sectionLabel: string;
  emptySlotLabel: string;
  onChange?: (files: PhotoSlot[]) => void;
};

export function PhotoUploader({
  max = 3,
  addLabel,
  removeLabel,
  sectionLabel,
  emptySlotLabel,
  onChange,
}: Props) {
  const inputId = useId();
  const [photos, setPhotos] = useState<PhotoSlot[]>([]);
  const urlsRef = useRef<string[]>([]);

  const revokeAll = useCallback(() => {
    urlsRef.current.forEach((u) => URL.revokeObjectURL(u));
    urlsRef.current = [];
  }, []);

  useEffect(() => {
    return () => revokeAll();
  }, [revokeAll]);

  const sync = useCallback(
    (next: PhotoSlot[]) => {
      setPhotos(next);
      onChange?.(next);
    },
    [onChange],
  );

  const handleFiles = (list: FileList | null) => {
    if (!list?.length) return;
    const incoming = Array.from(list).filter((f) => f.type.startsWith("image/"));
    const room = max - photos.length;
    const nextFiles = incoming.slice(0, Math.max(0, room));
    const additions: PhotoSlot[] = nextFiles.map((file) => {
      const url = URL.createObjectURL(file);
      urlsRef.current.push(url);
      return { id: `${file.name}-${url.slice(-8)}`, url, file };
    });
    sync([...photos, ...additions]);
  };

  const remove = (id: string) => {
    const target = photos.find((p) => p.id === id);
    if (target) URL.revokeObjectURL(target.url);
    urlsRef.current = urlsRef.current.filter((u) => u !== target?.url);
    sync(photos.filter((p) => p.id !== id));
  };

  return (
    <div
      className="rounded-xl border-2 border-dashed border-accent/50 bg-surface-2/80 p-5 shadow-evidence md:p-8"
      aria-label={sectionLabel}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-heading text-lg text-text md:text-xl">{sectionLabel}</p>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <label
            htmlFor={inputId}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-accent bg-accent/10 px-5 py-3 text-sm font-semibold text-accent hover:bg-accent/20"
          >
            {addLabel}
            {photos.length > 0 && (
              <span className="ml-2 text-xs font-normal text-muted">
                ({photos.length}/{max})
              </span>
            )}
          </label>
        </div>
        <ul className="grid flex-1 grid-cols-3 gap-3" aria-live="polite">
          {photos.map((p) => (
            <li key={p.id} className="relative aspect-square overflow-hidden rounded-lg border border-border-strong bg-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.url}
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => remove(p.id)}
                className="absolute right-2 top-2 rounded bg-bg/90 px-2 py-1 text-xs font-semibold text-text"
                aria-label={removeLabel}
              >
                {removeLabel}
              </button>
            </li>
          ))}
          {Array.from({ length: Math.max(0, max - photos.length) }).map(
            (_, i) => (
              <li
                key={`empty-${i}`}
                className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-border bg-bg/40 text-center text-xs text-muted"
              >
                {emptySlotLabel}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
