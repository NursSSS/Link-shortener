import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ILink } from "../interface/link.interface";

@Schema()
export class LinkEntity implements ILink{
    @Prop({
        type: String, required: true
    })
    email: string;

    @Prop({
        type: String, required: true
    })
    original_link: string;

    @Prop({
        type: String, required: false
    })
    short_link: string;
}

export const LinkSchema = SchemaFactory.createForClass(LinkEntity)