import { apiConfig } from '../config/apiConfig';

export class ApiClient {

    constructor(request) {
        this.request = request;
    }

    async get(endpoint, options = {}) {
        return await this.request.get(
            `${apiConfig.baseURL}${endpoint}`,
            options
        );
    }

    async post(endpoint, options = {}) {
        return await this.request.post(
            `${apiConfig.baseURL}${endpoint}`,
            options
        );
    }

    async put(endpoint, options = {}) {
        return await this.request.put(
            `${apiConfig.baseURL}${endpoint}`,
            options
        );
    }

    async delete(endpoint, options = {}) {
        return await this.request.delete(
            `${apiConfig.baseURL}${endpoint}`,
            options
        );
    }

    getAuthHeaders(token) {
    return {
        Authorization: `Bearer ${token}`
    };
}
}