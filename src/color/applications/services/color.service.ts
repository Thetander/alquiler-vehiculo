import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorEntity } from 'color/domain/entities/colores.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateColorDto, UpdateColor } from '../dto';
import { throws } from 'assert';

@Injectable()
export class ColorService {
    constructor(
        @InjectRepository(ColorEntity)
        private readonly ColorRepository: Repository<ColorEntity>
    ){}
    async getmany(){
   return this.ColorRepository.find()
    }
    async getOne(idColor:number){
        const color = await this.ColorRepository.findOne({where:{idColor} });
        if(!color) throw new NotFoundException('color not found');
        return color;
    }
    async createOne(dto: CreateColorDto){
        const newColor = await this.ColorRepository.create(dto as DeepPartial<ColorEntity>)
        return await this.ColorRepository.save(newColor);
    }
    async editOne(dto: UpdateColor , idColor:number){
        const color = await this.getOne(idColor)
        const editedColor =  Object.assign(color,dto);
        return this.ColorRepository.save(editedColor);
    }
    async deleteOne(idColor:number){
        const color = await this.getOne(idColor)
        return await this.ColorRepository.remove(color);
    }
}
