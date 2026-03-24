import { test, expect } from '../../../framework/core/fixtures/api.fixture';

test.describe('API Smoke | Users', () => {
  test('GET /users returns a non-empty list', async ({ usersService }) => {
    const response = await usersService.listUsers();

    expect(response.status()).toBe(200);

    const users = (await response.json()) as Array<{ id: number; name: string }>;
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
  });
});
