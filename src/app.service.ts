import { Injectable } from '@nestjs/common';
import xlsx from 'node-xlsx';

@Injectable()
export class AppService {
  getHello() {
    return xlsx.parse(`${__dirname}/../files/CargaMasivaAlumnos.xlsx`);
  }
}
