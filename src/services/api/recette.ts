import { recetteFaker } from "../fakers/recetteFaker";

export async function getRecettes() {
  try {
    const data = recetteFaker;
    return data;
  } catch (error) {
    console.log(error);
  }
}
