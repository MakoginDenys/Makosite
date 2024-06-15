using Makosite.Server.Models;

namespace Makosite.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserUpdateRequestModel> UpdateUserInformation(string oldUserName, string newUserName, string newPhoneNumber, string newDescription, string newAbout, string newEmail, byte[] photo);
    }
}
