import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ILink } from "../interface/link.interface";

@Schema()
export class LinkEntity implements ILink{
    @ApiProperty()
    @Prop({
        type: String, required: true
    })
    email: string;

    @ApiProperty()
    @Prop({
        type: String, required: true
    })
    original_link: string;

    @ApiProperty()
    @Prop({
        type: String, required: false
    })
    short_link: string;

    @ApiProperty({
        required: false
    })
    @Prop({
        type: String, required: false
    })
    _key: string;
    
    @ApiProperty()
    @Prop({
        type: Number, required: false
    })
    transitions: number;
}

export const LinkSchema = SchemaFactory.createForClass(LinkEntity)