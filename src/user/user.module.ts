import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { MailerModule } from 'src/mailer/mailer.module';
import { UserSettings } from './entity/usersettings.entity';
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([UserSettings]),forwardRef(()=>MailerModule),DatabaseModule],
  controllers: [UserController],
  providers:[UserService],
  exports:[UserService]
})
export class UserModule {}
