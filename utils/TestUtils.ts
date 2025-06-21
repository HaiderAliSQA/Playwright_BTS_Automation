export class TestUtils {
  // Generate random PO Number with special characters
  static generateRandomPONumber(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let poNumber = "";
    for (let i = 0; i < 12; i++) {
      poNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return poNumber;
  }

  // Generate random US Phone Number
  static generateRandomUSPhoneNumber(): string {
    const area = Math.floor(200 + Math.random() * 800);
    const prefix = Math.floor(200 + Math.random() * 800);
    const line = Math.floor(1000 + Math.random() * 9000);
    return `(${area}) ${prefix}-${line}`;
  }

  // Generate random 3-digit number
  static generateRandomDigits(): number {
    return Math.floor(100 + Math.random() * 900);
  }

  // Generate random client name
  static generateRandomClientName(): string {
    const randomDigits = this.generateRandomDigits();
    return `Playwright Test Client ${randomDigits}`;
  }
} 