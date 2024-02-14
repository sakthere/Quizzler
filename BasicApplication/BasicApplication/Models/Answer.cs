using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quizzler.Models
{
    public class Answer
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int QuestionId { get; set; }

        [Required]
        [Column(TypeName = "NVARCHAR(MAX)")]
        public string AnswerText { get; set; }

        [Required]
        [Column(TypeName = "BIT")]
        public Boolean IsCorrect {  get; set; }
        
        [Column(TypeName = "NVARCHAR(MAX)")]
        public string? ImageURL { get; set; }

        [Required]
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }

        public Question Question { get; set; }

    }
}
