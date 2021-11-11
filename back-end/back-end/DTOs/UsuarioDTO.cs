using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back_end.Entidades;
namespace back_end.DTOs
{
    public class UsuarioDTO
    {
        public long Id { get; set; }

        public string User { get; set; }


        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public string Email { get; set; }

        public bool Activo { get; set; }
    }
}
