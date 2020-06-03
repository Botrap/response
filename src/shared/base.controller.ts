//import { SECRET } from '../config/config';
import * as jwt from 'jsonwebtoken';
import {ConfigService} from '@nestjs/config'
export class BaseController {

  constructor(private configService: ConfigService) {}

  protected getUserIdFromToken(authorization) {
    if (!authorization) return null;

    const token = authorization.split(' ')[1];
    const secret = this.configService.get('JWT_SECRET');
    const decoded: any = jwt.verify(token, secret);
    return decoded.id;
  }
}