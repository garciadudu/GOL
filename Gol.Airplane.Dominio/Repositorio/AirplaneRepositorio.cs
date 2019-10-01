using Gol.Airplane.Dados.Context;
using Gol.Airplane.Dominio.Dto;
using Gol.Airplane.Dominio.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Gol.Airplane.Dominio.Repositorio
{
    public class AirplaneRepositorio : IAirplaneRepositorio, IDisposable
    {
        private readonly AirplaneDbContext _context;

        public AirplaneRepositorio(AirplaneDbContext context)
        {
            _context = context;

            var optionsBuilder = new DbContextOptionsBuilder<AirplaneDbContext>();
            optionsBuilder.UseSqlServer("Data Source=.\\SQLExpress;Initial Catalog=Gol;Integrated Security=True");

            _context = new AirplaneDbContext(optionsBuilder.Options);
        }

        public bool Adicionar(AirplaneDto airplane)
        {
            var result = _context.Airplanes.Add(new Dados.Context.Airplane()
            {
                CodigoAviao = airplane.CodigoAviao,
                Modelo = airplane.Modelo,
                Passageiros = airplane.Passageiros
            });

            return _context.SaveChanges() > 0;
        }

        public IEnumerable<AirplaneDto> AirplaneLista()
        {
            foreach(var result in _context.Airplanes)
            {
                yield return new AirplaneDto()
                {
                    CodigoAviao = result.CodigoAviao,
                    Criacao = result.Criacao,
                    Id = result.Id,
                    Modelo = result.Modelo,
                    Passageiros = result.Passageiros
                };
            }
        }

        public bool Alterar(AirplaneDto airplane)
        {
            var result = _context.Airplanes.Where(x => x.Id == airplane.Id).FirstOrDefault();
            result.CodigoAviao = airplane.CodigoAviao;
            result.Modelo = airplane.Modelo;
            result.Passageiros = airplane.Passageiros;
            _context.Airplanes.Update(result);

            return _context.SaveChanges() > 0;
        }

        public bool Excluir(int Id)
        {
            var result = _context.Airplanes.Where(x => x.Id == Id).FirstOrDefault();
            _context.Airplanes.Remove(result);

            return _context.SaveChanges() > 0;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(_context);
        }

        public AirplaneDto Consultar(int Id)
        {
            var result = _context.Airplanes.Where(x => x.Id == Id).FirstOrDefault();

            return new AirplaneDto()
            {
                CodigoAviao = result.CodigoAviao,
                Criacao = result.Criacao,
                Id = result.Id,
                Modelo = result.Modelo,
                Passageiros = result.Passageiros
            };
        }
    }
}
