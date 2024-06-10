using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Makosite.Server.Migrations
{
    /// <inheritdoc />
    public partial class addOneToOneRelation2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UsersProfileInformation_Id",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.CreateIndex(
                name: "IX_UsersProfileInformation_UserId",
                table: "UsersProfileInformation",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserInformationId",
                table: "Users",
                column: "UserInformationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UsersProfileInformation_UserInformationId",
                table: "Users",
                column: "UserInformationId",
                principalTable: "UsersProfileInformation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersProfileInformation_Users_UserId",
                table: "UsersProfileInformation",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UsersProfileInformation_UserInformationId",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersProfileInformation_Users_UserId",
                table: "UsersProfileInformation");

            migrationBuilder.DropIndex(
                name: "IX_UsersProfileInformation_UserId",
                table: "UsersProfileInformation");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserInformationId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UsersProfileInformation_Id",
                table: "Users",
                column: "Id",
                principalTable: "UsersProfileInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
