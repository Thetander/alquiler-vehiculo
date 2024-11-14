import { PartialType } from "@nestjs/swagger"
import { CreateColorDto } from "./create-color.dto"

export class UpdateColor extends PartialType(CreateColorDto){}
