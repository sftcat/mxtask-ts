import axios from "axios";

export const BASE_URL = "https://eoussama.github.io"

export const $api = axios.create(
    {baseURL: BASE_URL}
)