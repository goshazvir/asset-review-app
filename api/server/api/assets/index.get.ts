export default defineEventHandler(async (event) => {
  const store = useStorage("memory");
  const assets = await store.getItem("assets");
  return assets;
});
