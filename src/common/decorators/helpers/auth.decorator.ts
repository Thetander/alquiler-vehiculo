import { UseGuards, applyDecorators } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../../auth/infrastructure/guards";

export function Auth(){
    return applyDecorators(
        UseGuards(JwtAuthGuard),
        ApiBearerAuth()
    )
}