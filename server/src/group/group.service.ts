import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from 'src/group/dto/create-group.dto';
import { UpdateGroupDto } from 'src/group/dto/update-group.dto';
import Group from 'src/group/entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {

  constructor(
    @InjectRepository(Group)
    private readonly groupReposiotry: Repository<Group>
  ) { }

  async create(createGroupDto: CreateGroupDto) {
    const newGroup = await this.groupReposiotry.create(createGroupDto)

    await this.groupReposiotry.save(newGroup)

    return newGroup.id;
  }

  findAll() {
    return this.groupReposiotry.find();
  }

  findOne(id: number) {
    return this.groupReposiotry.findOneOrFail(id);
  }


  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupReposiotry.update(id, updateGroupDto);
  }

  async remove(id: number) {
    return this.groupReposiotry.remove(await this.findOne(id));
  }
}
