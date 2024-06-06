using Makosite.Server.Models;

namespace Makosite.Server.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponseModel> RegisterAsync(RegisterRequestModel model);
        Task<AuthResponseModel> LoginAsync(LoginRequestModel model);
    }
}
