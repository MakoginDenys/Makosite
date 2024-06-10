using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Makosite.Server.Repository.Models
{
    public class UserProfileInformation
    {
        [Key]
        public int Id { get; set; }
        
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public string Description { get; set; }
        public string About { get; set; }
        public User User { get; set; }
    }
}
