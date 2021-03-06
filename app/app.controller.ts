import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('publish')
  index() {
    return {
      name: 'johnny',
    };
  }

  @Get('/api')
  api() {
    return 'api';
  }
}
