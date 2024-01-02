import React from "react";
import axios from "axios";
import App from "../App";

const instance = axios.create({
  baseURL: "https://coded-pets-api-crud.eapi.joincoded.com",
});

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;

export default instance;
