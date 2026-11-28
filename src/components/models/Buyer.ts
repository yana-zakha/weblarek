import { Payment, IBuyer, ValidationResult } from '../../types/index';

export class Buyer {
  private payment: Payment = '';
  private address: string = '';
  private email: string = '';
  private phone: string = '';

  updateData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this.payment = data.payment;
  if (data.address !== undefined) this.address = data.address;
  if (data.email !== undefined) this.email = data.email;
  if (data.phone !== undefined) this.phone = data.phone;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone
    }
  }

  clearData(): void {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }

  validateData(): ValidationResult {
    const errors: string[] = [];

    if (this.payment !== 'card' && this.payment !== 'cash') {
      errors.push('Некорректный способ оплаты. Должен быть "card" или "cash"');
    }

    if (!this.address || this.address.trim() === '') {
      errors.push('Адрес не может быть пустым');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !emailRegex.test(this.email)) {
      errors.push('Email должен быть корректным и не пустым');
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!this.phone || !phoneRegex.test(this.phone)) {
      errors.push('Номер телефона должен быть корректным и не пустым.');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}