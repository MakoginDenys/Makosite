using Makosite.Server.Models;
using Makosite.Server.Repository;
using Makosite.Server.Repository.Models;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;

namespace Makosite.Server.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly AppDbContext _context;

        public AuthService(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        public async Task<AuthResponseModel> RegisterAsync(RegisterRequestModel model)
        {
            // Перевірка, чи існує користувач з такою електронною поштою
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (existingUser != null)
            {
                return new AuthResponseModel { Success = false, Message = "Користувач з такою електронною поштою вже існує" };
            }

            // Створення нового користувача
            var newUser = new User { Email = model.Email, Password = model.Password };
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return new AuthResponseModel { Success = true, Message = "Користувач успішно зареєстрований" };
        }

        public async Task<AuthResponseModel> LoginAsync(LoginRequestModel model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
            if (user == null)
            {
                return new AuthResponseModel { Success = false, Message = "Неправильна електронна пошта або пароль" };
            }

            // Генерування токену або ключа доступу
            var token = GenerateToken(user.Id);

            return new AuthResponseModel { Success = true, Message = "Успішний вхід", Token = token, UserId = user.Id };
        }
    }
    }
}
