import { createNextRouteHandler } from "uploadthing/next";

import { UploadRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
	router: UploadRouter,
});
