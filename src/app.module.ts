import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Oauth2Module, OAUTH2_SERVER_OPTIONS } from '@switchit/nestjs-oauth2-server';
import { UserLoader } from './oauth/user-loader';
import { UserValidator } from './oauth/user-validator';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ModulesModule } from './modules/modules.module';
import { PagesModule } from './pages/pages.module';
import { DepartmentsModule } from './departments/departments.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { LicenseHistroyModule } from './license-histroy/license-histroy.module';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';
import { CitiesModule } from './cities/cities.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MailerModule } from './mailer/mailer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatabaseModule } from './database/database.module';
import { DmenuModule } from './dmenu/dmenu.module';

@Module({
  imports: [
    HttpModule, 
    UserModule,TypeOrmModule.forRoot(),Oauth2Module.forRootAsync({
    useFactory: ()=>({
      userLoader: new UserLoader(),
      userValidator: new UserValidator(),
    }) }), ModulesModule, PagesModule, DepartmentsModule, DmenuModule,HospitalsModule, LicenseHistroyModule, CountriesModule, StatesModule, CitiesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/asset'),
      serveStaticOptions: {
        index: false,
      },
    }),
    MailerModule, DashboardModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}