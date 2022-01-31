const baseUrl = "https://api.quotable.io/random";

export const getRandomQuote = async () => {
  try {
    const response = await fetch(baseUrl);
    const { statusCode, statusMessage, ...data } = await response.json();

    if (!response.ok) {
      throw new Error(`${statusCode} ${statusMessage}`);
    }

    return data;
  } catch (error) {
    console.log(error);
    return { content: "Oops... Something went wrong" };
  }
};
