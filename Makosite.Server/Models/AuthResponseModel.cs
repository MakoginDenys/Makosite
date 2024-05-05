namespace Makosite.Server.Models
{
    public class AuthResponseModel
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string Token { get; set; }
        public int UserId { get; set; }
    }
}
