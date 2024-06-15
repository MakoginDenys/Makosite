using Makosite.Server.Models;
using Makosite.Server.Repository;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;

namespace Makosite.Server.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        public UserService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<UserUpdateRequestModel> UpdateUserInformation(string oldEmail, string newEmail, string newUserName, string newPhoneNumber, string newDescription, string newAbout)
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
            _context.SaveChanges();
            return new UserUpdateRequestModel { Success = true, Message = "User data successfully Updated", UserName = user.UserName };
        }
    }
}
