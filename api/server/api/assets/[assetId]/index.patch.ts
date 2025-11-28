import { z } from "zod";

const STATUSES = [
  "AWAITING_ASSET",
  "PENDING_ADMIN_REVIEW",
  "PENDING_BRAND_REVIEW",
  "APPROVED",
  "REJECTED",
];
type Status = (typeof STATUSES)[number];

const schema = z.object({ status: z.enum(STATUSES) });

export default defineEventHandler(async (event) => {
  const store = useStorage("memory");
  const assets = await store.getItem<any[]>("assets");

  if (!assets) {
    throw createError({ statusCode: 404, statusMessage: "Assets not found" });
  }

  const assetId = getRouterParam(event, "assetId");

  if (!assetId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Asset ID is required",
    });
  }

  const assetIndex = assets.findIndex((asset) => asset.id === Number(assetId));

  if (assetIndex === -1) {
    throw createError({ statusCode: 404, statusMessage: "Asset not found" });
  }

  const asset = assets[assetIndex];

  if (asset.status !== ("PENDING_ADMIN_REVIEW" satisfies Status)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Asset is not pending admin review",
    });
  }

  const body = await readBody(event);
  const { status } = schema.parse(body);

  asset.status = status;
  assets[assetIndex] = asset;

  await store.setItem("assets", assets);

  return asset;
});
