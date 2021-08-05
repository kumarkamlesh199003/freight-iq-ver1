import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { ShipmentReqApiModule } from './shipmentReqApi/shipmentReqApi.module';

@Module({
  imports: [LoginModule, RegistrationModule, ShipmentReqApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
