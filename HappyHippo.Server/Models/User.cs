using System.ComponentModel.DataAnnotations;

namespace HappyHippo.Server.Models
{
    public class User
    {
        [Key]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
