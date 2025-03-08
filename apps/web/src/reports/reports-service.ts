type Report = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const fetchReports = async (): Promise<Report[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
