using Makosite.Server.Models;
using Makosite.Server.Repository;
using Makosite.Server.Repository.Models;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Makosite.Server.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly AppDbContext _context;

        public AuthService(IAuthenticationService authenticationService, AppDbContext context)
        {
            _authenticationService = authenticationService;
            _context = context;
        }

        public async Task<AuthResponseModel> RegisterAsync(RegisterRequestModel model)
        {
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email || u.PhoneNumber == model.PhoneNumber);
            if (existingUser != null)
            {
                return new AuthResponseModel { Success = false, Message = "This user is already exist!" };
            }

            // Створення нового користувача
            var newUser = new User { Email = model.Email, Password = model.Password, PhoneNumber = model.PhoneNumber, UserName = model.UserName };
            var newUserInformation = new UserProfileInformation { User =  newUser };
            _context.Users.Add(newUser);
            _context.UsersProfileInformation.Add(newUserInformation);
            await _context.SaveChangesAsync();

            return new AuthResponseModel { Success = true, Message = "User successfully registered" };
        }

        public async Task<AuthResponseModel> LoginAsync(LoginRequestModel model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => (u.Email == model.EmailOrPhoneNumber || u.PhoneNumber == model.EmailOrPhoneNumber) && u.Password == model.Password);
            if (user == null)
            {
                return new AuthResponseModel { Success = false, Message = "Email or password is incorrect" };
            }

            // Генерування токену або ключа доступу
            var token = GenerateToken(model.EmailOrPhoneNumber); ;

            return new AuthResponseModel { Success = true, Message = "Success", Token = token, UserId = user.Id, UserName = user.UserName };
        }
        private string GenerateToken(string userEmail)
        {
            var securityKey = new SymmetricSecurityKey(Convert.FromBase64String(AuthOptions.GetSymmetricSecurityKey().KeyId));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, userEmail) };

            var token = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: credentials
            );

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }
    }

}

