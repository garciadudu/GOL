using System.Collections.Generic;
using Gol.Airplane.Dominio.Dto;

namespace Gol.Airplane.Dominio.Interfaces
{
    public interface IAirplaneRepositorio
    {
        bool Adicionar(AirplaneDto airplane);
        bool Alterar(AirplaneDto airplane);
        bool Excluir(int Id);
        AirplaneDto Consultar(int Id);
        IEnumerable<AirplaneDto> AirplaneLista();
    }
}
