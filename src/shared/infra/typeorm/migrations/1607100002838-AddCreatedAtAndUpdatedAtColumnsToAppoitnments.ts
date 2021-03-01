import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCreatedAtAndUpdatedAtColumnsToAppoitnments1607100002838
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('appointments', [
      new TableColumn({
        name: 'created_at',
        type: 'Date',
        default: 'now()',
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'Date',
        default: 'now()',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'created_at');
    await queryRunner.dropColumn('appointments', 'updated_at');
  }
}
