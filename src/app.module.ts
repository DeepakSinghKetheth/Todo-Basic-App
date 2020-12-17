import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { todoSchema} from './app.model';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:root@cluster0.tthe7.mongodb.net/tododb') 
  ,MongooseModule.forFeature([
    {
      name: 'todoSchema',
      schema : todoSchema,
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
