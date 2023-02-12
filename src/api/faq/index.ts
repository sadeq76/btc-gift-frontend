import useApi from "@/api";

const path = "faq/";

export const useGetFaqs = () => useApi(path, "GET");
