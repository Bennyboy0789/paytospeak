import { ViewTransition } from "react";

// Templates remount on every navigation, so the outgoing page fades out and the next
// one rises in. The header is anchored separately (viewTransitionName in Header).
export default function Template({ children }: LayoutProps<"/">) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  );
}
