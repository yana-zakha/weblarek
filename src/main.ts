import { Catalog } from './components/models/Catalog.ts';
import { Cart } from './components/models/Cart.ts';
import { Buyer } from './components/models/Buyer.ts';
import { apiProducts } from './utils/data.ts';
import { ApiService } from './components/communication/ApiService.ts';
import { Api } from './components/base/Api.ts';
import { API_URL } from './utils/constants.ts';
import './scss/styles.scss';


const catalog = new Catalog();
catalog.setProducts(apiProducts.items);
console.log('Массив товаров из каталога: ', catalog.getProducts());


const apiClient = new Api(API_URL);
const apiService = new ApiService(apiClient);
const products = await apiService.getProducts();
catalog.setProducts(products.items);

console.log('Каталог товаров от сервера: ', catalog.getProducts());
console.log('Товар по id: ', catalog.getProductByID('854cef69-976d-4c2a-a18c-2aa45046c390'));

const testProduct1 = catalog.setProduct(
  {
    id: '1',
    description: 'test desc',
    image: 'test img',
    title: 'test',
    category: 'test',
    price: 1000
  }
)
const testProduct2 = catalog.setProduct(
  {
    id: '2',
    description: '2 test desc',
    image: '2 test img',
    title: '2 test',
    category: '2 test',
    price: 2000
  }
)
console.log('Отдельный товар: ', catalog.getProduct(testProduct1));

const cart = new Cart();
cart.addProduct(testProduct1);
cart.addProduct(testProduct2);
console.log('Товары в корзине: ', cart.getProducts());
console.log('Количество товаров в корзине: ', cart.getQuantity());
console.log('Общая стоимость товаров: ', cart.getTotalValue());
console.log('В корзине есть testProduct1', cart.hasProduct('1'));
cart.removeProduct(testProduct1);
console.log('Товары в корзине: ', cart.getProducts());
console.log('В корзине есть testProduct1', cart.hasProduct('1'));
cart.clearCart();
console.log('Товары в корзине: ', cart.getProducts());

const testBuyer = new Buyer();
testBuyer.updateData({
  email: 'email',
  phone: '+79999999999'
})
console.log('Данные покупателя: ', testBuyer.getData());
console.log('Проверка данных: ', testBuyer.validateData());
testBuyer.clearData();
console.log('Вывод данных после clearData: ', testBuyer.getData());