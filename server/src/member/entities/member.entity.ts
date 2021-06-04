import Group from "src/group/entities/group.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Member {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({unique: true})
    public email: string;

    @Column()
    public name: string;

    @Column()
    public secondName: string;

    @ManyToOne(() => Group, (group: Group) => group.members, {eager: true})
    public group: Group;
}