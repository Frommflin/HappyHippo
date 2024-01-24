using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HappyHippo.Server.Data;
using HappyHippo.Server.Models;
using HappyHippo.Server.DTO;
using Azure.Core;
using Microsoft.AspNetCore.Authorization;

namespace HappyHippo.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class HappyHippoBooksController : ControllerBase
    {
        private readonly DataContext _context;

        public HappyHippoBooksController(DataContext context)
        {
            _context = context;
        }

        // POST: HappyHippoBooks/getbooks/user
        [HttpPost("getbooks/{user}")]
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

        // POST: HappyHippoBooks/addbook
        [HttpPost("addbook")]
        public async Task<ActionResult<Book>> AddBook(BookRequest book)
        {
            var newBook = new Book();

            newBook.Title = book.Title;
            newBook.Author = book.Author;
            newBook.Year = book.Year;
            newBook.UserId = book.UserId;

            await _context.Books.AddAsync(newBook);
            await _context.SaveChangesAsync();

            return Ok(newBook);
        }

        // GET:  HappyHippoBooks/getbook/5
        [HttpGet("getbook/{id}")]
        public async Task<ActionResult<Book>> GetBookById(int id)
        {
            var book = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        // PUT: HappyHippoBooks/edit/5
        [HttpPut("edit/{id}")]
        public async Task<IActionResult> EditBook([FromRoute] int id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            var existingBook = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);

            if (existingBook == null)
            {
                return NotFound();
            }

            existingBook.Title = book.Title;
            existingBook.Author = book.Author;
            existingBook.Year = book.Year;

            await _context.SaveChangesAsync();

            return Ok(existingBook);
        }

        // DELETE: HappyHippoBooks/delete/5
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FirstOrDefaultAsync(x => x.Id == id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok(book);
        }
    }
}
