import { API_URL } from "@/utils/contants"

export async function getData(foodQuery: string) {
  return fetch(`${API_URL}${foodQuery}`).then((response) => response.json())
}
