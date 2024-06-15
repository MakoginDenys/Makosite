using Makosite.Server.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace Makosite.Server.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<UserProfileInformation> UsersProfileInformation { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(p => p.UserProfileInformation)
                .WithMany()
                .HasForeignKey(u=> u.UserInformationId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
