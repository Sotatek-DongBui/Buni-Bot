import { Injectable } from '@nestjs/common';
import { configs } from 'config';
import * as shell from 'shelljs';

@Injectable()
export class DeployService {
  runShDevFile(project: string, branch: string) {
    shell.exec(`${configs.currentPath}/scripts/dev/${project}.sh ${branch}`);
  }
}
