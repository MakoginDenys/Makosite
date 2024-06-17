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

        public async Task<User> UpdateUserInformation(string oldEmail, User newUser)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == oldEmail);
            if (user == null) {
                return new User();
            }
            user.Email = newUser.Email;
            user.UserName = newUser.UserName;
            user.PhoneNumber = newUser.PhoneNumber;
            user.Description = newUser.Description;
            user.About = newUser.About;
            user.Photo = newUser.Photo;
            _context.SaveChanges();
            return user;
        }
    }
}
