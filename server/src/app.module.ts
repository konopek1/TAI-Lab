import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MemberModule } from './member/member.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), MemberModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
