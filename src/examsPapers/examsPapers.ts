import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name : "papers"})
export class Papers {
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

