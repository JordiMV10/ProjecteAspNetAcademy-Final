using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Academy.Lib.DAL;
using Academy.Lib.Models;
using Common.Lib.Core.Context;
using Common.Lib.Core;
using Common.Lib.Infrastructure;

namespace ProjecteAspNetAcademyFinal.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {
        private readonly AcademyDbContext _context;

        public SubjectsController(AcademyDbContext context)
        {
            _context = context;
        }

        // GET: api/Subjects
        [HttpGet]

        public Task<List<Subject>> GetSubjects()
        {
            return Task.Run(()=>
            { 
                var repo = Entity.DepCon.Resolve<IRepository<Subject>>();
                return repo.QueryAll().ToList();
            });
        }


        //public async Task<ActionResult<IEnumerable<Subject>>> GetSubjects()
        //{
        //    var repo = Entity.DepCon.Resolve<IRepository<Subject>>();  //MEU OK
        //    return await repo.QueryAll().ToListAsync();     //MEU OK


        //    //return await _context.Subjects.ToListAsync();
        //}

        // GET: api/Subjects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subject>> GetSubject(Guid id)
        {
            var repo = Entity.DepCon.Resolve<IRepository<Subject>>();  //MEU

            var student = await repo.QueryAll().FirstOrDefaultAsync(s => s.Id == id);  //MEU

            if (student == null)
            {
                return NotFound();
            }

            return student;




            //var subject = await _context.Subjects.FindAsync(id);

            //if (subject == null)
            //{
            //    return NotFound();
            //}

            //return subject;
        }

        // PUT: api/Subjects/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<SaveResult<Subject>> PutSubject(Guid id, Subject subject)
        {

            return await Task.Run(() =>
            {
                return subject.Save();
            });


            //if (id != subject.Id)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(subject).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!SubjectExists(id))
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

        // POST: api/Subjects
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<SaveResult<Subject>> PostSubject(Subject subject)
        {
            return await Task.Run(() =>
            {
                return subject.Save();
            });



            //_context.Subjects.Add(subject);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetSubject", new { id = subject.Id }, subject);
        }

        // DELETE: api/Subjects/5
        [HttpDelete("{id}")]
        public async Task<DeleteResult<Subject>> DeleteSubject(Guid id)
        {
            var repo = Entity.DepCon.Resolve<IRepository<Subject>>();  //MEU

            var subject = await repo.QueryAll().FirstOrDefaultAsync(s => s.Id == id);  //MEU


            return await Task.Run(() =>
            {

                return subject.Delete();
            });



            //var subject = await _context.Subjects.FindAsync(id);
            //if (subject == null)
            //{
            //    return NotFound();
            //}

            //_context.Subjects.Remove(subject);
            //await _context.SaveChangesAsync();

            //return subject;
        }

        private bool SubjectExists(Guid id)
        {
            var repo = Entity.DepCon.Resolve<IRepository<Subject>>();  //MEU

            return repo.QueryAll().Any(s => s.Id == id);  //MEU

            //return _context.Subjects.Any(e => e.Id == id);
        }
    }
}
