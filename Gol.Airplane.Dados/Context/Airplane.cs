using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Gol.Airplane.Dados.Context
{
    [Table("Airplane")]
    public class Airplane
    {
        [Key]
        public int Id { get; set; }

        public string CodigoAviao { get; set; }
        public string Modelo { get; set; }
        public int Passageiros { get; set; }
        public DateTime Criacao { get; set; }
    }
}
