using Makosite.Server.Models;
using Makosite.Server.Repository;
using Makosite.Server.Repository.Models;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Makosite.Server.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> SearchUserByUsername(string username)
        {
            return _context.Users.FirstOrDefault(u => u.UserName == username);
        }

        public async Task<AuthResponseModel> UpdateUserInformation(string oldEmail, User newUser)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == oldEmail);
            if (user == null)
            {
                return new AuthResponseModel() { Message = "User with this email do not exist", Success = false, User = new User() };
            }
            bool isEmailChanged = user.Email != newUser.Email;
            bool isPhoneNumberChanged = user.PhoneNumber != newUser.PhoneNumber;
            if (isEmailChanged && _context.Users.Any(u=> u.Email == newUser.Email))
            {
                return new AuthResponseModel() { Message = "User with this email already exist", Success = false, User = new User() };
            }
            if (isPhoneNumberChanged && _context.Users.Any(u => u.PhoneNumber == newUser.PhoneNumber))
            {
                return new AuthResponseModel() { Message = "User with this Phone Number already exist", Success = false, User = new User() };
            }
            user.Email = newUser.Email;
            user.UserName = newUser.UserName;
            user.PhoneNumber = newUser.PhoneNumber;
            user.Description = newUser.Description;
            user.About = newUser.About;
            user.Photo = newUser.Photo;
            _context.SaveChanges();
            return new AuthResponseModel() { Message = "Update sussecful", Success = true, User = user }; ;
        }
    }
}
