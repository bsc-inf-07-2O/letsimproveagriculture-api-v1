import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "textbooks"})
export class textbooksEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: String;

    @Column()
    edition: String;

    @Column()
    author: String;
}

