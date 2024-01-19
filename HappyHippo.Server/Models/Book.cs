using System.ComponentModel.DataAnnotations;

namespace HappyHippo.Server.Models
{
    public class Book
    {
        [Key]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
