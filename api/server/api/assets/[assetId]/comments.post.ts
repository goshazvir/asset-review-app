import { z } from "zod";

const schema = z.object({
  comment: z.string().trim().min(1),
});

export default defineEventHandler(async (event) => {
  const store = useStorage("memory");
  const assets = await store.getItem<any[]>("assets");
  const assetId = getRouterParam(event, "assetId");

  if (!assetId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Asset ID is required",
    });
  }

  const asset = assets?.find((asset) => asset.id === Number(assetId));
  if (!asset) {
    throw createError({ statusCode: 404, statusMessage: "Asset not found" });
  }

  const body = await readBody(event);
  const { comment } = schema.parse(body);

  let comments = await store.getItem<any[]>("comments");

  if (!comments) {
    comments = [];
  }

  comments.push({
    id: comments.length + 1,
    assetId: Number(assetId),
    name: "Kyra Candidate",
    comment,
    timestamp: new Date().toISOString(),
  });
  await store.setItem("comments", comments);

  return comments[comments.length - 1];
});
