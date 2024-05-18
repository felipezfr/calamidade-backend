import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity()
export class RequestStatus extends EntityHelper {
  @ApiProperty({ example: 1 })
  @PrimaryColumn()
  id: number;

  @Allow()
  @ApiProperty({ example: 'Financial' })
  @Column()
  name?: string;
}
