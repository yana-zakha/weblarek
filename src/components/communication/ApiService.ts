import { IApi, ServerProductsResponse, CreateOrderRequest } from '../../types/index';

export class ApiService {
  private api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  // Получение списка товаров с сервера
  getProducts(): Promise<ServerProductsResponse> {
    return this.api.get<ServerProductsResponse>('/product/');
  }

  // Отправка данных о заказе на сервер
createOrder(orderData: CreateOrderRequest): Promise<CreateOrderRequest> {
    return this.api.post<CreateOrderRequest>('/order/', orderData);
  }
}