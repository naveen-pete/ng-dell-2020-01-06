import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(message: any) {
    console.log('Logger.log():', message);
    // code that access the server
  }
}
