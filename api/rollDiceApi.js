import axios from 'axios';

export const rollDiceApi = async (sides = 6, dice = 1) => {
  try {
    const response = await axios.get( import.meta.env.VITE_API_URL, {
      params: { sides, dice },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error rolling dice:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};