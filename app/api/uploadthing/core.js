const { createUploadthing } = require("uploadthing/next");

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const UploadRouter = {
	imageUploader: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
		async ({ metadata, file }) => {
			console.log("file url", file.url);
		}
	),
};
