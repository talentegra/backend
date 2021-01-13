import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello eRadccare is working Backend is working fine!';
  }
}
