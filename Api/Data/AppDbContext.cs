using Api.Controllers;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data 
{
    public class AppDbContext:DbContext
    {
        
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
        public DbSet<Student> students {get;set;}
    }
    
}