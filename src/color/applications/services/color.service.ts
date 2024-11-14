import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorEntity } from 'src/color/domain/entities/colores.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateColorDto} from 'src/color/applications/dto/create-color.dto'
import { UpdateColor} from 'src/color/applications/dto/update-color.dto'

@Injectable()
export class ColorService {
    constructor(
        @InjectRepository(ColorEntity)
        private readonly ColorEntityRepository: Repository<ColorEntity>,
    ){}
    async getmany(){
   return this.ColorEntityRepository.find();
    }
    async getOne(idColor:number){
        const color = await this.ColorEntityRepository.findOne({where:{idColor} });
        if(!color) throw new NotFoundException('color not found');
        return color;
    }
    async createOne(dto: CreateColorDto){
        const newColor = await this.ColorEntityRepository.create(dto as DeepPartial<ColorEntity>)
        return await this.ColorEntityRepository.save(newColor);
    }
    async editOne(dto: UpdateColor , idColor:number){
        const color = await this.getOne(idColor)
        const editedColor =  Object.assign(color,dto);
        return this.ColorEntityRepository.save(editedColor);
    }
    async deleteOne(idColor:number){
        const color = await this.getOne(idColor)
        return await this.ColorEntityRepository.remove(color);
    }
}
