
export const GET = async () => {
    return new Response(
      JSON.stringify({
        currentTime: new Date().toLocaleTimeString(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  
