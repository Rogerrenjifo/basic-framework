import { APIRequestContext, APIResponse } from '@playwright/test';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string,
  ) {}

  async send(method: HttpMethod, path: string, data?: unknown): Promise<APIResponse> {
    return this.request.fetch(`${this.baseUrl}${path}`, {
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
