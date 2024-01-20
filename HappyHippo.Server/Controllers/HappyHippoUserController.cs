using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HappyHippo.Server.Data;
using HappyHippo.Server.Models;

namespace HappyHippo.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HappyHippoUserController : ControllerBase
    {
        private readonly DataContext _context;

        public HappyHippoUserController(DataContext context)
        {
            _context = context;
        }

        // GET: HappyHippoUser/5
        [HttpGet("{id}")]
        [ActionName("GetUser")]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

    }
}
