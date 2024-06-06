import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Fungsi untuk login
export async function login(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { access_token } = response.data.data;
    // Simpan token ke cookies
    Cookies.set('token', JSON.stringify(access_token), { expires: 7 }); // Token berlaku selama 7 hari
    return { success: true, data: response.data.data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// Fungsi untuk registrasi
export async function register(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, credentials);
    return { success: true, data: response.data.data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function forgotpassword(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot_password`, credentials);
    Cookies.set('email', JSON.stringify(credentials.email), { expires: 1 });
    return { success: true, data: response?.data?.data };
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
}
export async function newpassword(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/new_password`, credentials);
    return { success: true, data: response.data.message };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

// Fungsi untuk logout
export function logout() {
  const token = Cookies.get('token');
  if (token) {
    Cookies.remove('token', { path: '' });
    return ('Token removed successfully');
  } else {
    return ('Token not found');
  }
}

// Fungsi untuk mendapatkan token
export function getToken() {
  const cookieData = Cookies.get('token');

  if (cookieData) {
    const responseData = JSON.parse(cookieData);
    return responseData;
  } else {
    // buat agar kembali ke halaman login 
    console.log('No data found in cookie');
  }
}

// Fungsi untuk mendapatkan token
export function getEmail() {
  const cookieData = Cookies.get('email');

  if (cookieData) {
    const responseData = JSON.parse(cookieData);
    return responseData
  } else {
    // buat agar kembali ke halaman login 
    console.log('No data found in cookie');
  }
}
