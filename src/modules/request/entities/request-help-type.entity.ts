import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity()
export class RequestHelpType extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryColumn()
  id: number;

  @Allow()
  @ApiProperty({ example: 'Analysis' })
  @Column()
  name?: string;
}
