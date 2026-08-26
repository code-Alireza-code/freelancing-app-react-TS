import axios, { AxiosError, type AxiosResponse } from "axios";

const app = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  withCredentials: true,
});

app.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const originalConfig = err.config!;
    if (err?.response?.status === 401 && !originalConfig.retry) {
      originalConfig.retry = true;
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/user/refresh-token`,
          { withCredentials: true },
        );
        if (data) {
          return app(originalConfig);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
