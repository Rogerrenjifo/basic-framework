import { APIResponse } from '@playwright/test';
import { ApiClient } from '../clients/apiClient';

export class UsersService {
  constructor(private readonly client: ApiClient) {}

  async listUsers(): Promise<APIResponse> {
    return this.client.send('GET', '/users');
  }

  async getUserById(id: number): Promise<APIResponse> {
    return this.client.send('GET', `/users/${id}`);
  }
}
