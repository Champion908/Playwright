import { ApiClient } from './ApiClient';

export class ProductApi {

    constructor(request) {
        this.apiClient = new ApiClient(request);
    }

    async getProducts(token) {
        return await this.apiClient.get('/products', {
            headers: this.apiClient.getAuthHeaders(token)
        });
    }

    async getProductById(productId, token) {
    return await this.apiClient.get(`/products/${productId}`, {
        headers: this.apiClient.getAuthHeaders(token)
    });
}

    
}