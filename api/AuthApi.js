import { ApiClient } from './ApiClient';

export class AuthApi {

    constructor(request) {
        this.apiClient = new ApiClient(request);
    }

    async login(email, password) {
        return await this.apiClient.post('/users/login', {
            data: {
                email,
                password
            }
        });
    }

    async loginAndGetToken(email, password) {
        const response = await this.login(email, password);

        const responseBody = await response.json();

        return responseBody.access_token;
    }
}