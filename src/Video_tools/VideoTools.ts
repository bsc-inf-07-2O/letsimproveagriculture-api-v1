import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "tutorials"})
export class tutorialsEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: String;

    @Column()
    subject: String;

    @Column()
    instructor: String;

    @Column()
    topic: String;

    @Column()
    language: String;


}

