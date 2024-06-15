namespace Makosite.Server.Models
{
    public class RegisterRequestModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string RepeatPassword { get; set; }
        public string PhoneNumber { get; set; }
        public string UserName { get; set; }
    }
}
