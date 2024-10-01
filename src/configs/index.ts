interface AppConfig {
  title: string;
  apiUrl: string;
}
const config: AppConfig = {
  title: "Chat Space",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
};

export const appConfig = config;
