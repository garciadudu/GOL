using Gol.Airplane.Dados.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Gol.Airplane.Testes
{
    public class CriaUmAirplaneTest
    {
        private readonly AirplaneDbContext _context;
    

        public CriaUmAirplaneTest()
        {

            var optionsBuilder = new DbContextOptionsBuilder<AirplaneDbContext>();
            optionsBuilder.UseSqlServer("Data Source=.\\SQLExpress;Initial Catalog=Gol;Integrated Security=True");

            _context = new AirplaneDbContext(optionsBuilder.Options);
        }

        [Fact(DisplayName = "CriaUmAirplaneTest")]
        public void Como_usuario_quero_inserir_um_airplane()
        {
            _context.Airplanes.Add(new Dados.Context.Airplane()
            {
                CodigoAviao = "0001",
                Modelo = "Boeing",
                Passageiros = 100,
            });

            Assert.True(_context.SaveChanges() > 0);
        }
    }
}
