"use client";

const KEY = "on.record.nyc.app-case";

export type StoredCase = {
  caseId: string;
  filedAt: string;
};

export function saveCase(data: StoredCase) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function readCase(): StoredCase | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredCase;
    if (parsed?.caseId && parsed?.filedAt) return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

export function generateCaseId(): string {
  const y = new Date().getFullYear();
  const part = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ORN-${y}-${part}`;
}
