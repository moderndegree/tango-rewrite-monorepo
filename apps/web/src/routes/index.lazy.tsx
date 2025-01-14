import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@repo/ui";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button>Click Me!</Button>
    </div>
  );
}
