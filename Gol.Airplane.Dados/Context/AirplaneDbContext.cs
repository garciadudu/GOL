using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gol.Airplane.Dados.Context
{
    public class AirplaneDbContext: DbContext
    {
        public AirplaneDbContext(DbContextOptions<AirplaneDbContext> options) : base(options)
        { }

        public DbSet<Airplane> Airplanes { get; set; }
    }
}
