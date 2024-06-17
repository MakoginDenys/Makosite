using Makosite.Server.Repository.Models;
using Makosite.Server.Services;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

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
        [HttpPost("update")]
        public async Task<User> Update(string email, User newUser)
        {
            var user = await _userService.UpdateUserInformation(email, newUser);
            if (user == null) return new User();
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
