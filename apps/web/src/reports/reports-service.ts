export type Report = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_URL =
  import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export const fetchReports = async (): Promise<Report[]> => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};
