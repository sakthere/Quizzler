using Quizzler.Models;
using Microsoft.EntityFrameworkCore;

namespace Quizzler.Context
{
    public class QuizDBContext:DbContext
    {
        public QuizDBContext(DbContextOptions<QuizDBContext> options):base(options)
        {
                
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<QuizQuestion> QuizQuestions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>().HasOne(a => a.Question)
                                                .WithMany()
                                                .HasForeignKey(a =>                                     a.QuestionId);

            modelBuilder.Entity<QuizQuestion>().HasKey(qq => new { qq.QuizId, qq.QuestionId });

            modelBuilder.Entity<QuizQuestion>().HasOne(qq => qq.Quiz)
                                               .WithMany(q =>                                           q.QuizQuestions)
                                               .HasForeignKey(qq =>                                 qq.QuizId);
            
            modelBuilder.Entity<QuizQuestion>().HasOne(qq =>                                            qq.Question)
                                               .WithMany(q =>                                       q.QuizQuestions)
                                               .HasForeignKey(qq =>                                 qq.QuestionId);
            

        }
    }
}
