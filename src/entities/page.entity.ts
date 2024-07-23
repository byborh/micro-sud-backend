import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Element } from './element.entity'

@Entity()
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Element, element => element.page, { cascade: true })
    elements: Element[];
}