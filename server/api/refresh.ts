// server/api/refresh.ts
export default defineEventHandler(async () => {
  await useStorage().getKeys("content");
  return { success: true };
});
