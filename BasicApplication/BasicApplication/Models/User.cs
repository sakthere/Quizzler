using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quizzler.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName ="NVARCHAR(100)")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string LastName { get; set; }
        [Column(TypeName = "NVARCHAR(100)")]
        public string Email { get; set; }
        public int age { get; set; } 
        
        
    }
}
