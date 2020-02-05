using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Academy.Lib.DAL;
using Academy.Lib.Models;
using Common.Lib.Infrastructure;
using Common.Lib.Core;
using Common.Lib.Core.Context;

namespace ProjecteAspNetAcademyFinal.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AcademyDbContext _context;

        public StudentsController(AcademyDbContext context)
        {
            _context = context;


            //if (context.Students.Count() == 0)
            //{
            //    var std1 = new Student();
            //    std1.Id = Guid.NewGuid();
            //    std1.Name = "Perico";

            //    var std2 = new Student();
            //    std2.Id = Guid.NewGuid();
            //    std2.Name = "Lola";

            //    context.Students.Add(std1);
            //    context.Students.Add(std2);

            //    context.SaveChanges();
            //}

        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var repo = Entity.DepCon.Resolve<IRepository<Student>>();  //MEU OK
            return await repo.QueryAll().ToListAsync();     //MEU OK



            //return await _context.Students.ToListAsync();  //Original
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(Guid id)
        {

            var repo = Entity.DepCon.Resolve<IRepository<Student>>();  //MEU

            var student = await repo.QueryAll().FirstOrDefaultAsync(s => s.Id == id);  //MEU
            //var student = await _context.Students.FindAsync(id);  //Original

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Students
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<SaveResult<Student>> PutStudent(Guid id, Student student)
        {
            return await Task.Run(() =>
            {
                return student.Save();
            });




            //if (id != student.Id)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(student).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!StudentExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<SaveResult<Student>> PostStudent(Student student)
        {
            return await Task.Run(() =>
            {
                return student.Save();
            });


            //_context.Students.Add(student);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<DeleteResult<Student>> DeleteStudent(Guid id)
        {
            var repo = Entity.DepCon.Resolve<IRepository<Student>>();  //MEU

            var student = await repo.QueryAll().FirstOrDefaultAsync(s => s.Id == id);  //MEU


            return await Task.Run(() =>
            {

                return student.Delete();
            });



            //var student = await _context.Students.FindAsync(id);
            //if (student == null)
            //{
            //    return NotFound();
            //}

            //_context.Students.Remove(student);
            //await _context.SaveChangesAsync();

            //return student;
        }

        private bool StudentExists(Guid id)
        {
            var repo = Entity.DepCon.Resolve<IRepository<Student>>();  //MEU

            return repo.QueryAll().Any(s => s.Id == id);  //MEU


            //return _context.Students.Any(e => e.Id == id);
        }
    }
}
