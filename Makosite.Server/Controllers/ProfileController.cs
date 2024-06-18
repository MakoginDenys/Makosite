using Makosite.Server.Repository.Models;
using Makosite.Server.Services;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Makosite.Server.Models;

namespace Makosite.Server.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class ProfileController : ControllerBase
    {
        private readonly IUserService _userService;
        public ProfileController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPut("update")]
        public async Task<AuthResponseModel> Update(User newUser)
        {
            var user = await _userService.UpdateUserInformation(newUser.Email, newUser);
            if (user == null) return new AuthResponseModel() { Success = false, Message = "Cannot find user" };
            return user;
        }
        [HttpGet("{username}")]
        public async Task<User> GetUserByUsername(string username)
        {
            var user = await _userService.SearchUserByUsername(username);
            if (user == null) return new User();
            return user;
        }
    }
}
