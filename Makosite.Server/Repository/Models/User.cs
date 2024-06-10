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
        [ForeignKey(nameof(UserProfileInformation))]
        public int UserInformationId { get; set; }
        public UserProfileInformation UserProfileInformation { get; set; }

    }
}
