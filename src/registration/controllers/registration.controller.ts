import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller()
export class RegistrationController {
  //constructor(private readonly appService: AppService) {}

  @Get('/registration')
  async getHello(): Promise<string> {
    return "Registration Page";
  }
}
