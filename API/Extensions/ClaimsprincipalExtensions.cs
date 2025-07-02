using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsprincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            var username = user.FindFirstValue(ClaimTypes.Name)
                ?? throw new Exception("cannot get username from token");

            return username;
        }

        public static int GetUserId(this ClaimsPrincipal user)
        {
            var userId = int.Parse(user.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? throw new Exception("cannot get user id from token"));

            return userId;
        }
    }
}
