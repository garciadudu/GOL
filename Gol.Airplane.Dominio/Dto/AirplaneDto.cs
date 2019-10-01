using System;
using System.Collections.Generic;
using System.Text;

namespace Gol.Airplane.Dominio.Dto
{
    public class AirplaneDto
    {
        public int Id { get; set; }
        public string CodigoAviao { get; set; }
        public string Modelo { get; set; }
        public int Passageiros { get; set; }
        public DateTime Criacao { get; set; }

    }
}
