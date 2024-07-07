import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Page } from './page.entity'

export class Element {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Page, page => page.elements)
    page: Page

    @Column()
    type: string

    @Column()
    order: string

    @Column('text', {nullable: true})
    content: string

    @Column({nullable: true})
    title: string

    @Column({nullable: true})
    caption: string
}