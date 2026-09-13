import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only after client-side hydration — avoids SSR/client mismatch without setState-in-effect. */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
