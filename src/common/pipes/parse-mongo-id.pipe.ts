import { isValidObjectId } from 'mongoose';
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid mongoId`);
    }
    return value;
  }
}
