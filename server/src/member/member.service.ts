import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import Member from './entities/member.entity';

@Injectable()
export class MemberService {

  constructor(
    @InjectRepository(Member)
    private readonly memberReposiotry: Repository<Member>
  ) { }

  async create(createMemberDto: CreateMemberDto) {
    const newMember = await this.memberReposiotry.create(createMemberDto) 

    console.log(createMemberDto)

    await this.memberReposiotry.save(newMember)

    return newMember.id;
  }

  findAll() {
    return this.memberReposiotry.find();
  }

  findOne(id: number) {
    return this.memberReposiotry.findOneOrFail(id);
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.memberReposiotry.update(id, updateMemberDto);
  }

  async remove(id: number) {
    return this.memberReposiotry.remove(await this.findOne(id));
  }
}
