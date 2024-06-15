using Makosite.Server.Repository.Models;

namespace Makosite.Server.Models
{
    public class AuthResponseModel
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string Token { get; set; }
        public User User { get; set; }
    }
}
