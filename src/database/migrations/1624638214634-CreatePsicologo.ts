import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class CreatePsicologo1624638214634 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "psicologos",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "uf",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "year",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "sex",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "crp",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "speciality",
                        type: "varchar",
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("psicologos");
    }

}
