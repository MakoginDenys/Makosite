using Makosite.Server.Repository.Models;
using Makosite.Server.Services;
using Makosite.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Makosite.Server.Controllers
{
    public class ProfileController : ControllerBase
    {
        private readonly IUserService _userService;
        public ProfileController(IUserService userService)
        {
            _userService = userService;
        }
        public IActionResult Update()
        {
            return Ok();
        }
        [HttpGet("{username}")]
        public async Task<User> GetUserByUsername(string username)
        {
            var user = await _userService.SearchUserByUsername(username);

            return user;
        }
    }
}
