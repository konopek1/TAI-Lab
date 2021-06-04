import Member from "src/member/entities/member.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Group {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({unique: true})
    public name: string;

    @Column()
    public description: string;

    @OneToMany(() => Member, (member: Member) => member.group)
    public members: Member[];
}