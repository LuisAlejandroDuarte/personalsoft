using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Usuario
    {
        public long Id { get; set; }


        public string User { get; set; }

        public string Nombre { get; set; }        

        public string Apellido { get; set; }

        public string Email { get; set; }

        public bool Activo { get; set; }
        
        
    }
}
