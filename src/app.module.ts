import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:nurik2004@sss.cdhpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
