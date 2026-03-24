import { test as base } from '@playwright/test';
import { ApiClient } from '../../api/clients/apiClient';
import { UsersService } from '../../api/services/users.service';
import { env } from '../../config/env';

type ApiFixtures = {
  apiClient: ApiClient;
  usersService: UsersService;
};

export const test = base.extend<ApiFixtures>({
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request, env.apiBaseUrl));
  },
  usersService: async ({ apiClient }, use) => {
    await use(new UsersService(apiClient));
  },
});

export { expect } from '@playwright/test';
