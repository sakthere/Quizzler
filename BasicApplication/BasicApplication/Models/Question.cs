using Microsoft.CodeAnalysis.FlowAnalysis.DataFlow;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quizzler.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Quiz_Id { get; set; }
        [Required]
        [Column(TypeName="NVARCHAR(MAX)")]
        public string QuestionText { get; set; }
        [Column(TypeName = "NVARCHAR(MAX)")]
        public string? Image_URL { get; set; }
        [Required]
        public int Difficulty { get; set; }
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

        public ICollection<QuizQuestion> QuizQuestions { get; set; }




    }
}
