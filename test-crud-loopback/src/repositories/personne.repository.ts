import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {Personne, PersonneRelations} from '../models';

export class PersonneRepository extends DefaultCrudRepository<
  Personne,
  typeof Personne.prototype.id,
  PersonneRelations
> {
  constructor(
    @inject('datasources.datasource') dataSource: DatasourceDataSource,
  ) {
    super(Personne, dataSource);
  }
}
