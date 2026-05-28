import { createRequestHandler } from "@tanstack/start-server-core";
import "../dist/server/server";

export const onRequest = createRequestHandler({
  build: await import("../dist/server/server.js"),
});
