import { httpServer } from "./script/server.tsx";
import { buildClient } from "./script/build.ts";

await buildClient();
await httpServer();
