using Makosite.Server.Models;
using Makosite.Server.Repository.Models;

namespace Makosite.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserUpdateRequestModel> UpdateUserInformation(string oldUserName, string newUserName, string newPhoneNumber, string newDescription, string newAbout, string newEmail, byte[] photo);
        Task<User> SearchUserByUsername(string username);
    }
}
