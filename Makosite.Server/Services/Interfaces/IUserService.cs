using Makosite.Server.Models;
using Makosite.Server.Repository.Models;

namespace Makosite.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<AuthResponseModel> UpdateUserInformation(string oldUserName, User newUser);
        Task<User> SearchUserByUsername(string username);
    }
}
