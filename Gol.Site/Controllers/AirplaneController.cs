using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gol.Airplane.Dominio.Dto;
using Gol.Airplane.Dominio.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Gol.Site.Controllers
{
    public class AirplaneController : Controller
    {
        private readonly IAirplaneRepositorio _airplaneRepositorio;

        public AirplaneController(IAirplaneRepositorio airplaneRepositorio)
        {
            _airplaneRepositorio = airplaneRepositorio;
        }

        [HttpPost]
        public JsonResult InsereAirplane([FromBody]AirplaneDto airplaneDto)
        {
            return Json(_airplaneRepositorio.Adicionar(airplaneDto));
        }

        [HttpPost]
        public JsonResult AlteraAirplane([FromBody]AirplaneDto airplaneDto)
        {
            return Json(_airplaneRepositorio.Alterar(airplaneDto));
        }

        [HttpGet]
        public JsonResult ListaAirplane()
        {
            return Json(_airplaneRepositorio.AirplaneLista());
        }

        [HttpPost]
        public JsonResult ExcluiAirplane(int Id)
        {
            return Json(_airplaneRepositorio.Excluir(Id));
        }

        [HttpPost]
        public JsonResult ConsultareAirplane(int Id)
        {
            return Json(_airplaneRepositorio.Consultar(Id));
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}