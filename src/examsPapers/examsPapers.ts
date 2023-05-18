import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name : "PastPapers"})
export class PastPapersEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: String;

    @Column()
    examType: String;

    @Column()
    source: String;
    
    @Column()
    instition: String;
}

