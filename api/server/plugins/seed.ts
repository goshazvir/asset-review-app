import assets from "../../seed/assets.json";
import comments from "../../seed/comments.json";

export default defineNitroPlugin(async () => {
  const store = useStorage("memory");
  const already = await store.getItem("assets");
  if (!already) {
    await store.setItem("assets", assets);
    await store.setItem("comments", comments);
  }
});
