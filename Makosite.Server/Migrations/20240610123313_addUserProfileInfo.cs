using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Makosite.Server.Migrations
{
    /// <inheritdoc />
    public partial class addUserProfileInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserInformationId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "UsersProfileInformation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    About = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersProfileInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UsersProfileInformation_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserInformationId",
                table: "Users",
                column: "UserInformationId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UsersProfileInformation_UserId",
                table: "UsersProfileInformation",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UsersProfileInformation_UserInformationId",
                table: "Users",
                column: "UserInformationId",
                principalTable: "UsersProfileInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UsersProfileInformation_UserInformationId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "UsersProfileInformation");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserInformationId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInformationId",
                table: "Users");
        }
    }
}
