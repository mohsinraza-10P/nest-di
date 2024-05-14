import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    const watts = 10;
    console.log(`Drawing ${watts} of power from PowerService.`);
    this.powerService.supplyPower(watts);
    return a + b;
  }
}
