import useSWR from 'swr';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetcher = (url) => axios.get(url).then((res) => res.data);
const fetcherToken = (url, token) =>
  axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res.data);
// Hook untuk mendapatkan data
export function useFetch(url) {
  const { data, error, mutate } = useSWR(`${API_URL}${url}`, fetcher);
  const isLoading = !error && !data;
  return { data, error, isLoading, mutate };
}

// Hook untuk mendapatkan user detail
export function useUserDetail(url, token) {
  const { data, error, mutate } = useSWR((url, token), fetcherToken);
  const isLoading = !error && !data;
  return { data, error, isLoading, mutate };
}

export const fetchDataUser = async (token) => {
  try {
    const response = await axios.get('http://localhost:4000/users/detail', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data
  } catch (error) {
    return error?.response?.data?.message
  }
};

// Fungsi untuk membuat data
export async function createData(url, data) {
  try {
    const response = await axios.post(`${API_URL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

// Fungsi untuk memperbarui data
export async function updateData(url, data) {
  try {
    const response = await axios.put(`${API_URL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

// Fungsi untuk menghapus data
export async function deleteData(url) {
  try {
    const response = await axios.delete(`${API_URL}${url}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}
