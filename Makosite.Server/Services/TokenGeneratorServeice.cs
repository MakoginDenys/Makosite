using Makosite.Server.Repository;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Makosite.Server.Services
{
    public class TokenGeneratorServeice
    {
        public string GenerateToken(string secretKey, string issuer, string audience, ClaimsIdentity claimsIdentity)
        {
            var securityKey = new SymmetricSecurityKey(Convert.FromBase64String(secretKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            
            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claimsIdentity.Claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: credentials
            );

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }
    }
}
