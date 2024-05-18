import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'IsExist', async: true })
export class IsExist implements ValidatorConstraintInterface {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async validate(value: string, validationArguments: ValidationArguments) {
    const repository = validationArguments.constraints[0];
    const pathToProperty = validationArguments.constraints[1];

    // console.log('entity', entity)
    console.log('repository', repository)
    console.log('pathToProperty', pathToProperty)
    console.log('value?.[pathToProperty]', value?.[pathToProperty])
    console.log('value',  value)

    const entity: unknown = await this.dataSource
      .getRepository(repository)
      .findOne({
        where: {
          [pathToProperty ? pathToProperty : validationArguments.property]:
            pathToProperty ? value?.[pathToProperty] : value,
        },
      });

      console.log({
        [pathToProperty ? pathToProperty : validationArguments.property]:
          pathToProperty ? value?.[pathToProperty] : value,
      })

    return Boolean(entity);
  }
}
