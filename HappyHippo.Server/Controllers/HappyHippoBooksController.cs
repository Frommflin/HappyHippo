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
    public class HappyHippoBooksController : ControllerBase
    {
        private readonly DataContext _context;

        public HappyHippoBooksController(DataContext context)
        {
            _context = context;
        }

        // POST: HappyHippoBooks/getbooks/user
        [HttpPost("getbooks/{user}")]
        [ActionName("GetBooks")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks(string user)
        {
            var books = _context.Books.Where(x => x.UserId == user);

            if (books == null)
            {
                return BadRequest();
            }

            await books.ToListAsync();
            return Ok(books);
        }
    }
}
