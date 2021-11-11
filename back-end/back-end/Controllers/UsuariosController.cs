using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using back_end.Utilidades;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public UsuariosController(ApplicationDbContext context,
            IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        
        public async Task<ActionResult<List<UsuarioDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Usuarios.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var usuarios = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return mapper.Map<List<UsuarioDTO>>(usuarios);
        }




        [HttpGet("{Id:long}")]
        
        public async Task<ActionResult<UsuarioDTO>> Get(long id)
        {
            var usuario = await context.Usuarios.FirstOrDefaultAsync(x => x.Id == id);

            if (usuario == null)
            {
                return NotFound();
            }

            return mapper.Map<UsuarioDTO>(usuario);
        }

        [HttpPost]

        public async Task<ActionResult> Post([FromBody] UsuarioDTO usuarioDTO)
        {
            var usuario = mapper.Map<Usuario>(usuarioDTO);
            context.Add(usuario);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{Id:long}")]
        public async Task<ActionResult> Put(long Id, [FromBody] UsuarioDTO usuariodDTO)
        {
            var usuario = await context.Usuarios.FirstOrDefaultAsync(x => x.Id == Id);

            if (usuario == null)
            {
                return NotFound();
            }
            usuario = mapper.Map(usuariodDTO, usuario);
            await context.SaveChangesAsync();
            return NoContent();
        }




        [HttpDelete("{id:long}")]
        public async Task<ActionResult> Delete(long id)
        {
            var existe = await context.Usuarios.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Usuario() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }



    }

}
