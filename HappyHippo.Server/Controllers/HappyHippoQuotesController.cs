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
    public class HappyHippoQuotesController : ControllerBase
    {
        private readonly DataContext _context;

        public HappyHippoQuotesController(DataContext context)
        {
            _context = context;
        }

        // POST: HappyHippoQuotes/getquotes/user
        [HttpPost("getquotes/{user}")]
        public async Task<ActionResult<IEnumerable<Quote>>> GetQuotes(string user)
        {
            var quotes = _context.Quotes.Where(x => x.UserId == user);

            if (quotes == null)
            {
                return BadRequest();
            }

            await quotes.ToListAsync();
            return Ok(quotes);
        }

    }
}
