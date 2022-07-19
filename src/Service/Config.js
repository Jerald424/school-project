export function Config() {
  var envType = process.env.NODE_ENV;
  var session_id = {};
  if (envType === "development") {
    session_id = {
      "X-Openerp-Session-Id": "b579112f35d0f41ee546b772cd5784dd76605678",
    };
  }
  const axiosInstance = {
    baseURL: "api/portal",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
      ...session_id,
    },
  };
  return axiosInstance;
}
