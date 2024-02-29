import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const GetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      phone: '123123123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
