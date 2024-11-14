import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateColorDto, UpdateColor } from 'color/applications/dto';
import { ColorService } from 'color/applications/services/color.service';

@ApiTags('color')
@Controller('color')
export class ColorController {
    constructor(private readonly Colorservice: ColorService){
    }
    @Get()
    async getMany(){
        const data = await this.Colorservice.getmany();
        return {data};
    }
    @Get(':id')
    async getOne(@Param('id') id:number){
        const data = await this.Colorservice.getOne(id)
    }
    @Post()
    async createOne(@Body() dto:CreateColorDto){
        const data = await this.Colorservice.createOne(dto);
        return {message: 'Color created',data}
    }
    @Put(':id')
    async editedOne(@Param('id') id:number, @Body() dto:UpdateColor){
        const data = await this.Colorservice.editOne(dto, id)
        return{ message: 'color edited', data}
    }
    @Delete(':id')
    async deleteOne(@Param('id') id:number){
    const data = await this.Colorservice.deleteOne(id);
    return {message:'color deleted', data}
    }
}
