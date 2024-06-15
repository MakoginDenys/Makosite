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

        public async Task<UserUpdateRequestModel> UpdateUserInformation(string oldEmail, string newEmail, string newUserName, string newPhoneNumber, string newDescription, string newAbout, byte[] photo)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == oldEmail);
            if (user == null) {
                return new UserUpdateRequestModel { Success = false , Message = "Error" };
            }
            user.Email = newEmail;
            user.UserName = newUserName;
            user.PhoneNumber = newPhoneNumber;
            user.Description = newDescription;
            user.About = newAbout;
            user.Photo = photo;
            _context.SaveChanges();
            return new UserUpdateRequestModel { Success = true, Message = "User data successfully Updated", UserName = user.UserName };
        }
    }
}
