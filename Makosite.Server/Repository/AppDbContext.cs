using Makosite.Server.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace Makosite.Server.Repository
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
