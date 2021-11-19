import { ApiRequestMethod } from '../services.types';
import { deleteRequest, getRequest, patchRequest, postRequest } from '../utils';

const method: ApiRequestMethod = 'GET';
const makeSut = () => ({ sut: getRequest });

describe('Get Request', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should make get request', async () => {
    const data = [{ name: 'user', email: 'user@merchadise.com' }];
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(data),
          status: 200,
        }) as any
    );
    const url = '/user/password';
    const response = await getRequest(url);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_CORS_BYPASS}${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      {
        method,
        credentials: 'include',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_URL}:`,
        },
      }
    );

    expect(response).toEqual({ data, status: 200 });
  });

  it('Should make post request', async () => {
    const data = { name: 'user', email: 'user@gmail.com' };
    const dataReturn = { ...data, _id: '9472k242' };
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(dataReturn),
          status: 204,
        }) as any
    );
    const url = '/user/password';

    const response = await postRequest(url, data);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_CORS_BYPASS}${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      {
        method: 'POST',
        credentials: 'include',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_URL}:`,
        },
        body: JSON.stringify(data),
      }
    );

    expect(response).toEqual({ data: dataReturn, status: 204 });
  });

  it('Should make patch request', async () => {
    const data = { name: 'user', email: 'user@gmail.com' };
    const dataReturn = { ...data, _id: '9472k242' };
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(dataReturn),
          status: 204,
        }) as any
    );
    const url = '/user/password';

    const response = await patchRequest(url, data);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_CORS_BYPASS}${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      {
        method: 'PATCH',
        credentials: 'include',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_URL}:`,
        },
        body: JSON.stringify(data),
      }
    );

    expect(response).toEqual({ data: dataReturn, status: 204 });
  });
  it('Should make delete request', async () => {
    const dataReturn = { id: '9472k242', name: 'user', email: 'user@gmail.com' };
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(dataReturn),
          status: 200,
        }) as any
    );
    const url = '/user/password';

    const response = await deleteRequest(url);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_CORS_BYPASS}${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      {
        method: 'DELETE',
        credentials: 'include',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_URL}:`,
        },
      }
    );

    expect(response).toEqual({ data: dataReturn, status: 200 });
  });

  it('Should throws an error', async () => {
    const errorResponse = {
      msg: {
        i18nCode: 'E-1002',
        defaultValue: 'Ocorreu um erro',
      },
      error: {
        statusCode: 400,
        name: 'ERROR',
        type: 'SOME_ERROR',
        message: 'Falha',
        i18nCode: 'E-1002',
        stack: 'Error at query',
        details: { key: 'valor' },
      },
    };
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.reject(errorResponse),
          status: 400,
        }) as any
    );
    const { sut } = makeSut();
    try {
      const url = '/url/invalid';
      await sut(url);

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_CORS_BYPASS}${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        {
          method,
          credentials: 'include',
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.NEXT_PUBLIC_API_URL}:`,
          },
        }
      );
    } catch (error) {
      expect(error.msg).toEqual(errorResponse.msg);
    }
  });
});
