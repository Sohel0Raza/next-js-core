export const GET = async () => {
  return Response.json({
    currentTime: new Date().toLocaleTimeString(),
  });
};
