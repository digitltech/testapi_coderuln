using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



namespace TestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeMetricController : ControllerBase
    {
        private readonly ApprContext _context;


        public TypeMetricController(ApprContext db) => _context = db;



        [HttpGet]
        [Route("get_all_typemetric")]

        public async Task<IActionResult> GetAll()
        {
            var listtype = await _context.TypeMeterses.ToListAsync();
            return Ok(listtype);
        }
        [HttpPut]
        public async Task<IActionResult> PutAsync(TypeMeters typeMeters)
        {
            _context.Update(typeMeters);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost]
        [Route("new_type")]
        public async Task<IActionResult> PostAsync(TypeMeters typeMeters)
        {
            _context.TypeMeterses.Add(typeMeters);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // контроллер для стетчикоав
    }
}
