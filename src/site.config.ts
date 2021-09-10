export const config = {
  siteMeta: {
    title: "",
    description: "",
  },
  baseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEURL
      : "http://localhost:3000",
};
