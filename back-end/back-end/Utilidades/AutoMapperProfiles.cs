using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using NetTopologySuite.Geometries;
namespace back_end.Utilidades
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {           
            CreateMap<Usuario, UsuarioDTO>().ReverseMap();          
        }        
    }
}
