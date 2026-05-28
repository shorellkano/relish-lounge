import { createRequestHandler } from "@tanstack/start-server-core";
export const onRequest = createRequestHandler({
  build: await import("../dist/server/server.js"),
});
