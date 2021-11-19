import { ApiRequestMethod, HttpResponse } from './services.types';

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const API_KEY = process.env.NEXT_PUBLIC_API_URL || '';
const CORS_BYPASS = process.env.NEXT_CORS_BYPASS || '';

export const makeRequest =
  (method: ApiRequestMethod) =>
  async <T>(endpoint: string, data?: Object): Promise<HttpResponse<T>> => {
    const response = await fetch(`${CORS_BYPASS}${BASE_API_URL}/${endpoint}`, {
      method,
      credentials: 'include',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${API_KEY}:`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.status < 200 || response.status > 299) throw new Error('Something went wrong');

    return {
      status: response.status,
      data: responseData as T,
    };
  };

export const postRequest = makeRequest('POST');
export const getRequest = makeRequest('GET');
export const deleteRequest = makeRequest('DELETE');
export const patchRequest = makeRequest('PATCH');
