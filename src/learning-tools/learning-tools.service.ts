import { Injectable } from '@nestjs/common';
import { LEARNINGTOOLS } from './learningTools.mock';


@Injectable()
export class LearningToolsService {
    private learningTools = LEARNINGTOOLS;
 
    public async getlearningTools() {
    return LEARNINGTOOLS;
 }
    
}
    
