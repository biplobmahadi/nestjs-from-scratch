import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hi')
  getHiRoute() {
    return 'Hi, there man!';
  }

  @Get('/bye')
  getByeRoute() {
    return 'Bye, there man!';
  }
}
