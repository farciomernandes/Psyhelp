import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateComment1624715143735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "id_user",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "id_post",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "text",
                        type: "varchar",
                        isNullable: false,
                    }
                ]
            })
        );

        await queryRunner.createForeignKey("comments", new TableForeignKey({
            name: "CommentUser",
            columnNames: ["id_user"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));

        await queryRunner.createForeignKey("comments", new TableForeignKey({
            name: "CommentPost",
            columnNames: ["id_post"],
            referencedColumnNames: ["id"],
            referencedTableName: "posts",
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("comments", "CommentUser");
        await queryRunner.dropForeignKey("comments", "CommentPost");
        await queryRunner.dropTable("comments");
    }

}
