import { Controller, Get, Param, Query } from '@nestjs/common';
import { DeployService } from './deploy.service';

@Controller('deployments')
export class DeployController {
  constructor(private readonly deployService: DeployService) {}
  @Get('dev/:project')
  async deploy(@Param('project') project: string, @Query('branch') branch: string) {
    await this.deployService.runShDevFile(project, branch);
    return 'ok';
  }
}
