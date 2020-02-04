using Microsoft.EntityFrameworkCore.Migrations;

namespace WPFAcademyMVVMFinal.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Entity_Entity_SubjectId",
                table: "Entity");

            migrationBuilder.DropForeignKey(
                name: "FK_Entity_Entity_ExamId",
                table: "Entity");

            migrationBuilder.DropForeignKey(
                name: "FK_Entity_Entity_StudentId",
                table: "Entity");

            migrationBuilder.DropIndex(
                name: "IX_Entity_SubjectId",
                table: "Entity");

            migrationBuilder.DropIndex(
                name: "IX_Entity_ExamId",
                table: "Entity");

            migrationBuilder.DropIndex(
                name: "IX_Entity_StudentId",
                table: "Entity");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Entity_SubjectId",
                table: "Entity",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Entity_ExamId",
                table: "Entity",
                column: "ExamId");

            migrationBuilder.CreateIndex(
                name: "IX_Entity_StudentId",
                table: "Entity",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Entity_Entity_SubjectId",
                table: "Entity",
                column: "SubjectId",
                principalTable: "Entity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Entity_Entity_ExamId",
                table: "Entity",
                column: "ExamId",
                principalTable: "Entity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Entity_Entity_StudentId",
                table: "Entity",
                column: "StudentId",
                principalTable: "Entity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
