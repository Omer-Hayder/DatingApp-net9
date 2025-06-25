using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsprincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            var username = user.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? throw new Exception("cannot get username from token");

            return username;
        }
    }
}
