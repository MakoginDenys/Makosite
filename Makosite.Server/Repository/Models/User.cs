using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Makosite.Server.Repository.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string UserName { get; set; }
        public string Description { get; set; }
        public string About { get; set; }
        public string? Photo { get; set; }

    }
}
