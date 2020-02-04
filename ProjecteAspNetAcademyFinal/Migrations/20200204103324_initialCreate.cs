using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjecteAspNetAcademyFinal.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Entity",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: true),
                    SubjectId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Dni = table.Column<string>(nullable: true),
                    ChairNumber = table.Column<int>(nullable: true),
                    ExamId = table.Column<Guid>(nullable: true),
                    StudentId = table.Column<Guid>(nullable: true),
                    Mark = table.Column<double>(nullable: true),
                    HasCheated = table.Column<bool>(nullable: true),
                    StudentSubject_StudentId = table.Column<Guid>(nullable: true),
                    StudentSubject_SubjectId = table.Column<Guid>(nullable: true),
                    Subject_Name = table.Column<string>(nullable: true),
                    Teacher = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entity", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Entity");
        }
    }
}
