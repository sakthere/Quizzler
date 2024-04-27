using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quizzler.Models
{
    public class Quiz
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName ="NVARCHAR(200)")]
        public string Title { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(200)")]
        public string Category { get; set; }
        
        [Required]
        [Column(TypeName = "NVARCHAR(MAX)")]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "DATETIME2")]
        public DateTime CreateAt { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string CreatedBy { get; set; }

        [Required]
        [Column(TypeName = "DATETIME2")]
        public DateTime ModifiedAt { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(100)")]
        public string ModifiedBy { get; set; }

        [Required]
        public int Difficulty { get; set; }

        [Column(TypeName = "NVARCHAR(MAX)")]
        public string image { get; set; }
        public ICollection<QuizQuestion> QuizQuestions { get; set; }

    }
}
