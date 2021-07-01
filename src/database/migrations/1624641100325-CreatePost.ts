import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePost1624641100325 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "id_author",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "text",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "approved",
                        type: "decimal",
                        isNullable: false,
                    }

                ]
            })
        );
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts");
    }

}
