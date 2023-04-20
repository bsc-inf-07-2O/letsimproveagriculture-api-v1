import { Controller, Get } from '@nestjs/common';
import {LearningToolsService} from './learning-tools.service';

@Controller('learning-tools')
export class LearningToolsController {
    constructor(private learningToolsService : LearningToolsService) {}


    @Get()
    async getlearningTools() {
        return this.learningToolsService.getlearningTools();
    }


}
 