using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HappyHippo.Server.Data;
using HappyHippo.Server.Models;
using Azure.Core;

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

        // POST: HappyHippoUser/login
        [HttpPost("login")]
        [ActionName("GetUser")]
        public async Task<ActionResult<User>> GetUser(User request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == request.Username);

            if(user == null || user.Password != request.Password)
            {
                return BadRequest();
            }

            return Ok(user);
        }

        // POST: HappyHippoUser/register
        [HttpPost("register")]
        public async Task<IActionResult> CreateUser(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Username }, user);
        }

    }
}
