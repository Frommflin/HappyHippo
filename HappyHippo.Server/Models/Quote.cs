using System.ComponentModel.DataAnnotations;

namespace HappyHippo.Server.Models
{
    public class Quote
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string QuoteText { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
