using Microsoft.EntityFrameworkCore;
using ModelDB;

namespace TestApp.Model
{
    public class ApprContext : DbContext
    {
        public DbSet<Consumer> Consumers { get; set; } = null!;
        public DbSet<Adres> Adreses { get; set; } = null!;
        public DbSet<ElMeters> ElMeterses { get; set; } = null!;
        public DbSet<TypeMeters> TypeMeterses { get; set; } = null!;
        public DbSet<ListInformation> ListInformations { get; set; } = null!;
        public DbSet<ConsInformation> ConsInformations { get; set; } = null!;

        public ApprContext(DbContextOptions<ApprContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }


    }
}
