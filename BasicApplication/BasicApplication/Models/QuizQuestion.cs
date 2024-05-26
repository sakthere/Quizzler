using System.ComponentModel.DataAnnotations.Schema;

namespace Quizzler.Models
{
    public class QuizQuestion
    {
        public int QuizId { get; set; }
        
        [ForeignKey("QuizId")]
        public Quiz Quiz { get; set; }

        public int QuestionId { get; set; }
        public Question Question { get; set; }  
    }
}
