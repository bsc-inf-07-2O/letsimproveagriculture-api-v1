import { tutorialsEntity } from "src/Video_tools/VideoTools";
import { Papers } from "src/examsPapers/examsPapers";
import { textbooksEntity } from "src/learningTools";
import { User } from "src/users/entities/user.entity";


const entities = [ Papers, textbooksEntity, tutorialsEntity, User]

export { Papers, textbooksEntity, tutorialsEntity, User }

export default entities