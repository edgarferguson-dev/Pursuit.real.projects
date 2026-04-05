import { Suspense } from "react";
import { StatusClient } from "./StatusClient";

function StatusFallback() {
  return (
    <div className="mx-auto max-w-content px-4 py-16 text-muted">
      Loading…
    </div>
  );
}

export default function StatusPage() {
  return (
    <Suspense fallback={<StatusFallback />}>
      <StatusClient />
    </Suspense>
  );
}
