import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Admin {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}